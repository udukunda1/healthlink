import pharmacy from "../models/pharmacy.js";
import user from "../models/user.js";
import jwt from 'jsonwebtoken';
import fs from 'fs'



export const AddToFavorite = async (req, res, next) => {
    const {pid} = req.params;
    const uid = req.userId;

    try {
    const usr = await user.findById(uid);
    const pharma = await pharmacy.findById(pid);


    const exist = usr.favourite.find(elem => String(elem) === String(pharma.id));

    if(exist){
        return res.status(400).json({err: 'already favourite'});
    }

    usr.favourite.push(pid);
    await usr.save();
    res.json({message: 'done'});
    }
    catch(err) {
        res.status(400).json({err: 'failed'});
    }
}

export const GetFavourite = async (req, res, next) => {
    const uid = req.userId;

    try{
    const usr = await user.findById(uid).populate('favourite', '-password');
    res.json({favourite: usr.favourite.map(fav => fav.toObject({ getters: true }))});
    }
    catch {
        res.status(400).json({err: 'failed'});
    }
}

export const DeleteFavourite = async (req, res, next) => {
    const uid = req.userId;
    const {pid} = req.params;
    try {
        const usr = await user.findById(uid);
        usr.favourite.pull(pid);
        await usr.save();
        res.json({message: 'deleted'});
    }
    catch {
        res.status(400).json({err: 'failed to delete'});
    }

}

export const Rate = async (req, res, next) => {
    const {review} = req.body;
    const {pid} = req.params;
    const uid = req.userId;

    try {
    if(!review){
        return res.json({err: 'empty review not allowed'});
    }

    await user.findById(uid);
    const pharma = await pharmacy.findById(pid);
    const rev = {uid, content: '"' + review + '"'};
    pharma.studentReviews.push(rev);
    await pharma.save();
    res.json({message: 'done rate.'});

    }
    catch(err) {
        res.status(400).json({err: 'failed'});
    }
}

export const SignUp = async (req, res, next) => {
    const {name, email, password, confirmPassword} = req.body;

    if(!name || !email || !req.file || !password || !confirmPassword){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'every field must be filled.'});
    }

    if(!email.includes('@')){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'Please enter a valid email address.'});
    }

    if(password !== confirmPassword){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'Please ensure that your password and confirm password are the same.'});
    }

    try{
        let existingUser = await user.findOne({ email: email });
    if(existingUser){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'User exists already, please login instead.'});
    }
    const createdUser = new user({
        name,
        email,
        picture: req.file.filename,
        password
    });

    let token
    try{
           token = jwt.sign(
            { userId: createdUser.id },
            'supersecret_dont_share',
            { expiresIn: '24h' })
    }
    catch(err){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        res.status(400).json({err: 'failed'})
    }

    await createdUser.save();

        res.json({name: createdUser.name, token});
    }
    catch {
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        res.status(400).json({err: 'failed, try again later'});
    }
}


export const Login = async (req, res, next) => {
    const { email, password } = req.body;
    if(!email || !password){
        return res.status(400).json({err: 'enter email and password!'});
    }
    if(!email.includes('@')){
        return res.status(400).json({err: 'Please enter a valid email address.'});
    }

    let usr = await user.findOne({ email: email });
    if(!usr){
        return res.status(400).json({err: 'account not found please try again or maybe signUp!'});
    }

    let isValid = password === usr.password;
    if(!isValid){
        return res.status(400).json({err: 'invalid password please try again!'});
    }

    let token
    try{
           token = jwt.sign(
            { userId: usr.id },
            'supersecret_dont_share',
            { expiresIn: '24h' })
    }
    catch(err){
        res.status(400).json({err: 'failed'});
    }

    res.json({name: usr.name, token});
}
import user from "../models/user.js";
import pharmacy from "../models/pharmacy.js";
import jwt from 'jsonwebtoken';
import fs from 'fs';



export const GetPharmacies = async (req, res, next) => {

    try {
        let pharmacies = await pharmacy.find({}, '-password').populate('studentReviews.uid', '-password');

        res.json({ pharmacies: pharmacies.map(pharmacy => pharmacy.toObject({ getters: true })) });

    }
    catch(err) {
        res.status(400).json({err: 'failed'});
    }
}

export const GetPharmacy = async (req, res, next) => {
    const {pid} = req.params;

    try{
        let pharma = await pharmacy.findById(pid).populate('studentReviews.uid', '-password');

    if(pharma.length == 0){
        res.status(400).json({err: 'pharmacy not found!'})
    }
    res.json({pharmacy: pharma.toObject({ getters: true })})
    }

    catch(err){
        res.status(400).json({err: 'error'})
        console.log(err);
    }
}

export const LoginPharmacy = async (req, res, next) => {
    const { number, password } = req.body;
    if(!number || !password){
        return res.status(400).json({err: 'please enter number and password!'});
    }

    try{

    let pharma = await pharmacy.findOne({ number: number });
    if(!pharma){
        return res.status(400).json({err: 'account not found please try again or maybe signUp!'});
    }

    let isValid = password === pharma.password;
    if(!isValid){
        return res.status(400).json({err: 'invalid password please try again!'});
    }

    let token

           token = jwt.sign(
            { pharmaId: pharma.id },
            'supersecret_dont_share',
            { expiresIn: '24h' })

        res.json({name: pharma.title, id: pharma.id, token});
    }
    catch(err){
        console.log(err);
        res.status(400).json({err: 'failed'});
    }

}

export const SignUpPharmacy = async (req, res, next) => {
    const { title, address, number, workingHours, date, password, confirmPassword, code } = req.body;

    if(!title || !address || !req.file || !password || !confirmPassword || !number || !workingHours || !date || !code){
        console.log({title, address,file: req.file, password, confirmPassword,number, workingHours, date, code});
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'every field must be filled.'});
    }

    if(password !== confirmPassword){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'Please ensure that your password and confirm password are the same.'});
    }

    if(code != 1234) {
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'invalid Access Code.'});
    }

    try{
        let existingNumber = await pharmacy.findOne({ number: number });
    if(existingNumber){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        return res.status(400).json({err: 'Pharmacy exists already, please login instead.'});
    }
    const createdPharmacy = new pharmacy({
        title,
        address,
        number,
        workingHours,
        password,
        image: req.file.filename
    });

    createdPharmacy.inventory.updatedAt = date;

    let token
    try{
           token = jwt.sign(
            { pharmaId: createdPharmacy.id },
            'supersecret_dont_share',
            { expiresIn: '24h' })
    }
    catch(err){
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        res.status(400).json({err: 'failed'})
    }

    await createdPharmacy.save();

        res.json({name: createdPharmacy.title, id: createdPharmacy.id, token});
    }
    catch(err) {
        if(req.file) {
            fs.unlink(req.file.path, (err) => '');
        }
        console.log(err);
        res.status(400).json({err: 'failed, try again later'});
    }
}

export const addMed = async (req, res, next) => {
    const pid = req.pharmacyId;
    const { medicine } = req.body;

    if(!medicine){
        return res.status(400).json({err: 'insert medicine'});
    }

    try {

    const pharma = await pharmacy.findById(pid);

    const exist = pharma.inventory.medicines.find(elem => String(elem) === String(medicine));

    if(exist){
        return res.status(400).json({err: 'already exist'});
    }

    pharma.inventory.medicines.push(medicine);
    await pharma.save();
    res.json({message: 'done'});
    }
    catch(err) {
        res.status(400).json({err: 'failed'});
    }
}

export const addService = async (req, res, next) => {
    const pid = req.pharmacyId;
    const { service } = req.body;

    if(!service){
        return res.status(400).json({err: 'insert service'});
    }


    try {

    const pharma = await pharmacy.findById(pid);

    const exist = pharma.avairableServices.find(elem => String(elem) === String(service));

    if(exist){
        return res.status(400).json({err: 'already exist'});
    }

    pharma.avairableServices.push(service);
    await pharma.save();
    res.json({message: 'done'});
    }
    catch(err) {
        res.status(400).json({err: 'failed'});
    }
}

export const DeleteMed = async (req, res, next) => {
    const pid = req.pharmacyId;
    const { medicine } = req.body;
    if(!medicine){
        return res.status(400).json({err: 'empty input'});
    }

    try {
        const pharma = await pharmacy.findById(pid);
        const exist = pharma.inventory.medicines.find(elem => String(elem) === String(medicine));
        if(!exist) {
            return res.status(400).json({err: 'error trying to delete unavailable medicine'});
        }
        pharma.inventory.medicines.pull(medicine);
        await pharma.save();
        res.json({message: 'deleted'});
    }
    catch {
        res.status(400).json({err: 'failed to delete'});
    }

}

export const DeleteService = async (req, res, next) => {
    const pid = req.pharmacyId;
    const { service } = req.body;
    if(!service){
        return res.status(400).json({err: 'empty input'});
    }

    try {
        const pharma = await pharmacy.findById(pid);
        const exist = pharma.avairableServices.find(elem => String(elem) === String(service));
        if(!exist) {
            return res.status(400).json({err: 'error trying to delete unavailable service'});
        }
        pharma.avairableServices.pull(service);
        await pharma.save();
        res.json({message: 'deleted'});
    }
    catch {
        res.status(400).json({err: 'failed to delete'});
    }

}
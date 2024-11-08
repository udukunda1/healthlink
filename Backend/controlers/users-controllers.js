import pharmacy from "../models/pharmacy.js";
import user from "../models/user.js";




export const AddToFavorite = async (req, res, next) => {
    const {pid} = req.params;
    const {uid} = req.body;

    try {
    const usr = await user.findById(uid);
    const pharma = await pharmacy.findById(pid);


    const exist = usr.favourite.find(elem => String(elem) === String(pharma.id));

    if(exist){
        return res.json({message: 'aleady favourite'});
    }

    usr.favourite.push(pid);
    await usr.save();
    res.json({message: 'done'});
    }
    catch(err) {
        res.json({message: 'failed'});
    }
}

export const GetFavourite = async (req, res, next) => {
    const {uid} = req.body;
    try{
    const usr = await user.findById(uid).populate('favourite', '-password');
    res.json({favourite: usr.favourite.map(fav => fav.toObject({ getters: true }))});
    }
    catch {
        res.json({message: 'failed'});
    }
}

export const DeleteFavourite = async (req, res, next) => {
    const {uid} = req.body;
    const {pid} = req.params;
    try {
        const usr = await user.findById(uid);
        usr.favourite.pull(pid);
        await usr.save();
        res.json({message: 'deleted'});
    }
    catch {
        res.json({message: 'failed to delete'});
    }

}
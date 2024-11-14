import user from "../models/user.js";
import pharmacy from "../models/pharmacy.js";


export const GetPharmacies = async (req, res, next) => {

    try {
        let pharmacies = await pharmacy.find({}, '-password').populate('studentReviews.uid', '-password');

        res.json({ pharmacies: pharmacies.map(pharmacy => pharmacy.toObject({ getters: true })) });

    }
    catch(err) {
        res.json({err: err})
    }
}

export const GetPharmacy = async (req, res, next) => {
    const {pid} = req.params;

    try{
        let pharma = await pharmacy.findById(pid);

    if(pharma.length == 0){
        res.json({message: 'pharmacy not found!'})
    }
    res.json({pharmacy: pharma.toObject({ getters: true })})
    }

    catch(err){
        res.json({message: 'error'})
        console.log(err);
    }
}
import user from "../models/user.js";
import pharmacy from "../models/pharmacy.js";


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
        let pharma = await pharmacy.findById(pid);

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
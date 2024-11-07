import user from "../models/user.js";
import pharmacy from "../models/pharmacy.js";


export const GetPharmacies = async (req, res, next) => {

    let pharmacies;
    try {
        pharmacies = await pharmacy.find();

        res.json({ pharmacies: pharmacies.map(pharmacy => pharmacy.toObject({ getters: true })) });
    }
    catch(err) {
        res.json({err})
    }
}

export const GetPharmacy = async (req, res, next) => {
    const pharmacyId = req.params.pid;

    let pharma;

    try{
        pharma = await pharmacy.findById(pharmacyId);

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
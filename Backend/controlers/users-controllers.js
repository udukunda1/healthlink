import user from "../models/user.js";
import pharmacy from "../models/pharmacy.js";


export const GetMessage = async (req, res, next) => {

    // const createdPharmacy = new pharmacy(
    //     {
    //         image: 'hello image',
    //         title: 'kigali pharma',
    //         address: 'kabeza',
    //         number: 250780058708,
    //         workingHours: 'all the time',
    //         password: 'hashed'
    //     }
    // )

    // await createdPharmacy.save();
    // console.log('created');
    res.json({message: 'created succesfully good!'});
}
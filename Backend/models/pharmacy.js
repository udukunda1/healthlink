import mongoose from "mongoose";



const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
    image: {type: String, required: true},
    title: {type: String, required: true, unique: true},
    address: {type: String, required: true},
    number: {type: Number, required: true},
    workingHours: {type: String, required: true},
    avairableServices: [{type: String}],
    inventory: {updatedAt: {type: String}, medicines: [{type: String}]},
    password: {type: String, required: true},
    studentReviews: [{uid: {type: mongoose.Types.ObjectId, ref: 'User'}, content: {type: String}}]
})

export default mongoose.model('Pharmacy', pharmacySchema);
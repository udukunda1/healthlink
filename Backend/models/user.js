import mongoose from "mongoose";



const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    picture: {type: String, required: true},
    password: {type: String, required: true},
    favourite: [{type: mongoose.Types.ObjectId, ref: 'Pharmacy'}],
    // reviews: [{id: {type: mongoose.Types.ObjectId, ref: 'Pharmacy'}, review: {type: String}}]
})

export default mongoose.model('User', userSchema);
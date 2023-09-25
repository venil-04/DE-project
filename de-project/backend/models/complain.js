import mongoose from "mongoose";
const {Schema} = mongoose;

const complainSchema= new Schema({
    title:String,
    descreption:String,
    img:
    {
        data: Buffer,
        contentType: String
    }

})

const Complain = mongoose.model('Complain',complainSchema)

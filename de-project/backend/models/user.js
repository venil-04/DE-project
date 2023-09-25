import mongoose from 'mongoose'
const {Schema} = mongoose

const userSchema = new Schema({
    name:String,
    email:String,
    number:Number,
    password:String
})

const User = mongoose.model('user',userSchema)

export default User
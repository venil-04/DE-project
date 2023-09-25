import User from "../models/user.js";

const registerUser=async(req,res,next)=>{
    const data = req.body;
    const user = await User.create({data})

    res.status(201).json({
        success:true,
        user
    })
}

export default registerUser


import express from "express";
import registerUser from "../controller/userController.js";
// import User from "../models/user";
import User from "../models/user.js";

const router = express.Router();

// router.route('/register').post(registerUser);
router.post('/register',async(req,res)=>{
    const data = req.body;
    console.log(data)
    const user = await User.create(data)
    res.status(201).json({
        success:true,
        user
    })
})

export default router

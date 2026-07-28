import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";
import catchAsync from "../utils/catchAsync.js";

export const register = catchAsync(async(req, res)=>{
    const {name, email, password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(400).json({message:"User already exists"});
    }
    const newUser = await User.create({name, email, password});
    const token = generateToken(newUser._id);
    newUser.password = undefined;
    res.status(201).json({user: newUser, token});
});

export const login = async(req, res)=>{

}


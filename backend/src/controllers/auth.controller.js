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

export const login = catchAsync(async(req, res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email}).select("+password");
    if(!user){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const isMatch = await user.comparePassword(password);
    if(!isMatch){
        return res.status(401).json({message:"Invalid email or password"});
    }
    const token = generateToken(user._id);
    user.password = undefined;
    res.json({user, token});
});

export const getMe = catchAsync(async(req, res) =>{
    res.json({user:req.user});
})

import userModel from "../models/user.model.js";
import bcrypt from 'bcrypt';
import { generateTokenAndSetCookie } from "../utils/generateJWT.js";

export const signup = async (req,res) => {
    try{

        let {email,username,name,age,password,gender} = req.body

        let emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailregex.test(email)){
            return res.status(400).json({error:'invalid email format'})
        }

        const existingUsername = await userModel.findOne({username})
        if(existingUsername){
            return res.status(400).json({error:'Username already taken'})
        }
        
        if(password.length < 6){
            return res.status(400).json({'error':'password must be atleast of length 6'})
        }
        
        const hashedpassword = await bcrypt.hash(password,10)

        const newUser = new userModel({
            email,
            password:hashedpassword,
            name,
            age,
            username,
            gender
        })

        await newUser.save()
        generateTokenAndSetCookie(newUser._id,res)
        res.status(200).json(await userModel.findById(newUser._id).select("-password"))

    }
    catch(error){
        return res.status(500).json({'error':error})
    }
    }


export const login = async (req,res) => {
    if(!req.body){
        return res.status(400).json({'error':'provide credentials'})
    }
    const {username,password} = req.body
    if(!username || !password) {
        return res.status(400).json({
            error:'fill all the details'
        })
    }
    
    if(password.length < 6){
        return res.status(400).json({'error':'password must be atleast of length 6'})
    }

    const user = await userModel.findOne({username})
    if(!user){
        return res.status(400).json({'error':'no user found'})
    }
    let matchpassword = await bcrypt.compare(password,user.password)

    if(!matchpassword){
        return res.status(400).json({
            'error':'incorrect credentials'
        })
    }

    generateTokenAndSetCookie(user._id,res)
    res.status(200).json(await userModel.findById(user._id).select("-password"))

}

export const logout = (req,res) => {
    try {
        res.cookie('jwt',"",{maxAge:0}).status(200).json({'message':'logged out successfully'})
    }
    catch (error){
        res.status(500).json({
            'error':error
        })
    }
}

export const getMe = async(req,res) => {
    try{
    const user = await userModel.findOne(req.user._id).select("-password")
    res.status(200).json(user)
    }
    catch(error){
        return res.status(500).json({
            "error":error
        })
    }
}
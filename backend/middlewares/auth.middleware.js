import jwt, { decode } from 'jsonwebtoken'
import userModel from '../models/user.model.js'

export const protectedRoute = async (req,res,next) =>{
    try {
        let token = req.cookies.jwt

        if(!token){
            return res.status(400).json({error:'login first'})
        }
        const decoded = await jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            return res.status(400).json({'error':'please login first'
            })
        }

        let user = await userModel.findById(decoded._id).select("-password")
        req.user = user
        next()
    }
    catch (error) {
        return res.status(500).json({"error":error})
    }
}
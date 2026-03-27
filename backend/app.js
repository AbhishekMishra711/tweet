import express from "express";
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
import userRoute from './routes/user.route.js'
import {v2 as cloudinary} from 'cloudinary'


dotenv.config()
cloudinary.config(
    {cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    }
)



const app = express()


// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/user',userRoute)


export default app;
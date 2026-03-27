import express from "express";
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()



const app = express()


// middlewares 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//routes
app.use('/api/v1/auth',authRoute)



export default app;
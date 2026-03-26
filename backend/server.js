import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./db/connectDB.js";
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())


//routes
app.use('/api/auth',authRoute)



app.listen(process.env.PORT,() => {
    console.log("server is running")
    connectDB()
})
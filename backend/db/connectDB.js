import mongoose, { Mongoose } from "mongoose";

export const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI)
    // console.log('MongoDB connected successfully')
    }
    catch(e){
        console.log('error :' , e)
        res.status(500).send({'message':'failed to connect'})
    }
}
import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    from:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'User'
        },
    to:{
                type:mongoose.SchemaTypes.ObjectId,
        required:true,
        ref:'User'
    },
    type:{
        type:String,
        required:true,
        enum:['follow','like','comment']
    },
    read:{
        type:Boolean,
        default:false
    }
},{timestamps:true})


export const notificationModel = mongoose.model('notification',notificationSchema)

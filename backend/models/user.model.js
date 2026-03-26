import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:false
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:0
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    followers:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        default:[]
    }],
        followings:[{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'User',
        default:[]
    }],
    bio:{
        type:String,
        default:"" 
    }
},
{timestamps:true})

export default mongoose.model('User',userSchema)


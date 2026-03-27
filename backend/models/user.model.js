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
    gender:{
        type:String,
        enum:["M","F","O"],
        required:true
    }
    ,
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
    },
    profileImage:{
        type:String,
        default:null
    },
    coverImage:{
        type:String,
        default:null
    }
},
{timestamps:true})

export default mongoose.model('User',userSchema)


import { notificationModel } from "../models/notification.model.js"
import userModel from "../models/user.model.js"
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'

export const getUserProfile = async (req,res) => {
    const {username} = req.params

    try{
        const user = await userModel.findOne({username}).select("-password")
        if(!user){
            return res.status(400).json({"error":"no user found"})
        }
        res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({
            'error':error
        })
    }
}


export const followUnfollowUser = async (req,res)=>{
    const {id} = req.params
    try{
        const currentUser = await userModel.findById(req.user._id)
        const userToModify = await userModel.findById(id)

        if(id == req.user._id.toString()){
            return res.status(400).json({
                'error':'you cant follow/unfollow yourself'
            })
        }
        if(!userToModify || !currentUser) {
            return res.status(400).json({
                'error':"user doesn't exists"
            })
        }
        const isFollowing = currentUser.followings.includes(id)
        if(isFollowing){
            await userModel.findByIdAndUpdate(req.user._id,{
                $pull:{
                    followings:id
                }
            })

            await userModel.findByIdAndUpdate(id,{
                $pull:{
                    followers:req.user._id
                }
            })
            const newNotification = new notificationModel({
                from:req.user._id,
                to:id,
                type:"follow"
            }
            )

            await newNotification.save()
            res.status(200).json({'message':'unfollowed successfully'})
        }
        else {
            await userModel.findByIdAndUpdate(req.user._id,{
                $push:{
                    followings:id
                }
            })

            await userModel.findByIdAndUpdate(id,{
                $push:{
                    followers:req.user._id
                }
            })
            const newNotification = new notificationModel({
            to:req.user._id,
            from:id,
            type:"follow"
            }
            )

            await newNotification.save()
              res.status(200).json({'message':'followed successfully'})      }

    }
    catch(error){
        res.status(500).json({'error':error})
    }

}


export const getUserSuggestions = async (req,res) => {
    try{
        const userId = req.user._id
        const usersFollowedByMe = await userModel.findById(userId).select("followings")
        console.log(usersFollowedByMe)
        const users = await userModel.aggregate([{
            $match:{
                _id:{$ne:userId}
            }
        },
        {$sample:{size:10}}
    ])

    const fillteredUsers = users.filter(user=>!usersFollowedByMe.followings.includes(user._id))
    const suggestedUser = fillteredUsers.slice(0,4)
    suggestedUser.forEach(user => delete user.password)

    res.status(200).json(suggestedUser)

    }


    catch(error){
        res.status(500).json({
            'error':error
        })
    }
}


export const updateUserProfile = async (req,res) => {
    try{
        let {fullName,username,email,currentPassword,newPassword,bio,link,age,gender} = req.body
        const userId = req.user._id
        let {profileIamge,coverImage} = req.body
            let user = await userModel.findById(userId)
            if(!user){
                return res.status(404).json({
                    'error':'user not found'
                })
            }
            if(!newPassword || !currentPassword) {
                return res.status(400).json({
                    'error':'please provide both password'
                })
            }

            const isMatched = await bcrypt.compare(currentPassword,user.password)
            if(!isMatched){
                return res.status(400).json({
                    'error':'incorrect password'
                })
            }
            if(newPassword.length < 6){
                return res.status(400).json({
                    'error':'password is less then 6 length'
                })
            }
            const hashedPassword = await bcrypt.hash(newPassword,10)

            user.password = hashedPassword
            await user.save()
            if(profileIamge){
                if(user.profileImage){
                    await cloudinary.uploader.destroy(user.profileImage.split('/').pop().split('.')[0])
                }
                const profile_upload = await cloudinary.uploader.upload(profileImage)
                profileIamge = profile_upload.secure_url

            }
            if (coverImage){
                    if(user.coverImage){
                    await cloudinary.uploader.destroy(user.profileImage.split('/').pop().split('.')[0])
                }
                const cover_upload = await cloudinary.uploader.upload(coverImage)
                coverImage = cover_upload.secure_url
            }


            user.fullName = fullName || user.fullName
            user.email = email || user.email
            user.password = hashedPassword || user.password
            user.bio = bio || user.bio
            user.link = link || user.link
            user.profileImage = profileIamge || user.profileImage
            user.coverImage = coverImage || user.coverImage
            user.username = username || user.username
            user.age = age || user.age
            user.gender = gender || user.gender

            user = await user.save()
             user.password = null
            return res.status(200).json(user)
    }
    catch(error){
        res.status(500).json({
            'error':error
        })
    }
}

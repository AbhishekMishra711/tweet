import jwt from "jsonwebtoken";


export const generateTokenAndSetCookie =  (id,res) => {
    let token = jwt.sign({_id:id},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie('jwt',token,{
        httpOnly:true,
        maxAge:15*24*60*60*1000,
        sameSite:'strict',
        secure:false
    })
}


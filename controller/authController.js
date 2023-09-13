import user from "../model/user.js"
import bcrypt from 'bcryptjs'
import jwt from "jsonwebtoken"


const authController={

    singUp: async (req,res,next)=>{
        try {
            const passwordHash = bcrypt.hashSync(req.body.password, 10)

            let body ={...req.body}
            body.password= passwordHash
            const newUser = await user.create(body)
            return res.status(200).json({
                success:true,
                userData:newUser,
                message: 'Sing Up successfully'
            })
        } catch (error) {
            console.log(error);
            next(error)
            
        }
    },
    login: async (req, res, next)=>{
        try {
           let{email:emailBody, password}=req.body
        const userInDb= await user.findOne({email: emailBody})
        if(!userInDb){
            throw new Error ('no user exists with this email')
        }
        let {email, photo, age} = userInDb
        const token = jwt.sign({email, photo}, process.env.SECRET_KEY,{expiresIn: '1h'})
        return res.status(200).json({
            success:true,
            userData: {email,photo,age},
            token:token,
            message: 'sing in successfully'
        })  
        } catch (error) {
            console.log(error)
            next(error)
        }
       

    },
   //logOut: async (req, res, next)=>{}
}

export default authController
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";


const opt ={
    jwtFomRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    segurityKey: process.env.SECRET_KEY
}
const fn = async (payload, next)=>{
    try {
         const user = await user.findOne({email: payload.email})
    } catch (error) {
        
    }
   
}
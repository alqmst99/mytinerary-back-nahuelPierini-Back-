import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import user from "../model/user.js";


const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "M4t1ld4"
}

const fn = async (payload, next)=>{
    try {
         const User = await user.findOne({email: payload.email})
         if(!User){
            throw new Error ("no exists with this email")
         }
         next(null, User)
    } catch (error) {
        console.log(error);
        next(error, null)
        
    }
   
}
export default passport.use( new Strategy( opt, fn ))
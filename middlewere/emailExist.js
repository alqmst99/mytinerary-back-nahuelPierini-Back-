import user from "../model/user"

export const emailExists= async (req, res, next)=>{
const exist = await user.findOne({email: req.body.email})
if(!exist){
    next()
}
return res.status(400).json({
    success:false,
    message: 'email already exists'
})
}
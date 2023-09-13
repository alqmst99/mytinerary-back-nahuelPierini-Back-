import {model, Schema} from 'mongoose'

const userSchema= Schema({
    email:{type: String, required: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    lastName:{type: String, required: true},
    tel:{type:Number},
    birth:{type:Number},
    desc:{type: String },
    photo: {type:String, default:'https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'},
    verified: {type:Boolean, default: false}
},{timeStamps:true} )

const user = model('user', userSchema)

export default user

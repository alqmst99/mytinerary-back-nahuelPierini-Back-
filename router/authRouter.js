import {  Router } from "express";
import authController from "../controller/authController.js";
import validator from '../middlewere/validator.js';
import {singUpSchema}  from "../validator/singUpValidator.js";
import { loginSchema } from "../validator/loginValidator.js";
import passport from "../middlewere/passport.js";
import { emailExists } from "../middlewere/emailExist.js";

const authRouter = Router()
const {singUp, login, loginWithToken}=authController



authRouter.post('/singup', validator(singUpSchema) ,singUp)
authRouter.get('/login', validator(loginSchema), emailExists, login)
authRouter.get('/token', passport.authenticate( 'jwt', {session:false} ) ,loginWithToken)
export default authRouter
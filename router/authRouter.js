import { Route, Router } from "express";
import authController from "../controller/authController.js";
import validator from '../middlewere/validator.js';
import {singUpSchema}  from "../validator/singUpValidator.js";

const authRouter = Router()
const {singUp}=authController



authRouter.post('/singup', validator(singUpSchema) ,singUp)

export default authRouter
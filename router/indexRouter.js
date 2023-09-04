import { Router } from "express";
import citiesRouter from "./citiesRouter.js";
import intyneraryRouter from './../router/intyneraryRouter.js'
const indexRouter= Router()



indexRouter.get('/',(req, res, next)=>{
    res.send('hi welcome')
});
indexRouter.use('/', citiesRouter)
indexRouter.use('/inty', intyneraryRouter)

 export default indexRouter
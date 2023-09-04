import { Router } from "express";
import citiesRouter from "./citiesRouter.js";
const indexRouter= Router()



indexRouter.get('/',(req, res, next)=>{
    res.send('hi welcome')
});
indexRouter.use('/', citiesRouter)

 export default indexRouter
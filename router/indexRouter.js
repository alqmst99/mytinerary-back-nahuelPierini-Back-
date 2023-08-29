import { Router } from "express";
import citiesController from "../controller/citiesController.js";
const indexRouter= Router()
const {getAllCities, createCity} = citiesController


indexRouter.get('/',(req, res, next)=>{
    res.send('hi welcome')
});
indexRouter.get('/cities', getAllCities)
indexRouter.post('/create', createCity);

 export default indexRouter
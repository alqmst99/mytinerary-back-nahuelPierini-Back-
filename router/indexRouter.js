import { Router } from "express";
const indexRouter= Router()
const {getAllCities} = citiesController.getAllCities
const {createCity}= citiesController.createCity

indexRouter.get('/',(req, res, next)=>{
    res.send('hi welcome')
})
indexRouter.get('/cities', getAllCities)
indexRouter.put('/create', createCity)


import citiesController from "../controller/citiesController.js";
 export default indexRouter
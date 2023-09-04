import { Router } from "express";
import citiesController from "../controller/citiesController.js";

const citiesRouter = Router()
const {getAllCities, createCity, getCity, updateCity,deleteCity} = citiesController

citiesRouter.get('/cities', getAllCities);
citiesRouter.get('/city/:id', getCity);
citiesRouter.post('/create', createCity);
citiesRouter.put('/update/:id', updateCity);
citiesRouter.delete('/delete/:id', deleteCity);

export default citiesRouter
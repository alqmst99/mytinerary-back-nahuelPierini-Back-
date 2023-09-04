import { Router } from "express";
import ityneraryController from './../controller/intyneraryController.js'
const intyneraryRouter = Router()
const {getAllIntys, createInty, getInty, updateInty,deleteInty} = ityneraryController

intyneraryRouter.get('/intyneraries', getAllIntys);
intyneraryRouter.get('/intynery/:id', getInty);
intyneraryRouter.post('/create', createInty);
intyneraryRouter.put('/update/:id', updateInty);
intyneraryRouter.delete('/delete/:id', deleteInty);

export default intyneraryRouter
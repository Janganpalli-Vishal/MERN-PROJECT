import { Router } from "express";
import { postStudentController, getStudentController, deleteStudentController, updateStudentController } from "../Controllers/studentController.js";


const route = Router()

route.get('/student', getStudentController)

route.post('/student', postStudentController )

route.delete('/student/:email', deleteStudentController)

route.put('/student/:id', updateStudentController) 

export default route
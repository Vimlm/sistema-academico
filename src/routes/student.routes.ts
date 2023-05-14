import { Router } from "express";
import { StudentController } from "../controllers/student.controller";

const studentRoute : Router = Router();
const studentController = new StudentController();

//create
studentRoute.post("/student/create", new StudentController().cadastrar);

//read list
studentRoute.get("/student/listar", studentController.listar);

//read by name
studentRoute.get("/student/:id", studentController.buscar);

//update
studentRoute.put("/student/:id", studentController.atualizar);

//delete
studentRoute.delete("/student/:id", studentController.deletar);

export { studentRoute };
import { Router } from "express";
import { TeacherController } from "../controllers/teacher.controller";

const teacherRoute : Router = Router();
const teacherController = new TeacherController();

//create
teacherRoute.post("/teacher/create", teacherController.cadastrar);

//read list
teacherRoute.get("/teacher/listar", teacherController.listar);

//read by name
teacherRoute.get("/teacher/:id", teacherController.buscar);

//update
teacherRoute.put("/teacher/:id", teacherController.atualizar);

//delete
teacherRoute.delete("/teacher/:id", teacherController.deletar);

export { teacherRoute };
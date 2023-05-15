import { Router } from "express";
import { ClassController } from "../controllers/class.controller";

const classRouter : Router = Router();
const classController = new ClassController();

//create
classRouter.post("/class/create", classController.cadastrar);

//read list
classRouter.get("/class/listar", classController.listar);

//read by name
classRouter.get("/class/:id", classController.buscar);

//update
classRouter.put("/class/:id", classController.atualizar);

//delete
classRouter.delete("/class/:id", classController.deletar);

export { classRouter };
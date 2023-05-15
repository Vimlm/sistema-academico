import express from "express";
import router from "./routes/routes";
import { PrismaClient } from "@prisma/client";
import { studentRoute } from "./routes/student.routes";
import { teacherRoute } from "./routes/teacher.routes";
import { classRouter } from "./routes/class.routes";

const app = express();

app.use(express.json());
app.use(router);
app.use(studentRoute);
app.use(teacherRoute);
app.use(classRouter);

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000.');
});

export const prisma = new PrismaClient();
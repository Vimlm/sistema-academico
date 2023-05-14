import express from "express";
import router from "./routes/routes";
import { PrismaClient } from "@prisma/client";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('Aplicação rodando na porta 3000.');
});

export const prisma = new PrismaClient();
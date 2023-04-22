import express, { Router, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.use(express.json());

router.get("/", (req : Request, res : Response) => {
  res.send("Hello World!");
});

router.post("/user", async (req: Request, res: Response) => {
  const { email, userName } = req.body;

  console.log(email);
  console.log(userName);

  const user = await prisma.user.create({
    data: {
      email,
      userName
    }
  });

  return res.json(user);
});

export { router }
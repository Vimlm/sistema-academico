//Imports
import { Request, Response } from 'express';
import { prisma } from '..';

export class StudentController {
  //Create
  cadastrar = async (req : Request, res : Response) : Promise<Response> => {
    const { password, name, email } = req.body;

    try {
      const aluno = await prisma.student.create({
        data: {
          password,
          name,
          email,
        },
      });

      return res.status(201).json(aluno);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível cadastrar o aluno.' });
    }
  }

  //Read
  listar = async (req: Request, res: Response): Promise<Response> => {
    try {
      const alunos = await prisma.student.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return res.status(200).json(alunos);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível listar os alunos.' });
    }
  }

  //Buscar
  buscar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
  
    try {
      const aluno = await prisma.student.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(aluno);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível buscar o aluno.' });
    }
  }

  //Update
  atualizar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const aluno = await prisma.student.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          email,
        },
      });

      return res.status(200).json(aluno);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível atualizar o aluno.' });
    }
  }

  //Delete
  deletar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      await prisma.student.delete({
        where: {
          id: parseInt(id),
        },
      });

      return res.status(200).json({ message: 'Aluno excluído com sucesso!' });
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível excluir o aluno.' });
    }
  }
}
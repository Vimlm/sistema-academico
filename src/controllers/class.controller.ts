//Imports
import { Request, Response } from 'express';
import { prisma } from '..';

export class ClassController {
  //Create
  cadastrar = async (req : Request, res : Response) : Promise<Response> => {
    const { name, id_Teacher } = req.body;

    try {
      const createdClass = await prisma.class.create({
        data: {
          name,
          teacher: { connect: { id: id_Teacher } },
        },
      });

      return res.status(201).json(createdClass);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível cadastrar a disciplina.' });
    }
  }

  //Read
  listar = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findClass = await prisma.class.findMany({
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
          teacherId: true,
        },
      });

      return res.status(200).json(findClass);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível listar as disciplinas.' });
    }
  }

  //Buscar
  buscar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
  
    try {
      const findClass = await prisma.class.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(findClass);
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
    const { name, id_Teacher } = req.body;

    try {
      const updatedClass = await prisma.class.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          teacher: { connect: { id: id_Teacher } },
        },
      });

      return res.status(200).json(updatedClass);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível atualizar a disciplina.' });
    }
  }

  //Delete
  deletar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      await prisma.class.delete({
        where: {
          id: parseInt(id),
        },
      });

      return res.status(200).json({ message: 'Disciplina excluída com sucesso!' });
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível excluir a disciplina.' });
    }
  }
}
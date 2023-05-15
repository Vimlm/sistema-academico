//Imports
import { Request, Response } from 'express';
import { prisma } from '..';

export class TeacherController {
  //Create
  cadastrar = async (req : Request, res : Response) : Promise<Response> => {
    const { password, name, email } = req.body;

    try {
      const professor = await prisma.teacher.create({
        data: {
          password,
          name,
          email,
        },
      });

      return res.status(201).json(professor);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível cadastrar o professor.' });
    }
  }

  //Read
  listar = async (req: Request, res: Response): Promise<Response> => {
    try {
      const professors = await prisma.teacher.findMany({
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return res.status(200).json(professors);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível listar os professors.' });
    }
  }

  //Buscar
  buscar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
  
    try {
      const professor = await prisma.teacher.findUnique({
        where: {
          id: Number(id),
        },
      });

      return res.status(200).json(professor);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível buscar o professor.' });
    }
  }

  //Update
  atualizar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { name, email } = req.body;

    try {
      const professor = await prisma.teacher.update({
        where: {
          id: parseInt(id),
        },
        data: {
          name,
          email,
        },
      });

      return res.status(200).json(professor);
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível atualizar o professor.' });
    }
  }

  //Delete
  deletar = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      await prisma.teacher.delete({
        where: {
          id: parseInt(id),
        },
      });

      return res.status(200).json({ message: 'Professor excluído com sucesso!' });
    } catch (e) {
      console.error(e);
      return res
        .status(500)
        .json({ error: 'Não foi possível excluir o professor.' });
    }
  }
}
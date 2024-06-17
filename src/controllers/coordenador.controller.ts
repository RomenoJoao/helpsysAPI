import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class CoordenadorController {
  async create(req: Request, res: Response) {
    try {
      const { nome, email, cursoId } = req.body;
      const coordenadorResponse = await prisma.coordenador.create({
        data: {
          nome,
          email,
          curso: {
            connect: {
              id: cursoId,
            },
          },
        },
      });

      return res.status(201).json(coordenadorResponse);
    } catch (error: any) {
      return res.status(400);
    }
  }

  async linkCurso(req: Request, res: Response) {
    try {
      const { id, cursoID } = req.body;
      const linkedCurso = await prisma.coordenador.update({
        where: {
          id,
        },
        data: {
          curso: {
            connect: {
              id: cursoID,
            },
          },
        },
      });

      return res.status(200).json(linkedCurso);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}


export default CoordenadorController;
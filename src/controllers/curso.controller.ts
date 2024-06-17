import { Response, Request } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { equal } from "assert";

const prisma = new PrismaClient();

class CursoController {
  async create(req: Request, res: Response) {
    try {
      const { titulo } = req.body;
      const estudante = await prisma.curso.create({
        data: {
          titulo,
        },
      });

      return res.status(201).json(estudante);
    } catch (error) {
      return res.status(400);
    }
  }

  async linkCoordenador(req: Request, res: Response) {
    try {
      const { id, cordenadorID } = req.body;
      const linkedCoordenador = await prisma.curso.update({
        where: {
          id,
        },
        data: {
          coordenador: {
            connect: {
              id: cordenadorID,
            },
          },
        },
      });

      return res.status(200).json(linkedCoordenador);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async getEstudantes(req: Request, res: Response) {
    const { id } = req.params;
    const estudantes = await prisma.curso.findUnique({
      where: {
        cordId: Number(id),
      },
      select: {
        estudantes: {
          include: {
            semestre: {
              include: {
                estudo: true,
              },
            },
          },
        },
      },
    });

    return res.status(200).json(estudantes);
  }
}

export default CursoController;

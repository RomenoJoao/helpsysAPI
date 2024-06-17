
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SemestreConroller {
  async create(req: Request, res: Response) {
    try {
      const { idEstudante, idSemestre, media, frequencia } = req.body;
      const semestre = await prisma.estudante.update({
        where: {
          id: idEstudante,
        },
        data: {
          semestre: {
            update: {
              where: {
                id: idSemestre,
              },
              data: {
                media,
                frequencia,
              },
            },
          },
        },
      });

      return res.status(201).json(semestre);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const semestres = await prisma.semestre.findMany();
      return res.status(200).json(semestres);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const semestreId = req.params;
      const semestre = await prisma.semestre.findUnique({
        where: {
          id: Number(semestreId),
        },
      });
      return res.status(200).json(semestre);
    } catch (error: any) {
      return res.status(400).json(error);
    }
  }
}

export default SemestreConroller;


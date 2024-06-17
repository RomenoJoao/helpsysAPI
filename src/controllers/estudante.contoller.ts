import { Response, Request } from "express";
import { Prisma, PrismaClient } from "@prisma/client";
import { json } from "stream/consumers";

const prisma = new PrismaClient();

class EstudanteController {
  async create(req: Request, res: Response) {
    try {
      const { nome, matricula, email, idade, anoCurricular, cursoId } =
        req.body;
      const estudante = await prisma.estudante.create({
        data: {
          nome,
          matricula,
          email,
          idade,
          anoCurricular,
          curso: {
            connect: {
              id: cursoId,
            },
          },
          
        },
      });
      return res.status(201).json(estudante);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
  async getAll(req: Request, res: Response) {
    try {
      const estudantes = await prisma.estudante.findMany();
      return res.status(200).json(estudantes);
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  }
  async getById(req: Request, res: Response) {
    try {
      const estudanteId = req.params;
      const estudante = await prisma.estudante.findUnique({
        where: {
          id: Number(estudanteId),
        },
      });
      return res.status(200).json(estudante);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}
export default EstudanteController;

import { Response, Request } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prima = new PrismaClient();

class EstudoController {
  async create(req: Request, res: Response) {
    const {
      id,
      apoioEmocional,
      apoioFinanceiro,
      dificuldadesFinanceiras,
      distanciaMorada,
      estresse,
      pressao,
    } = req.body;
    const estudo = await prima.estudante.update({
      where: {
        id,
      },
      data: {
        estudo: {
          create: {
            apoioEmocional,
            apoioFinanceiro,
            dificuldadesFinanceiras,
            distanciaMorada,
            estresse,
            pressao,
          },
        },
      },
    });

    return res.status(201).json(estudo);
  }
}

import { Response, Request } from "express";
import { Prisma, PrismaClient } from "@prisma/client";

const prima = new PrismaClient();

class EstudoController {
  async create(req: Request, res: Response) {
    const {
      idEstudante,
      idSemestre,
      apoioEmocional,
      apoioFinanceiro,
      dificuldadesFinanceiras,
      distanciaMorada,
      estresse,
      pressao,
    } = req.body;
    const estudo = await prima.estudante.update({
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
          },
        },
      },
    });

    return res.status(201).json(estudo);
  }

  async patch(req: Request, res: Response) {
    const {
      id,
      apoioEmocional,
      apoioFinanceiro,
      dificuldadesFinanceiras,
      distanciaMorada,
      estresse,
      pressao,
    } = req.body;

    try {
      const estudo = await prima.estudo.update({
        where: {
          id,
        },
        data: {
          apoioEmocional,
          apoioFinanceiro,
          dificuldadesFinanceiras,
          distanciaMorada,
          estresse,
          pressao,
        },
      });

      return res.status(200).json(estudo);
    } catch (error: any) {
      return res.status(400).json(error.message);
    }
  }
}

export default EstudoController;

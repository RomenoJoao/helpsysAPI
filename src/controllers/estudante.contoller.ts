import {Response, Request} from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { json } from 'stream/consumers';

const prisma = new PrismaClient()

class estudanteController {
  async Inserir(req: Request, res: Response){
    try{
        const {nome, matricula, email, idade, anoCurricular }= req.body;
        const estudante= await prisma.estudante.create({
            data: {
                nome,
                matricula,
                email,
                idade,
                anoCurricular,
            },
        });
        return res.status(201).json(estudante)

    }catch(error:any){
        console.log(error)
        return res.status(500).json({message: error.message})
    }
  }
}
export default estudanteController;
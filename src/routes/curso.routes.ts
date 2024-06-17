import CursoController from "../controllers/curso.controller";
import { Router } from "express";

const router = Router();
const cursoController = new CursoController();

router.post("/", cursoController.create);

router.post("/link-coordenador", cursoController.linkCoordenador);

export default router;

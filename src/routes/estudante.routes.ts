import EstudanteController from "../controllers/estudante.contoller";
import { Router } from "express";

const router = Router();
const estudanteController = new EstudanteController();

router.post("/", estudanteController.create);
router.get("/", estudanteController.getAll);
router.get("/:id", estudanteController.getById);




export default router;
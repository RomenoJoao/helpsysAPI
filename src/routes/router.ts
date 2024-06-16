import { Router } from 'express';
import RoutesCurso from './curso.routes';
import RoutesEstudante from './estudante.routes';


const router = Router();

router.use('/curso', RoutesCurso);
router.use('/estudante', RoutesEstudante);




router.get('/', (req, res) => {
  res.send('Hello World');
});

export default router;
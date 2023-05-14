import { Router } from 'express';
//Importa as rotas individualmente
import { studentRoute } from './student.routes';
// import disciplinaRoutes from './disciplina.routes';
// import professorRoutes from './professor.routes';

const router = Router();

// Combina todas as rotas em um único roteador
router.use('/aluno', studentRoute);
// router.use('/disciplina', disciplinaRoutes);
// router.use('/professor', professorRoutes);

export default router;

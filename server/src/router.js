import { Router } from 'express';
import mixtapeRoutes from './routes/mixtapeRoutes.js';

const router = Router();

router.use('/mixtapes', mixtapeRoutes);

export default router;

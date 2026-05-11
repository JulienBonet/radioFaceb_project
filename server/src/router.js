// server/src/router.js
import { Router } from 'express';

import mixtapeRoutes from './routes/mixtapeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import genreRoutes from './routes/genreRoutes.js';

const router = Router();

router.use('/mixtapes', mixtapeRoutes);
router.use('/upload', uploadRoutes);
router.use('/genres', genreRoutes);

export default router;

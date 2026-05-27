// server/src/router.js
import { Router } from 'express';

import mixtapeRoutes from './routes/mixtapeRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import genreRoutes from './routes/genreRoutes.js';
import contactRoute from './routes/contactRoute.js';
import NewsletterRoute from './routes/newsletterRoute.js';

const router = Router();

router.use('/mixtapes', mixtapeRoutes);
router.use('/upload', uploadRoutes);
router.use('/genres', genreRoutes);
router.use('/contact', contactRoute)
router.use('/newsletter', NewsletterRoute)

export default router;

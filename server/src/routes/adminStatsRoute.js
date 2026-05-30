// server/src/routes/adminStatsRoute.js

import { Router } from 'express';

import { getStats } from '../controller/adminStatsController.js';
import { adminAuthMiddleware } from '../middleware/adminAuthMiddleware.js';

const router = Router();

router.get(
  '/',
  adminAuthMiddleware,
  getStats
);

export default router;
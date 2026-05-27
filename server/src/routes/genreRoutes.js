// server/src/routes/genreRoutes.js
import { Router } from 'express';

import {adminAuthMiddleware} from '../middleware/adminAuthMiddleware.js'
import * as controller from '../controller/genreController.js';

const router = Router();

router.get(
  '/',
  controller.getAll
);

router.get(
  '/:id',
  controller.getById
);

router.post(
  '/',
  adminAuthMiddleware,
  controller.create
);

router.put(
  '/:id',
  adminAuthMiddleware,
  controller.update
);

router.delete(
  '/:id',
  adminAuthMiddleware,
  controller.remove
);

export default router;
// server/src/routes/uploadRoutes.js
import { Router } from 'express';

import { upload } from '../middleware/uploadMiddleware.js';
import {adminAuthMiddleware} from '../middleware/adminAuthMiddleware.js' 

import * as controller from '../controller/uploadController.js';

const router = Router();

router.post(
  '/mixtape-cover',
  adminAuthMiddleware,
  upload.single('cover'),
  controller.uploadMixtapeCover
);

export default router;
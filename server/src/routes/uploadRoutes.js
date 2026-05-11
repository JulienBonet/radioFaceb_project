import { Router } from 'express';

import { upload } from '../middleware/uploadMiddleware.js';

import * as controller from '../controller/uploadController.js';

const router = Router();

router.post(
  '/mixtape-cover',
  upload.single('cover'),
  controller.uploadMixtapeCover
);

export default router;
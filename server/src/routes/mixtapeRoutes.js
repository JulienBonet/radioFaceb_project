// server/src/routes/mixtapeRoutes.js
import { Router } from 'express';
import * as controller from '../controller/mixtapeController.js';
import { adminAuthMiddleware } from '../middleware/adminAuthMiddleware.js';
import { authOptionalMiddleware } from '../middleware/authOptionalMiddleware.js';

const router = Router();

router.get('/', adminAuthMiddleware, controller.getAll);
router.get('/published', controller.getAllPublished);
router.get('/:id', authOptionalMiddleware, controller.getById);
router.post('/', adminAuthMiddleware, controller.create);
router.put('/:id', adminAuthMiddleware, controller.update);
router.delete('/:id', adminAuthMiddleware, controller.remove);

export default router;

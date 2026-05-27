// server/src/routes/mixtapeRoutes.js
import { Router } from 'express';
import * as controller from '../controller/mixtapeController.js';
import {adminAuthMiddleware} from '../middleware/adminAuthMiddleware.js' 

const router = Router();

router.get('/', controller.getAll);
router.get('/published', controller.getAllPublished);
router.get('/:id', controller.getById);
router.post('/', adminAuthMiddleware, controller.create);
router.put('/:id', adminAuthMiddleware, controller.update);
router.delete('/:id', adminAuthMiddleware, controller.remove);

export default router;
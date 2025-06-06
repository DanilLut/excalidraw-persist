import { Router } from 'express';
import { boardController } from '../controllers/boardController';
import elementRoutes from './elementRoutes';

const router = Router();

router.get('/', boardController.listActive);
router.get('/trash', boardController.listTrash);
router.post('/', boardController.create);
router.put('/:id', boardController.update);
router.delete('/:id', boardController.moveToTrash);
router.post('/:id/restore', boardController.restoreFromTrash);
router.delete('/:id/permanent', boardController.permanentDelete);
router.use('/:boardId/elements', elementRoutes);

export default router;

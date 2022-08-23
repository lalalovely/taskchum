import { Router } from 'express';
import AuthMiddleware from '../middlewares/AuthMiddleware';

import TaskRoute from './TaskRoute';
import UserRoute from './UserRoute';

const router = Router();

router.use(AuthMiddleware.authenticateUser);

router.use('/users', UserRoute);
router.use('/tasks', TaskRoute);

export default router;

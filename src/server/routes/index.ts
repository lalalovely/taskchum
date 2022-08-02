import { Router } from 'express';

import TaskRoute from './TaskRoute';
import UserRoute from './UserRoute';

const router = Router();

router.use('/users', UserRoute);
router.use('/tasks', TaskRoute);

export default router;

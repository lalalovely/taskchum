import { NextFunction, Request, Response, Router } from 'express';

import HttpStatus from 'http-status-codes';

import { Task } from '../../commons/types/Task.type';
import TaskModel from '../models/TaskModel';

const router = Router();

async function getTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.query.userId as string;
    if (userId !== '') {
      return res.json(await TaskModel.getTasksByUserId(userId));
    }
    return res.json(await TaskModel.getTasks());
  } catch (e) {
    next(e);
  }
}

async function createTask(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, description, userId } = req.body as Task;
    const task = await TaskModel.createTask({
      name,
      description,
      userId,
    } as Task);

    return res.json(task);
  } catch (e) {
    next(e);
  }
}

async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    await TaskModel.deleteTask(id);
    res.sendStatus(HttpStatus.OK);
  } catch (e) {
    next(e);
  }
}

async function updateTask(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    const task = await TaskModel.updateTask({
      ...(req.body as Task),
      id: id,
    } as Task);

    return res.json(task);
  } catch (e) {
    next(e);
  }
}

async function deleteTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.query.userId as string;
    const isDone = (req.query.isDone + '').toLowerCase() === 'true';
    const deleteSuccess = await TaskModel.deleteTasks(userId, isDone);
    return res.json(deleteSuccess);
  } catch (e) {
    next(e);
  }
}

router.route('/').post(createTask);
router.route('/').get(getTasks);
router.route('/').delete(deleteTasks);
router.route('/:id').delete(deleteTask);
router.route('/:id').put(updateTask);

export default router;

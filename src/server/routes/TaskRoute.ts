import { nextTick } from 'process';

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
    console.error(e);
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
    console.error(e);

    next(e);
  }
}

async function deleteTask(req: Request, res: Response, next: NextFunction) {
  try {
    const id = req.params.id;
    await TaskModel.deleteTask(id);
    res.sendStatus(HttpStatus.OK);
  } catch (e) {
    console.error(e);
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
    console.log('TASK ? ==', task);
    return res.json(task);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function getTasksByUserId(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.query.userId as string;
    const tasks = await TaskModel.getTasksByUserId(userId);
    return res.json(tasks);
  } catch (e) {
    console.error(e);
    next(e);
  }
}

async function deleteTasks(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.query.userId as string;
    const isDone = (req.query.isDone + '').toLowerCase() === 'true';

    console.log(`USER=${userId} and ISDONE=${isDone}`);

    if (userId !== '') {
      if (isDone) {
        await TaskModel.deleteCompletedTasks(userId);
      } else {
        await TaskModel.deleteAllTasksByUserId(userId);
      }
    }
  } catch (e) {
    console.error(e);
    next(e);
  }
}

router.route('/').get(getTasks);
router.route('/').post(createTask);
router.route('/').delete(deleteTasks);
router.route('/:id').delete(deleteTask);
router.route('/:id').put(updateTask);

export default router;

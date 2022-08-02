import express, { Router, NextFunction, Request, Response } from 'express';

import { User } from '../../commons/types/User.type';
import UserModel from '../models/UserModel';

const router = Router();

async function createUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userParams = req.body as User;
    const user = await UserModel.createUser(userParams);
    return res.json(user);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getUser(req: Request, res: Response, next: NextFunction) {
  try {
    const userId = req.params.id;
    console.log('USER ID: ', userId);
    const user = await UserModel.getUser(userId);
    console.log('USER FROM DB: ', user);
    return res.json(user);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

router.route('/').post(createUser);
router.route('/:id').get(getUser);

export default router;

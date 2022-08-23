import { NextFunction, Response, Request } from 'express';
import * as admin from 'firebase-admin';
import UnauthenticatedError from '../errors/UnauthenticatedError';

async function authenticateUser(req: Request, res: Response, next: NextFunction) {
  try {
    const authorization = req.headers.authorization;
    const idToken = authorization?.replace(/Bearer /, '') || '';
    const { uid } = await admin.auth().verifyIdToken(idToken);

    if (!uid) {
      throw new UnauthenticatedError();
    }

    next();
  } catch (error) {
    next(error);
  }
}

export default {
  authenticateUser,
};

import fs from 'fs';

import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import * as admin from 'firebase-admin';

import HttpStatus from 'http-status-codes';
import swagger from 'swagger-ui-express';

import { ErrorResponse } from '../commons/types/ErrorResponse.type';

import BaseError from './errors/BaseError';
import NotFoundError from './errors/NotFoundError';
import router from './routes';
import swaggerDoc from './swagger.json';
import { applicationDefault } from 'firebase-admin/app';
import config from './config/config';

async function main() {
  admin.initializeApp({
    projectId: config.FIRESTORE_CREDS.project_id,
    credential: applicationDefault(),
    databaseURL: 'https://task-manager-ec6a7-default-rtdb.firebaseio.com',
  });

  const app = express();

  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors({ credentials: true, origin: true }));

  app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc));

  app.use('/api/', router);

  app.use('/static', express.static(path.join(__dirname, '../../build/static')));

  app.use('^/$', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../../build/index.html'), 'utf-8', (err, data) => {
      if (err) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Errors');
      }

      return res.send(data);
    });
  });

  app.use((req, res, next) => {
    next(new NotFoundError());
  });

  app.use(handleError);

  return app;
}

function handleError(err: Error, _req: Request, res: Response, _next: NextFunction) {
  let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

  let errorResponse: ErrorResponse = {
    error: {
      code: 'ERROR',
      message: err.message || 'Something went wrong!',
    },
  };

  if (err instanceof BaseError) {
    statusCode = err.statusCode;
    errorResponse = err.errorResponse;
  }

  res.status(statusCode).send(errorResponse);
}

export default main;

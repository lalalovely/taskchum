import fs from 'fs';

import path from 'path';

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import * as admin from 'firebase-admin';

import HttpStatus from 'http-status-codes';

import { ErrorResponse } from '../commons/types/ErrorResponse.type';

import BaseError from './errors/BaseError';
import NotFoundError from './errors/NotFoundError';
import router from './routes';

async function main() {
  admin.initializeApp();
  const app = express();

  app.disable('x-powered-by');
  app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors({ credentials: true, origin: true }));

  // api routes
  app.use('/api/', router);

  // api routes
  // app.use("/api/0.1", router);

  // static files
  app.use('/static', express.static(path.join(__dirname, '../../build/static')));

  // catch all routes
  app.use('^/$', (req, res, next) => {
    fs.readFile(path.join(__dirname, '../../build/index.html'), 'utf-8', (err, data) => {
      if (err) {
        console.error(err.message);

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

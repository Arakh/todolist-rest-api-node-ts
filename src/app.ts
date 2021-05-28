import Express, { Application, Request, Response, NextFunction } from 'express';

import router from './todo/TodoRouter';

export const app: Application = Express();

app.use(Express.json());

app.use('/1.0', router);



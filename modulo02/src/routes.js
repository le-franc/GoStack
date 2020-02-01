import { Router } from 'express';
import UserControler from './app/controllers/userController';
import SessionControler from './app/controllers/sessionController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.put('/users', UserControler.update);

export default routes;

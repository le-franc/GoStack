import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserControler from './app/controllers/userController';
import SessionControler from './app/controllers/sessionController';
import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.put('/users', UserControler.update);

routes.post('/files', upload.single('file'),yarn (req, res) => {
  return res.json({ ok: true });
});

export default routes;

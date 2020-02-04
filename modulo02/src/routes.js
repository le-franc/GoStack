import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserControler from './app/controllers/userController';
import SessionControler from './app/controllers/sessionController';
import FileController from './app/controllers/fileController';
import ProviderController from './app/controllers/providerController';
import AppointmentControler from './app/controllers/appointmentController';
import ScheduleController from './app/controllers/scheduleController';
import NotificationController from './app/controllers/notificationController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserControler.store);
routes.post('/sessions', SessionControler.store);

routes.use(authMiddleware);

routes.put('/users', UserControler.update);

routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

routes.get('/appointments', AppointmentControler.index);
routes.post('/appointments', AppointmentControler.store);
routes.delete('/appointments/:id', AppointmentControler.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

export default routes;

import { Router } from 'express';
import JobController from './controllers/JobController';

const routes = Router();

routes.get('/jobs', JobController.getAll);
routes.get('/jobs/:id', JobController.getOne);
routes.post('/jobs', JobController.create);
routes.put('/jobs/:id', JobController.update);
routes.delete('/jobs/:id', JobController.delete);

export default routes;

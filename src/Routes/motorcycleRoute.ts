import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());
routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .getAllMotorcycle());

export default routes;

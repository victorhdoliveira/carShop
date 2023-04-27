import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routes = Router();

const idPath = '/motorcycles/:id';

routes.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

routes.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next)
  .getAllMotorcycle());

routes.get(idPath, (req, res, next) => new MotorcycleController(req, res, next)
  .getMotorcycleById());

routes.put(idPath, (req, res, next) => new MotorcycleController(req, res, next)
  .updateMotorcycleById());

routes.delete(idPath, (req, res, next) => new MotorcycleController(req, res, next)
  .removeMotorcycleById());

export default routes;

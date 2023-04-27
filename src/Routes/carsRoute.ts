import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

const idPath = '/cars/:id';

routes.post('/cars', (req, res, next) => new CarController(req, res, next).create());
routes.get('/cars', (req, res, next) => new CarController(req, res, next).getAllCars());
routes.get(idPath, (req, res, next) => new CarController(req, res, next).getCarById());
routes.put(idPath, (req, res, next) => new CarController(req, res, next).updateCarById());
routes.delete(idPath, (req, res, next) => new CarController(req, res, next).removeCarById());

export default routes;

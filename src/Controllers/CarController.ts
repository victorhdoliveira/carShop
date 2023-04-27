import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  notFound = 'Car not found';

  public async create() {
    const carData: ICar = this.req.body;
    try {
      const newCar = await this.service.registerCar(carData);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    try {
      const cars = await this.service.getAllCars();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const carById = await this.service.getCarById(id);
      if (carById === null) {
        return this.res.status(404).json({ message: this.notFound });
      }
      return this.res.status(200).json(carById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateCarById() {
    const { id } = this.req.params;
    const carData: ICar = {
      ...this.req.body,
    };
    
    try {
      const carById = await this.service.updateCarById(id, carData);
      if (carById === null) {
        return this.res.status(404).json({ message: this.notFound });
      }
      return this.res.status(200).json(carById);
    } catch (error) {
      this.next(error);
    }
  }

  public async removeCarById() {
    const { id } = this.req.params;
    try {
      const removeById = await this.service.removeCarById(id);
      if (removeById === null) {
        return this.res.status(404).json({ message: this.notFound });
      }
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;

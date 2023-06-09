import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  notFound = 'Motorcycle not found';

  public async create() {
    const motorcycleData: IMotorcycle = this.req.body;
    try {
      const newMotorcycle = await this.service.registerMotorcycle(motorcycleData);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycle() {
    try {
      const motorcycle = await this.service.getAllMotorcycle();
      return this.res.status(200).json(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    try {
      const motorcycleById = await this.service.getMotorcycleById(id);
      if (motorcycleById === null) {
        return this.res.status(404).json({ message: this.notFound });
      }
      return this.res.status(200).json(motorcycleById);
    } catch (error) {
      this.next(error);
    }
  }

  public async updateMotorcycleById() {
    const { id } = this.req.params;
    const motorcycleData: IMotorcycle = {
      ...this.req.body,
    };
    
    try {
      const motorcycleById = await this.service.updateMotorcycleById(id, motorcycleData);
      if (motorcycleById === null) {
        return this.res.status(404).json({ message: this.notFound });
      }
      return this.res.status(200).json(motorcycleById);
    } catch (error) {
      this.next(error);
    }
  }

  public async removeMotorcycleById() {
    const { id } = this.req.params;
    try {
      const removeById = await this.service.removeMotorcycleById(id);
      if (removeById === null) {
        return this.res.status(404).json({ message: this.notFound });
      }
      return this.res.status(204).end();
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
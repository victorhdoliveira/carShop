import { isValidObjectId, Model, model, models, Schema } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<ICar>;
  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    }, {
      versionKey: false,
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(car: ICar): Promise<ICar> {
    return this.model.create({ ...car });
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getCarById(id: string):Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }
    return this.model.findById(id);
  }
}

export default CarODM;

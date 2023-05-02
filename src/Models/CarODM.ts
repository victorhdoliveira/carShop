import { isValidObjectId, Schema, UpdateQuery } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
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
    super(schema, 'Car');
  }

  public async getAllCars(): Promise<ICar[]> {
    return this.model.find();
  }

  public async getCarById(id: string):Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new Error(this.invalidMongoId);
    }
    return this.model.findById(id);
  }

  public async updateCarById(id: string, data: Partial<ICar>):Promise<ICar | null> {
    if (!isValidObjectId(id)) {
      throw new Error(this.invalidMongoId);
    }
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...data } as UpdateQuery<ICar>,
      { new: true },
    );
  }

  public async deleteCarById(id: string) {
    if (!isValidObjectId(id)) {
      throw new Error(this.invalidMongoId);
    }
    return this.model.findByIdAndDelete(id);
  }
}

export default CarODM;

import { isValidObjectId, Schema, UpdateQuery } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true, enum: ['Street', 'Custom', 'Trail'] },
      engineCapacity: { type: Number, required: true },
    }, {
      versionKey: false,
    });
    super(schema, 'Motorcycle');
  }

  public async getAllMotorCycle(): Promise<IMotorcycle[]> {
    return this.model.find();
  }

  public async getMotorCycleById(id: string):Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) {
      throw new Error(this.invalidMongoId);
    }
    return this.model.findById(id);
  }

  public async updateMotorcycleById(id: string, data: Partial<IMotorcycle>):
  Promise<IMotorcycle | null> {
    if (!isValidObjectId(id)) {
      throw new Error(this.invalidMongoId);
    }
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...data } as UpdateQuery<IMotorcycle>,
      { new: true },

    );
  }

  public async deleteMotorcycleById(id: string) {
    if (!isValidObjectId(id)) {
      throw new Error(this.invalidMongoId);
    }
    return this.model.findByIdAndDelete(id);
  }
}

export default MotorcycleODM;
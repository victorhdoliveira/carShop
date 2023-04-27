import { Schema } from 'mongoose';
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
}

export default MotorcycleODM;
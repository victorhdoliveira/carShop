import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async registerMotorcycle(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAllMotorcycle() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleList = await motorcycleODM.getAllMotorCycle();
    const motorcycleArray = motorcycleList.map((m) => this.createMotorcycleDomain(m));
    return motorcycleArray;
  }

  public async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleById = await motorcycleODM.getMotorCycleById(id);
    return this.createMotorcycleDomain(motorcycleById);
  }

  public async updateMotorcycleById(id:string, motorcycleData: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const updateMotorcycle = await motorcycleODM.updateMotorcycleById(id, motorcycleData);
    return this.createMotorcycleDomain(updateMotorcycle);
  }

  public async removeMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const removeMotorcycle = await motorcycleODM.deleteMotorcycleById(id);
    return this.createMotorcycleDomain(removeMotorcycle);
  }
}

export default MotorcycleService;
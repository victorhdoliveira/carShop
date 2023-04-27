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
}

export default MotorcycleService;
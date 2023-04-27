import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async registerCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const carList = await carODM.getAllCars();
    const carArray = carList.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async getCarById(id: string) {
    const carODM = new CarODM();
    const carById = await carODM.getCarById(id);
    return this.createCarDomain(carById);
  }

  public async updateCarById(id:string, carData: ICar) {
    const carODM = new CarODM();
    const updateCar = await carODM.updateCarById(id, carData);
    return this.createCarDomain(updateCar);
  }

  public async removeCarById(id: string) {
    const carODM = new CarODM();
    const removeCar = await carODM.deleteCarById(id);
    return this.createCarDomain(removeCar);
  }
}

export default CarService;
import TypesCategory from '../utils/typesCategory';
import IVehicle from './IVehicle';

interface IMotorcycle extends IVehicle {
  category: TypesCategory;
  engineCapacity: number;
}

export default IMotorcycle;
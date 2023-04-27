import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(
      motorcycle.id, 
      motorcycle.model,
      motorcycle.year, 
      motorcycle.color, 
      motorcycle.buyValue, 
      motorcycle.status,
    );
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
  }
  
  public setCategory(qty: string) { this.category = qty; }
  public getCategory() { return this.category; }
  
  public setEngineCapacity(qty: number) { this.engineCapacity = qty; }
  public getEngineCapacity() { return this.engineCapacity; }
}

export default Motorcycle;
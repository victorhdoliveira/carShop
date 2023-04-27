import ICar from '../Interfaces/ICar';
import Vehicle from './Vehicle';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(
      car.id,
      car.model,
      car.year,
      car.color,
      car.buyValue,
      car.status,
    );
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
  
  public setDoorsQty(qty: number) { this.doorsQty = qty; }
  public getDoorsQty() { return this.doorsQty; }
  
  public setSeatsQty(qty: number) { this.seatsQty = qty; }
  public getSeatsQty() { return this.seatsQty; }
}

export default Car;
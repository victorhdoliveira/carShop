import * as chai from 'chai';
import { afterEach, describe } from 'mocha';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import CarService from '../../../src/Services/CarService';
import { allCars, bodyData, oneCar, updatedCar } from './Mocks/CarMock';

const { expect } = chai;

describe('Service /cars', function () {
  afterEach(() => {
    sinon.restore();
  });

  describe('Success Cases', function () {
    it('GET cars/ should return an array with all cars', async function () {    
      sinon.stub(Model, 'find').resolves(allCars);

      const service = new CarService();
      const result = await service.getAllCars();
      expect(result).to.be.deep.equal(allCars);
      expect(result).to.be.an('array');
    });

    it('GET cars/:id should return an object with a car', async function () {
      sinon.stub(Model, 'findById').resolves(oneCar);

      const service = new CarService();
      const result = await service.getCarById('6448542ef7475359162577f1');
      expect(result).to.be.deep.equal(oneCar);
      expect(result).to.be.an('object');
    });

    it('POST cars/ should return an object with a car', async function () {
      sinon.stub(Model, 'create').resolves(oneCar);

      const service = new CarService();
      const result = await service.registerCar(bodyData);
      expect(result).to.be.deep.equal(oneCar);
      expect(result).to.be.an('object');
    });

    it('PUT cars/:id should update and return an object with a car', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);

      const service = new CarService();
      const result = await service.updateCarById('6448542ef7475359162577f1', updatedCar);
      expect(result).to.be.deep.equal(updatedCar);
      expect(result).to.be.an('object');
    });
    it('DELETE cars/:id should delete car according to id ', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(oneCar);
  
      const service = new CarService();
      const result = await service.removeCarById('634852326b35b59438fbea31');
  
      expect(result).to.be.deep.equal(oneCar);
    });
  });
});
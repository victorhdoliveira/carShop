import * as chai from 'chai';
import { afterEach, describe } from 'mocha';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const { expect } = chai;

describe('Service /cars', function () {
  afterEach(() => {
    sinon.restore();
  });

  describe('Success Cases', function () {
    it('GET cars/ should return an array with all cars', async function () {
      const output = [new Car({
        id: '644ae581d5be6d62cc487471',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      })];
    
      sinon.stub(Model, 'find').resolves(output);

      const service = new CarService();
      const result = await service.getAllCars();
      expect(result).to.be.deep.equal(output);
      expect(result).to.be.an('array');
    });

    it('GET cars/:id should return an object with a car', async function () {
      const output = new Car({
        id: '644ae581d5be6d62cc487471',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      });

      sinon.stub(Model, 'findById').resolves(output);

      const service = new CarService();
      const result = await service.getCarById('644ae581d5be6d62cc487471');
      expect(result).to.be.deep.equal(output);
      expect(result).to.be.an('object');
    });

    it('POST cars/ should return an object with a car', async function () {
      const input = {
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      };

      const output = new Car({
        id: '644ae581d5be6d62cc487471',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      });

      sinon.stub(Model, 'create').resolves(output);

      const service = new CarService();
      const result = await service.registerCar(input);
      expect(result).to.be.deep.equal(output);
      expect(result).to.be.an('object');
    });

    it('PUT cars/:id should return an object with a car', async function () {
      const id = '644ae581d5be6d62cc487471';
      const input: ICar = {
        model: 'Marea',
        year: 2002,
        color: 'Yellow',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      };

      const output = new Car({
        id: '644ae581d5be6d62cc487471',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      });

      const updatedResult = {
        acknowledged: true,
        matchedCount: 1,
        modifiedCount: 1,
        upsertedCount: 0,
        upsertedId: null,
      };

      sinon.stub(Model, 'findById').resolves(output);
      const findByIdAndUpdateStub = sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedResult);

      const service = new CarService();
      await service.updateCarById(id, input);
      sinon.assert.calledOnce(findByIdAndUpdateStub);
      sinon.assert.calledWith(
        findByIdAndUpdateStub,
        { _id: id },
        {
          model: 'Marea',
          year: 2002,
          color: 'Yellow',
          status: true,
          buyValue: 15.99,
          doorsQty: 4,
          seatsQty: 5,
        },
        { new: true },
      );
    });
  });
});
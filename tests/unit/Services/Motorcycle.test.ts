import * as chai from 'chai';
import { afterEach, describe } from 'mocha';
import { Model } from 'mongoose';
import * as sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import { allMotorcyle, bodyInput, oneMotorcyle, updatedMotorcyle } from './Mocks/MotorcycleMock';

const { expect } = chai;

describe('Service /cars', function () {
  afterEach(() => {
    sinon.restore();
  });

  describe('Success Cases', function () {
    it('GET motorcyles/ should return an array with all motorcyles', async function () {    
      sinon.stub(Model, 'find').resolves(allMotorcyle);

      const service = new MotorcycleService();
      const result = await service.getAllMotorcycle();
      expect(result).to.be.deep.equal(allMotorcyle);
      expect(result).to.be.an('array');
    });

    it('GET motorcyles/:id should return an object with a motorcyle', async function () {
      sinon.stub(Model, 'findById').resolves(oneMotorcyle);

      const service = new MotorcycleService();
      const result = await service.getMotorcycleById('6348513f34c397abcad040b2');
      expect(result).to.be.deep.equal(oneMotorcyle);
      expect(result).to.be.an('object');
    });

    it('POST motorcyles/ should return an object with a motorcyle', async function () {
      sinon.stub(Model, 'create').resolves(oneMotorcyle);

      const service = new MotorcycleService();
      const result = await service.registerMotorcycle(bodyInput);
      expect(result).to.be.deep.equal(oneMotorcyle);
      expect(result).to.be.an('object');
    });

    it('PUT motorcyles/:id should update and return an object with a motorcyle', async function () {
      sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedMotorcyle);
      const service = new MotorcycleService();
      const result = await service
        .updateMotorcycleById('6448542ef7475359162577f1', updatedMotorcyle);
      expect(result).to.be.deep.equal(updatedMotorcyle);
      expect(result).to.be.an('object');
    });
    it('DELETE motorcyles/:id should delete motorcyle according to id ', async function () {
      sinon.stub(Model, 'findByIdAndDelete').resolves(oneMotorcyle);
  
      const service = new MotorcycleService();
      const result = await service.removeMotorcycleById('6348513f34c397abcad040b2');
  
      expect(result).to.be.deep.equal(oneMotorcyle);
    });
  });
});
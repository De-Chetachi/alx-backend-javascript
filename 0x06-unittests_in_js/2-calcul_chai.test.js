#!/usr/bin/env node

//import { expect } from 'chai';
//const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;

const calculateNumber = require('./2-calcul.js');
//import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should always return an integer', function() {
      expect(typeof(calculateNumber('SUM', 2.5, 2.5))).to.equal('number');
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUM', 2.4, 2.5)).to.equal(5);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUM', 2.5, 2.7)).to.equal(6);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUM', 2, 3)).to.equal(5);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUM', 2, 2.3)).to.equal(4);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUM', 2, 2.7)).to.equal(5);
    });
    it('0 0 = 0', function() {
      expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });
  });
  describe('SUBTRACT', function() {
    it('should always return an integer', function() {
      expect(typeof(calculateNumber('SUBTRACT', 2.5, 2.5))).to.equal('number');
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUBTRACT', 6.4, 2.5)).to.equal(3);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUBTRACT', 2.5, 4.7)).to.equal(-2);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUBTRACT', 3, 2)).to.equal(1);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUBTRACT', 0.5, 0)).to.equal(1);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('SUBTRACT', 6, 2.7)).to.equal(3);
    });
    it('0 0 = 0', function() {
      expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
    });
  });

  describe('DIVIDE', function() {
    it('should always return an integer', function() {
      expect(typeof(calculateNumber('DIVIDE', 2.5, 2.5))).to.equal('number');
    });

    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('DIVIDE', 6.4, 2.5)).to.equal(2);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('DIVIDE', 2.5, 4.7)).to.equal(0.6);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('DIVIDE', 3, 2)).to.equal(1.5);
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('DIVIDE', 0.5, 0)).to.equal('Error');
    });
    it('round down <.5, round up >=.5', function() {
      expect(calculateNumber('DIVIDE', 6, 2.7)).to.equal(2);
    });
    it('0 0 = 0', function() {
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
    it('0 0 = 0', function() {
      expect(calculateNumber('DIVIDE', 5, 0.3)).to.equal('Error');
    });
    it('0 0 = 0', function() {
      expect(calculateNumber('DIVIDE', 2, 0.6)).to.equal(2);
    });
  });

});

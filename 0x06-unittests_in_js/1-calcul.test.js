#!/usr/bin/env node

const assert = require('assert');

const calculateNumber = require('./1-calcul.js')

describe('calculateNumber', function() {
  describe('SUM', function () {
    it('should always return an integer', function() {
      assert.equal(typeof(calculateNumber('SUM', 2.5, 2.5)), 'number');
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUM', 2.4, 2.5), 5);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUM', 2.5, 2.7), 6);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUM', 2, 3), 5);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUM', 2, 2.3), 4);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUM', 2, 2.7), 5);
    });
    it('0 0 = 0', function() {
      assert.equal(calculateNumber('SUM', 0, 0), 0);
    });
  });
  describe('SUBTRACT', function() {
    it('should always return an integer', function() {
      assert.equal(typeof(calculateNumber('SUBTRACT', 2.5, 2.5)), 'number');
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUBTRACT', 6.4, 2.5), 3);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUBTRACT', 2.5, 4.7), -2);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUBTRACT', 3, 2), 1);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUBTRACT', 0.5, 0), 1);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('SUBTRACT', 6, 2.7), 3);
    });
    it('0 0 = 0', function() {
      assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
    });
  });

  describe('DIVIDE', function() {
    it('should always return an integer', function() {
      assert.equal(typeof(calculateNumber('DIVIDE', 2.5, 2.5)), 'number');
    });

    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('DIVIDE', 6.4, 2.5), 2);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('DIVIDE', 2.5, 4.7), 0.6);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('DIVIDE', 3, 2), 1.5);
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('DIVIDE', 0.5, 0), 'Error');
    });
    it('round down <.5, round up >=.5', function() {
      assert.equal(calculateNumber('DIVIDE', 6, 2.7), 2);
    });
    it('0 0 = 0', function() {
      assert.equal(calculateNumber('DIVIDE', 0, 0), 'Error');
    });
    it('0 0 = 0', function() {
      assert.equal(calculateNumber('DIVIDE', 5, 0.3), 'Error');
    });
    it('0 0 = 0', function() {
      assert.equal(calculateNumber('DIVIDE', 2, 0.6), 2);
    });
  });

});

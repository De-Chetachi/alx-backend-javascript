#!/usr/bin/env node

const assert = require('assert');

const calculateNumber = require('./0-calcul.js')

describe('calculateNumber', function() {
  it('should always return an integer', function() {
    assert.equal(typeof(calculateNumber(2.5, 2.5)), 'number');
  });
  it('round down <.5, round up >=.5', function() {
    assert.equal(calculateNumber(2.4, 2.5), 5);
  });
  it('round down <.5, round up >=.5', function() {
    assert.equal(calculateNumber(2.5, 2.7), 6);
  });
  it('round down <.5, round up >=.5', function() {
    assert.equal(calculateNumber(2, 3), 5);
  });
  it('0 0 = 0', function() {
    assert.equal(calculateNumber(0, 0), 0);
  });
  it('-1.5 -2.4 = -3', function() {
    assert.equal(calculateNumber(-1.5, -2.4), -3);
  });
});

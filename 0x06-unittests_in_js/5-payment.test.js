#!/usr/bin/env node

const Utils = require('./utils.js');
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function() {
  let spy;
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });
  afterEach(function() {
    spy.restore();
  });
  it('should Verify that the correct string is logged', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledOnceWithExactly(spy, 'The total is: 120');
  });
  it('should Verify that the correct string is logged', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledOnceWithExactly(spy, 'The total is: 20');
  });
  
});

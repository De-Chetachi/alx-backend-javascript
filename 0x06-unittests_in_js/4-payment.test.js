#!/usr/bin/env node

const Utils = require('./utils.js');
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(spy, 'The total is: 10');
    stub.restore();
    spy.restore();
  });
});

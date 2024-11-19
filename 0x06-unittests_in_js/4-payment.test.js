#!/usr/bin/env node

const Utils = require('./utils.js');
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(spy, 'The total is: 10');
    stub.restore();
    spy.restore();
  });
});

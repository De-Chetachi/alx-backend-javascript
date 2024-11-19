#!/usr/bin/env node

const Utils = require('./utils');
const sinon = require('sinon')
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi', function() {
  it('should use Utils.calculateNumber', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestApi(100, 20);
    sinon.assert.calledWith(spy, 'SUM', 100, 20);
    spy.restore();
  });
});

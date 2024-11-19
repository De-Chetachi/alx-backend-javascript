#!/usr/bin/env node

const expect = require('chai').expect
//const sinon = require('sinon')
const getPaymentTokenFromApi = require('./6-payment_token.js');

describe.only('getPaymentTokenFromApi', function() {
  it('should return {data: Successful response from API}', function(done) {
    getPaymentTokenFromApi(true, function(data) {
      expect(data).to.equal({ data: 'Successful response from API' });
    });
    done();
  });
});

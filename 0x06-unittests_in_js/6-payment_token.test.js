#!/usr/bin/env node

const chai = require('chai');
//chai.use(require("chai-as-promised"));
const expect = chai.expect;
const getPaymentTokenFromApi = require('./6-payment_token.js');
//const getPaymentTokenFromApi = require('./test.js');

describe.only('getPaymentTokenFromApi', function() {
  it('should return {data: Successful response from API}', function(done) {
    getPaymentTokenFromApi(true).then((result) => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      console.log(result);
      done();
    })
  });
});

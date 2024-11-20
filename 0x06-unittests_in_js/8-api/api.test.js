const request = require('request');
const expect = require('chai').expect;

describe('app', function() {
  it('response status should be 200', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  it('should return appropriate response', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.body).to.deep.equal('Welcome to the payment system');
      done();
    });
  });
});

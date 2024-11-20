const { expect } = require('chai');
const request = require('request');

describe('Login endpoint', () => {
  it('Returns the right message', function (done) {
    const data = { userName: 'Guillaume' };
    request.post('http://localhost:7865/login', {
      json: {
        userName: 'BobDylan',
      }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

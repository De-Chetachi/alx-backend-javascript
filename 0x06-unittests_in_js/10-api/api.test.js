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

  describe('cart endpoints', function() {
    it('response status should be 200 if id is numeric', function(done) {
      request('http://localhost:7865/cart/20', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
    it('should return appropriate response if id is numeric', function(done) {
      request('http://localhost:7865/cart/20', function(error, response, body) {
	expect(response.body).to.equal('Payment methods for cart 20');
        done();
      });
    });
    it('response status should be 404 if id is not numeric', function(done) {
      request('http://localhost:7865/cart/go', function(error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  describe('available payments', function() {
    it('response status should be 200', function(done) {
      request('http://localhost:7865/available_payments', function(error, response, body) {
        expect(response.statusCode).to.equal(200);
	done();
      });
    });
    it('should return appropriate response', function(done) {
      request('http://localhost:7865/available_payments', function(error, response, body) {
        const resultE = { payment_methods: { credit_cards: true, paypal: false } }
        expect(response.body).to.deep.equal(JSON.stringify(resultE));
        done();
      });
    });
  });

  describe('login', function() {
    it('should return appropriate statuscode', function(done) {
      request.post({ url: 'http://localhost:7865/login', json: true, body: { userName: 'Cheta' } }, function(error, response, body) {
	if (error) {
	  expect(response.statusCode).to.not.equal(200);
	} else {
          expect(response.statusCode).to.equal(200);
	}
	done();
      });
    });
    it('should return appropriate response', function(done) {
      request.post({ url: 'http://localhost:7865/login', json: true, body: { userName: 'Cheta', } }, function(error, response, body) {
	if (error) {
	  expect(response.statusCode).to.not.equal(200)
	} else {
          expect(response.body).to.deep.equal('Welcome Cheta');
	}
	done();
      });
    });
    it('should return appropriate statuscode', function(done) {
      request.post({ url: 'http://localhost:7865/login', json: true, body: { name: 'Cheta' } }, function(error, response, body) {
        if (error) {
          expect(response.statusCode).to.not.equal(200);
        } else {
          expect(response.statusCode).to.equal(200);
        }
        done();
      });
    });
    it('should return appropriate response', function(done) {
      request.post({ url: 'http://localhost:7865/login', json: true, body: { name: 'Cheta', } }, function(error, response, body) {
        if (error) {
          expect(response.statusCode).to.not.equal(200)
        } else {
          expect(response.body).to.deep.equal('Welcome Cheta');
        }
        done();
      });
    });
  })
});

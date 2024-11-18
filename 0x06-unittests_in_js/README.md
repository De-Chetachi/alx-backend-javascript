## TEST IN JAVASCRIPT

# MOCHA

mocha is a test runner this means that it runs/executes tests, the tests themselves are not written in mocha, other test runners include jasmine, jest

to install mocha
npm install -g mocha
cd into your project directory
npm init
npm install --save-dev mocha

create a tests directory and change to it

a simple test using the assertion library of nodejs

const assert = require('assert');

describe('smoke test', function() {
  it('checks equality', function() {
    assert.equal(true, true);
  });
});

to run this

mocha tests/

# chai
chai is a assertion library
previosly we used the nodejs assert library to make an assertion
chai does same thing but offers better readability

to install chai

npm install --save-dev chai

to make an assertion using the chai library

const chai = require('chai');
const expect = chai.expect;

describe('smoke test', function() {
  it('checks equality', function() {
    expect(true).to.be.true;
  });
});

#sinonjs
sininjs provides stand-alone test spies, stubs and mocks, this mechanism is used for creating spies, stubs and mocks

to install sinonjss
npm install --save-dev sinon

#spies stubs and mocks
spies creates fake functions which we can use to track executions, this means we can use spies to determine whether a function has been executed, how many times etc

stubs enables us to replace functions, this gives us control of the behaviour of function

mocks make fake methods that have pre-programmed behavior and preprogramed expectations

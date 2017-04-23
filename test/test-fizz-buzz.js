const mocha = require('mocha');
const fizzBuzzer = require('../fizzBuzzer.js');
require('chai').should();

describe('this makes sure fizzBuzz works', function() {
	it('make sure it checks the numbers', function() {
		const answer = fizzBuzzer(7);		
		answer.should.equal(7);
	}),
	it('make sure it checks the 3', function() {
		const answer = fizzBuzzer(9);
		answer.should.equal('fizz');		
	}),
	it('make sure it checks the 5', function() {
		const answer = fizzBuzzer(20);
		answer.should.equal('buzz');
	}),	
	it('make sure it checks the 95', function() {
		const answer = fizzBuzzer(95);
		answer.should.equal('buzz');
	}),	
	it('make sure it checks the 15', function() {
		const answer = fizzBuzzer(15);
		answer.should.equal('fizz-buzz');
	});
});
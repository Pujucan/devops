const expect = require('chai').expect;
// import math file
const MATH = require('../math');
describe('math.js tests', () => {
    describe('math.add() Test', () => {
        it('should equal 2', () => {
            const RESULT = MATH.add(1, 1);
            expect(RESULT).to.equal(2);
        });
        it('should equal 4', () => {
            const RESULT = MATH.add(2, 2);
            expect(RESULT).to.equal(4);
        });
    });
    
    describe('math.multiply() Test', () => {
        it('should equal 3', () => {
            const RESULT = MATH.multiply(3, 1);
            expect(RESULT).to.equal(3);
        });
        it('should equal 10', () => {
            const RESULT = MATH.multiply(5, 2);
            expect(RESULT).to.equal(10);
        });
    });
});
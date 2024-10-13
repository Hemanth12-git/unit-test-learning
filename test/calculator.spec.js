import { expect } from "chai";
import Calculator from "../src/calculator-app.js"

//create test suite
describe('test calulator class', () => {
    //create test cases
    //we have three A pattern -> Arrange, Act, Assert
    //so for creating individual test cases, use the 'it' method
    it('should return sum', () => {
        //arrange -> get the data or mock datas
        const calc = new Calculator();

        //act -> perform the operation
        const result = calc.add(2,3)

        //assert -> check for the correct value 
        expect(result).to.be.equal(5);
    });

    it('should return subtract', () => {
        const calc = new Calculator();
        const result = calc.subtract(5,2);
        expect(result).to.be.equal(3);
    });

    it('should return multiply', () => {
        const calc = new Calculator();
        const result = calc.multiply(5,2);
        expect(result).to.be.equal(10);
    });

    it('should return divide', () => {
        const calc = new Calculator();
        const result = calc.divide(6,2);
        expect(result).to.be.equal(3);
    });
});
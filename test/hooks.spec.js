import Calculator  from "../src/calculator-app.js";
import { expect } from 'chai';

let counter = 1;


//we also have 
//describe.skip() -> this skips the current test suite
//it.skip() -> this skips the current test case

//describe.only() -> this runs only the current test suite from the overall test folder
//it.only() -> runs only the particular test case within that specific test suite 


describe("different hooks test", () => {

    let calc; //Initialise in this higher level block
    before(() => {
        console.log("BEFORE ALL THE TEST CASES");
    });

    beforeEach(() => {
        // let calc = new Calculator(); -> This wont work because calc is initialised each time before a test case
        //and also the test case 'it' block has a block scope

        calc = new Calculator();
        console.log(`THIS IS TEST CASE NUMBER ${counter}`);
        counter++;
    });


    it('should return subtract', () => {
        const result = calc.subtract(5,2);
        expect(result).to.be.equal(3);
    });

    it('should return multiply', () => {
        const result = calc.multiply(5,2);
        expect(result).to.be.equal(10);
    });

    afterEach(() => {
        console.log('This is the end of the current test case');
    })

    after(() => {
        console.log("This is the end of all the test cases");
        counter = 1;
    })
});
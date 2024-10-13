import sinon from "sinon";
import { expect } from "chai";
import Calculator from "../src/calculator-app.js";

describe.only("spy-stub-mock", () => {
    let calc;
    let spy;
    let randomNumberStub;
    beforeEach(() => {
        calc = new Calculator();
    });

    afterEach(() => {
        spy.restore();
    })
    it(("spy test scenario"), () => {
        spy = sinon.spy(calc, 'subtract');
        calc.subtract(2,1); //This calls the subtract method from the calculator class so that now spy has something to spy on
        expect(spy.calledOnceWith(2,1)).to.be.true; //This does check whether the particular call has happened
    });

    it("spy test scenario on multiple calls", () => {
        spy = sinon.spy(calc, 'subtract');

        //multiple calls
        calc.subtract(2,1);
        calc.subtract(5,3);
        calc.subtract(9,8);

        expect(spy.callCount).to.equal(3); //gives the number of calls called on to the function

        expect(spy.firstCall.calledWith(2,1)).to.be.true;
        expect(spy.secondCall.calledWith(5,3)).to.be.true;
        expect(spy.thirdCall.calledWith(9,8)).to.be.true;
    });

    it.only("stub test case", () => {
        stub = sinon.stub(calc, 'getRandomNumber').returns(3); // here i stubbed the randomNumber function to return only a fixed value
        //stub mimics the actual function but can be used to return some fixed value

        spy = sinon.spy(calc, 'complexFunctionToAddWithRandomNumber');
        calc.complexFunctionToAddWithRandomNumber(5);
        expect(spy.calledOnceWith(5)).to.be.true;
        stub.restore();
    })
});
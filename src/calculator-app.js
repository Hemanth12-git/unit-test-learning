class Calculator {
    constructor() {}
    add(a, b) {
        return a + b;
    }
    
    subtract(a,b) {
        return a - b;
    }

    multiply(a,b) {
        return a * b;
    }

    divide(a,b) {
        if(b == 0) {
            throw new Error("You cannot divide with zero");
        }
        return a/b;
    }

    getRandomNumber() {
        return Math.floor(Math.random() * 10 + 1);
    }

    complexFunctionToAddWithRandomNumber(a) {
        const b = this.getRandomNumber();
        return a + b;
    }
}

export default Calculator;
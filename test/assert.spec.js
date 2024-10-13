import { assert, expect, should } from "chai";

describe("different assert test", () => {
    //expect
    it("EXPECT assertion style", () => {
        //arrange
        const name = 'hemanth';
        const age = 20;
        const object = { name: 'kumar', age: 20 };
        const bool = true;
        const arrdata = [1, 2, 3];

        //act

        //assert
        //string
        expect(name).to.be.ok;
        expect(name).to.be.equal("hemanth");
        expect(name).to.be.a("string");

        //integer
        expect(age).to.be.ok;
        expect(age).to.be.equal(20);
        expect(age).to.be.a("number");

        //object
        expect(object).to.be.ok;
        expect(object).to.have.property("name").equal("kumar");
        expect(object).to.be.an("object");

        //bool
        expect(bool).to.be.ok;
        expect(bool).to.be.true;
        expect(bool).to.be.a("boolean");

        //array
        expect(arrdata).to.be.ok;
        expect(arrdata).to.have.length(3).that.includes(2);
        expect(arrdata).to.be.an("array");
    });

    //should
    it("SHOULD assertion style", () => {
        //instantiate should class
        should();
        //arrange
        const name = 'hemanth';
        const age = 20;
        const object = { name: 'kumar', age: 20 };
        const bool = true;
        const arrdata = [1, 2, 3];

        //act

        //assert
        //string
        name.should.be.ok;
        name.should.be.equal("hemanth");
        name.should.be.a("string");

        //integer
        age.should.be.ok;
        age.should.be.equal(20);
        age.should.be.a("number");

        //object
        object.should.be.ok;
        object.should.have.property("name").equal("kumar");
        object.should.be.an("object");

        //bool
        bool.should.be.ok;
        bool.should.be.true;
        bool.should.be.a("boolean");

        //array
        arrdata.should.be.ok;
        arrdata.should.have.length(3).that.includes(2);
        arrdata.should.be.an("array");
    });

    //assert
    it("ASSERT assertion style", () => {
        //arrange
        const name = 'hemanth';
        const age = 20;
        const object = { name: 'kumar', age: 20 };
        const bool = true;
        const arrdata = [1, 2, 3];

        //act

        //assert
        //string
        assert.isOk(name);
        assert.equal(name, "hemanth");
        assert.typeOf(name, "string");

        //integer
        assert.isOk(age);
        assert.equal(age, 20);
        assert.typeOf(age, "number");

        //object
        assert.isOk(object);
        assert.deepEqual(object, { name: 'kumar', age: 20 });

        //array
        assert.deepEqual(arrdata, [1, 2, 3]);
        assert.include(arrdata, 2);

        //boolean
        assert.equal(bool, true);
        assert.typeOf(bool, "boolean");
    });

});

import parseToString, {add} from '../../src/Utilities/calculations.mjs'

describe("Element parser", function() {

    it("with input a 2 should return 2 + a", function () {
        let expectedResult = "2a"

        let actualResult = add("a", "2")

        expect(actualResult).toEqual(expectedResult)
    });

    it("with input 10 * 10 should return 10 * 10", function () {

    });
});
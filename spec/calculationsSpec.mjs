import {add, subtract} from '../src/Utilities/calculations.js'
import {DimensionError} from "../src/Utilities/errors.mjs";

describe("Calculation operation", function() {

    it("addition of two matrices with numbers should return only number elements", function () {
        let elements1 = [[1, 2],[1, 2]]
        let elements2 = [[2, 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            [3, 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("addition with a element should return a + 2", function () {
        let elements1 = [["a", 2],[1, 2]]
        let elements2 = [[2, 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["a+2", 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("subtraction with a element should return a - 2", function () {
        let elements1 = [["a", 2],[1, 2]]
        let elements2 = [[2, 3], [2, 3]]

        let actualResult = subtract(elements1, elements2)

        let expectedResult = [
            ["a-2", 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("subtraction with number elements should return only numbers", function () {
        let elements1 = [[2, 2],[1, 2]]
        let elements2 = [[2, 3], [2, 3]]

        let actualResult = subtract(elements1, elements2)

        let expectedResult = [
            [1, 0],
            [0, 0]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("subtraction should throw DimensionError when matrices have different dimensions.", function () {
        let elements1 = [[2, 2, 3],[1, 2]]
        let elements2 = [[2, 3, 3], [2, 3]]

        const sub = function () {subtract(elements1, elements2)}

        expect(sub).toThrow(DimensionError);
    });

});
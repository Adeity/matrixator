import calculations from '../../src/Utilities/calculations.js'
import {DimensionError} from "../../src/Utilities/errors.mjs";

describe("Multiplication", function() {

    it("where an element is '2a' should result in elements 2 a + 4 and 6 a + 6", function () {
        let elements1 = [["2a", 2],[1, 2]]
        let elements2 = [[1, 3], [2, 3]]

        const {multiplyMatrices} = calculations;
        let actualResult = multiplyMatrices(elements1, elements2)

        let expectedResult = [
            ["2a + 4", "6a + 6"],
            [5, 9]
        ]

        expect(actualResult).toEqual(expectedResult);
    });
});
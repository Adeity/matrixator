import {add, subtract} from '../../src/Utilities/calculations.mjs'
import {DimensionError} from "../../src/Utilities/errors.mjs";

describe("Addition", function() {

    it("where an element is '2a' added to element '1' should return '2a + 1' in given result element.", function () {
        let elements1 = [["2a", 2],[1, 2]]
        let elements2 = [[1, 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["2a + 1", 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("where an element is '3a' added to element '2a' should return '5a' in given result element.", function () {
        console.log("where an element is '3a' added to element '2a' should return '5a' in given result element.------------------------")
        let elements1 = [["3a", 2],[1, 2]]
        let elements2 = [["2a", 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["5a", 5],
            [3, 5]
        ]
        console.log("where an element is '3a' added to element '2a' should return '5a' in given result element.------------------------")

        expect(actualResult).toEqual(expectedResult);

    });

    it("where an element is '6a' added to element '6b' should return '6a + 6b' in given result element.", function () {
        console.log("where an element is '6a' added to element '6b' should return '6a + 6b' in given result element.------------------------")
        let elements1 = [["6a", 2],[1, 2]]
        let elements2 = [["6b", 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["6a + 6b", 5],
            [3, 5]
        ]
        console.log("where an element is '6a' added to element '6b' should return '6a + 6b' in given result element.------------------------")

        expect(actualResult).toEqual(expectedResult);

    });

    it("where an element is '324a' added to element '10a' should return '334a' in given result element.", function () {
        let elements1 = [["324a", 2],[1, 2]]
        let elements2 = [["10a", 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["334a", 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("where an element is '324a' added to element '10a' should return '334a' in given result element.", function () {
        let elements1 = [["324a", 2],[1, 2]]
        let elements2 = [["10a", 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["334a", 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("where an element is '3cba' added to element '4bca' should return '7abc' in given result element.", function () {
        let elements1 = [["3cba", 2],[1, 2]]
        let elements2 = [["4bca", 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["7abc", 5],
            [3, 5]
        ]

        expect(actualResult).toEqual(expectedResult);
    });

    it("where an element is '2 a' added to element '3a' should return '5a' in given result element.", function () {
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAa----------------------------------------------")
        let elements1 = [["2   a b", 2],[1, 2]]
        let elements2 = [["3ab", 3], [2, 3]]

        let actualResult = add(elements1, elements2)

        let expectedResult = [
            ["5ab", 5],
            [3, 5]
        ]
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAa----------------------------------------------")

        expect(actualResult).toEqual(expectedResult);
    });
});
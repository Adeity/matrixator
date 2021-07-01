import parseToString, {add} from '../../src/Utilities/calculations.mjs'

describe("Element parser", function() {

    it("with input a 2 should return 2 + a", function () {
        let expectedResult = "2a"

        let actualResult = add("a", "2")

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return ", function () {
        let inputElement = ""

        let expectedResult = ""

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return '3a + 3b' with input '3   a + b3' ", function () {
        let inputElement = "3   a + b3"

        let expectedResult = "3a + 3b"

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return '5a + 3b + 3c' with input '3   a + b3 + c + c + c + 2a    ' ", function () {
        let inputElement = "3   a + b3 + c + c + c + 2a     "

        let expectedResult = "5a + 3b + 3c"

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return '20ab' with input '4a * 5b' ", function () {
        let inputElement = "3   a + b3 + c + c + c + 2a     "

        let expectedResult = "5a + 3b + 3c"

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return '12a / b' with input '3a / b4' ", function () {
        let inputElement = "3   a + b3 + c + c + c + 2a     "

        let expectedResult = "5a + 3b + 3c"

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return '3ab / 4' with input '3a / 4b' ", function () {
        let inputElement = "3   a + b3 + c + c + c + 2a     "

        let expectedResult = "5a + 3b + 3c"

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });

    it("parseSingleElementToString should return '3a / (4b)' with input '3a / (4b)' ", function () {
        let inputElement = "3   a + b3 + c + c + c + 2a     "

        let expectedResult = "5a + 3b + 3c"

        let actualResult = parseSingleElementToString(inputElement)

        expect(actualResult).toEqual(expectedResult)
    });
});
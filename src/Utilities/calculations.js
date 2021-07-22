import {DimensionError, MatrixMultiplicationError, NonInvertibleMatrixError} from './errors.mjs'
import {all} from 'mathjs'
import {create} from 'mathjs'
// import {math} from 'mathjs'

// 2a * 3b + 4a * 4
// 2  a + 2a
// 2a + 2b
// simplify -> 2 * (a + b)
function calculateExpression(exprText) {
    const config = { }
    const math = create(all, config)

    const trimmedExpr = exprText.replace(/\s/g, '');

    const f = math.parse(trimmedExpr)
    return math.simplify(f)
}

function haveSameDimensions(elements1, elements2) {
    let numOfRows1 = elements1.length
    let numOfRows2 = elements2.length

    let numOfCols1 = elements1[0].length
    let numOfCols2 = elements2[0].length

    return (numOfRows1 === numOfRows2)
            &&
        (numOfCols1 === numOfCols2)
}

/**
 * Gets called when need to parse expression of either plus or minus
 * @param elements1 are elements of matrix
 * @param elements2 are elements of other matrix
 * @param operand is either + or -
 * @return {*|[]}
 */
function additionSubtraction (elements1, elements2, operand) {
    let resultElements = []
    let row;

    resultElements = elements1.map(function(item, i, array) {
        console.log(item, i)
        row = elements1[i].map(function(item, k) {
            if (typeof elements1[i][k] === "string" || typeof elements2[i][k] === "string") {
                return calculateExpression(
                    elements1[i][k] + operand + elements2[i][k]
                )
            }
            else{
                if (operand === "+")
                    return elements1[i][k] + elements2[i][k]
                else if (operand === "-")
                    return elements1[i][k] - elements2[i][k]
            }
            return []
        })
        return row
    })

    return resultElements
}

function add(elements1, elements2) {
    if(!haveSameDimensions(elements1, elements2)) {
        throw new DimensionError("Matrices have different dimensions.");
    }

    return additionSubtraction(elements1, elements2, "+")
}

function subtract(elements1, elements2) {
    if(!haveSameDimensions(elements1, elements2)) {
        throw new DimensionError("Matrices have different dimensions.");
    }

    return additionSubtraction(elements1, elements2, "-")
}


function canMultiply(matrix1ColumnDimension, matrix2RowDimension) {
    return matrix1ColumnDimension === matrix2RowDimension
}

//  2, 3  3, 4
function multiplyMatrices(elements1, elements2) {
    let i, j, k;

    let rows = elements1.length, columns = elements2[0].length


    let elements1Cols = elements1[0].length;

    console.log("Rows: " + rows + " columns: " + columns)

    if(!canMultiply(elements1Cols, elements2.length)) {
        throw new MatrixMultiplicationError("Cannot multiply matrices. Column dimension of matrix A must be equal to row dimension of matrix B.")
    }

    let resultElements = getEmptyMatrixWithDimension(rows, columns)

    let expr;

    for (i = 0; i < rows; i++) {
        console.log("inside rows")
        for (j = 0; j < columns; j++) {
            expr = ""

            for (k = 0; k < elements1Cols; k++) {
                if (isNaN(elements1[i][k])) {
                    throw new MatrixMultiplicationError("Multiplication does not support non numerical elements. Matrix A element: '"+elements1[i][k]+  "' at ("+i+", "+k+")")
                }
                if (isNaN(elements2[k][j])) {
                    throw new MatrixMultiplicationError("Multiplication does not support non numerical elements. Matrix B  element: '"+elements2[k][j]+  "' at ("+k+", "+j+")")
                }
                if (k>0) {
                    expr = expr + "+" + (elements1[i][k] +"*"+ elements2[k][j]);
                } else {
                    expr = (elements1[i][k] +"*"+ elements2[k][j])
                }
            }
            let calculatedExpr = calculateExpression(expr)
            //  calculateExpression returns ConstantNode of some sort. That's why I get the .value here
            resultElements[i][j] = calculatedExpr.value
        }
    }


    return resultElements
}

/**
 * Function to find out wheter row dimension of a matrix is the same as its column dimension.
 * @param elements are elements of a matrix
 * @returns {boolean}
 */
function isMatrixSquare(elements) {
    let rowDimension = elements.length, columnDimension = elements[0].length
    console.log("matrix row length: " + elements.length)
    console.log("matrix col length: " + elements[0].length)
    return rowDimension === columnDimension
}



/**
 * Returns empty matrix
 * @param row is row dimension of new matrix
 * @param column is column dimension of new matrix
 */
function getEmptyMatrixWithDimension(row, column) {
    let resultElements = new Array(row).fill(0)
    console.log("resultElements: ")
    console.log(resultElements)
    for (let l = 0; l < row; l++) {
        console.log("l = " + l)
        console.log()
        resultElements[l] = (new Array(column))
    }
    return resultElements
}

function getDeterminant (elements) {
    const config = { }
    const math = create(all, config)

    return math.det(elements)
}

// Function to get determinant of matrix
function determinant(elements) {
    if (!isMatrixSquare(elements)) {
        throw new DimensionError("Cannot calculate determinant of a non square matrix.")
    }
    return getDeterminant(elements)
}

function getInverse (elements) {
    const config = { }
    const math = create(all, config)

    return math.inv(elements)
}

function transpose(elements) {
    const config = { }
    const math = create(all, config)

    return math.transpose(elements)
}

function getDot(vector1, vector2) {
    const config = { }
    const math = create(all, config)

    return math.dot(vector1, vector2)
}

function dotProduct (elements1, elements2) {
    //  checking that number of columns is 1 here
    if (!isVector(elements1) || !isVector(elements2)) {
        throw new DimensionError("Dot product can be calculated between two vectors. Expected number of columns is 1 for both matrices (vectors).")
    }
    //  checking number of rows here
    if (elements1.length !== elements2.length) {
        throw new DimensionError("To calculate dot product of two vectors they must have the same number of rows.")
    }
    let vector1 = toVector(elements1)
    let vector2 = toVector(elements2)
    return getDot(vector1, vector2)
}

function isVector (elements) {
    return elements[0].length === 1
}

function toVector (elements) {
    let vector = elements.map((row) => {
        return row[0]
    })
    return vector
}

// Function to calculate and store inverse, returns false if
// matrix is singular
function inverse(elements) {
    //  determinant is not square
    if (!isMatrixSquare(elements)) {
        throw new NonInvertibleMatrixError("Matrix is not square")
    }

    // Find determinant of elements[][]
    let det = getDeterminant(elements);

    //  determinant is square but singular
    if (det === 0) {
        throw new NonInvertibleMatrixError("Singular matrix, can't find its inverse");
    }

    return getInverse(elements);
}

const calculations =  {add, subtract, multiplyMatrices, inverse, determinant, transpose, dotProduct}
export default calculations
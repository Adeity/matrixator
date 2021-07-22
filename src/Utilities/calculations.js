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

function sortStringAlphabetically(str){
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++){
        for(var j = i + 1; j < arr.length; j++){
            /* if ASCII code greater then swap the elements position*/
            if(arr[i] > arr[j]){
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr.join('');
}

function multiplyNumbersInsideArray(arr) {
    let res = 1
    for (let i = 0; i < arr.length; i++) {
        res *= parseInt(arr[i])
    }
    return res
}

function isNumeric(x) {
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    return numbers.includes(x)
}

function divideVariablesAndCoefficient(textElement){
    let coefficients = []
    let variables = ""
    // console.log("textElement size:")
    // console.log(textElement.size)
    // console.log("textElement length:")
    // console.log(textElement.length)
    for (let i = 0; i < textElement.length; i++){
        let currentCoefficient = ""

        let isNum = isNumeric(textElement[i])

        console.log("Numeric var: ")
        console.log(isNum)

        console.log("Now looking at:")
        console.log(textElement[i])
        while(isNum) {
            console.log("Current i index: " + i)
            console.log("Current char: " + textElement[i])
            console.log("Character is integer")

            currentCoefficient += textElement[i]

            console.log("Current Coefficient:")
            console.log(currentCoefficient)



            if (i + 1 === textElement.length) {
                break
            }

            let isNum = isNumeric(textElement[i+1])

            if(!isNum) {
                console.log("Next char is not numeric.")
                coefficients.push(currentCoefficient)
                break
            }
            else {
                console.log("Next char is also numeric, incrementing i index")
                i++
            }
        }

        if (!isNum) { // if wasnt inside while loop
            console.log("Is not numeric")
            //  todo: allow characters and ',' and '.'. Also check for expressions such as '3.2.4'
            if (textElement[i] !== " ") {
                variables += textElement[i]
            }
        }
    };

    variables = sortStringAlphabetically(variables)

    console.log("Coefficients array:")
    console.log(coefficients)

    let resCoef = multiplyNumbersInsideArray(coefficients)

    console.log("Result coefficient: " + resCoef)

    return [resCoef, variables]

}

function parseSingleElementToString(textElement) {
    //  3  a = 3a
    //  3ab dsad s = 3aabdds
    //  2a + 2a =
    let element1Divided1 = divideVariablesAndCoefficient(textElement)

    let coefficient1 = element1Divided1[0]
    let variable1 = element1Divided1[1]

    return coefficient1 + variable1
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

function swap(arr , i1 , j1 , i2,
              j2)
{
    var temp = arr[i1][j1];
    arr[i1][j1] = arr[i2][j2];
    arr[i2][j2] = temp;
    return arr;
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

/**
 * Return empty square matrix
 * @param dim is row and column dimension of matrix
 */
function getEmptySquareMatrix(dim) {
    let resultElements = new Array(dim)
    for (let l = 0; l < dim; l++) {
        resultElements[l].push(new Array(dim))
    }
    return resultElements
}

let dim = 4;
// Function to get cofactor of
// A[p][q] in temp[][]. n is current
// dimension of A[][]
function getCofactor(A,temp,p,q,n)
{
    let i = 0, j = 0;

    // Looping for each element of the matrix
    for (let row = 0; row < n; row++)
    {
        for (let col = 0; col < n; col++)
        {
            // Copying into temporary matrix only those element
            // which are not in given row and column
            if (row != p && col != q)
            {
                temp[i][j++] = A[row][col];

                // Row is filled, so increase row index and
                // reset col index
                if (j == n - 1)
                {
                    j = 0;
                    i++;
                }
            }
        }
    }
}



// Function to get adjoint of A[dim][dim] in adj[dim][dim].
function  adjoint(elements)
{
    let dim = elements.size;
    if (!isMatrixSquare(elements)) {
        throw new DimensionError("Matrix is not square")
    }

    let adj = getEmptyMatrixWithDimension(dim, dim)

    if (dim == 1) {
        adj[0][0] = 1;
        return;
    }

    // temp is used to store cofactors of elements[][]
    let sign = 1;
    let temp = new Array(dim);
    for(let i=0;i<dim;i++) {
        temp[i]=new Array(dim);
    }

    for (let i = 0; i < dim; i++) {
        for (let j = 0; j < dim; j++) {
            // Get cofactor of elements[i][j]
            getCofactor(elements, temp, i, j, dim);

            // sign of adj[j][i] positive if sum of row
            // and column indexes is even.
            sign = ((i + j) % 2 == 0)? 1: -1;

            // Interchanging rows and columns to get the
            // transpose of the cofactor matrix
            adj[j][i] = (sign)*(determinant(temp, dim-1));
        }
    }

    return adj
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
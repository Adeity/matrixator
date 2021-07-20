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
    let numOfRows1 = elements1.size
    let numOfRows2 = elements2.size

    let numOfCols1 = elements1[0].size
    let numOfCols2 = elements2[0].size

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
    let rowDimension = elements.size, columnDimension = elements[0].size
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
}

// This function stores transpose
// of A in B
function transpose(elements) {
    var i, j;

    let rows = elements.size
    let cols = elements[0].size;

    let resultElements = getEmptyMatrixWithDimension(cols, rows)

    for (i = 0; i < cols; i++)
        for (j = 0; j < rows; j++)
            resultElements[i][j] = elements[j][i];
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

// Function to get determinant of matrix
function calculateDeterminant(elements) {
    if (!isMatrixSquare) {
        throw new DimensionError("Cannot calculate a determinant of a non square matrix. Current dimension: " + elements.size + ", " + elements[0].size)
    }

    var num1, num2, det = 1, index,
        total = 1; // Initialize result

    var n = elements.size

    // temporary array for storing row
    var temp = Array(n + 1).fill(0);

    // loop for traversing the diagonal elements
    for (let i = 0; i < n; i++)
    {
        index = i; // initialize the index

        // finding the index which has non zero value
        while (elements[index][i] == 0 && index < n)
        {
            index++;
        }
        if (index == n) // if there is non zero element
        {
            // the determinant of matrix as zero
            continue;
        }
        if (index != i)
        {
            // loop for swaping the diagonal element row
            // and index row
            for (let j = 0; j < n; j++)
            {
                swap(elements, index, j, i, j);
            }
            // determinant sign changes when we shift
            // rows go through determinant properties
            det = parseInt((det * Math.pow(-1, index - i)));
        }

        // storing the values of diagonal row elements
        for (let j = 0; j < n; j++)
        {
            temp[j] = elements[i][j];
        }

        // traversing every row below the diagonal
        // element
        for (let j = i + 1; j < n; j++) {
            num1 = temp[i]; // value of diagonal element
            num2 = elements[j]
                [i]; // value of next row element

            // traversing every column of row
            // and multiplying to every row
            for (let k = 0; k < n; k++)
            {
                // multiplying to make the diagonal
                // element and next row element equal
                elements[j][k] = (num1 * elements[j][k])
                    - (num2 * temp[k]);
            }
            total = total * num1; // Det(kA)=kDet(A);
        }
    }

    // multiplying the diagonal elements to get
    // determinant
    for (let i = 0; i < n; i++) {
        det = det * elements[i][i];
    }
    return (det / total); // Det(kA)/k=Det(A);
}

/**
 * Recursive function for finding determinant of matrix.
 * @param elements must be a square matrix
 * @param n current dimension of elements[][]
 * @returns {number|*}
 */
function determinant(elements,n)
{
    let D = 0; // Initialize result

    // Base case : if matrix contains single element
    if (n == 1)
        return elements[0][0];

    let temp = new Array(dim);// To store cofactors
    for(let i=0;i<dim;i++)
    {
        temp[i]=new Array(dim);
    }

    let sign = 1; // To store sign multiplier

    // Iterate for each element of first row
    for (let f = 0; f < n; f++)
    {
        // Getting Cofactor of elements[0][f]
        getCofactor(elements, temp, 0, f, n);
        D += sign * elements[0][f] * determinant(temp, n - 1);

        // terms are to be added with alternate sign
        sign = -sign;
    }

    return D;
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

// Function to calculate and store inverse, returns false if
// matrix is singular
function inverse(elements) {
    //  determinant is not square
    if (!isMatrixSquare(elements)) {
        throw new NonInvertibleMatrixError("Matrix is not square")
    }

    // Find determinant of elements[][]
    let det = determinant(elements, dim);

    //  determinant is square but singular
    if (det === 0) {
        throw new NonInvertibleMatrixError("Singular matrix, can't find its inverse");
    }

    let adj = adjoint(elements);
    let inverse = getEmptySquareMatrix(dim)

    // Find Inverse using formula "inverse(elements) = adj(elements)/det(elements)"
    for (let i = 0; i < dim; i++)
        for (let j = 0; j < dim; j++)
            inverse[i][j] = adj[i][j]/det;

    return inverse;
}


const calculations =  {add, subtract, multiplyMatrices, inverse, calculateDeterminant, parseSingleElementToString}
export default calculations

/**
 * This function finds a matrix based on its id and adds a row filled with zero element to it
 * @param idMatrix id of matrix
 * @param data with defined matrices
 * @param setData operation to update app state hook
 */
function addRowToMatrix (idMatrix, data, setData) {
    let dataCopy = {...data}
    for (let i = 0; i < data.definedMatrices.length; i++) {
        if (dataCopy.definedMatrices[i].id === idMatrix) {
            //  validation that column dimension doesnt become more than 5
            if (dataCopy.definedMatrices[i].rowDimension === 5 || dataCopy.definedMatrices[i].matrixElements.length === 5) {
                return false
            }
            let row = new Array(dataCopy.definedMatrices[i].columnDimension)
            row.fill(0)
            dataCopy.definedMatrices[i].matrixElements.push(row)
            dataCopy.definedMatrices[i].rowDimension++
            setData(dataCopy)
            break
        }
    }
}

/**
 * This function finds a matrix based on its id and removes a row from it
 * @param idMatrix id of matrix
 * @param data with defined matrices
 * @param setData operation to update app state hook
 */
function removeRowFromMatrix (idMatrix, data, setData) {
    let dataCopy = {...data}
    for (let i = 0; i < data.definedMatrices.length; i++) {
        if (dataCopy.definedMatrices[i].id === idMatrix) {
            //  validation that column dimension doesnt become 0
            if (dataCopy.definedMatrices[i].rowDimension === 1 || dataCopy.definedMatrices[i].matrixElements.length === 1) {
                return false
            }
            dataCopy.definedMatrices[i].matrixElements.pop()
            dataCopy.definedMatrices[i].rowDimension--
            setData(dataCopy)
            break
        }
    }
}

/**
 * This function receives an array of arrays as an input and adds one new zero element to each internal array
 * E.g. [[0, 0], [0, 0]] -> [[0, 0, 0][0, 0, 0]]
 * @param arrayOfArrays
 */
function addZeroElementToEachInternalArray(arrayOfArrays) {
    arrayOfArrays.forEach(array => {
        array.push(0)
    })
}

/**
 * This function receives an array of arrays as an input and removes one element from each internal array
 * E.g. [[0, 0, 0][0, 0, 0]] -> [[0, 0], [0, 0]]
 * @param arrayOfArrays
 */
function removeElementFromEachInternalArray(arrayOfArrays) {
    arrayOfArrays.forEach(array => {
        array.pop()
    })
}

/**
 * Adds a column to each row in a given matrix
 * @param idMatrix id of matrix
 * @param data with defined matrices
 * @param setData operation to modify app state hook
 */
function addColumnToMatrix (idMatrix, data, setData) {
    //  todo: validate

    //  can add column to matrix
    let dataCopy = {...data}
    for (let i = 0; i < data.definedMatrices.length; i++) {
        if (dataCopy.definedMatrices[i].id === idMatrix) {
            //  validation that column dimension doesnt become more than 5
            if (dataCopy.definedMatrices[i].columnDimension === 5 || dataCopy.definedMatrices[i].matrixElements[0].length === 5) {
                return false
            }
            addZeroElementToEachInternalArray(dataCopy.definedMatrices[i].matrixElements)
            dataCopy.definedMatrices[i].columnDimension++
            setData(dataCopy)
            break
        }
    }
}

/**
 * Remove a column from each row in a matrix based on its id
 * @param idMatrix id of matrix
 * @param data with defined matrices
 * @param setData operation to modify app state hook
 */
function removeColumnFromMatrix (idMatrix, data, setData) {
    //  todo: validate

    //  can add column to matrix
    let dataCopy = {...data}
    for (let i = 0; i < data.definedMatrices.length; i++) {
        if (dataCopy.definedMatrices[i].id === idMatrix) {
            //  validation that column dimension doesnt become 0
            if (dataCopy.definedMatrices[i].columnDimension === 1 || dataCopy.definedMatrices[i].matrixElements[0].length === 1) {
                return false
            }
            //  removing column
            removeElementFromEachInternalArray(dataCopy.definedMatrices[i].matrixElements)
            dataCopy.definedMatrices[i].columnDimension--
            setData(dataCopy)
            break
        }
    }
}

function changeElement(idMatrix, data, setData, row, column, value) {
    let dataCopy = {...data}
    for (let i = 0; i < data.definedMatrices.length; i++) {
        if (dataCopy.definedMatrices[i].id === idMatrix) {
            dataCopy.definedMatrices[i].matrixElements[row][column] = value
            setData(dataCopy)
            break
        }
    }
}



export {changeElement, addRowToMatrix, addColumnToMatrix, removeRowFromMatrix, removeColumnFromMatrix}

import { v4 as uuidv4 } from 'uuid';

/**
 * Searches through application data and finds element by name
 * @param name of desired element
 * @return desired element if it exists or null if it doesn't
 */
function searchElementByNameIn (data, name) {
    let resElement = null

    for (let i = 0; i < data.length; i++) {
        if (data[i].name === name) {
            resElement = data[i].rowDimension
            break
        }
    }

    return resElement
}

/**
 * Searches through application data and finds element by ID
 * @param id of desired element
 * @return desired element if it exists or null if it doesn't
 */
function searchElementByIdIn (data, id) {
    let resElement = null

    for (let i = 0; i < data.length; i++) {
        if (data[i].id === id) {
            resElement = data[i]
            break
        }
    }

    return resElement
}

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



export {changeElement, searchElementByIdIn, searchElementByNameIn, addRowToMatrix, addColumnToMatrix, removeRowFromMatrix, removeColumnFromMatrix}
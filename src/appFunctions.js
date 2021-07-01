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

function updateElementWithId(data, element, setData) {
    let elementToChange = searchElementByIdIn(data, element.id)
    data.searchElementByIdIn(data,element.id).name = "karel"
}

function addRowToMatrix (idMatrix, data, setData) {
    let dataCopy = JSON.parse(data)
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

function updateMatrix (matrixToUpdate) {
    //  get copy of application data
    // let appDataCopy = [...applicationData]
    // let updated = false
    // applicationData.definedMatrices.forEach(matrix  => function () {
    //     if (matrix.id === matrixToUpdate.id) {
    //         matrix = matrixToUpdate
    //         updated = true
    //     }
    // })
    // if (updated) {
    //     setApplicationData()
    // }
}

export {searchElementByIdIn, searchElementByNameIn, addRowToMatrix}
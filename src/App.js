import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import {useState} from "react";
import calculations from './Utilities/calculations.js'
import {changeElement, addRowToMatrix, removeRowFromMatrix, addColumnToMatrix, removeColumnFromMatrix} from './Utilities/definitionSectionFunctions'

function App() {
  const initialMatrixDefinitions =
      {
        "definedMatrices":[
          {
            "id": 0,
            "name":"A",
            "rowDimension": 2,
            "columnDimension": 2,
            "matrixElements" : [
                [2, 3], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
                [1, 5]
            ]
          },
          {
            "id": 1,
            "name":"B",
            "rowDimension":2,
            "columnDimension": 2,
            "matrixElements" : [
              [5, 5], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
              [5, 5]
            ]
          }
        ],
      };

  const [applicationData, setApplicationData] = useState(initialMatrixDefinitions); //  defined matrices state
  const [expressionText, setExpressionText] = useState("A x B"); //  defined matrices state
  const [resultMatrix, setResultMatrix] = useState([[1, 2],[1, 2]]) //  result state
  const [parseError, setParseError] = useState("")


  const {add} = calculations
  const {subtract} = calculations
  const {multiplyMatrices} = calculations
  const {inverse} = calculations
  const {determinant} = calculations
  const {rank} = calculations
  const {diagonalize} = calculations
  const {transpose} = calculations

  const addition = function () {
    setParseError("")
    try {
      let resMatrix = add(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
      setResultMatrix(resMatrix)
      setExpressionText("A + B")
    } catch (e) {
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  const subtraction = function () {
    setParseError("")
    try {
      let resMatrix = subtract(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
      setResultMatrix(resMatrix)
      setExpressionText("A - B")
    } catch (e) {
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  const multiplication = function () {
    setParseError("")
    try {
      let resMatrix = multiplyMatrices(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
      setResultMatrix(resMatrix)
      setExpressionText("A * B")
    } catch (e) {
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  const inverseMatrix = function (matrixName) {
    console.log("Matrix name in inverse fce:")
    console.log(matrixName)
    setParseError("")
    try {
      let resMatrix;
      if (matrixName === "A") {
        resMatrix = inverse(applicationData.definedMatrices[0].matrixElements)
      } else if (matrixName === "B") {
        resMatrix = inverse(applicationData.definedMatrices[1].matrixElements)
      }

      if (resMatrix !== null) {
        setResultMatrix(resMatrix)
        setExpressionText("inverse ("+matrixName+")")
      }
    } catch (e) {
      console.log(e)
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  const calculate = function (matrixName, callbackFce, expressionText) {
    setParseError("")
    let res
    try {
      if (matrixName !== undefined) {
        let inputMatrix = getMatrix(matrixName)
        res = callbackFce(inputMatrix.matrixElements)
      }
      else {
        res = callbackFce(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
      }
      if (res !== null) {
        setResultMatrix(res)
        setExpressionText("determinant ("+matrixName+")")
      }
    } catch (e) {
      console.log(e)
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  const calculateDeterminant = function (matrixName) {
    setParseError("")
    try {
      let res
      let inputMatrix = getMatrix(matrixName)
      res = determinant(inputMatrix.matrixElements)

      if (res !== null) {
        setResultMatrix(res)
        setExpressionText("determinant ("+matrixName+")")
      }
    } catch (e) {
      console.log(e)
      setParseError(e.message)
      setResultMatrix([[]])
      setExpressionText("")
    }
  }

  const calculateRank = function (matrixName) {
    let inputMatrix = getMatrix(matrixName)
    return rank(inputMatrix.matrixElements)
  }

  const diagonalizeMatrix = function (matrixName) {
    let inputMatrix = getMatrix(matrixName)
    return diagonalize(inputMatrix.matrixElements)
  }

  const transposeMatrix = function(matrixName) {
    let inputMatrix = getMatrix(matrixName)
    return transpose(inputMatrix.matrixElements)
  }

  const calculationsList = {transposeMatrix, addition, subtraction, multiplication, inverseMatrix, calculateDeterminant, calculateRank, diagonalizeMatrix}

  /**
   * Functions for Definition Section such as dimension settings of individual matrices and removal of a matrix.
   * These functions are:
   *  addRowToMatrix - add one row full of zero elements to a specific matrix;
   *  removeRowFromMatrix - remove the most down row from a specific matrix;
   *  addColumnToMatrix - add one column full of zero elements to a specific matrix;
   *  removeColumnFromMatrix - remove the most right column from a specific matrix;
   *  deleteMatrix - deletes a specific matrix from the application;
   *  addNewMatrix - adds a new matrix to defined matrices;
   */
  const definitionSectionFunctions = {
    addRowToMatrix: function(idMatrix) {
      addRowToMatrix(idMatrix, applicationData, setApplicationData)
    },

    removeRowFromMatrix: function(idMatrix) {
      removeRowFromMatrix(idMatrix, applicationData, setApplicationData)
    },

    addColumnToMatrix: function(idMatrix) {
      addColumnToMatrix(idMatrix, applicationData, setApplicationData)
    },

    removeColumnFromMatrix: function(idMatrix) {
      removeColumnFromMatrix(idMatrix, applicationData, setApplicationData)
    },
    changeElementInMatrix: function (idMatrix, row, column, value) {
      changeElement(idMatrix, applicationData, setApplicationData, row, column, value)
    }
  };

  const getMatrixA = function () {
    return applicationData.definedMatrices[0]
  }

  const getMatrixB = function () {
    return applicationData.definedMatrices[1]
  }

  const getMatrix = function (matrixName) {
    if (matrixName === "A") {
      return getMatrixA()
    }
    else if (matrixName === "B") {
      return getMatrixB()
    }
    else {
      return false
    }
  }

  const matrixGetters = {getMatrixA, getMatrixB}


  return (
    <Homepage
        initialData = {applicationData}
        expressionText = {expressionText}
        resultMatrix = {resultMatrix}
        calculations = {calculationsList}
        definitionSectionFunctions = {definitionSectionFunctions}
        matrixGetters = {matrixGetters}
        parseError = {parseError}
    />
  );
};




export default App;
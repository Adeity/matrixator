import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import {useState} from "react";
import calculations from './Utilities/calculations.js'
import {changeElement, addRowToMatrix, removeRowFromMatrix, addColumnToMatrix, removeColumnFromMatrix} from './Utilities/definitionSectionFunctions'



const homepage = <Homepage />

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

  const addition = function () {
    setParseError("")
    let resMatrix = add(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
    setResultMatrix(resMatrix)
    setExpressionText("A + B")
  }

  const subtraction = function () {
    setParseError("")
    let resMatrix = subtract(applicationData.definedMatrices[0].matrixElements, applicationData.definedMatrices[1].matrixElements)
    setResultMatrix(resMatrix)
    setExpressionText("A - B")
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

  const matrixGetters = {getMatrixA, getMatrixB}

  const calculationsList = {addition, subtraction, multiplication}

  /**
   * A + B * C = (A+B) * C
   * A + BC = A + (B * C)
   *
   */

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
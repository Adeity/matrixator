import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import {useState} from "react";
import calculations from './Utilities/calculations.js'

const homepage = <Homepage />

function App() {

  const initialTestDefinitions =
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
            "id": 0,
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

  const [initialData, setDefinedMatrices] = useState(initialTestDefinitions); //  defined matrices state
  const [expressionText, setExpressionText] = useState("A x B"); //  defined matrices state
  const [resultMatrix, setResultMatrix] = useState([[1, 2],[1, 2]]) //  result state


  const {add} = calculations
  const {subtract} = calculations
  const {multiplyMatrices} = calculations

  const addition = function () {
    let resMatrix = add(initialData.definedMatrices[0].matrixElements, initialData.definedMatrices[1].matrixElements)
    setResultMatrix(resMatrix)
  }

  const subtraction = function () {
    let resMatrix = subtract(initialData.definedMatrices[0].matrixElements, initialData.definedMatrices[1].matrixElements)
    setResultMatrix(resMatrix)
  }

  const multiplication = function () {
    let resMatrix = multiplyMatrices(initialData.definedMatrices[0].matrixElements, initialData.definedMatrices[1].matrixElements)
    setResultMatrix(resMatrix)
  }


  const calculationsList = {addition, subtraction, multiplication}

  /**
   * A + B * C = (A+B) * C
   * A + BC = A + (B * C)
   *
   */

  return (
    <Homepage
        initialData = {initialData}
        expressionText = {expressionText}
        resultMatrix = {resultMatrix}
        calculations = {calculationsList}
    />
  );
};

export default App;
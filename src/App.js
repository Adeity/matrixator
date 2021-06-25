import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import {useState} from "react";

const homepage = <Homepage />

function App() {

  const initialTestDefinitions =
      {
        "operations" : ["+", "-", "*", "-1", "det", "rank", "diag"],
        "definedMatrices":[
          {
            "id": 0,
            "name":"A",
            "rowDimension":2,
            "columnDimension": 2,
            "matrixElements" : [
                [2, 3], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
                ["a", 5]
            ]
          },
          {
            "id": 0,
            "name":"B",
            "rowDimension":2,
            "columnDimension": 2,
            "matrixElements" : [
              [0, 0], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
              [0, 0]
            ]
          }
        ],
      };



  console.log(initialTestDefinitions)
  console.log(initialTestDefinitions.definedMatrices)
  console.log(initialTestDefinitions.definedMatrices[0])
  console.log(initialTestDefinitions.definedMatrices[1].name)



  const [initialData, setDefinedMatrices] = useState(initialTestDefinitions); //  defined matrices state
  const [expressionText, setExpressionText] = useState("A x B"); //  defined matrices state

  const [resultMatrix, setResultMatrix] = useState(null) //  result state



  return (
    <Homepage
        initialData = {initialData}
        expressionText = {expressionText}
    />
  );
};



export default App;

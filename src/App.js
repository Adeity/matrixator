import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import {useState} from "react";

const homepage = <Homepage />

function App() {
  const initialTestDefinitions =
      {
        "definedMatrices":[
          {
            "id": 0,
            "name":"A",
            "rowDimension":2,
            "columnDimension": 2,
            "matrixElements" : [
                [0, 0], //  matrixElements[0] = [1, 0];  matrixElements[0] = [1, 0] + [0]
                [0, 0]
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



  const [definedMatrices, setDefinedMatrices] = useState(initialTestDefinitions); //  defined matrices state
  const [resultMatrix, setResultMatrix] = useState(null) //  result state



  return (
    <Homepage
        definedMatrices = {definedMatrices.definedMatrices}
    />
  );
};



export default App;

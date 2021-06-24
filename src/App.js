import logo from './logo.svg';
import './App.css';
import Homepage from "./Homepage";
import {useState} from "react";

const homepage = <Homepage />

function App() {
  const initialTestDefinitions = [
    [
      "A",
      "3",
      "3",
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      "B",
      "3",
      "3",
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3]
    ]
  ];

  const [definedMatrices, setDefinedMatrices] = useState(initialTestDefinitions);


  return (
    <Homepage definedMatrices = {definedMatrices} setDefinedMatrices = {setDefinedMatrices}/>
  );
};



export default App;

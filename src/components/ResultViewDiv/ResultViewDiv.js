import SaveMatrixButton from '../Buttons/SaveMatrixButton'
import Fieldset from "../Buttons/Fieldset";
import translateMatrixElementsToMathJax from '../../Utilities/Utilities'
import {useState, useEffect} from "react";
import Matrix from "../Matrix";


function ResultViewDiv(props) {
    function matrixElementsView (elements) {
        const h = elements.map((row) => {
            row.map((element) => {
                return (
                    "<span>{element}</span>"
                )
            })
            return <div>{row}</div>
        })
        return h
    }

    function resultToView (resultMatrix) {
        const result = resultMatrix

        if (typeof result === 'number') {
            return result;
        }
        else if (typeof result === 'string') {
            return result;
        }
        else {
            return (<Matrix elements = {resultMatrix} disabled = {true} />)
        }
    };

    const [operationView, setOperationView] = useState(""); //  defined matrices state


    function expressionToView(){
        var result = []
        console.log("Reading " + props.expressionText)
        for (let i = 0; i < props.expressionText.length; i++) {
            const symbol = props.expressionText[i]

            if (symbol === " ") {
                continue
            }

            console.log("Current symbol:" + symbol)

            if (isOperation(symbol)) {
                console.log("Symbol is operation")
                result.push(symbol)
            } else {
                //  this can be done only if defined matrices are limited to 2 matrices maximum
                let matrix = null
                if (symbol === "A") {
                    matrix = props.definedMatrices[0]
                } else if (symbol === "B") {
                    matrix = props.definedMatrices[1]
                }
                if (matrix !== null) {
                    console.log("Matrix found")
                    result.push(<Matrix elements = {matrix.matrixElements} disabled = {true} />)
                }
                else {
                    console.log("Matrix is null")
                }
            };
        };
        console.log("Result of resultToView: " + result)
        return result;
    }





    function isOperation(o) {
        const listOfOperations = ["+", "-", "x", "*"];
        if (listOfOperations.includes(o)) {
            return true
        }
        else {
            return false
        }
    }

    useEffect(() => {
        // MathJax.Hub.Queue(["Typeset",MathJax.Hub,root]);
    });


    let resultMatrix = props.resultMatrix

    return (
        <div className={"result-view-div"}>
            <h2>Result</h2>
            <Fieldset>
                {expressionToView()}
                =
                {resultToView(resultMatrix)}
            </Fieldset>
        </div>

    )
}

export default ResultViewDiv
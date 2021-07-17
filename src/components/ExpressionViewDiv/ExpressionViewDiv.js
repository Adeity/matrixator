import Fieldset from "../Buttons/Fieldset";
import {useState} from "react";
import EqualsButton from "../Buttons/EqualsButton";
import translateMatrixElementsToMathJax from '../../Utilities/Utilities'


function ExpressionViewDiv(props) {
    const view = props.getViewOfExpression

    console.log(props.getMatrixByName("A"))

    const [operationView, setOperationView] = useState(""); //  defined matrices state


    function isOperation(o) {
        const listOfOperations = ["+", "-", "x"];
        if (listOfOperations.includes(o)) {
            return true
        }
        else {
            return false
        }
    }
    //
    // function writeToView () {
    //     forEach(symbol in expressionText) {
    //         if (isOperation()) {
    //             setOperationView(operationView + symbol)
    //         }
    //         else {
    //             const matrix = props.getMatrixByName(symbol)
    //             setOperationView(operationView + matrix)
    //         }
    //     }
    // }
    //
    function toView(){
        var result = ""
        console.log("Reading " + props.expressionText)
        for (let i = 0; i < props.expressionText.length; i++) {
            const symbol = props.expressionText[i]

            if (symbol === " ") {
                continue
            }

            console.log("Current symbol:" + symbol)

            if (isOperation(symbol)) {
                console.log("Symbol is operation")
                result += symbol
            } else {
                let matrix = props.getMatrixByName(symbol)
                if (matrix !== null) {
                    console.log("Matrix found")
                    result += translateMatrixElementsToMathJax(matrix.matrixElements)
                }
                else {
                    console.log("Matrix is null")
                }
            };
        };
        console.log("Result of toView: " + result)
        return result;
    }

    return (
        <div className={"expression-view-div"}>
            <h2>Expression view</h2>
            <Fieldset>
                {toView()}
            </Fieldset>
            <EqualsButton/>
        </div>
    )
}

export default ExpressionViewDiv
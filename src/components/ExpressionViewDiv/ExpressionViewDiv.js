import Fieldset from "../Buttons/Fieldset";
import {useState} from "react";


function ExpressionViewDiv(props) {
    const view = props.getViewOfExpression

    console.log(props.getMatrixByName("A"))

    const [operationView, setOperationView] = useState(""); //  defined matrices state


    function isOperation(o) {
        const listOfOperations = ["+", "-"];
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

            console.log("Current symbol:" + symbol)

            if (isOperation(symbol)) {
                console.log("Symbol is operation")
            } else {
                let matrix = props.getMatrixByName(symbol)
                if (matrix !== null) {
                    console.log("Matrix found")
                    result += translateMatrixElementsToMathjax(matrix.matrixElements)
                }
                else {
                    console.log("Matrix is null")
                }
            };
        };
        console.log("Result of toView: " + result)
        return result;
    }

    function translateMatrixElementsToMathjax(elements) {
        var result = "$$\\begin{pmatrix}"
        var i = 0;

        console.log(elements)

        elements.forEach((row) => {
            var k = 0
            row.forEach((element) => {
                result += element
                if (k !== row.length - 1) {
                    result += "&"
                }
                k++;
            })
            if (i === elements.length - 1) {
                result += "\\end{pmatrix}$$" //  \\\
            }
            else {
                result += "\\\\" //  \\\
            }
            i++;
        })
        console.log(result)
        return result;
    }

    //  &#123 = {
    //  &#125 = }

    return (
        <div>
            <h2>Expression view</h2>
            <Fieldset>
                $$\begin&#123;pmatrix&#125;a & b & d\\\ c & d & f \\\ y & x & c \end&#123;pmatrix&#125;$$


                +
                $$\begin&#123;pmatrix&#125;a & b & d\\\ c & d & f \\\ y & x & c \end&#123;pmatrix&#125;$$
                {toView()}
            </Fieldset>
        </div>
    )
}

export default ExpressionViewDiv
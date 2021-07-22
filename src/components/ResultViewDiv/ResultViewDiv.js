import Fieldset from "../Buttons/Fieldset";
import {useState, useEffect} from "react";
import Matrix from "../Matrix";
import React from "react";


class ResultViewDiv extends React.Component {

    resultToView (resultMatrix) {
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

    // expressionToView(){
    //     //  AB operations are: A x B, A + B, A - B
    //     //  S (single operations are:): det(A), det(B), T(A), T(B),...
    //     //  Syntax of expression text:
    //     //    AB operation: A x B
    //     //    AB operation: A + B
    //     //    S operation: det A
    //     //    S operation: T B
    //     //    S operation : inv A
    //     //    S operation:  inv B
    //     var result = []
    //     console.log("Reading " + this.props.expressionText)
    //     for (let i = 0; i < this.props.expressionText.length; i++) {
    //         const symbol = this.props.expressionText[i]
    //
    //         if (symbol === " ") {
    //             continue
    //         }
    //
    //         console.log("Current symbol:" + symbol)
    //
    //         if (this.isOperation(symbol)) {
    //             console.log("Symbol is operation")
    //             result.push(symbol)
    //         } else {
    //             //  this can be done only if defined matrices are limited to 2 matrices maximum
    //             let matrix = null
    //             if (symbol === "A") {
    //                 matrix = this.props.matrixGetters.getMatrixA()
    //             } else if (symbol === "B") {
    //                 matrix = this.props.matrixGetters.getMatrixB()
    //             }
    //             if (matrix !== null) {
    //                 console.log("Matrix found")
    //                 result.push(<Matrix key = {symbol} elements = {matrix.matrixElements} disabled = {true} />)
    //             }
    //             else {
    //                 console.log("Matrix is null")
    //             }
    //         };
    //     };
    //     console.log("Result of resultToView: " + result)
    //     return result;
    // }

    buildABExpression(operand) {
        let result = []

        let matrixAComponent = <Matrix key = {"resultA"} elements = {this.props.matrixGetters.getMatrixA().matrixElements} disabled = {true} />
        let matrixBComponent = <Matrix key = {"resultB"} elements = {this.props.matrixGetters.getMatrixB().matrixElements} disabled = {true} />


        result.push("A " + operand + " B = ")
        result.push(matrixAComponent)
        result.push(" " + operand + " ")
        result.push(matrixBComponent)
        result.push(" = ")
        return result
    }

    buildSexpression(operand, matrixName) {
        let result = []

        let matrix = (matrixName === "A") ? this.props.matrixGetters.getMatrixA() : this.props.matrixGetters.getMatrixB();
        let matrixComponent = <Matrix key = {"result"+matrixName} elements = {matrix.matrixElements} disabled = {true} />

        result.push(operand + "(" + matrixName + ") = ")
        result.push(operand + "(")
        result.push(matrixComponent)
        result.push(")")
        result.push(" = ")

        return result
    }

    expressionToView(){
        //  AB operations are: A x B, A + B, A - B
        //  S (single operations are:): det(A), det(B), T(A), T(B),...
        //  Syntax of expression text:
        //    AB operation: x
        //    AB operation: +
        //    S operation: det A
        //    S operation: T B
        //    S operation: inv A
        //    S operation:  inv B
        let result = []
        let input = this.props.expressionText.split(' ')

        let operationType = input[0]
        let operand = input[2]

        if (operationType === "AB") {
            return this.buildABExpression(operand)
        }
        else if (operationType === "S") {
            let matrixName = input[3]
            return this.buildSexpression(operand, matrixName)
        }
        else {
            return null
        }
    }

    isOperation(o) {
        const listOfOperations = ["+", "-", "x", "*"];
        if (listOfOperations.includes(o)) {
            return true
        }
        else {
            return false
        }
    }

    render() {
        const error = this.props.parseError !== ""
        let output
        if (error) {
            output = this.props.parseError
        }
        else {
            output = <div>
                        {this.expressionToView()}
                         {this.resultToView(this.props.resultMatrix)}
                    </div>
        }
        return (
            <div className={"result-view-div"}>
                <h2>Result</h2>
                {output}
            </div>
        )
    }

}

export default ResultViewDiv
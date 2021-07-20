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

    expressionToView(){
        var result = []
        console.log("Reading " + this.props.expressionText)
        for (let i = 0; i < this.props.expressionText.length; i++) {
            const symbol = this.props.expressionText[i]

            if (symbol === " ") {
                continue
            }

            console.log("Current symbol:" + symbol)

            if (this.isOperation(symbol)) {
                console.log("Symbol is operation")
                result.push(symbol)
            } else {
                //  this can be done only if defined matrices are limited to 2 matrices maximum
                let matrix = null
                if (symbol === "A") {
                    matrix = this.props.matrixGetters.getMatrixA()
                } else if (symbol === "B") {
                    matrix = this.props.matrixGetters.getMatrixB()
                }
                if (matrix !== null) {
                    console.log("Matrix found")
                    result.push(<Matrix key = {symbol} elements = {matrix.matrixElements} disabled = {true} />)
                }
                else {
                    console.log("Matrix is null")
                }
            };
        };
        console.log("Result of resultToView: " + result)
        return result;
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
                {"="}
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
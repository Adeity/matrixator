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
            return (<Matrix elements = {resultMatrix} disabled = {true} additionalStyle = {"result"} />)
        }
    };

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
            return "Choose an operation to see result"
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
            output = <div className={"result-view-div"}>
                        {this.expressionToView()}
                         {this.resultToView(this.props.resultMatrix)}
                    </div>
        }
        return (
            <div>
                <h4>Result</h4>
                {output}
            </div>
        )
    }

}

export default ResultViewDiv
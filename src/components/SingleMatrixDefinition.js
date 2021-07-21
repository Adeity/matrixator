import Button from "./Buttons/Button";

function SingleMatrixDefinition(props){
    //  if matrix is not square, some matrix operations must be disabled
    const disabled = (props.rowDimension === props.columnDimension) ? "" : "disabled";

    console.log("nonSquare is: ")
    console.log(disabled)

    console.log("Matrix name in singleMatrixDefinition:")
    console.log(props.matrixName)

    return(
        <div className={"single-matrix-definition"}>
            <span>Matrix {props.matrixName}</span>
            {props.deleteMatrixButton}
            {props.matrix}
            {props.dimensionSettings}
            <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.inverseMatrix(props.matrixName)} disabled={disabled}>-1</button>
            <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.calculateDeterminant(props.matrixName)} disabled={disabled}>det</button>
            <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.calculateRank(props.matrixName)} disabled={disabled}>rank</button>
            <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.diagonalizeMatrix(props.matrixName)} disabled={disabled}>diag</button>

        </div>
    )
}

export default SingleMatrixDefinition;
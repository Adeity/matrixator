import Button from "./Buttons/Button";

function SingleMatrixDefinition(props){
    //  if matrix is not square, some matrix operations must be disabled
    const disabled = (props.rowDimension === props.columnDimension) ? "" : "disabled";

    console.log("nonSquare is: ")
    console.log(disabled)

    return(
        <div className={"single-matrix-definition"}>
            {props.matrixName}
            {props.deleteMatrixButton}
            {props.matrix}
            {props.dimensionSettings}
            <Button value = {"-1"} onClick={props.calculations.inverse} disabled={disabled}/>
            <Button value = {"det"} onClick={props.calculations.determinant} disabled={disabled}/>
            <Button value = {"rank"} onClick={props.calculations.rank} disabled={disabled}/>
            <Button value = {"diag"} onClick={props.calculations.diagonalize} disabled={disabled}/>
        </div>
    )
}

export default SingleMatrixDefinition;
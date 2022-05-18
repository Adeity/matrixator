import {ButtonGroup, Card} from "react-bootstrap";
function SingleMatrixDefinition(props){
    //  if matrix is not square, some matrix operations must be disabled
    const disabled = (props.rowDimension === props.columnDimension) ? "" : "disabled";

    console.log("nonSquare is: ")
    console.log(disabled)

    console.log("Matrix name in singleMatrixDefinition:")
    console.log(props.matrixName)

    return(
        <Card className={"single-matrix-definition"}>
            <Card.Header>
                <span className={"matrix-name"}>Matrix {props.matrixName}</span>
                {props.dimensionSettings}
            </Card.Header>
            <Card.Body className={"matrix-elements"}>
                {props.matrix}
            </Card.Body>
            <Card.Footer className={"d-flex justify-content-center"}>
                <ButtonGroup>
                    <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.inverseMatrix(props.matrixName)} disabled={disabled}>-1</button>
                    <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.calculateDeterminant(props.matrixName)} disabled={disabled}>det</button>
                    <button className={"btn btn-primary " + props.isDisabled} onClick={() => props.calculations.transposeMatrix(props.matrixName)} disabled={disabled}>T</button>
                </ButtonGroup>
            </Card.Footer>
        </Card>
    )
}

export default SingleMatrixDefinition;
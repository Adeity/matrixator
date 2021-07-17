import DeleteMatrixButton from './Buttons/DeleteMatrixButton'
import MatrixNameTextArea from './Fields/MatrixNameTextArea'
import Matrix from './Matrix'
import DimensionSettings from './DimensionSettings'
import Button from "./Buttons/Button";
import Fieldset from "./Buttons/Fieldset";

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
            <Button value = {"-1"} onClick={props.calculations.inverse} isDisabled={disabled}/>
            <Button value = {"det"} onClick={props.calculations.determinant} isDisabled={disabled}/>
            <Button value = {"rank"} onClick={props.calculations.rank} isDisabled={disabled}/>
            <Button value = {"diag"} onClick={props.calculations.diagonalize} isDisabled={disabled}/>
        </div>
    )
}

export default SingleMatrixDefinition;
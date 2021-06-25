import DeleteMatrixButton from './Buttons/DeleteMatrixButton'
import MatrixNameTextArea from './Fields/MatrixNameTextArea'
import Matrix from './Matrix'
import DimensionSettings from './DimensionSettings'

function SingleMatrixDefinition(props){
    return(
        <div>
            {props.matrixName}
            {props.deleteMatrixButton}
            {props.matrix}
            {props.dimensionSettings}
        </div>
    )
}

export default SingleMatrixDefinition;
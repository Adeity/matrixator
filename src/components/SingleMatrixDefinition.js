import DeleteMatrixButton from './Buttons/DeleteMatrixButton'
import MatrixNameTextArea from './Fields/MatrixNameTextArea'
import Matrix from './Matrix'
import DimensionSettings from './DimensionSettings'

function SingleMatrixDefinition(props){

    const name = props.matrix[0];

    return(
        <div>
            <MatrixNameTextArea name={name} />
            {/*<Matrix />*/}
            <DeleteMatrixButton />
            {/*<DimensionSettings />*/}

        </div>
    )

}

export default SingleMatrixDefinition;
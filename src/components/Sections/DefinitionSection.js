import SingleMatrixDefinition from '../SingleMatrixDefinition'
import AddMatrixButton from '../Buttons/AddMatrixButton'
import DimensionSettings from '../DimensionSettings'
import Matrix from '../Matrix'
import MatrixNameTextArea from "../Fields/MatrixNameTextArea";
import DeleteMatrixButton from "../Buttons/DeleteMatrixButton";


function DefinitionSection(props){

    const inputDefinitions = props.definedMatrices;
    const definitions = inputDefinitions.map((matrix, index) =>
        <SingleMatrixDefinition
            matrixName = {
                <MatrixNameTextArea name = {matrix.name} id = {matrix.id} />
            }
            matrix={
                <Matrix elements = {matrix.matrixElements} id = {matrix.id} />
            }
            dimensionSettings={
                <DimensionSettings rowDimension = {matrix.rowDimension} columnDimension = {matrix.columnDimension} id = {matrix.id}/>
            }
            deleteMatrixButton = {
                <DeleteMatrixButton id = {matrix.id}/>
            }
        />
    );

    const addMatrixButton = <AddMatrixButton />

    return(
        <div>
            {definitions}
            {addMatrixButton}
        </div>
    )

}

export default DefinitionSection;
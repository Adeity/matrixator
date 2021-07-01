import SingleMatrixDefinition from '../SingleMatrixDefinition'
import AddMatrixButton from '../Buttons/AddMatrixButton'
import DimensionSettings from '../DimensionSettings'
import Matrix from '../Matrix'
import MatrixNameTextArea from "../Fields/MatrixNameTextArea";
import DeleteMatrixButton from "../Buttons/DeleteMatrixButton";


function DefinitionSection(props){

    const inputDefinitions = props.definedMatrices;
    const definitions = inputDefinitions.map((matrix, index) =>
        <SingleMatrixDefinition key = {"smd"+index}
            matrixName = {
                <MatrixNameTextArea key = {"mnta"+index} name = {matrix.name} id = {matrix.id} />
            }
            matrix={
                <Matrix key = {"m"+index} elements = {matrix.matrixElements} id = {matrix.id} />
            }
            dimensionSettings={
                <DimensionSettings key = {"ds"+index} rowDimension = {matrix.rowDimension} columnDimension = {matrix.columnDimension} id = {matrix.id}/>
            }
            deleteMatrixButton = {
                <DeleteMatrixButton key = {"dmb"+index} id = {matrix.id}/>
            }
        />
    );

    const addMatrixButton = <AddMatrixButton />

    return(
        <div>
            <h1>Define matrices</h1>
            {definitions}
            {addMatrixButton}
        </div>
    )
};

export default DefinitionSection;
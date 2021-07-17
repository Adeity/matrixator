import SingleMatrixDefinition from '../SingleMatrixDefinition'
import AddMatrixButton from '../Buttons/AddMatrixButton'
import DimensionSettings from '../DimensionSettings'
import Matrix from '../Matrix'
import MatrixNameTextArea from "../Fields/MatrixNameTextArea";
import DeleteMatrixButton from "../Buttons/DeleteMatrixButton";
import Button from "../Buttons/Button";
import Fieldset from "../Buttons/Fieldset";


function DefinitionSection(props){
    //  SKills: ZAJEM UCIT SE NOVE VECI
        // Vitam zmeny
    const inputDefinitions = props.definedMatrices;
    const definitions = inputDefinitions.map((matrix, index) =>
        <SingleMatrixDefinition
            class = {"single-matrix-definition"}
            key = {"smd"+index}
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

    const matrixAData = props.definedMatrices[0]
    const matrixBData = props.definedMatrices[1]


    const matrixA = <SingleMatrixDefinition
        calculations = {props.calculations}
        class = {"single-matrix-definition"}
        key = {"smdA"}
        matrixName = {
            <MatrixNameTextArea key = {"mntaA"} name = {matrixAData.name} id = {matrixAData.id} />
        }
        matrix={
            <Matrix key = {"m"+matrixAData.id} elements = {matrixAData.matrixElements} id = {matrixAData.id} />
        }
        dimensionSettings={
            <DimensionSettings key = {"ds"+matrixAData.id} rowDimension = {matrixAData.rowDimension} columnDimension = {matrixAData.columnDimension} id = {matrixAData.id}/>
        }
        deleteMatrixButton = {
            <DeleteMatrixButton key = {"dmb"+matrixAData.id} id = {matrixAData.id}/>
        }
    />

    const matrixB = <SingleMatrixDefinition
        calculations = {props.calculations}
        class = {"single-matrix-definition"}
        key = {"smdB"}
        matrixName = {
            <MatrixNameTextArea key = {"mntaB"} name = {matrixBData.name} id = {matrixBData.id} />
        }
        matrix={
            <Matrix key = {"m"+matrixBData.id} elements = {matrixBData.matrixElements} id = {matrixBData.id} />
        }
        dimensionSettings={
            <DimensionSettings key = {"ds"+matrixBData.id} rowDimension = {matrixBData.rowDimension} columnDimension = {matrixBData.columnDimension} id = {matrixBData.id}/>
        }
        deleteMatrixButton = {
            <DeleteMatrixButton key = {"dmb"+matrixBData.id} id = {matrixBData.id}/>
        }
    />

    const addMatrixButton = <AddMatrixButton />

    return(
        <div className={"definition-section"}>
            <h1>Define matrices</h1>
            <div className={"d-flex justify-content-center"}>
                {matrixA}
                <div className={"d-flex flex-wrap align-items-center"}>
                    <Button value = {"+"} handleClick = {props.calculations.addition}/>
                    <Button value = {"-"} handleClick = {props.calculations.subtraction}/>
                    <Button value = {"*"} handleClick = {props.calculations.multiplication}/>
                </div>
                {matrixB}
            </div>
            {/*{addMatrixButton}*/}
        </div>
    )
};

export default DefinitionSection;
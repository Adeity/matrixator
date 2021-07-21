import SingleMatrixDefinition from '../SingleMatrixDefinition'
import DimensionSettings from '../DimensionSettings'
import Matrix from '../Matrix'
import Button from "../Buttons/Button";


function DefinitionSection(props){
    const matrixAData = props.definedMatrices[0]
    const matrixBData = props.definedMatrices[1]

    console.log("MatrixAData elements:")
    console.log(matrixAData.matrixElements)

    console.log("MatrixBData elements:")
    console.log(matrixBData.matrixElements)



    const matrixA = <SingleMatrixDefinition
        calculations = {props.calculations}
        class = {"single-matrix-definition"}
        key = {"smdA"}
        matrixName = {matrixAData.name}
        matrix={
            <Matrix functions = {props.definitionSectionFunctions} key = {"m"+matrixAData.id} elements = {matrixAData.matrixElements} id = {matrixAData.id} />
        }
        dimensionSettings={
            <DimensionSettings functions = {props.definitionSectionFunctions} key = {"ds"+matrixAData.id} rowDimension = {matrixAData.rowDimension} columnDimension = {matrixAData.columnDimension} id = {matrixAData.id}/>
        }
    />

    const matrixB = <SingleMatrixDefinition
        calculations = {props.calculations}
        class = {"single-matrix-definition"}
        key = {"smdB"}
        matrixName = {matrixBData.name}
        matrix={
            <Matrix functions = {props.definitionSectionFunctions} key = {"m"+matrixBData.id} elements = {matrixBData.matrixElements} id = {matrixBData.id} />
        }
        dimensionSettings={
            <DimensionSettings functions = {props.definitionSectionFunctions} key = {"ds"+matrixBData.id} rowDimension = {matrixBData.rowDimension} columnDimension = {matrixBData.columnDimension} id = {matrixBData.id}/>
        }
    />

    return(
        <div className={"definition-section"}>
            <h1>Define matrices</h1>
            <div className={"d-flex justify-content-center"}>
                {matrixA}
                <div className={"d-flex flex-wrap align-items-center"}>
                    <Button value = {"+"} handleClick = {props.calculations.addition}/>
                    <Button value = {"-"} handleClick = {props.calculations.subtraction}/>
                    <Button value = {"*"} handleClick = {props.calculations.multiplication}/>
                    <Button value = {"dot"} handleClick = {props.calculations.calculateDot}/>
                </div>
                {matrixB}
            </div>
        </div>
    )
};

export default DefinitionSection;
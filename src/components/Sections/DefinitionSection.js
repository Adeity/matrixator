import SingleMatrixDefinition from '../SingleMatrixDefinition'
import AddMatrixButton from '../Buttons/AddMatrixButton'


function DefinitionSection(props){

    // {
    //     {
    //         name: "A",
    //         rowDimension: "3",
    //         columntDimension: "3"
    //         {1, 2, 3},
    //         {1, 2, 3},
    //         {1, 2, 3},
    //     },
    //     {
    //         {},
    //         {},
    //         {}
    //     }
    // }

    const inputDefinitions = props.definedMatrices;
    const definitions = inputDefinitions.map((matrix, index) =>
        <SingleMatrixDefinition matrix={matrix} />
    );

    return(
        <div>
            {definitions}
        </div>

    )

}

export default DefinitionSection;
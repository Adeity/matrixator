import Button from "../Buttons/Button";
import Fieldset from "../Buttons/Fieldset";

function DefinedMatricesDiv(props) {
    //  props.matrices = ["A", "B", "C"]
    const buttons = props.namesOfMatrices.map((matrixName) =>
        <Button value = {matrixName}/>
    );

    return (
        <div className={"defined-matrices-div"}>
            <h2>Defined matrices:</h2>
            <Fieldset>
                {buttons}
            </Fieldset>
        </div>
    )
}

export default DefinedMatricesDiv;
import Fieldset from "../Buttons/Fieldset";
import Button from "../Buttons/Button";

function OperationsDiv(props) {
    const buttons = props.listOfOperations.map((operation) =>
        <Button value = {operation}/>
    );

    return (
        <div>
            <h2>Operations</h2>
            <Fieldset>
                {buttons}
            </Fieldset>
        </div>
    )
}

export default OperationsDiv
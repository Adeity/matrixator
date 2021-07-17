import Fieldset from "../Buttons/Fieldset";
import Button from "../Buttons/Button";

function OperationsDiv(props) {

    return (
        <div className={"operations-div"}>
            <h2>Operations</h2>
            <Fieldset>
                <Button value = {"-1"}/>
                <Button value = {"det"}/>
                <Button value = {"rank"}/>
                <Button value = {"diag"}/>
            </Fieldset>
        </div>
    )
};

export default OperationsDiv
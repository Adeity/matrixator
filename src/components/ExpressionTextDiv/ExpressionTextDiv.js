import Fieldset from "../Buttons/Fieldset";
import BackspaceButton from "../Buttons/BackspaceButton";

function ExpressionTextDiv(props) {
    return (
        <div>
            <h2>Expression</h2>
            <Fieldset>
                <span>{props.expressionText}</span>
            </Fieldset>
            <BackspaceButton />
        </div>
    )

}

export default ExpressionTextDiv
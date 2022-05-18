import {FormText} from "react-bootstrap";
import {Form} from "react-bootstrap";
function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "";

    console.log("Elements of matrix:")
    console.log(props.elements)

    const elements = props.elements.map((row, indexRow) =>
        <div key={props.id + "" + indexRow} className={"matrix-row"}>
            {
                row.map((element, indexCol) =>
                    <Form.Control onChange={(e) => props.functions.changeElementInMatrix(props.id, indexRow, indexCol, e.target.value)} key = {indexRow+""+indexCol+props.id} defaultValue={element}  disabled={disabled} className={"matrix-element " + props.additionalStyle}>
                    </Form.Control>
                )
            }
        </div>
    );


    return(
        <div key={props.id+disabled} className={"matrix"}>{elements}</div>
    )
}

export default Matrix
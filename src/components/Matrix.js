
function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "";

    console.log("Elements of matrix:")
    console.log(props.elements)

    const elements = props.elements.map((row, indexRow) =>
        <div key={props.id + "" + indexRow}>
            {
                row.map((element, indexCol) =>
                    <input onChange={(e) => props.functions.changeElementInMatrix(props.id, indexRow, indexCol, e.target.value)} key = {indexRow+""+indexCol+props.id} defaultValue={element}  disabled={disabled} className={"matrix-element " + props.additionalStyle}>
                    </input>
                )
            }
        </div>
    );


    return(
        <div key={props.id+disabled} className={"matrix"}>{elements}</div>
    )
}

export default Matrix
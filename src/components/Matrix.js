
function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "";

    console.log("Elements of matrix:")
    console.log(props.elements)

    const elements = props.elements.map((row, indexRow) =>
        <div>
            {
                row.map((element, indexCol) =>
                    <input onChange={(e) => props.functions.changeElementInMatrix(props.id, indexRow, indexCol, e.target.value)} key = {indexRow+indexCol} defaultValue={element}  disabled={disabled} className={"matrix-element " + props.additionalStyle}>
                    </input>
                )
            }
        </div>
    );


    return(
        <div className={"matrix"}>{elements}</div>
    )
}

export default Matrix
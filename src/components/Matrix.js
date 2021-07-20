import MatrixElementInput from './Fields/MatrixElementInput'

function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "";

    const elements = props.elements.map((row, indexRow) =>
        <div>
            {
                row.map((element, indexCol) =>
                    <input key = {indexRow+indexCol} defaultValue={element}  disabled={disabled}>
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
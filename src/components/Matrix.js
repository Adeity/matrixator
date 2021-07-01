import MatrixElementInput from './Fields/MatrixElementInput'

function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "a";

    const elements = props.elements.map((row) =>
        <div>
            {
                row.map((element, index) =>
                    <input key = {index} defaultValue={element}>
                    </input>
                )
            }
        </div>

    );


    return(
        <div>{elements}</div>
    )
}

export default Matrix
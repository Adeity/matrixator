import MatrixElementInput from './Fields/MatrixElementInput'

function Matrix (props) {
    let disabled = (props.disabled === true) ? "disabled" : "a";

    const elements = props.elements.map((row) =>
        <div>
            {
                row.map((element) =>
                    <input value={element}>
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
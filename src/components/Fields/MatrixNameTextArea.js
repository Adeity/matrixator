import React, { useState } from 'react';

function MatrixNameTextArea(props) {

    // Declare a new state variable, which we'll call "count"
    const [name, setName] = useState(props.name);

    function handleChange(event) {
        setName(event.target.value)
    }

    return (
        <input className={"matrix-name-text-area"} value={name} onChange={handleChange}></input>
    )
}

export default MatrixNameTextArea
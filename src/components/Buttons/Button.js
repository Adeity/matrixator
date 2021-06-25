/**
 * This button is used for both defined matrix button and operation button.
 * Clicking this button will insert the value of button into expression text.
 * @param props
 */
function Button (props) {
    const val = props.value

    return (
        <button value={val}>{val}</button>
    )
}

export default Button
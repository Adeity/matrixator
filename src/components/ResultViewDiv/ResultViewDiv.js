import SaveMatrixButton from '../Buttons/SaveMatrixButton'
import Fieldset from "../Buttons/Fieldset";
import translateMatrixElementsToMathJax from '../../Utilities/Utilities'

function ResultViewDiv(props) {
    function toView (resultMatrix) {
        const result = resultMatrix

        if (typeof result === 'number') {
            return result;
        }
        else if (typeof result === 'string') {
            return result;
        }
        else {
            return translateMatrixElementsToMathJax(result)
        }
    };



    return (
        <div className={"result-view-div"}>
            <h2>Result</h2>
            <Fieldset>
                {toView(props.resultMatrix)}
            </Fieldset>
            <SaveMatrixButton />
        </div>

    )
}

export default ResultViewDiv
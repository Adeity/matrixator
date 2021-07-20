import Fieldset from "../Buttons/Fieldset";
import Matrix from "../Matrix";

import ResultViewDiv from '../ResultViewDiv/ResultViewDiv'

function ResultSection(props){
    return(
        <div className={"result-section"}>
            <ResultViewDiv
                key = {props.expressionText+props.resultMatrix}
                definedMatrices = {props.definedMatrices}
                expressionText = {props.expressionText}
                resultMatrix = {props.resultMatrix}/>
        </div>
    );

}
export  default ResultSection;
import Fieldset from "../Buttons/Fieldset";
import Matrix from "../Matrix";

import ResultViewDiv from '../ResultViewDiv/ResultViewDiv'

function ResultSection(props){
    return(
        <div>
            <ResultViewDiv resultMatrix = {props.resultMatrix}/>
        </div>
    );

}
export  default ResultSection;
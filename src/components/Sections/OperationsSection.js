import DefinedMatricesDiv from '../DefinedMatricesDiv/DefinedMatricesDiv'
import OperationsDiv from '../OperationsDiv/OperationsDiv'
import ExpressionTextDiv from '../ExpressionTextDiv/ExpressionTextDiv'
import ExpressionViewDiv from '../ExpressionViewDiv/ExpressionViewDiv'

function OperationsSection(props){
    const getNameOfMatrices = () => {
        var listOfNames = []

        const listOfMatrices = props.initialData.definedMatrices
        listOfMatrices.forEach(element =>
            listOfNames.push(element.name)
        )
        console.log(listOfNames)
        return listOfNames;
    };

    const getViewOfExpression = () => {
        const expression = props.expressionText //  A x B + C + det(A)
    }

    function getMatrixByName(nameOfMatrix){
        const listOfMatrices = props.initialData.definedMatrices

        console.log("Finding matrix by name: " + nameOfMatrix)

        var matrixToReturn = null;

        listOfMatrices.forEach( (matrix) => {
            if(matrix.name == nameOfMatrix) {
                console.log("Found matrix " + matrix.name)
                matrixToReturn = matrix;
            }
        }

        )
        if (matrixToReturn === null) {
            console.log("Matrix not found")
            return null
        }
        else {
            return matrixToReturn
        }
    }

    return(
       <div className={"operations-section"}>
           <h1>Operations</h1>
           <DefinedMatricesDiv namesOfMatrices = {getNameOfMatrices()}/>
           <OperationsDiv calculations = {props.calculations} />
           <ExpressionTextDiv expressionText={props.expressionText}/>
           <ExpressionViewDiv expressionText = {props.expressionText}
                              getMatrixByName = {getMatrixByName}
           />
       </div>
    );

}
export  default OperationsSection;
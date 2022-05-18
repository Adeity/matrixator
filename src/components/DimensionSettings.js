import Button from 'react-bootstrap/Button'
import {ButtonGroup} from "react-bootstrap";
function DimensionSettings (props) {

    return (
        <div className={"dimension-settings"}>
            <div className={"dimension-header"}>
                Rows: <span>{props.rowDimension}</span>
            </div>
            <div className={"dimension-button-group"}>
                <ButtonGroup>
                    <Button size={"sm"} className={""} onClick={() => props.functions.addRowToMatrix(props.id)}>+</Button>
                    <Button size={"sm"} onClick={() => props.functions.removeRowFromMatrix(props.id)}>-</Button>
                </ButtonGroup>
            </div>
            <div className={"dimension-header"}>
                Columns: <span>{props.columnDimension}</span>
            </div>
            <div className={"dimension-button-group"}>
                <ButtonGroup>
                    <Button size={"sm"} onClick={() => props.functions.addColumnToMatrix(props.id)}>+</Button>
                    <Button size={"sm"} onClick={() => props.functions.removeColumnFromMatrix(props.id)}>-</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default DimensionSettings
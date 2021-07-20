function DimensionSettings (props) {

    return (
        <div className={"dimension-settings"}>
            <div className={"row-dimenension-settings"}>
                Rows: <span>{props.rowDimension}</span>
                <button onClick={() => props.functions.addRowToMatrix(props.id)}>+</button>
                <button onClick={() => props.functions.removeRowFromMatrix(props.id)}>-</button>

            </div>
            <div className={"column-dimension-settings"}>
                Columns: <span>{props.columnDimension}</span>
                <button onClick={() => props.functions.addColumnToMatrix(props.id)}>+</button>
                <button onClick={() => props.functions.removeColumnFromMatrix(props.id)}>-</button>
            </div>
        </div>
    )
}

export default DimensionSettings
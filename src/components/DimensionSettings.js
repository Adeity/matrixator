function DimensionSettings (props) {

    return (
        <div className={"dimension-settings"}>
            <div className={"row-dimenension-settings"}>
                Rows: <input value={props.rowDimension}></input>
                <button>+</button>
                <button>-</button>
            </div>
            <div className={"column-dimension-settings"}>
                Columns: <input value={props.columnDimension}></input>
                <button>+</button>
                <button>-</button>
            </div>
        </div>
    )
}

export default DimensionSettings
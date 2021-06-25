function DimensionSettings (props) {

    return (
        <div>
            <div>
                Rows: <input value={props.rowDimension}></input>
                <button>+</button>
                <button>-</button>
            </div>
            <div>
                Columns: <input value={props.columnDimension}></input>
                <button>+</button>
                <button>-</button>

            </div>
        </div>
    )
}

export default DimensionSettings
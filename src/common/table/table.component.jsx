import './table.css'

const Table = props => {
    return (
        <div>
            {/* <table>
                <thead>
                    <tr>
                        {props.columns.map((head,index) => {
                            return (
                                    <th key={index}>{head.header}</th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.foodTable.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>{row.name}</td>
                                <td>{row.image}</td>
                                <td>{row.amount}</td>
                                <td>{row.calories}</td>
                                <td>{row.actions}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table> */}
        </div>
    )
}

export default Table;
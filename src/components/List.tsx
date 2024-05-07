
import './css/List.css'


const List = ({table}:{table:Table |undefined}) => {

   const editUser = (userId: number) => {
    alert(`Edit user ${userId}`)
   }

    return (
        <div className='user-list' id='user-list'>
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    <tr>
                        {table?.columns.map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                        <th>Edit User</th>
                    </tr>
                </thead>
                <tbody>
                    {table?.columns[0].rows.map((_row, rowIndex) => (
                        <tr key={rowIndex}>
                            {table.columns.map((column, colIndex) => (
                                <td key={colIndex}>{column.rows[rowIndex].content}</td>
                            ))}
                            <td><button className="edit-user-button" onClick={() => editUser(Number(table.columns[0].rows[rowIndex].content))}>Edit User</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )

}

export default List;
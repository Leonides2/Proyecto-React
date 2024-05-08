
import './css/List.css'
import { Link } from "react-router-dom"


const ListEdit = ({table}:{table:Table |undefined}) => {

    return (
        <div className='user-list' id='user-list'>
        <div className="table-wrapper">
            <table className="fl-table">
                <thead>
                    <tr>
                        {table?.columns.map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                        <th>View User</th>
                    </tr>
                </thead>
                <tbody>
                    {table?.columns[0].rows.map((_row, rowIndex) => (
                        <tr key={rowIndex}>
                            {table.columns.map((column, colIndex) => (
                                <td key={colIndex}>{column.rows[rowIndex].content}</td>
                            ))}
                            <td>
                                <Link className="edit-user-button" to={`/Proyecto-React/view/${table.columns[0].rows[rowIndex].content}`}>
                                    <button>Ver</button>
                                    </Link>
                                <Link className="edit-user-button" to={`/Proyecto-React/edit/${table.columns[0].rows[rowIndex].content}`}>
                                    <button>Editar</button>
                                    </Link>
                                <Link className="edit-user-button" to={`/Proyecto-React/delete/${table.columns[0].rows[rowIndex].content}`}>
                                    <button>Eliminar</button>
                                    </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )

}

export default ListEdit
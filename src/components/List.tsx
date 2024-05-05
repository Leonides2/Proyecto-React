
import { useContext, useEffect, useState } from 'react';
import './css/List.css'
import UsersContext from '../context/UsersContext';
import parseUserToTable from '../logic/TableFunctions';
import Pager from './Pager';

const List = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [table, setTable] = useState<Table>();
    const context = useContext(UsersContext);

   function setOptions(skip= 1,limit= 10){
      return 'https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users?limit='+limit+'&page='+ skip
   }
   
  async function fetchData(){
    try {
      const options = setOptions(context.skip, context.limit); 
      const response = await fetch(options); 
      const data = await response.json(); 
      context.setCount(data.count)
      setUsers(data.items);
  } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    fetchData();
}, [context.limit, context.skip]);

  useEffect(() => {
    if (users.length > 0) {
        const generatedTable = parseUserToTable(users);
        setTable(generatedTable);
    }
}, [users]);

return (
    <div className='UserList'>
    <div className="table-wrapper">
        <table className="fl-table">
            <thead>
                <tr>
                    {table?.columns.map((column, index) => (
                        <th key={index}>{column.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {table?.columns[0].rows.map((_row, rowIndex) => (
                    <tr key={rowIndex}>
                        {table.columns.map((column, colIndex) => (
                            <td key={colIndex}>{column.rows[rowIndex].content}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
        <div>
            <Pager />
        </div>
    </div>
)

}

export default List;
import { useContext, useEffect, useState } from 'react';
import SelectSize from '../../components/SelectSize'
import UsersContext from '../../context/UsersContext';
import parseUserToTable from '../../logic/TableFunctions';
import Pager from '../../components/Pager';
import ListHomeView from '../../components/ListHomeView';

const CompanyPage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const context = useContext(UsersContext);
  const [table, setTable] = useState<Table>();

  function setOptions(skip= 10,limit= 10){
     return 'https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users?limit='+limit+'&page='+ skip
  }
  
 async function fetching(){
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


 useEffect(()=>{
   fetching()
 }, [context.skip,context.limit])

useEffect(() => {
  if (users.length > 0) {
      const generatedTable = parseUserToTable(users);
      setTable(generatedTable);
  }
}, [users]);


  return (
    <>
        <SelectSize/>
        <ListHomeView table={table}/>
        <Pager/>
    </>
  )
}

export default CompanyPage
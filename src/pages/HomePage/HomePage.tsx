import { useContext, useEffect, useState } from "react";
import UsersCarusel from "../../components/UsersCarusel"
import UsersContext from "../../context/UsersContext";
import SelectSize from "../../components/SelectSize";
import Pager from "../../components/Pager";
import parseUserToTable from "../../logic/TableFunctions";
import './HomePage.css'
import ListHomeView from "../../components/ListHomeView";

const HomePage = () => {

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
        <div className="header-container">
          <div>
            Elementos por pagina:
          </div>
          <div> 
            <SelectSize/>
          </div>
        </div>
        <UsersCarusel users={users}/>
        <ListHomeView table={table}/>
        <Pager />
    </>
  )


}

export default HomePage
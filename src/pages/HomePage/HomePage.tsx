import { useContext, useEffect, useState } from "react";
import UsersCarusel from "../../components/UsersCarusel"
import UsersContext from "../../context/UsersContext";
import SelectSize from "../../components/SelectSize";
import Pager from "../../components/Pager";
import parseUserToTable from "../../logic/TableFunctions";
import './HomePage.css'
import ListHomeView from "../../components/ListHomeView";
import img from './skyscraper.jpg'

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
      <div className="homepage">
        <div>
          <h1 style={{fontFamily: 'Segoe UI'}}>Company system users</h1>
        </div>
        <div className="header-container">
          <div>
            Elements per page:
          </div>
          <div> 
            <SelectSize/>
          </div>
        </div>
        <UsersCarusel users={users}/>
        <ListHomeView table={table}/>
        <Pager />
        <div className="img-container">
          <img alt="banner" src={img}/>
        </div>
      </div>
    </>
  )


}

export default HomePage
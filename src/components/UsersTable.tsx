import SelectSize from './SelectSize';
import { useContext, useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import UsersContext from '../context/UsersContext';
import './css/UsersTable.css'



const UsersTable = () => {

   const [users, setUsers] = useState<User[]>([]);
   const context = useContext(UsersContext);

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

    
  return (
      <>
          <div className='carrussel' id='carrussel'>

              <div>

                <h2>Select Size: </h2> 
                <SelectSize setLimit={context.setLimit}/>


                </div>
              <div className='results-container'>
                <div className='arrow-container'>
                 


                </div>
                  <div className='results' >
                      {users.map((index) => (
                          <UserInfo user={index} />
                      ))}
                     
                  </div>
                <div className='arrow-container'>


                </div>

              </div>

          </div>
      </>
    
  )
}

export default UsersTable
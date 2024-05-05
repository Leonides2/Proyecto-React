import SelectSize from './SelectSize';
import { useContext, useEffect, useState } from 'react';
import UserInfo from './UserInfo';
import UsersContext from '../context/UsersContext';

const UsersTable = () => {

   //const [filteredProducts, setfilteredProducts] = useState<Product[]>([]);

   const [users, setUsers] = useState<User[]>([]);
   const context = useContext(UsersContext)

   function setOptions(skip= 10,limit= 10){
      return 'https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users?limit='+limit+'&page='+ skip
   }
   
  async function fetching(){
    try {
      const options = setOptions(context.skip, context.limit); 
      const response = await fetch(options); 
      const data = await response.json(); 
      setUsers(data.items);
  } catch (error) {
        console.error(error);
      }
  }

  useEffect(()=>{
    fetching()
  }, [context.skip,context.limit])

   /* const handleMaxChange = (event: any) => {
        const value = event.target.value;
        console.log(value);
        
        const filteredPriceProducts = products.filter(item=>{
          return item.price <= value;
        });
        setfilteredProducts(filteredPriceProducts);
        if(value == ''){
          setfilteredProducts(products);
        }
        // Completar la función de manera que filtre todos los productos donde el precio sea menor al ingresado (NO Api Request).
        // Si el campo de texto está vacío se deben mostrar todos los productos sin filtro alguno por precio. 
    };*/
    
  return (
      <>
          <div style={{display: 'flex', gap: '24px'}}>
            <div>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                <h2>Select Size: </h2> 
                <SelectSize setLimit={context.setLimit}/>
              </div>
              <div className='results-container'>
                  <div className='results'>
                     {users.map(item=>(
                      <UserInfo key={item.id} user={item}/>
                     ))}
                  </div>
              </div>
            </div>
          </div>
      </>
    
  )
}

export default UsersTable
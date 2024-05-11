
import { useParams } from 'react-router';
import { UserComponent } from '../../components/UserComponent';
import { useEffect, useState } from 'react';



export const UserViewPage = () => {
    const { userId } = useParams();
    const [user, setUser] = useState<User |undefined>()

    async function fetching(){
      try {
        const response = await fetch(`https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users/${userId}`); 
        const data = await response.json(); 
        setUser(data);
    } catch (error) {
          console.error(error);
        }
    }

    useEffect(()=>{
      fetching()
    }, [userId])

    
  return (
    <>    
      <UserComponent user={user}/>
    </>

  )
}
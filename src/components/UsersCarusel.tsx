
import UserInfo from './UserInfo';
import './css/UsersTable.css'


const UsersCarusel = ({users}:{users: User[]}) => {

  return (
      <>
          <div className='carrussel' id='carrussel'>

              <div className='results-container'>
                <div className='arrow-container'>
                 


                </div>
                  <div className='results' >
                      {users.map((item,index) => (
                          <UserInfo key={index} user={item} />
                      ))}
                  </div>
                <div className='arrow-container'>


                </div>

              </div>

          </div>
      </>
    
  )
}

export default UsersCarusel
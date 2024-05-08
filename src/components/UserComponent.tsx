import './css/UserComponent.css'
import Back from '../assets/back.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import UsersContext from '../context/UsersContext'

export const UserComponent = ({user}:{user: User}) => {

  const {setLimit, setSkip} = useContext(UsersContext);
  return (
    <div className='user-data-container'>
      <Link to={'../'} style={{textDecorationLine: 'none'}}>
        <button onClick={()=>{
          setLimit(10)
          setSkip(1)
          }}>
          <img src={Back} alt="back-arrow" />
          Back
        </button>
      </Link>
      <div>
        Id: {user.id}
      </div>
      <div>
        Name: {user.name}
      </div>
      <div>
        Last Name: {user.lastName}
      </div>
      <div>
        Job: {user.job}
      </div>
      <div>
        Address: {user.address}
      </div>
      <div>
        Phone: {user.phone}
      </div>
      <div>
        Birthdate: {user.birthdate}
      </div>
      <div>
        Added in: {user.addAt}
      </div>
    </div>
  )
}


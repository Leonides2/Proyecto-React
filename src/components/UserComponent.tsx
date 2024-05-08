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
          Regresar
        </button>
      </Link>
      <div>
        Id: {user.id}
      </div>
      <div>
        Nombre: {user.name}
      </div>
      <div>
        Apellido: {user.lastName}
      </div>
      <div>
        Trabajo: {user.job}
      </div>
      <div>
        Direccion: {user.address}
      </div>
      <div>
        Telefono: {user.phone}
      </div>
      <div>
        Fecha de nacimiento: {user.birthdate}
      </div>
      <div>
        Agregado en: {user.addAt}
      </div>
    </div>
  )
}


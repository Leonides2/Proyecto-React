import './css/UserComponent.css'
import Back from '../assets/back.png'
import { Link } from 'react-router-dom'

export const UserComponent = ({user}:{user: User}) => {
  return (
    <div className='user-data-container'>
      <Link to={'../'} style={{textDecorationLine: 'none'}}>
        <button>
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


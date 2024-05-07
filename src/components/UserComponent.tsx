

export const UserComponent = ({user}:{user: User}) => {
  return (
    <form>
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
    </form>
  )
}



type Props = User;

const UserComponent = (props: Props) => {
  return (
    <form>
      <div>
        Id: {props.id}
      </div>
      <div>
        Nombre: {props.name}
      </div>
      <div>
        Apellido: {props.lastName}
      </div>
      <div>
        Trabajo: {props.job}
      </div>
      <div>
        Direccion: {props.address}
      </div>
      <div>
        Telefono: {props.phone}
      </div>
      <div>
        Fecha de nacimiento: {props.birthdate}
      </div>
    </form>
  )
}


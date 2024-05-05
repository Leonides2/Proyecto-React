
import { SubmitHandler, useForm } from 'react-hook-form'

export const FormUserPost = () => {
    
    const {register,handleSubmit} = useForm<User>();
    const onSubmit: SubmitHandler<User> = (data) => console.log(data)

    return (
        <>
        <div>
        <h2>Agregar Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre: </label>
                <input type='text' {...register("name")}/>
            </div>
            <div>
                <label>Trabajo: </label>
                <input type='text' {...register("job")}/>
            </div>
            <div>
                <label>Telefono: </label>
                <input type='text' {...register("phone")}/>
            </div>
            <div>
                <label>Direccion: </label>
                <input type='text' {...register("address")}/>
            </div>
            <div>
                <label>Fecha de nacimiento: </label>
                <input type='text' {...register("birthdate")}/>
            </div>
            <div>
                <input type='submit' value='Enviar'/>
            </div>

        </form>
        </div>
    </>
  )
}

/*
    address: string,
    image:string,
    name: string,
    job: string,
    phone:string,
    birthdate: number
*/
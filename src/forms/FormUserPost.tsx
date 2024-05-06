import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form'
import './form.css'

export const FormUserPost = () => {
    
    const navigate = useNavigate();
    const {register,handleSubmit, formState:{errors}, setValue} = useForm<User>();

    const onSubmit: SubmitHandler<User> = async(data) => {

        try {
            const response = await fetch('https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Usuario agregado correctamente');
                navigate("/Proyecto-React");
            } else {
                console.error('Error al agregar usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud POST:', error);
        }

    };

    const formatPhone = (value: string) => {
        const phoneNumber = value.replace(/\D/g, '');
        const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
        return formattedPhoneNumber;
    };

    return (
        <>
        <div className="form-container">
        <h2>Agregar Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Nombre: </label>
                <input type='text' {...register("name",{
                    required: true,
                    pattern: /^[A-Za-z\s]+$/
                })}/>
                {errors.name?.type === "required" && <p className="error-message">Espacio requerido</p>}
                {errors.name?.type === "pattern" && <p className="error-message">Solo se permiten letras y espacios</p>}
            </div>
            <div className="form-group">
                <label>Trabajo: </label>
                <input type='text' {...register("job",{
                    required:true
                })}/>
                {errors.job?.type === "required" && <p className="error-message">Espacio requerido</p>}
            </div>
            <div className="form-group">
                <label>Telefono: </label>
                <input type='text' {...register("phone",{
                    required:true
                })}
                onChange={(e) => setValue('phone', formatPhone(e.target.value))}
                />
                {errors.phone?.type === "required" && <p className="error-message">Espacio requerido</p>}
            </div>
            <div className="form-group">
                <label>Direccion: </label>
                <input type='text' {...register("address",{
                    required:true
                })}/>
                {errors.address?.type === "required" && <p className="error-message">Espacio requerido</p>}
            </div>
            <div className="form-group">
                <label>Fecha de nacimiento: </label>
                <input type='date' {...register("birthdate",{
                    required:true
                })}/>
                {errors.birthdate?.type === "required" && <p className="error-message">Espacio requerido</p>}
            </div>
            <div className="form-group">
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
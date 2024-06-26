import { useNavigate } from 'react-router';
import { SubmitHandler, useForm } from 'react-hook-form'
import './form.css'

export const FormUserDelete = ({user}: {user: User}) => {
    
    const navigate = useNavigate();
    const {handleSubmit} = useForm<User>();

    const onSubmit: SubmitHandler<User> = async() => {
        let id= '/' + user.id

        try {
            const response = await fetch('https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users'+ id, {method: 'DELETE'});

            if (response.ok) {
                console.log('Usuario Eliminado correctamente');
                navigate("/Proyecto-React/company");
            } else {
                console.error('Error al eliminar el usuario:', response.statusText);
            }
        } catch (error) {
            console.error('Error en la solicitud Delete:', error);
        }

    };

    return (
        <>
        <div className="form-container">
        <h2>Delete User {user.id} ?</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Name: </label>
                <input type='text' defaultValue={user.name} disabled/>
            </div>
            <div className="form-group">
                <label>Last Name: </label>
                <input type='text' defaultValue={user.lastName} disabled/>
            </div>
            <div className="form-group">
                <label>Job: </label>
                <input type='text' defaultValue={user.job} disabled/>
            </div>
            <div className="form-group">
                <label>Phone: </label>
                <input type='text' defaultValue={user.phone} disabled/>
            </div>
            <div className="form-group">
                <label>Address: </label>
                <input type='text' defaultValue={user.address} disabled/>
            </div>
            <div className="form-group">
                <label>Birthdate: </label>
                <input type='date' defaultValue={user.birthdate} disabled/>
            </div>
            <div className="form-group">
                <input type="button"  value='Cancel' onClick={()=>navigate('/Proyecto-React/company')}/>
                <input type='submit' value='Delete' />
            </div>

        </form>
        </div>
    </>
  )
}

export default FormUserDelete;

/*
    address: string,
    image:string,
    name: string,
    job: string,
    phone:string,
    birthdate: number
*/
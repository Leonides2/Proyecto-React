import { useState } from "react";
import { useParams } from "react-router";
import FormUserDelete from "../../forms/FormUserDelete";

 export const UserDeletePage = () => {

    const { userId } = useParams();

    let [user, setUser] = useState<undefined | User>(undefined);

    fetch(`https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users/${userId}`)
    .then(response => response.json())
    .then(response => {

            setUser({
                id: response.id,
                address: response.address,
                image: response.image,
                name: response.name,
                lastName: response.lastName,
                job: response.job,
                phone: response.phone,
                birthdate: response.birthdate,
                addAt: response.addAt
            })
    })

  return (
    <>
        { user != undefined ? <FormUserDelete user={user} /> : <div>Error: no se se pudo encontrar el usuario</div> }
    </>
  )
}
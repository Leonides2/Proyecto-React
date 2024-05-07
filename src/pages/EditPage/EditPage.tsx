import {FormUserPut} from "../../forms/FormUserPut.tsx"
import { useParams } from "react-router-dom"
import { useState } from "react";

function responseIsValid(response: any): Boolean {
    return response != "Not found";
}


const EditPage = () => {

    const { userId } = useParams();

    let [user, setUser] = useState<undefined | User>(undefined);

    fetch(`https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users/${userId}`)
    .then(response => response.json())
    .then(response => {
        if (responseIsValid(response)) {
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
        }

        alert(JSON.stringify(response))
        alert(responseIsValid(response))
    })

  return (
    <>
        { user != undefined ? <FormUserPut user={user} /> : <div>Error: no se se pudo encontrar el usuario</div> }
    </>
  )
}

export default EditPage
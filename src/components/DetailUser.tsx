import { useContext, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";

const DetailProduct = () => {

     const {UserId} = useContext(UsersContext);
     const [product, setProduct] = useState<User>();


    useEffect(() => {
        if(UserId != 0)
        fetch(`https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users/${UserId}`) 
        .then(res => res.json())
        .then(product => {
          setProduct(product);
        });
      }, [UserId])


    

    return (
        <div>
            <strong><h2>Detalles: </h2></strong>
            <p><strong>Cumpleaños: {product?.birthdate}</strong></p>
            <p><strong>Telefono: {product?.phone}</strong></p>
        </div>
    )
}

export default DetailProduct
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";

const DetailProduct = () => {

     const {productId} = useContext(ProductsContext);
    //ACÁ DEBERÁ IR UN FETCH PARA MOSTRAR EL DETALLE DEL PRODUCTO
    //ENDPOINT A UTILIZAR
    // `https://dummyjson.com/products/${id}`
    // Reemplazar lo necesario del HTML para que muestre los datos resultantes del FETCH, debe mostrar el rating y el stock
    const [product, setProduct] = useState<Product>();

    /*
    const [userDate, setUserDate]= useState('');
    function parseToDateFormated(UTCSeconds= 1714594362){
        let date = new Date(0);
        let dateFormated: string;
        date.setUTCSeconds(UTCSeconds);

        dateFormated = date.toDateString();

        return dateFormated;
    }*/



    useEffect(() => {
        if(productId != 0)
        fetch(`https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users/${productId}`) 
        .then(res => res.json())
        .then(product => {
          setProduct(product);
        });
      }, [productId])


    

    return (
        <div>
            <strong><h2>Details: </h2></strong>
            <p><strong>BirthDate: {product?.birthdate}</strong></p>
            <p><strong>Iban: {product?.account}</strong></p>
        </div>
    )
}

export default DetailProduct
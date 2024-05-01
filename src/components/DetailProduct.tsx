import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";

const DetailProduct = () => {

     const {productId} = useContext(ProductsContext);
    //ACÁ DEBERÁ IR UN FETCH PARA MOSTRAR EL DETALLE DEL PRODUCTO
    //ENDPOINT A UTILIZAR
    // `https://dummyjson.com/products/${id}`
    // Reemplazar lo necesario del HTML para que muestre los datos resultantes del FETCH, debe mostrar el rating y el stock
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        if(productId != 0)
        fetch(`'https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users?/${productId}`) //${id}
        .then(res => res.json())
        .then(product => {
            console.log(product);
          setProduct(product);
        });
      }, [productId])

    return (
        <div>
            <strong><h2>Details: </h2></strong>
            <p><strong>Created At: {product?.createdAt}</strong></p>
            <p><strong>Iban: {product?.account}</strong></p>
        </div>
    )
}

export default DetailProduct
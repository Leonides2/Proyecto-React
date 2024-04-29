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
        fetch(`https://dummyjson.com/products/${productId}`) //${id}
        .then(res => res.json())
        .then(product => {
            console.log(product);
          setProduct(product);
        });
      }, [productId])

    return (
        <div>
            <strong><h2>Details: </h2></strong>
            <p><strong>Rating: {product?.rating}</strong></p>
            <p><strong>Stock: {product?.stock}</strong></p>
        </div>
    )
}

export default DetailProduct
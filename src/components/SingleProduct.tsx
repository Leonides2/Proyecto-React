import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

const SingleProduct = ({product}:{product: Product}) => {

  const {setProductId} = useContext(ProductsContext);
 //Se debe utilizar el type Product de la carpeta types

 const handleView = (productId: number) => {
  
  setProductId(productId);
   //COMPLETAR LA FUNCIÓN DE MANERA QUE AL PRESIONAR EL BOTÓN VIEW Se
   //MUESTREN LOS DETALLES EN EL ESPACIO ADECUADO EN DetailProduct.tsx el RATING y EL STOCK

 };

 // Reemplazar lo necesario del HTML para que muestre los datos del producto, debe mostrar la imagen (thumnail) en el src del img, además mostrar el price y el title
  return (
    <div className='result-item'>
                    <img width={'100%'} height={150} src={product.thumbnail}></img>
                    <strong>$ {product.price}</strong>
                    <div className='product-title'>{product.title} <button onClick={()=>handleView(product.id)}>View</button></div>
                </div>
  )
}

export default SingleProduct
import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import "./css/Profile.css"

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
                    <figure className="fir-image-figure">
                        <a className="fir-imageover" rel="noopener" target="_blank" >
                            <img className="fir-author-image fir-clickcircle" src={product.image} alt={product.name}></img>
                        </a>

                        <figcaption>
                            <div className="fig-author-figure-title">{product.name }</div>
                            <div className="fig-author-figure-title">Job: {product.job}</div>
                            <button onClick={()=>handleView(product.id)}>View</button>
                        </figcaption>
                    </figure>
                </div>
  )
}

export default SingleProduct
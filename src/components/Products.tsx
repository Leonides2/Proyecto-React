import SelectSize from './SelectSize';
import Pager from './Pager';
import DetailProduct from './DetailProduct';
import { useContext, useEffect, useState } from 'react';
import SingleProduct from './SingleProduct';
import ProductsContext from '../context/ProductsContext';

const Products = () => {

   const [filteredProducts, setfilteredProducts] = useState<Product[]>([]);
   //Acá se debe crear un fetch
   //ENDPOINT A UTILIZAR
   //https://dummyjson.com/products?limit=10&skip=0
   //limit: hace referencia a cuantos productos mostrar
   //skip: salta la cantidad de productos indicada, es decir si skip es 0 el primer producto es 1, si skip es 10 el primer producto sería el 11
   //Recomendación: Interactuar con el endpoint en el navegador para entender como funciona
   const [products, setProducts] = useState<Product[]>([]);
   const context = useContext(ProductsContext)

   function setOptions(skip= 10,limit= 10){
      return 'https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users?limit='+limit+'&page='+ skip
   }


   
  async function fetching(){
    try {
      const options = setOptions(context.skip, context.limit); 
      const response = await fetch(options); 
      const data = await response.json(); 
      console.log(data)
      setProducts(data.items);
  } catch (error) {
        console.error(error);
      }
  }

  useEffect(()=>{
    fetching()
  }, [context.limit,context.skip])

    const handleMaxChange = (event: any) => {
        const value = event.target.value;
        console.log(value);
        /*
        const filteredPriceProducts = products.filter(item=>{
          return item.price <= value;
        });
        setfilteredProducts(filteredPriceProducts);
        if(value == ''){
          setfilteredProducts(products);
        }*/
        // Completar la función de manera que filtre todos los productos donde el precio sea menor al ingresado (NO Api Request).
        // Si el campo de texto está vacío se deben mostrar todos los productos sin filtro alguno por precio. 
    };
    
  return (
      <>
          <div style={{display: 'flex', gap: '24px'}}>
            <div>
              <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
                <h2>Select Size: </h2> 
                <SelectSize setLimit={context.setLimit}/>
              </div>
              <div className='results-container'>
                  <div className='results'>
                     {products.map(item=>(
                      <SingleProduct key={item.id} product={item}/>
                     ))}
                  </div>
              </div>
              <div>
                  <Pager />
              </div>
            </div>
            <div>
            <DetailProduct/>
            </div>
          </div>
      </>
    
  )
}

export default Products
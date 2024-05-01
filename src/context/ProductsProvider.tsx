import { ReactNode, useState } from 'react';
import ProductsContext from './ProductsContext'

//COMPLETAR EL PROVIDER CON LO QUE NECESITE

const ProductsProvider = ({children}: {children: ReactNode}) => {
  const [productId, setProductId] = useState(0)
  const [skip, setSkip] = useState(1)
  const [limit, setLimit] = useState(10)

  return (
    <ProductsContext.Provider value={{productId, setProductId, skip,setSkip,limit, setLimit}}>
        {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider;
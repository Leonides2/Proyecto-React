import React from 'react'


//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext({
    productId: 0,
    setProductId: (productId: number) => {},
    skip: 0,
    setSkip: (skip: number) => {},
    limit: 0,
    setLimit: (limit: number) => {},
});





export default ProductsContext;
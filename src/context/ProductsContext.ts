import React from 'react'

type ProductContext= {
    productId: number,
    setProductId: (productId: number) => void,
    skip: number,
    setSkip: (skip: number) => void,
    limit: number,
    setLimit: (limit: number) => void,
};



//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext<ProductContext>({
    productId: 0,
    setProductId: () => {},
    skip: 0,
    setSkip: () => {},
    limit: 0,
    setLimit: () => {},
});





export default ProductsContext;
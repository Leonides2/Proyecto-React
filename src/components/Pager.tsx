import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/UsersContext";
import './css/Pager.css'

const Pager = () => {

  const [pages, setPages]= useState<number[]>([1,2,3,4,5,6,7,8,9])
  const context = useContext(ProductsContext);

  const handleChangePage = (value: number) => {
    context.setSkip(value);
  };

  useEffect(()=>{ 
    
    if(context.limit < context.count){
        let newpags= Math.ceil(context.count / context.limit)
        let aux: number[] = [];
        for(newpags; newpags>=1; newpags--){
            aux.unshift(newpags)
        }
        setPages(aux);
    }
    
    

  }, [context.limit, context.skip])

  return (
    <div className='pager'>
      { pages.map((item) => (
        <button 
          key={item} 
          onClick={()=>handleChangePage(item)}>{item}</button>
      )) }         
    </div>
  )
}

export default Pager
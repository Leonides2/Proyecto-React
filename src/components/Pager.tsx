import { useContext, useEffect, useState } from "react";
import UsersContext from "../context/UsersContext";
import './css/Pager.css'

const Pager = () => {

  const [pages, setPages]= useState<number[]>([])
  const context = useContext(UsersContext);

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
      {pages.map((item,index) => (
        <button 
          key={index} 
          onClick={()=>handleChangePage(item)}>{item}</button>
      ))}         
    </div>
  )
}

export default Pager
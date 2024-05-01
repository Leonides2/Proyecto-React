import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

const Pager = () => {

  let pages = [1,2,3,4,5,6,7,8,9];

  const {setSkip} = useContext(ProductsContext);

  const handleChangePage = (value: number) => {
    console.log(value)
    setSkip(value);
  };

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
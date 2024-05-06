import { useContext } from 'react'
import UsersContext from '../context/UsersContext';
import SelectSize from './SelectSize';



const SortHeader = () => {
    const context = useContext(UsersContext);
  return (
    <>
          <div className='carrussel' id='carrussel'>
            <div>
                <h2>Select Size: </h2> 
                <SelectSize setLimit={context.setLimit}/>
            </div>
            </div>

    </>
  )
}

export default SortHeader
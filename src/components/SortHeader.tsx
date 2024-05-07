import { useContext } from 'react'
import UsersContext from '../context/UsersContext';
import SelectSize from './SelectSize';



const SortHeader = () => {
    const context = useContext(UsersContext);

  return (
    <>
          <div className='sort-header' id='sort-header'>
            <div>
                Select Size:
                <SelectSize setLimit={context.setLimit}/>
                <form>
                  <label> </label>
                  <input type="text" />
                </form>
            </div>
            </div>

    </>
  )
}

export default SortHeader
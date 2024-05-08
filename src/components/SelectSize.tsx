import { useContext } from 'react';
import './css/SelectSize.css'
import UsersContext from '../context/UsersContext';

const SelectSize = () => {

  const {setLimit, setSkip} = useContext(UsersContext)
  const handleChange = (event: any) => {
    setSkip(1)
    const value = event.target.value;
    console.log(value);
    setLimit(value);    
  };

  return (
    <div>
      <select name="size" id="size" className='size-select' onChange={handleChange} >
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
    </div>
  )
}

export default SelectSize
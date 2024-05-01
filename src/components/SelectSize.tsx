
const SelectSize = ({setLimit}:{setLimit: (Limit: number) => void}) => {


  const handleChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setLimit(value);    
  };

  return (
    <div><select name="size" id="size" className='size-select' onChange={handleChange}>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
    </select></div>
  )
}

export default SelectSize
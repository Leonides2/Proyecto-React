import { useContext, useEffect, useState } from 'react';
import SelectSize from '../../components/SelectSize'
import UsersContext from '../../context/UsersContext';
import parseUserToTable from '../../logic/TableFunctions';
import Pager from '../../components/Pager';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ListEdit from '../../components/ListEdit';


type Sort = {
  atribute: string,
  value: string
}
const CompanyPage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const context = useContext(UsersContext);
  const [table, setTable] = useState<Table>();
  const {register,handleSubmit, formState:{errors}} = useForm<Sort>();
  const [search,setSearch] = useState('');

  function setOptions(skip= 10,limit= 10, search=''){
    let newSearch='';
    if(search !== ''){
      newSearch = '&'+ search
    }
     return 'https://663148cdc92f351c03dcb0e3.mockapi.io/resources/Users?limit='+limit+'&page='+ skip + newSearch
  }
  
 async function fetching(){
   try {
     const options = setOptions(context.skip, context.limit,search); 
     const response = await fetch(options); 
     const data = await response.json(); 
     context.setCount(data.count)
     setUsers(data.items);
 } catch (error) {
       console.error(error);
     }
 }


 useEffect(()=>{
   fetching()
 }, [context.skip,context.limit])

useEffect(() => {
  if (users.length > 0) {
      const generatedTable = parseUserToTable(users);
      setTable(generatedTable);
  }
}, [users]);


const onSubmit: SubmitHandler<Sort> = async(data) => {
  let newSearch = data.atribute + "="+ data.value
  setSearch(newSearch);
  fetching();
};

  return (
    <>
      <form className='sort-container' onSubmit={handleSubmit(onSubmit)}>
          <div>
            Search:
          </div>
          <div>
            <select {...register("atribute")}>
                <option value={"id"}>Id</option>
                <option value={"address"}>Address</option>
                <option value={"name"}>Name</option>
                <option value={"lastName"}>LastName</option>
                <option value={"job"}>Job</option>
                <option value={"phone"}>Phone</option>
                <option value={"addAt"}>AddAt</option>
            </select>
            
          </div>
          <div className="text-area">
            <label></label>
            <input type="text" {...register("value",{required:true})} />
            {errors.value?.type === "required" && <p className="error-message">Required</p>}
          </div>
          <div>
              <input type='submit' value='Search' onClick={()=>context.setSkip(1)}/>
          </div>
          <div>
            Elements per page:
          </div>
          <div> 
            <SelectSize/>
          </div>
          <Link to={'/Proyecto-React/company/addUser'}>
              <button> Add User</button>
          </Link>
        </form>
        <ListEdit table={table}/>
        <Pager/>
    </>
  )
}

export default CompanyPage
import { useContext, useEffect, useState } from "react";
import List from "../../components/List"
import parseUserToTable from "../../logic/TableFunctions";
import UsersContext from "../../context/UsersContext";
import { SubmitHandler, useForm } from "react-hook-form";
import SelectSize from "../../components/SelectSize";
import './SearchPage.css'
import Pager from "../../components/Pager";

type Sort = {
    atribute: string,
    value: string
}




const SearchPage = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [search,setSearch] = useState('');
  const context = useContext(UsersContext);
  const [table, setTable] = useState<Table>();
  const {register,handleSubmit, formState:{errors}, setValue} = useForm<Sort>();

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
     console.log(response,search)
         if (response.ok) {
             console.log('Usuario encontrado');
             const data = await response.json(); 
             context.setCount(data.count)
             setUsers(data.items);
         } else {
             console.error('Error al encontrar el usuario', response.statusText);
         }
 } catch (error) {
      console.error('Error en la solicitud de busqueda:', error);
    }
 }



 const onSubmit: SubmitHandler<Sort> = async(data) => {
      let newSearch = data.atribute + "="+ data.value
      setSearch(newSearch);
      fetching();
 };


 useEffect(()=>{
   fetching()
 }, [context.skip,context.limit])

useEffect(() => {
  if (users.length > 0) {
      const generatedTable = parseUserToTable(users);
      setTable(generatedTable);
  }
}, [users]);

  return (
    <>
      <div>
        <SelectSize setLimit={context.setLimit}/>
        <form className='sort-container' onSubmit={handleSubmit(onSubmit)}>
          <div>
            Buscar:
          </div>
          <div>
            <select {...register("atribute")}>
                <option value={"id"}>Id</option>
                <option value={"address"}>Address</option>
                <option value={"name"}>Name</option>
                <option value={"lastName"}>LastName</option>
                <option value={"job"}>Job</option>
                <option value={"phone"}>Phone</option>
                <option value={"birthdate"}>Birthdate</option>
                <option value={"addAt"}>AddAt</option>
            </select>
            
          </div>
          <div className="text-area">
            <label></label>
            <input type="text" {...register("value",{required:true})} />
            {errors.value?.type === "required" && <p className="error-message">Espacio requerido</p>}
          </div>
          <div>
              <input type='submit' value='Buscar'/>
          </div>
        </form>
      </div>
      <List table={table}/>
      <Pager/>
    </>
  )
}

export default SearchPage
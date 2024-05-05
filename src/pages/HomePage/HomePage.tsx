import List from "../../components/List"
import UsersTable from "../../components/UsersTable"
import ProductsProvider from "../../context/UsersProvider"


const HomePage = () => {
  return (
    <>
       <ProductsProvider>
        <UsersTable/>
        <List/>
      </ProductsProvider>
    </>
  )


}

export default HomePage
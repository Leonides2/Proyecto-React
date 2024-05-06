import List from "../../components/List"
import SortHeader from "../../components/SortHeader"
import ProductsProvider from "../../context/UsersProvider"




const SearchPage = () => {
  return (
    <>
    <ProductsProvider>
      <SortHeader/>
      <List/>
    </ProductsProvider>
    </>
  )
}

export default SearchPage
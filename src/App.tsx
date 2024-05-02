
import './App.css'
import List from './components/List'
import UsersTable from './components/UsersTable'
import ProductsProvider from './context/UsersProvider'

function App() {


  return (
    <>
      <ProductsProvider>
        <UsersTable/>
        <List/>
      </ProductsProvider>
    </>
  )
}

export default App

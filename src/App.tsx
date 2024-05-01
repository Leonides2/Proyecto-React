
import './App.css'
import Products from './components/Products'
import ProductsProvider from './context/ProductsProvider'

function App() {


  return (
    <>
      <ProductsProvider>
        <Products></Products>
      </ProductsProvider>
    </>
  )
}

export default App


import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {


  return (
    <>
      <Navbar/>
      <main id='main'>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}

export default App

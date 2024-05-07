
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import UsersProvider from './context/UsersProvider'

function App() {


  return (
    <>
      <Navbar/>
      <main id='main'>
        <UsersProvider>
          <Outlet/>
        </UsersProvider>
      </main>
      <Footer/>
    </>
  )
}

export default App

import favicon from '../assets/favicon.png'
import icon from '../assets/userInfo.png'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import UI from '../mock/UI.json'



export const Navbar = () => {
  return (
    <nav className='navbar' id='navbar'>
       <div className='favicon-container'>
            <Link to={'/Proyecto-React/'}>
                <img src={favicon}/>
            </Link>
            {UI.Title}
        </div>
        
        <div className='favicon-container'>
            <Link to={'/Proyecto-React/'}>
              <button> Home </button>
            </Link>
            <Link to={'/Proyecto-React/search'}>
              <button> Search </button>
            </Link>
            <Link to={'/Proyecto-React/company'}>
            <button className='title-button'> 
              Maintenance
              <img src={icon}/>
              </button>
            </Link>
        </div>
    </nav>
  )
}
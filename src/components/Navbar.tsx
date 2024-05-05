import favicon from '../assets/favicon.png'
import icon from '../assets/company.png'
import { Link } from 'react-router-dom'
import './css/Navbar.css'
import UI from '../mock/UI.json'



export const Navbar = () => {
  return (
    <nav className='navbar' id='navbar'>
        <Link to={'/Proyecto-React/'}>
            <div className='favicon-container'>
                <img src={favicon}/>
                <h1>{UI.Title}</h1>
            </div>
        </Link>
        <Link to={'/Proyecto-React/company'}>
            <div>
                    <img src={icon}/>
            </div>
        </Link>
    </nav>
  )
}
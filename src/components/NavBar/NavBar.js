import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.scss"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (    
        <header className='header'>
            <Link to={'/'} className="title">Flamenco</Link> 

            <CartWidget/>
        </header>
    )
}

export default NavBar;
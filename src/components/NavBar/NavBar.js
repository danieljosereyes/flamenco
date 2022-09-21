import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.scss"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (    
        <header className='header'>
            <Link to={'/'} className="title">Flamenco</Link> 
            <nav className="nav">
                <Link to={'/pasillo/frutasverduras'}>Frutas Verduras</Link>
                <Link to={'/pasillo/despensa'}>Despensa</Link>
                <Link to={'/pasillo/quesoslacteos'}>Lacteos</Link>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;
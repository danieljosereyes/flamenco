import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.scss"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (    
        <header className='header'>
            <Link to={'/'} className="title">Flamenco</Link> 
            <nav className="nav">
                <Link to={'/pasillo/EXO'}>EXO</Link>
                <Link to={'/pasillo/HP'}>HP</Link>
                <Link to={'/pasillo/Dell'}>DELL</Link>
                <CartWidget/>
            </nav>
        </header>
    )
}

export default NavBar;
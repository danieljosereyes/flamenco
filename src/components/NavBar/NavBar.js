import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.scss"

const NavBar = () => {
    return (    
        <header className='header'>
            <a className="title">Flamenco</a>
            <CartWidget/>
        </header>
    )
}

export default NavBar;
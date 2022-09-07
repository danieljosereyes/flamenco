import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.scss"

const NavBar = () => {
    return (    
        <header className='header'>
            <CartWidget/>
        </header>
    )
}

export default NavBar;
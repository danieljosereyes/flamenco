import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../../context/CartContext"
import "./CartWidget.scss"

const CartWidget = () => {
    
    const { carrito } = useContext(CartContext)
console.log(carrito)
    return(
        <> 
            <Link to="/cart" className={`widget ${carrito.lenght > 0 ? ' widget_visible ' : ' ' }`}>
                Carrito
            </Link>
        </>
    )
}  

export default CartWidget
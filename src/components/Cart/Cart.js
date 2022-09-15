import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const { carrito, vaciarCarrito } = useContext(CartContext)
    
    return(
        <div>
            <h2>Carrito de Compras</h2>
            <hr/>
            {carrito.map((item) => (
                <div key={item.id}>
                    <CartItem item={item}/>
                </div>
            ))}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart 
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const { carrito } = useContext(CartContext)
    console.log(carrito)
    return(
        <div>
            <h2>Carrito de Compras</h2>
            <hr/>
            {carrito.map((item) => (
                <div key={item.id}>
                    <CartItem item={item}/>
                </div>
            ))}
        </div>
    )
}

export default Cart 
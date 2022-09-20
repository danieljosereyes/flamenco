import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"


const Cart = () => {
    const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext)

    if (carrito.length === 0) {
        return (
            <div>
                <>
                    <h2>Carrito Vacio</h2>
                    <hr/>
                    <Link to="/" >ir a Comprar</Link>
                </>
            </div>
        )
    }

    return(
        <div>
            {   
               <>                
                    <h2>Carrito de Compras</h2>
                    <hr/>
                            
                    {carrito.map((item) => (
                        <div key={item.id}>
                            <CartItem item={item}/>
                        </div>
                    ))}
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                </>
            }
        </div>
    )
}

export default Cart 
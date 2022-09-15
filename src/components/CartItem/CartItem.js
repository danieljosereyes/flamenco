import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({item}) => {
    const { precioTotal, removerItem } = useContext(CartContext)

    return( <>
                <h2>{item.titulo}</h2>
                <p>Precio:{item.precio}</p>
                <h2>Precio Total: ${precioTotal()}</h2>
                <button onClick={() => removerItem(item.id)}>X</button>
            </>
    )

}

export default CartItem
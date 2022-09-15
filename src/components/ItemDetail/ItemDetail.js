
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({prop}) => {

    const {carrito, agregarAlCarrito, cargaDelCarrito} = useContext(CartContext)

    console.log(carrito)
    const {id, title, price, thumbnail, thumbnail_id, order_backend} = prop

    const [contar, setContar] = useState(1)



    const handleAnadirCarrito = () => {
        const itemCarrito = {
            id: id,
            titulo: title,
            precio: price,
            cantidad: contar
        }
        console.log(cargaDelCarrito(itemCarrito.id))
        agregarAlCarrito(itemCarrito)
    }
    
    return(
        <article className="producto">
            <h3>{title}</h3>
            <p>$ {price}</p>
            <img src={thumbnail} alt={thumbnail_id}/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum doloribus iure cum, molestiae deleniti doloremque accusantium magnam ipsum assumenda, earum fugiat fugit velit vero quasi nostrum laboriosam expedita odit! Sed?</p>
            {
                cargaDelCarrito(id)
                ?    <Link to="/cart">Ir al carrito</Link>
                :   <ItemCount 
                    cantidad={contar} 
                    setCantidad={setContar} 
                    limite={order_backend}
                    anadir={handleAnadirCarrito}
                />
            }
    </article>
    )
}

export default ItemDetail
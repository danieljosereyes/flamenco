
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, title, price, thumbnail, thumbnail_id, amount, description}) => {

    const {carrito, agregarAlCarrito, cargaDelCarrito} = useContext(CartContext)

    console.log(carrito)
    
    const [contar, setContar] = useState(1)

    const handleAnadirCarrito = () => {
        const itemCarrito = {
            id: id,
            titulo: title,
            precio: price,
            cantidad: contar
        }
        agregarAlCarrito(itemCarrito)
    }
    
    return(
        <article className="producto">
            <h3>{title}</h3>
            <p>$ {price}</p>
            <img src={thumbnail} alt={thumbnail_id}/>
            <p>{description}</p>
            {
                cargaDelCarrito(id)
                ?   <Link to="/cart">Ir al carrito</Link>
                :   <ItemCount 
                    cantidad={contar} 
                    setCantidad={setContar} 
                    limite={amount}
                    anadir={handleAnadirCarrito}
                />
            }
    </article>
    )
}

export default ItemDetail
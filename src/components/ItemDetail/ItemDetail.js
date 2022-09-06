
import './ItemDetail.scss'

const ItemDetail = ({prop}) => {
    const {title, price, thumbnail, thumbnail_id} = prop
    return(
        <article className="producto">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <img src={thumbnail} alt={thumbnail_id}/>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum doloribus iure cum, molestiae deleniti doloremque accusantium magnam ipsum assumenda, earum fugiat fugit velit vero quasi nostrum laboriosam expedita odit! Sed?</p>
        <button className="button">Añadir al Carrito</button>
    </article>
    )
}

export default ItemDetail
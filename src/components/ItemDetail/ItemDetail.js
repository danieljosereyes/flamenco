import './ItemDetail.scss'

const ItemDetail = ({title="", price="", img="", alt=""}) => {
    
    return(
        <article className="producto">
            <h3>{title}</h3>
            <p>$ {price}</p>
            <img src={img} alt={alt}/>
        </article>
    )
}

export default ItemDetail
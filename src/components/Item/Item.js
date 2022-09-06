

const Item = ({title="", price="", img="", alt=""}) => {
    
    return(
        <article className="producto">
            <h3>{title}</h3>
            <p>$ {price}</p>
            <img src={img} alt={alt}/>
            <button className="button">Ver Detalles</button>
        </article>
    )
}

export default Item
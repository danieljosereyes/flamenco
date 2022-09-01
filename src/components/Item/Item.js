import "./Item.scss"



const Item = ({articulo}) => {

        return (
            <div className="productos">
                <h3>{articulo.nombre}</h3>
                <p>Precio: {articulo.precio}</p>
                <p>Stock: {articulo.stock}</p>
                <a>Ver detalles</a>
            </div>
        )
}

export default Item
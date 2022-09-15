

function ItemCount ({cantidad, setCantidad, limite, anadir}) {

    const handleSumar = () => {
      if (cantidad < limite){
        setCantidad (cantidad + 1)  
        }
    }
    
    const handleRestar = () => {
        if (cantidad > limite){    
            setCantidad(cantidad - 1)
        }
    }
    
    return (        
        <article className="productos">
            <button onClick={handleSumar}>+</button>
            <span> {cantidad} </span>
            <button onClick={handleRestar}>-</button>
            <button 
            onClick={anadir}
            className="button">
                Añadir al Carrito
            </button>
        </article>
    )
}

export default ItemCount
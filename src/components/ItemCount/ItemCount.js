import { Button } from "@mui/material"

function ItemCount ({cantidad, setCantidad, limite, anadir}) {

    const handleSumar = () => {
      if (cantidad < limite){
        setCantidad (cantidad + 1)  
        }
    }
    
    const handleRestar = () => {
        if (cantidad > 0){
            setCantidad (cantidad - 1)  
            }
        }
    
    return (        
        <article className="productos">
            
            <Button 
            color={ cantidad === 0 ? "success" : "error"}
            disabled={ cantidad === 0 }
            onClick={ handleRestar }
            >
                -
            </Button>
            <span> { cantidad } </span>
            <Button 
            onClick={ handleSumar }
            >
                +
            </Button>
            
            <Button 
            variant="contained"
            color="success"
            onClick={anadir}
            disabled={ cantidad === 0 }
            >
                Añadir al Carrito
            </Button>
        </article>
    )
}

export default ItemCount
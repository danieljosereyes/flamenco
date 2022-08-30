import {useState} from 'react'

function ItemCount ({producto, limite, precio}) {


    const [contar, setContar] = useState(1)

    const handleSumar = () => {
      if (contar < limite)
        setContar (contar + 1)        

    }
    
    const handleRestar = () => {
        if(contar > 1){    
            setContar(contar - 1)
        }
    }
    return (        
        <article className="productos">
            <h3> { producto }</h3>
            <p>Precio { precio }</p>
            <p> Stock { limite } </p>
            <button onClick={handleSumar}>+</button>
            <p> {contar} </p>
            <button onClick={handleRestar}>-</button>
        </article>
    )
}

export default ItemCount
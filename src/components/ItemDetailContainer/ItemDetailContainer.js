import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    
    const [laptop, setLaptop] = useState(null)
    

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=laptop&sort=sortId')
        .then((response) =>{
            return response.json()
        })
        .then((data) => {
            setLaptop(data.results[1])
        })
    }, [])
    
    return (
        <>
            <h2>Producto</h2>
            {
                laptop
                ?
                <>
                    <ItemDetail title={laptop.title} price={laptop.price} img={laptop.thumbnail} alt={laptop.thumbnail.id}/>
                </>
                : null

            }
        </>
    )
}

export default ItemDetailContainer
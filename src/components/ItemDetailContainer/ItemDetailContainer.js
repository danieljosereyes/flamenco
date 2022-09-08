import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = () => {
    
    const [laptop, setLaptop] = useState(null)

    const { itemId } = useParams()
    
    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=laptop&sort=sortId')
        .then((response) =>{
            return response.json()
        })
        .then((data) => {
            setLaptop(data.results.find((prod) => prod.id === itemId))
        })
        .catch(error => console.log(error))
    }, [itemId])
    
    return (
        <>
            <h2>Producto</h2>
            {
                laptop
                ?
                <>
                    <ItemDetail prop={laptop}/>
                </>
                : null

            }
        </>
    )
}

export default ItemDetailContainer
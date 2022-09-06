import { useEffect,useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"


const ItemDetailContainer = ({id}) => {
    
    const [laptop, setLaptop] = useState(null)

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=laptop&sort=sortId')
        .then((response) =>{
            return response.json()
        })
        .then((data) => {
            setLaptop(data.results)
        })
    }, [])
    
    return (
        <>
            <h2>Producto</h2>
            {
                laptop
                ?
                <>
                    <ItemDetail prop={laptop[id]}/>
                </>
                : null

            }
        </>
    )
}

export default ItemDetailContainer
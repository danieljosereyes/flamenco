import { useEffect,useState } from "react"
import ItemList from "../ItemList/ItemList"
import"./ItemListContainer.scss"


const ItemListContainer = () => {
    
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
            <h2>Productos</h2>
            {
                laptop
                ?
                <div className="ItemListContainer">
                    <ItemList laptop={laptop}/>
                </div>
                : null
            }

        </>
    )
}

export default ItemListContainer
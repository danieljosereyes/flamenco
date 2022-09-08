import { useEffect,useState } from "react"
import ItemList from "../ItemList/ItemList"
import"./ItemListContainer.scss"
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {
    
    const [laptop, setLaptop] = useState(null)
    console.log(laptop)
    const { parametro } = useParams()
    console.log( parametro )

    useEffect(() => {
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=laptop&sort=sortId')
        .then((response) =>{
            return response.json()
        })

        .then((data) => {
            if(!parametro){
                setLaptop(data.results)
            }  else {
                setLaptop(data.results.filter ((prod) => prod.attributes[0].value_name === parametro))
            }             
        })
        .catch(error => console.log(error))
    }, [parametro])
    
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
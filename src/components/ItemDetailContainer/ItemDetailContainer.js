import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loader from "../Loader/Loader"
import { doc ,getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const {itemId} = useParams()
    
    useEffect(() => {
        setLoading(true)
        

        const docRef = doc(db, 'despensa', itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({id:doc.id ,...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId])
    
    return (
        <div>
            <h2>Producto</h2>
            {
                loading
                ?   <Loader/>
                :   <ItemDetail id={item.id} title={item.name} price={item.price} amount={item.amount} description={item.description}  />
                
            }
        </div>
    )
}

export default ItemDetailContainer
import { useEffect,useState } from "react"
import ItemList from "../ItemList/ItemList"
import"./ItemListContainer.scss"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"


const ItemListContainer = () => {
    
    const [product, setProduct] = useState(null)
    console.log(product)
    const [loading, setLoading] = useState(true)

    const { parametro } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const productRef = collection(db, 'despensa')
        const q = parametro 
                    ? query(productRef, where('category', '==', parametro))
                    : productRef 

        getDocs(q)
            .then((resp) => {
                const productDB = resp.docs.map( (doc) => ({id: doc.id ,...doc.data()}) )
                console.log(productDB)
                setProduct(productDB)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [parametro])
    
    return (
        <>
            <h2>Pasillo</h2>
            {
                loading
                ?   <Loader/>
                :   <div className="ItemListContainer">
                        <ItemList product={product}/>
                    </div>
            }

        </>
    )
}

export default ItemListContainer
import { useEffect,useState } from "react"
import ItemList from "../ItemList/ItemList"
import"./ItemListContainer.scss"
import { useParams } from 'react-router-dom'
import Loader from "../Loader/Loader"
import { db } from "../../firebase/config"
import { collection, getDocs } from "firebase/firestore"


const ItemListContainer = () => {
    
    const [product, setProduct] = useState(null)
    console.log(product)
    const [loading, setLoading] = useState(true)

    const { parametro } = useParams()

    useEffect(() => {
        const productRef = collection(db, 'despensa')

        getDocs(productRef)
        setLoading(true)
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
                product
                ?
                <div className="ItemListContainer">
                    <ItemList product={product}/>
                </div>
                : <Loader/>
            }

        </>
    )
}

export default ItemListContainer
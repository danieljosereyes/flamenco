import "./ItemListContainer.scss"
import { useState } from 'react'
import { useEffect } from "react"
import { articulos } from "../../data/data.js"
import ItemList from "../ItemList/ItemList"


const solicitarDatos = () => {
    return new Promise ((resolve,reject) => {
        setTimeout( () => {
            resolve(articulos)
        }, 3000)
    })
}

const ItemListContainer = () => {
    
    const [product, setProduct ] = useState([])

    

    useEffect(() => {
            solicitarDatos()
            .then((res) => {
                setProduct(res)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally( () => {
                console.log("fin del proceso")
            })
    })

    return (
        <section>
            <ItemList productos={product}/>
        </section>
    )
}

export default ItemListContainer
import "./ItemListContainer.scss"
import ItemCount from "../ItemCount/ItemCount.js"


const ItemListContainer = ({nombre="Papas", precio="1", stock="100"}) => {
    
    return (
        <section>
            <ItemCount producto={nombre} limite={stock} precio={precio}/>
        </section>
    )
}

export default ItemListContainer
import Item from "../Item/Item"


const ItemList = ( {productos= []} ) => {

    return (
        <div>
            <h4>Productos</h4>
            {productos.map((prod) => <Item articulo={prod} key={prod.id}/>)}
        </div>
    )
}

export default ItemList
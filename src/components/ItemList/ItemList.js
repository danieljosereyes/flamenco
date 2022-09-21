import Item from "../Item/Item"


const ItemList = ({product=[]}) => {
    return(
        <>
            {
                product.map((productos)=>{
                    return <div key={productos.id}>
                                <Item id={productos.id} title={productos.name}  img={productos.thumbnail}/>
                            </div>
                    })
            }
        </>
    )
}

export default ItemList
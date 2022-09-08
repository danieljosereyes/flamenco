import Item from "../Item/Item"


const ItemList = ({laptop=[]}) => {
    return(
        <>
            {
                laptop.map((productos)=>{
                    return <div key={productos.id}>
                                <Item id={productos.id} title={productos.title} img={productos.thumbnail}/>
                            </div>
                    })
            }
        </>
    )
}

export default ItemList
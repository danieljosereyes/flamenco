import "./ItemListContainer.scss"

const ItemListContainer = ({nombre="Papas", precio="1", stock="100"}) => {
    
    return (
        <section className="productos">
            <h3>{ nombre }</h3>
            <p> { precio }</p>
            <p> { stock }</p>
        </section>
    )
}

export default ItemListContainer
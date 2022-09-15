

const CartItem = ({item}) => {
    return( <>
                <h2>{item.titulo}</h2>
                <p>Precio:{item.precio}</p>
            </>
    )

}

export default CartItem
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Navigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../../firebase/config"

const Checkout = () => {

    const { carrito, precioTotal, buyFinish } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direction: '',
    })

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const orden = {
            comprador: values,
            items: carrito,
            total: precioTotal()
        }

        if (values.nombre.length < 2){
            alert("Nombre Incorrecto")
        }
        if (values.email.length < 2){
            alert("Email Incorrecto")
        }
        
        const orderRef = collection(db,'ordenes')
        addDoc(orderRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                buyFinish()
            })
    }

    if (orderId) {
        return (
            <div>
                <h2>Lista de ordenes</h2>
                <hr/>
                <p>Tu numero de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }
        
    if (carrito.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input name="nombre" onChange={handleImputChange} value={values.name} type={'text'} placeholder="Tu nombre"/>
                <input name="email" onChange={handleImputChange} value={values.email} type={'email'} placeholder="Email"/>
                <input name="direction" onChange={handleImputChange} value={values.direction} type={'text'} placeholder="Direccion"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout
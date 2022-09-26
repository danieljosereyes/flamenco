import { useState } from "react"


const Checkout = () => {

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
            comprador: values
        }

        if (values.nombre.length < 2){
            alert("Nombre Incorrecto")
        }
        if (values.email.length < 2){
            alert("Email Incorrecto")
        }
        
        console.log('submit del form')
        console.log(orden)
    }
        
    

    return (
        <div>
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input name="name" onChange={handleImputChange} value={values.name} type={'text'} placeholder="Tu nombre"/>
                <input name="email" onChange={handleImputChange} value={values.email} type={'email'} placeholder="Email"/>
                <input name="direction" onChange={handleImputChange} value={values.direction} type={'text'} placeholder="Direccion"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Checkout
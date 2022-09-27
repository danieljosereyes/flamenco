import { createContext, useState } from 'react'
import Swal from 'sweetalert2'


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState([])

    const agregarAlCarrito = (item) => {
      setCarrito( [...carrito, item] )
    }
  
    const cargaDelCarrito = (id) => {
      return carrito.some((item) => item.id === id)
    }

    const precioTotal = () => {
      return carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const vaciarCarrito = () => {
      setCarrito([])
    }

    const removerItem = (id) => {
      setCarrito( carrito.filter((item) => item.id !== id))
    }

    const buyFinish = (id) => {
      setCarrito([])
    }
    
    const buyFinishSwal = (id) => {
      Swal.fire({
        title: 'Tu compra se realizo con exito',
        text: `tu numero de orden es: ${id}`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Ok'
      })
      setCarrito([])
    }
    return(
        <CartContext.Provider value={{
            carrito, 
            agregarAlCarrito,
            cargaDelCarrito,
            precioTotal,
            vaciarCarrito,
            removerItem,
            buyFinish,
            buyFinishSwal
            }}>
                {children}
        </CartContext.Provider>
    )
}
import { createContext, useState } from 'react'


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
    return(
        <CartContext.Provider value={{
            carrito, 
            agregarAlCarrito,
            cargaDelCarrito,
            precioTotal,
            vaciarCarrito,
            removerItem
            }}>
                {children}
        </CartContext.Provider>
    )
}
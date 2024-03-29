import { createContext, useState } from 'react'

const ShoppingCartContext = createContext()

export const ShoppingCardProvider = ({children}) => {
    //Estado incrementar cantidad de items
    const [count, setCount] = useState(0)
    //Estado abrir/cerrar el detalle de producto
    const [productDetailOpen, setProductDetailOpen] = useState(false);
    
    //Estado derivado de productDetailState
    const openProductDetail = () => {
        setProductDetailOpen(true)
    }
    const closeProductDetail = () => {
    setProductDetailOpen(false)
    }

    //Estado mostrar productos en el detalle del producto (product Detail)
    const [productToShow, setProductToShow] = useState({})

    //Estado para agregar productos al carrito (shopping Cart)
    const [cartProducts, setCartProducts] = useState([])
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            productDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}



export { ShoppingCartContext };
import { createContext, useState, useEffect } from 'react'

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

    //Estado y estados derivados para actualizar, abrir/cerrar la lista de compras (checkoutSideMenu)
    const [checkoutSideMenu, setCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => {
        setCheckoutSideMenu(true)
    }
    const closeCheckoutSideMenu = () => {
        setCheckoutSideMenu(false)
    }

    //Estado mostrar productos en el detalle del producto (product Detail)
    const [productToShow, setProductToShow] = useState({})

    //Estado para agregar productos al carrito (shopping Cart)
    const [cartProducts, setCartProducts] = useState([])

    //Estado para las ordenes en el carrito de compras(shoppingCart)
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    const [searchByTitle, setSearhByTitle] = useState("")
    console.log("searchByTitle :", searchByTitle)

    const URL = 'https://fakestoreapi.com/products';

    useEffect(() => {
    const getProducts = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            setItems(data)
        } catch (error){
            console.log(`Error inesperado ${error}`)
        }
    } 
    getProducts()
    }, [])

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect( () => {
        if (searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    

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
            checkoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearhByTitle,
            filteredItems,
            setFilteredItems,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}



export { ShoppingCartContext };
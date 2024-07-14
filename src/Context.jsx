import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const ShoppingCartContext = createContext()

export const initializeLocalStorage = () => {
    const accountLocalStorage = localStorage.getItem('account');
    const signOutInLocalStorage = localStorage.getItem('sign-out');
    let parsedAccount
    let parsedSignOut

    if(!accountLocalStorage) {
        localStorage.setItem('account', JSON.stringify({}))
        parsedAccount = {}
    } else {
        parsedAccount = JSON.parse(accountLocalStorage)
    }

    if(!signOutInLocalStorage) {
        localStorage.setItem('sign-out', JSON.stringify(false))
        parsedSignOut = false
    } else {
        parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
}

export const ShoppingCardProvider = ({ children }) => {

    //  My account 
    const [account, setAccount] = useState({})

     // Sign out
    const [signOut, setSignOut] = useState(false)

    //Estado incrementar cantidad de items
    const [count, setCount] = useState(0)
    //Estado abrir/cerrar el detalle de producto
    const [productDetailOpen, setProductDetailOpen] = useState(false);
    
    //Estado derivado del estado productDetail para abrir los detalles del producto
    const openProductDetail = () => {
        setProductDetailOpen(true)
    }
    //Estado derivado del estado productDetail para cerrar los detalles del producto
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

    //filtered products array
    const [filteredItems, setFilteredItems] = useState(null)

    // Get products by title
    //const [searchByTitle, setSearhByTitle] = useState(null)

    // Searched products array
    const [searchedItems, setSearchedItems] = useState(null)
    console.log('searchedItem:', searchedItems);
    
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

     //filter products by name, description or category
    const filtered = (items, searchedItems) => {
        return items?.filter(
            (item) =>   item.title.toLowerCase().includes(searchedItems.toLowerCase()) || 
                        item.description.toLowerCase().includes(searchedItems.toLowerCase()) ||
                        item.category.toLowerCase().includes(searchedItems.toLowerCase())
        )
    };

    //filter products by name, description or category


    useEffect( () => {
        if (searchedItems) {
            setFilteredItems(filtered(items, searchedItems))
        } else {
            setFilteredItems(items)
        }
    }, [items, searchedItems])

    console.log('filteredItems:', filteredItems);

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
            filteredItems,
            setFilteredItems,
            searchedItems,
            setSearchedItems,
            account,
            setAccount,
            signOut,
            setSignOut,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node
}



export { ShoppingCartContext };
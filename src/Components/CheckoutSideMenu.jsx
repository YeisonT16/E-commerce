import { useContext } from "react"
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../Context"
import { CloseIcon } from "../icons/CloseIcon";
import { OrderCard } from "./OrderCard";
import { totalPrice } from "../utils";
import { currentDate } from "../utils";

function CheckoutSideMenu(){

    const context = useContext(ShoppingCartContext);
    //Eliminar un producto: Devuelve una lista con todos los items en cartProducts que almacena en la variable filteredProducts a acepcion del que tenga el mismo id que el id del producto seleccionado

    // const handleDelete = (id) => {
    //     const filteredProducts = context.cartProducts.filter(product => product.id !== id) 
    //     context.setCartProducts(filteredProducts)
    // }
    const generateRandomId = () => {
        const randomPart = Math.random().toString(36).substring(2, 9); // Genera una parte aleatoria
        const timePart = Date.now().toString(36); // Convierte la marca de tiempo actual a base 36
        return `${randomPart}-${timePart}`; // Combina ambas partes
    }
    
    const handleCheckout = (products) => {
        const ordertoAdd = {
            id: generateRandomId(),
            date: currentDate(),
            products: products,
            totalProducts: products.length,
            totalPrice: totalPrice(products),
            //TODO: agregar el estado para hacer mas dinamica la lista de items y mostrar sus cambios
        }
        context.setOrder([...context.order, ordertoAdd]);
        //context.setCartProducts([]);
        //context.setCount(0)
    }

    const handle = () => {
        handleCheckout(context.cartProducts)
        context.closeCheckoutSideMenu()

    }

    return(
        <aside className={`${context.checkoutSideMenu ? 'flex' : 'hidden'} w-fit h-[calc(100vh-80px)] flex-col fixed top-[68px] right-0 border border-sky-300 rounded-lg bg-white`} >
            <div className="flex justify-between w-full items-center p-6">
                <h2 className="font-bold text-xl text-gray-500">My Order</h2>
                
                
                    <button
                        onClick={() => context.closeCheckoutSideMenu()}
                        className="size-fit cursor-pointer bg-white rounded-lg text-blue-400 hover:bg-red-500 hover:text-white hover:scale-110 transition-transform"                    
                    >
                    <CloseIcon
                        width={30}
                        height={30}
                    />
                    </button>
                
            </div>
                <div className="gap-2 w-full px-6 overflow-y-auto flex-1 text-sm">
                {  
                context.cartProducts.map((product) => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        />
                ))
            
                }
                </div>
                <div className="px-6 mb-6 ">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-medium text-xl text-gray-600/80">Total</span>
                    <span className="font-medium text-2xl text-red-600/80">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to={'/my-orders/last'}>
                <button className="w-full h-10 bg-sky-500/90 font-medium text-white rounded-lg border hover:bg-blue-500/90 hover:border-black transition-transform hover:scale-110" onClick={() => handle()}>Checkout</button>
                </Link>
                
            </div>
        </aside>

    )
}

export { CheckoutSideMenu }
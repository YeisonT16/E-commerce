import { useContext } from "react"
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../Context"
import { CloseIcon } from "../icons/CloseIcon";
import { OrderCard } from "./OrderCard";
import { totalPrice } from "../utils";

function CheckoutSideMenu(){

    const context = useContext(ShoppingCartContext);
    //Eliminar un producto: Devuelve una lista con todos los items en cartProducts que almacena en la variable filteredProducts a acepcion del que tenga el mismo id que el id del producto seleccionado
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !=id) 
        context.setCartProducts(filteredProducts)
    }
    
    const handleCheckout = (products) => {
        const ordertoAdd = {
            date: '01.04.2024',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts),
        }
        context.setOrder([...context.order, ordertoAdd]);
        context.setCartProducts([]);
        context.setCount(0)
    }

    return(
        <aside className={`${context.checkoutSideMenu ? 'flex' : 'hidden'} w-[290px] h-[calc(100vh-80px)] flex-col fixed right-0 border border-sky-300 rounded-lg bg-white`} >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl text-gray-500">My Order</h2>
                <div>
                    <CloseIcon
                        onClick={() => context.closeCheckoutSideMenu()}
                        className="size-6 cursor-pointer"
                    ></CloseIcon>
                </div>
            </div>
            <div className="gap-1 px-6 overflow-y-scroll flex-1">
            {  
                context.cartProducts.map((product) => (
                    <OrderCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        handleDelete={handleDelete}
                    />
                ))
            
            }
            </div>
            <div className="px-6 mb-6 ">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-ligth">Total</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to={'/my-orders/last'}>
                <button className="w-full bg-sky-500/90 text-white rounded-lg" onClick={() => handleCheckout(context.cartProducts)}>Checkout</button>
                </Link>
                
            </div>
        </aside>

    )
}

export { CheckoutSideMenu }
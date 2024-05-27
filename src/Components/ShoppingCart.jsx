import { useContext } from "react";
import { ShoppingBagIcon } from "../icons/ShoppingBagIcon";
import { ShoppingCartContext } from "../Context"


function ShoppingCart(){
    const context = useContext(ShoppingCartContext)

    const openCheckout = () => {
        context.openCheckoutSideMenu()
        context.closeProductDetail()
    }

    return (
        <div className="relative flex gap-0.5 items-center" 
                onClick={() => openCheckout()}
        >
            <ShoppingBagIcon  className="w-6 h-6 cursor-pointer"/>
            <div className="absolute bottom-3.5 left-3.5 flex justify-center items-center rounded-full bg-black w-4 h-4 text-xs text-sky-500/90">
                {context.cartProducts.length}
            </div>
        </div>
    )

}  


export { ShoppingCart }

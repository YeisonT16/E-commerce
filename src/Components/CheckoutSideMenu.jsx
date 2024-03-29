import { useContext } from "react"
import { ShoppingCartContext } from "../Context"

function CheckoutSideMenu(){

    const context = useContext(ShoppingCartContext);

    return(
        <aside className="w-[290px] h-[calc(100vh-80px)] " >
            <div>
                <h2>My Order</h2>
            </div>
        </aside>

    )
}

export { CheckoutSideMenu }
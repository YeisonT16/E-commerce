import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard";

function MyOrder(){
    const context = useContext(ShoppingCartContext);

    return (
        <Layout>
        My order
        <div className="flex flex-col w-80">
            {  
                context.order?.slice(-1)[0].products.map(product => (
                    <OrderCard
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))
            
            }
            </div>
        </Layout>
    )
}

export { MyOrder };
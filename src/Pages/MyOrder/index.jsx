import { useContext } from "react";
import {ShoppingCartContext} from "../../Context"
import { Layout } from "../../Components/Layout"
import { OrderCard } from "../../Components/OrderCard";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon"
import { Link } from "react-router-dom";

function MyOrder(){
    const context = useContext(ShoppingCartContext);
    const currentPath = window.location.pathname
    let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    if (index === 'last') index = context.order?.length - 1

    // const handleDelete = (id) => {
    //     const filteredProducts = context.cartProducts.filter(product => product.id !== id) 
    //     context.setCartProducts(filteredProducts)
    //     console.log('productos restantes',filteredProducts)
    // }

    return (
        <Layout>
        <div className="flex items-center justify-center w-80 relative mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    <ArrowLeftIcon 
                        classname="size-7 cursor-pointer" 
                    >                
                    </ArrowLeftIcon>
                </Link>
                <h1>My order</h1>
            </div>
        <div className="flex flex-col w-80">
            {  
                context.order?.[index]?.products.map(product => (
                    <OrderCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        // deleteFunc={() => handleDelete(product.id)}
                    />
                ))
            
            }
            </div>
        </Layout>
    )
}

export { MyOrder };
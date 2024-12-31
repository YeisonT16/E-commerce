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
        <div className="flex items-center justify-center w-64 relative mb-6">
                <Link to="/my-orders" className="flex items-center absolute left-0 size-6 hover:border-stone-900 bg-transparent hover:bg-zinc-900 rounded-md hover:text-blue-400 hover:scale-125 transition-transform">
                    <ArrowLeftIcon 
                        classname="size-7 cursor-pointer" 
                    >                
                    </ArrowLeftIcon>
                </Link>
                <h1 className="font-semibold text-2xl text-white">My order</h1>
            </div>
        <div className="flex flex-col size-fit">
            {  
                context.order?.[index]?.products.map(product => (
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
        </Layout>
    )
}

export { MyOrder };
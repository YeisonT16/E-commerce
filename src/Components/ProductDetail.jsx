import { useContext } from "react"
import { ShoppingCartContext } from "../Context"



function ProductDetail() {
const context = useContext(ShoppingCartContext);


    return(
        <aside className={`${context.productDetailOpen ? 'flex' : 'hidden'} w-[290px] h-[calc(100vh-80px)] bg-white  flex-col fixed right-0 top-[68px] border rounded-lg border-blue-400/90`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-black text-xl">Detail</h2>
                <div className="text-gray-600 cursor-pointer">
                    x
                </div>
            </div>
            <figure className="px-6">
                <img 
                className="w-full h-full rounded-lg"
                src={context.productToShow.image} 
                alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="text-red-600 font-medium text-2xl mb-2">{context.productToShow.price}</span>
                <span className="text-gray-500 font-medium text-md">{context.productToShow.name}</span>
                <span className="text-gray-500 font-medium text-md">{context.productToShow.description}</span>
            </p>

        </aside>
    )
}


export { ProductDetail }
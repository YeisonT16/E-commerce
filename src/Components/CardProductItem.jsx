import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { PlusIcon } from "../icons/PlusIcon";

function CardProductItem(props){
   // const { count, setCount } = useContext(ShoppingCartContext);
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (productData) => {
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        console.log('products',context.cartProducts)
    }

    return(
        <div 
            onClick={() => showProduct(props)}
            className="bg-white cursor-pointer size-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-gray-200/60 rounded-lg text-black/40 text-xs m-2 px-3 py-0.5">{props.category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={props.image} alt={`imagen de ${props.name}`} />
                <button 
                className="absolute top-0 right-0 flex justify-center items-center bg-sky-200/90 size-6 rounded-full m-2 p-1"
                onClick={() => {addProductsToCart(props)}}
                >
                <PlusIcon className="size-6 bg-white"
                ></PlusIcon>
                </button>
                <span className="px-2 h-5 block text-[11px] text-gray-500/80">{props.name}</span>
            <div className="flex justify-between items-center px-2">
                <span className="text-sm  font-bold text-red-500/80">${props.price}</span>
                <span className="text-sm font-semibold text-red text-blue-500/80 ">3 disponibles</span>
            </div>
            </figure>
        </div>
        
        
    )
}

export { CardProductItem };
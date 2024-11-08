import { useContext } from "react";
import { ShoppingCartContext } from "../Context";
import { PlusIcon } from "../icons/PlusIcon";
import { IconCheck } from "../icons/IconCheck";
import PropTypes from 'prop-types'

function CardProductItem(props){
    const {
        id,
        name,
        image,
        price,
        category,
    } = props

   // const { count, setCount } = useContext(ShoppingCartContext);
    const context = useContext(ShoppingCartContext);

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }
    const addProductsToCart = (event, productData) => {
        event.stopPropagation();
        context.setCount(context.count + 1)
        context.setCartProducts([...context.cartProducts, productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        console.log('products',context.cartProducts)
    }

    const rederIcon = (id) => {

        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
        if(isInCart){
            return (
                <div
                className="absolute top-0 right-0 flex justify-center bg-white items-center text-black size-7 rounded-full m-2 "                >
                <IconCheck
                ></IconCheck>
                </div>
            )
        } else {
            return (
                <button 
                className="absolute top-0 right-0 flex justify-center items-center bg-white text-yellow-600/90 size-7 rounded-full m-2 transition-transform hover:scale-110"
                onClick={(event) => addProductsToCart(event, props)}
                >
                <PlusIcon
                ></PlusIcon>
                </button>

            )
        }
    }

    return(
        <div 
            onClick={() => showProduct(props)}
            className="bg-white cursor-pointer size-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-gray-200/60 rounded-lg text-black/40 text-xs m-2 px-3 py-0.5">{category}</span>
                <img className="w-full h-full object-cover rounded-lg" src={image} alt={`imagen de ${name}`} />
            {rederIcon(id)}
            </figure>
            <span className="px-2 h-5 block text-[11px] overflow-hidden text-gray-500/80">{name}</span>
            <p className="flex justify-between items-center mx-2">
                <span className="text-sm size-fit font-bold text-red-500/80 -my-1">${price}</span>
                <span className="text-sm  size-fit font-semibold text-red text-blue-500/80 -my-1">3 disponibles</span>
            </p>            
        </div>
        
        
    )
}

CardProductItem.propTypes = {
    image: PropTypes.node,
    id: PropTypes.node,
    name: PropTypes.string,
    price: PropTypes.number,
    category: PropTypes.string,
}

export { CardProductItem };
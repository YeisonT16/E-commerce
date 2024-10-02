import { CloseIcon } from "../icons/CloseIcon"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { ShoppingCartContext } from "../Context"

function OrderCard(props){
    const {
        id,
        image,
        price,
        name,        
    } = props

    const context = useContext(ShoppingCartContext)

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id) 
        context.setCartProducts(filteredProducts)
    }

    return(
        <div className="flex items-center mb-3 rounded-lg w-fit max-w-[215px] min-w-[215px] overflow-hidden">
            <div className="flex items-center gap-2">
                <figure className="size-14">
                    <img className="size-full rounded-lg object-cover"
                    src={image}
                    alt={name}
                    />
                </figure>
            </div>
            <div className="flex justify-items-start px-2 py-1 max-w-[90px] w-full">
                <p className="text-sm font-medium max-h-14 overflow-hidden text-yellow-600/90">{name}</p>
            </div>
            <div className="flex items-center gap-2 ">
                <p className="text-lg font-medium text-red-500/80">${price}</p>               
            </div>
            <div >
            <button className="bg-blue-400/90 rounded-lg cursor-pointer"             
                    onClick={() => handleDelete(id)}
                >
                    <CloseIcon
                    className="size-6 text-black"
                    />                
                </button>
            </div>
        </div>
    )
}

OrderCard.propTypes = {
    id: PropTypes.node,
    image: PropTypes.node,
    price: PropTypes.number,
    name: PropTypes.string,    
}

export { OrderCard }
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
        console.log('productos restantes',filteredProducts)

        //añadir codigo para eliminar items desde el componente my Order
    }

    return(
        <div className="flex items-center w-mb-3 content-between rounded-lg mb-2 max-w-[240px] min-w-[240px] overflow-hidden">
            <div className="flex items-center gap-2">
                <figure className="size-14 p-1">
                    <img className="size-full rounded-lg object-cover"
                    src={image}
                    alt={name}
                    />
                </figure>
            </div>
            <div className="flex justify-items-start px-2 py-1 w-full">
                <p className="text-sm font-medium max-h-14 overflow-hidden text-yellow-600/90">{name}</p>
            </div>
            <div className="flex items-center gap-2 p-1">
                <p className="text-lg font-medium text-red-500/80">${price}</p>               
            </div>
            <div className="p-1" >
            <button className="size-fit bg-blue-400 rounded-lg cursor-pointer"             
                    onClick={() => handleDelete(id)}
                >
                    <CloseIcon
                    className="size-6 text-blue-400"
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
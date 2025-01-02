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
        //context.setOrder(filteredProducts)
        console.log('productos restantes',context.order)

        //añadir codigo para eliminar items desde el componente my Order
    }

    const handleDeleteForId = (id) => {
        if(context.order.id === id){
            const filteredProducts = context.order.
            console.log('productos restantes en myOrder',filteredProducts);
            //context.order.products = filteredProducts
            
        }
    }

    return(
        <div className="flex items-center content-between rounded-lg mb-2 max-w-[240px] min-w-[240px] overflow-hidden shadow-lg transition-transform hover:scale-105 hover:brightness-105">
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
            <div className="p-1 flex" >
            <button className="size-fit text-blue-400 rounded-lg cursor-pointer hover:bg-red-500 hover:text-white hover:scale-110 transition-transform"             
                    onClick={() => {handleDelete(id); handleDeleteForId(context.order.id)}}
                >
                    <CloseIcon
                    className="size-6"
                    width={24}
                    height={24}
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
    name: PropTypes.string
}

export { OrderCard }
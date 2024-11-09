import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { currentDate } from "../utils";
import PropTypes from 'prop-types'


function OrdersCard(props){
    const {
        totalPrice, 
        totalProducts,
    } = props



    return(
        <div className="flex justify-between items-center border border-sky-500 w-80 rounded-lg p-4 mb-4">
            <p className="flex justify-between w-full">
                <p className="flex flex-col">                    
                    <span className='font-medium text-green-300/70'>{currentDate()}</span>
                    <span className="font-light text-sky-300/80">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl text-red-500/70">{totalPrice}</span>
                    <button className="flex items-center text-white bg-transparent hover:border-l-gray-900 size-7 hover:border rounded-md  hover:text-blue-400 transition-transform hover:scale-125">
                        <ArrowRightIcon className="size-7" />
                    </button>
                </p>
            </p>
        </div>
    )
}

OrdersCard.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number
}

export { OrdersCard }
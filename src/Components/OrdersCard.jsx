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
                <div className="flex items-center gap-2 p-2  size-fit">
                    <div className="mr-4">
                        <span className="font-medium text-2xl text-red-500/70">{totalPrice}</span>
                    </div>
                    <button className="flex items-center text-white bg-transparent hover:bg-zinc-900 hover:border-zinc-900 size-6 hover:border rounded-md hover:text-blue-400 transition-transform hover:scale-125">
                        <ArrowRightIcon className="size-7" />
                    </button>
                </div>
            </p>
        </div>
    )
}

OrdersCard.propTypes = {
    totalPrice: PropTypes.number,
    totalProducts: PropTypes.number
}

export { OrdersCard }
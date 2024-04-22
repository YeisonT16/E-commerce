import { CloseIcon } from "../icons/CloseIcon"
import { ArrowRightIcon } from "../icons/ArrowRightIcon";


function OrdersCard(props){
    const {
        totalPrice, totalProducts
    } = props

    const currentDate = () => {
        const date = new Date().toLocaleDateString();
        return date
    }

    return(
        <div className="flex justify-between items-center border border-sky-500 w-80 rounded-lg p-4 mb-4">
            <p className="flex justify-between w-full">
                <p className="flex flex-col">                    
                    <span className='font-medium text-green-300/70'>{currentDate()}</span>
                    <span className="font-light text-sky-300/80">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl text-red-500/70">{totalPrice}</span>
                    <ArrowRightIcon className="size-7 hover:bg-blue-300 hover:transition scale-100" />
                </p>
            </p>
        </div>
    )
}

export { OrdersCard }
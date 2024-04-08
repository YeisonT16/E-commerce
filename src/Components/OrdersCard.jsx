import { CloseIcon } from "../icons/CloseIcon"

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
                    <span className='font-light'>{currentDate()}</span>
                    <span className="font-light">{totalProducts} articles</span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl">{totalPrice}</span>
                    <ArrowRightIcon className="size-7 " />
                </p>
            </p>
        </div>
    )
}

export { OrdersCard }
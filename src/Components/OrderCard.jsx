import { CloseIcon } from "../icons/CloseIcon"

function OrderCard(props){
    const {
        id,
        image,
        price,
        name,
        handleDelete,
    } = props

    return(
        <div className="flex items-center mb-3 rounded-lg">
            <div className="flex items-center gap-2">
                <figure className="size-14">
                    <img className="size-full rounded-lg object-cover"
                    src={image}
                    alt={name}
                    />
                </figure>
            </div>
            <div className="flex justify-items-start px-2 py-1 max-w-[90] min-w-[]">
                <p className="text-sm font-medium max-h-14 overflow-hidden text-yellow-600/90">{name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium text-red-500/80">{price}</p>
                {
                    handleDelete &&         
                    <CloseIcon
                    onClick={()=> handleDelete(id)}
                    className="size-6 text-black cursor-pointer"
                    />
                }
            </div>
        </div>
    )
}

export { OrderCard }
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
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="size-20">
                    <img className="size-full rounded-lg object-cover"
                    src={image}
                    alt={name}
                    />
                </figure>
                <p className="text-sm font-light text-yellow-500">{name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium text-red-500/80">{price}</p>
                {
                    handleDelete &&                 
                    <CloseIcon
                    onClick={()=>handleDelete(id)}
                    className="size-6 cursor-pointer"
                    />
                }
            </div>
        </div>
    )
}

export { OrderCard }
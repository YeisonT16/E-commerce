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
        <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
                <figure className="size-20">
                    <img className="w-full h-full rounded-lg object-cover"
                    src={image}
                    alt={name}
                    />
                </figure>
                <p className="text-sm font-light">{name}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium ">{price}</p>
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
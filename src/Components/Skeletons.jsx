

function Skeletons() {
        
    //const loadingAnimation  = [0, 1, 2, 3, 4, 5, 6, 7]
    const styleBaground = 'bg-gradient-to-tl from-blue-500/90 to-white animate-pulse'

    return(               
                    <div className="bg-white size-60 rounded-lg">
                    <figure className="relative mb-2 w-full h-4/5">
                        <span className={`absolute bottom-0 left-0 h-5 w-24 rounded-lg m-2 px-3 py-0.5 ${styleBaground}`}></span>
                        <img className={`w-full h-full object-cover rounded-lg ${styleBaground} `}/>
                        <span className={`absolute top-0 right-0 flex justify-center items-center size-8 rounded-full m-2 p-1 ${styleBaground}`}></span>
                    </figure>
                    <span className={`px-2 my-1 mx-1 h-5 rounded-lg block ${styleBaground}`}></span>
                    <p className="flex  justify-between items-center px-2">
                        <span className={`h-3 w-20 rounded-lg ${styleBaground}`}></span>
                        <span className={`h-3 w-20 rounded-lg ${styleBaground}`}></span>
                    </p>            
                    </div> 
        )
}


export { Skeletons }
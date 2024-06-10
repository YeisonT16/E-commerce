

function Skeletons() {


    return(
        
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {    context.items.map(() => (
                <div 
                className="bg-white cursor-pointer size-60 rounded-lg">

                </div>
                ) 

            )}
        </div>

)}  

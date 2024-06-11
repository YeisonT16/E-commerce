import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { CardProductItem } from "../../Components/CardProductItem"; 
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { Skeletons } from "../../Components/Skeletons";


function Home(){

const context = useContext(ShoppingCartContext)

//const renderView = () => {
//   const itemsToRender = context.searchByTitle?.length > 0 ? context.filteredItems : context.items;
//    if(itemsToRender?.length > 0) {
//        return itemsToRender.map(item => (
//            <CardProductItem
//            id={item.id}
//            name={item.title}
//            category={item.category}
//            price={item.price}
//            image={item.image}
//            description={item.description}
//            />
//        ));
//    } else {
//        return (
//            <p>No Results Found</p>
//        )
//    }
//}

    return (
        <Layout>
        <div className="flex items-center justify-center relative w-80 mb-4">
            <h1 className="font-medium text-xl">
                Exclusive Products
            </h1>
        </div>
        <input 
            type="text"
            placeholder="Search a product" 
            className="rounded-lg border border-sky-400/90 w-80 p-4 mb-4 focus:outline-none text-gray-600/90"
            onChange={(event) => context.setSearchedItems(event.target.value)}
            />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            { context.filteredItems?.length < 1 ? (
                    context.item && context.item.map((item) => 
            <CardProductItem
                        id={item.id}
                        name={item.title}
                        category={item.category}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        />)
            ) : context.filteredItems ? (
                    context.filteredItems.map((item) => 
            <CardProductItem
                        id={item.id}
                        name={item.title}
                        category={item.category}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        />)
            ) : (           
                <Skeletons />            
            )
    }
        </div>
        <ProductDetail />
        </Layout>
    )
}

export { Home };
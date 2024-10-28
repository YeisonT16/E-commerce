import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { CardProductItem } from "../../Components/CardProductItem"; 
import { ProductDetail } from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { Skeletons } from "../../Components/Skeletons";


function Home(){

const context = useContext(ShoppingCartContext)
const imageRender = [0, 1, 2, 3, 4, 5, 6, 7]

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
            className="rounded-lg w-80 p-4 mb-4 outline-offset-2 text-yellow-500"
            onChange={(event) => context.setSearchedItems(event.target.value)}
            />
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            { context.filteredItems?.length < 1 ? (
                    context.item && context.item.map((item) =>
            <CardProductItem
                        key={item.title}
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
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        category={item.category}
                        price={item.price}
                        image={item.image}
                        description={item.description}
                        />)
            ) : (
        
                imageRender.map((_, index) => 
                <Skeletons
                    key={index}
                />
            )
            
            )
    }
        </div>
        <ProductDetail />
        </Layout>
    )
}

export { Home };
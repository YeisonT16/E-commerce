import { useEffect, useState } from "react";
import { Layout } from "../../Components/Layout";
import { CardProductItem } from "../../Components/CardProductItem"; 
import { ProductDetail } from "../../Components/ProductDetail";


function Home(){
const URL = 'https://fakestoreapi.com/products';
const [items, setItems] = useState(null)

useEffect(() => {
const getProducts = async () => {
        try {
            const response = await fetch(URL)
            const data = await response.json()
            console.log(data, 'datos de API Platzi')
            setItems(data)
        } catch (error){
            console.log(`Error inesperado ${error}`)
        }
    } 
    getProducts()
}, [])


    return (
        <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
            {
                items?.map((item) => (
                    <CardProductItem
                    id={item.id}
                    name={item.title}
                    category={item.category}
                    price={item.price}
                    image={item.image}
                    description={item.description}
                    />
                ))
            }
        </div>
        <ProductDetail />
        </Layout>
    )
}

export { Home };
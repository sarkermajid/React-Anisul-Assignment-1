import React from "react";
import Product from "./components/Product";
import product_data from "./product_data";


const Heading = "Product Listing App";
const App = () => {
    const product_data_show = product_data.map(data =>
    <Product key={data.id} title={data.title} price={data.price} description={data.description} image={data.image} category={data.category} rating={data.rating.rate} >
    </Product>)
    return(
        <div>
            <h1 className="Heading">{Heading}</h1>
            {product_data_show}
        </div>
    )
}

export default App;
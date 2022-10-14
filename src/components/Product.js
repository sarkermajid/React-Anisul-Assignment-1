import React from "react";

const Product = (props)=> {
    const {title, price, description, image, category, rating} = props;
    return(
        <div className="card">
            <img className="product_image" src={image} alt="product_image" />
            <p className="product_title">{title}</p>
            <h4 className="product_price">Price: {price}</h4>
            <h5 className="product_rating">Rating: {rating}</h5>
            <p className="product_description">{description}</p>
            <h4 className="product_category">Category: {category}</h4>
            <button className="btn">Add to Cart</button>
        </div>
    )
}

export default Product;
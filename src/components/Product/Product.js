import React from 'react';
import './Product.css'

// product component for display
const Product = ({ handleAddToCart, product }) => {
    // const {handleAddToCart, product} = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>{seller}</small></p>
                <p><small>{ratings} stars</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;
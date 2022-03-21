import React from 'react';
import './Shop.css'

// Shop component for product card display
const Shop = () => {
    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3>This is for products</h3>
            </div>
            <div className="cart-container">
                <h4>This order summary</h4>
            </div>
        </div>
    );
};

export default Shop;
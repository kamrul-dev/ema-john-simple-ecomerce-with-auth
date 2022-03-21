import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

// Shop component for product card display
const Shop = () => {
    // products load from the public/products.json
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>This order summary</h4>
            </div>
        </div>
    );
};

export default Shop;
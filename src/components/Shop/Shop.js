import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

// Shop component for product card display
const Shop = () => {
    // products load from the public/products.json
    const [products, setProducts] = useState([]);

    //Add to cart 
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    // get cart data from local storage
    useEffect(() => {
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            console.log(addedProduct)
        }
    }, []);

    const handleAddToCart = (product) => {
        // console.log(product);
        // should not write this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
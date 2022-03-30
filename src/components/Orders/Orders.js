import React from 'react';
import useProducts from '../../hooks/useProducts';

const Orders = () => {
    // products laod from hooks folder where useProducts() functiion declared
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2>This is oreders: {products.length}</h2>
        </div>
    );
};

export default Orders;
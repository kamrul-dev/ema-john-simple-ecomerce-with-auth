import React from 'react';

const ReviewItem = (props) => {
    const {name, price, shipping, quantity} = props.product;
    return (
        <div>
            <h2>THis is review items: {name}</h2>
        </div>
    );
};

export default ReviewItem;
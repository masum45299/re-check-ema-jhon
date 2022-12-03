import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {handler,product}=props
    const {img,name,price,seller,ratings}=product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p>{name}</p>
                <p>price : {price}</p>
                <p>seller : {seller}</p>
                <p>ratings: {ratings}</p>
                <button onClick={()=>handler(product)} className='btn'><p>Add to Cart</p></button>
            </div>
        </div>
    );
};

export default Product;
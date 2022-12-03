import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [carts,setCarts]=useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToHandler=(product)=>{
        const newCart=[...carts,product]
        setCarts(newCart)
    }
    return (
        <div className='divided'>
            <div className="product-part">
            {
                products.map(product=><Product
                product={product}
                key={product.id}
                handler={addToHandler}>

                </Product>)
            }
            </div>
            <div className="order-part">
                <Cart carts={carts}></Cart>
            
            </div>
        </div>
    );
};

export default Shop;
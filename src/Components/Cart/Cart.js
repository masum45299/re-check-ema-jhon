import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {carts}=props;
    console.log(carts)
    let total=0;
    let shipping=0;
    let tax=0;
       for (const product of carts){
        total=total+product.price;
        shipping=shipping+product.shipping
        tax=total*.1;
       }
    return (
        <div>
            <h5>Order part</h5>
            <p>Selects item : {carts.length} </p>
            <p>Total price :{total} </p>
            <p>shipping Charge : {shipping}</p>
            <p>Tax : {tax}</p>
        </div>
    );
};

export default Cart;
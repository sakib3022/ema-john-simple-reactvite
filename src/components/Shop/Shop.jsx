import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const [cart,setCart] = useState([])
    const handleToCart = () =>{
        const newItem = cart + 1;
        setCart(newItem)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product=> <Product
                    product={product}
                    handleToCart = {handleToCart}
                    key = {product.id}
                    > </Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Selected Item : {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;
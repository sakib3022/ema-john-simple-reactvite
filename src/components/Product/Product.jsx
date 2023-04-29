import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,price,img,ratings,seller} = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price:{price}</p>
                <p className='product-seller'><small>Manufacturer: {seller}</small></p>
                <p className='product-ratings'><small>Rating: {ratings} star</small></p>
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Product;
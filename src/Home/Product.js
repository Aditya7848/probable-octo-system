import React from 'react';
import './Product.css'

function Product() {
  return (

    <div className="product">
      <div className="product_info">
        <p>Title</p>
        <p className="product_price">30$</p>
        <div className="product_rating">⭐⭐⭐⭐</div>
      </div>
      <img className="product_img" src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png" alt="" />

      <button>Add to basket</button>
    </div>

  )
}

export default Product
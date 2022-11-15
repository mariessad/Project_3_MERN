import React from "react";
import background from "../pinkbg.jpg";
import { useEffect, useState} from "react"

function FakeProducts({ productApi, queryProductsApi, setCart}) {
//   console.log(productApi);

const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);

useEffect(() => {
queryProductsApi()
  return () => {
    
  }
}, [])

  
  let productsData = productApi.map((product, i) => (
    <div className="product-container white" key={i}>
      <h4 className="product-title">{product.title}</h4>
      <img
        className="product-img"
        src={`${product.image}`}
        alt={product.title}
      ></img>
      <p className="product-price">${product.price}</p>
      <button className='buy-btn' type="submit" onClick={() => addToCart(product)}> Add to Cart</button>
      {/* <form action={`/cart/?_method=POST`} method="POST">
                <input
                  className="display-none"
                  type="text"
                  name="title"
                  defaultValue={product.title}
                />
                <input
                  className="display-none"
                  type="text"
                  name="price"
                  defaultValue={product.price}
                />
                <input
                  className="display-none"
                  type="text"
                  name="image"
                  defaultValue={product.image}
                />

                <input
                  className="add-to-cart"
                  type="submit"
                  value="Add to Cart"
                />
              </form> */}
              <button onClick={addToCart}></button>
    </div>
  ));

  return (
    <div>
      
      <div
        className="products-div"
        style={{ backgroundImage: `url(${background})`, width: "100%" }}
      >
        <div>{productsData}</div>
      </div>
    </div>
  );
}

export default FakeProducts;

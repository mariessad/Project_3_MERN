import { React } from "react";

function Cart({ cart, setCart,}) {
  console.log(cart);

  const cartTotal = cart.reduce((total) => total + 20, 0);

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }
      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsInCart = () =>
    cart.map((item) => (
      <div className="product-container" key={item.id}>
        <h3 className="">
          ({amountOfItems(item.id)}) {`${item.title}`}
        </h3>
        <img
          className="product-img"
          src={`${item.image}`}
          alt={item.title}
        />{" "}
        <br />
        <button className="add-to-cart" type="submit" onClick={() => removeFromCart(item)}>
          Remove
        </button>
      </div>
    ));

  const checkout = () => {
    setCart([]);
  };

  return (
    <div className="">
      <h2 className="">Your Shopping Cart</h2>
      <div className="cart-item">
        <div className="">{listItemsInCart()}</div>
      </div>
      <div className="">
        <h3 className="cart-total">Total: ${cartTotal}</h3>
      </div>

      <button className="checkout-pay" onClick={checkout}>
        Check Out
      </button>
    </div>
  );

  // return (
  //   <div className="cart-container">
  //     <h2 className='text-white'>Your Shopping Cart</h2>
  //     <div className='d-flex justify-content-center mt-5 bg-light'>
  //       <div className="cart-items">{listItemsInCart()}</div>
  //       <div className='cart-total'>
  //         <h3 className=''>Total: ${cartTotal}</h3>
  //         <button className='btn btn-success mt-3' onClick={checkout}>Check Out</button>
  //       </div>
  //     </div>
  //   </div>
  // )
}

export default Cart;

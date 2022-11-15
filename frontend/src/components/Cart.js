import { React } from "react";
import heartTile from "../heart_eye_tile.png"

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
      <div className="cart-container" key={item.id}>
        <h3 className="product-title">
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
      <div className="cart-title"><h2>Your Shopping Cart</h2></div>
      <img className="cart-tile" src={heartTile}/>
      <div className="cart-item">
        <div className="">{listItemsInCart()}</div>
      </div>
      <div className="coupon-code"> 
        <label>Enter coupon code</label>
        <input type="text"/>
      </div>
<h3 className="cart-total">Total: ${cartTotal}</h3>
      <button className="checkout-pay" onClick={checkout}>
        Check Out
      </button>
    </div>
  );
}

export default Cart;

import { React } from 'react'


function Cart({ cart, setCart, amountOfItems }) {



  const cartTotal = cart

  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex((cartItem) => cartItem.id === item.id);

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }
      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  // const amountOfItems = (id) => cart.filter((item) => item.id === id).length;

  const listItemsInCart = () => cart.map((item) => (
    <div className='' key={item.id}>
      <h3 className='' >
        {/* ({amountOfItems(item.id)}) {`${item.name}`} */}
      </h3>
      <img className="cart-image" src={`${item.background_image}`} alt={item.name} /> <br />
      <button className='' type="submit" onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  ));

  const checkout = () => {
    setCart([])
  }

  return (
    <div className="">
      <h2 className=''>Your Shopping Cart</h2>
      <div className=''>
        <div className="">{listItemsInCart()}</div>
        <div className=''>
          <h3 className=''>Total: ${cartTotal}</h3>
          <button className='' onClick={checkout}>Check Out</button>
        </div>
      </div>
    </div>
  )

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

export default Cart
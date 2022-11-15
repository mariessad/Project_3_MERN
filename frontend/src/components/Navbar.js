import React from 'react'
import { Link } from "react-router-dom";
import * as userService from "./../utilities/users-service";


const Navbar = ({ user, setUser, cart }) => {
  // console.log(user);
  const handleLogOut = () => {
    // Call the logout function
    userService.logOut();

    // Set the user back to null
    setUser(null);
  };
  return (
    <nav>
    
   
    <ul> 
    <Link to="/"><li className="nav-li heart">♥</li></Link>
    <Link to="/art"><li className="nav-li">Art</li></Link>
    <Link to="/fiber"><li className="nav-li">Fiber</li></Link>
    <Link to="/jewelry"><li className="nav-li">Jewelry</li></Link>
    <Link to="/about"><li className="nav-li">About</li></Link>
      {/* <Link to="/orders"><li className="nav-li">Order History</li></Link> */}
      &nbsp; <span className="nav-li">|</span> &nbsp;
      {/* <Link to="/orders/new/:id"><li className="nav-li">New Order</li></Link> */}
      <li className="nav-li"><span className='white'>Welcome, {user.newUser.name}</span></li>
      <Link onClick={() => {
            return handleLogOut();
          }} className="nav-li" aria-current="page" > Log Out</Link>
      <Link to="/cart"><li className="nav-li cart">({cart.length})<img src={"/img/shopping-cart-3045.png"}></img></li></Link>
    </ul>
    </nav>
  );
};

export default Navbar;




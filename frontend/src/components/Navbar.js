import React from 'react'
import { Link } from "react-router-dom";


const Navbar = ({ user }) => {
  // console.log(user);
  return (
    <nav>
    
   
    <ul> 
    <Link to="/"><li className="nav-li heart">♥</li></Link>
    <Link to="/art"><li className="nav-li">Art</li></Link>
    <Link to="/fiber"><li className="nav-li">Fiber</li></Link>
    <Link to="/jewelry"><li className="nav-li">Jewelry</li></Link>
    <Link to="/about"><li className="nav-li">About</li></Link>
    
      <Link to="/orders"><li className="nav-li">Order History</li></Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/orders/new/:id"><li className="nav-li">New Order</li></Link>
      {/* <span style={{ paddingLeft: "10px" }}>Welcome {user.newUser.name}</span> */}
      <Link to="/cart"><li className="nav-li cart"><img src={"/img/shopping-cart-3045.png"}></img></li></Link>
    </ul>
    </nav>
  );
};

export default Navbar;




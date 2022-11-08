import React from 'react'
import { Link } from "react-router-dom";


const Navbar = ({ user }) => {
  // console.log(user);
  return (
    <nav>
    
    <Link to="/"><img className="nav-logo" src="/img/heart_eye_tile.png"></img></Link>
    <ul>
    <Link to="/art"><li className="nav-li">Art</li></Link>
    <Link to="/fiber"><li className="nav-li">Fiber</li></Link>
    <Link to="/jewelry"><li className="nav-li">Jewelry</li></Link>
    <Link to="/about"><li className="nav-li">About</li></Link>
    
      <Link to="/orders"><li className="nav-li">Order History</li></Link>
      {/* &nbsp; | &nbsp; */}
      <Link to="/orders/new/:id"><li className="nav-li">New Order</li></Link>
      {/* <span style={{ paddingLeft: "10px" }}>Welcome {user.newUser.name}</span> */}
      <Link to="/cart"><li className="nav-li cart">Cart<img src={"/img/shopping-cart-3045.png"}></img></li></Link>
    </ul>
    </nav>
  );
};

export default Navbar;

// function Navbar() {
//   return (
//       <>
//         <nav>
//           <a href="/home">
//             <img className="nav-logo" src="/img/heart_eye_tile.png"></img>
//           </a>
//           <ul>
//             <a href="/art">
//               <li className="nav-li">Art</li>
//             </a>
//             <a href="/fiber">
//               <li className="nav-li">Fiber</li>
//             </a>
//             <a href="/jewelry">
//               <li className="nav-li">Jewelry</li>
//             </a>
//             <a href="/about">
//               <li className="nav-li">About</li>
//             </a>
//             <a href="/contact">
//               <li className="nav-li">Contact</li>
//             </a>
//             <a href="/admin">
//               <li className="nav-li">Admin</li>
//             </a>
//             <a href="/cart">
//               <li className="nav-li cart">
//                 <img src={"/img/shopping-cart-3045.png"}></img>Cart
//               </li>
//             </a>
//           </ul>
//         </nav>
//       </>
//     );
//   }
  


// export default Navbar



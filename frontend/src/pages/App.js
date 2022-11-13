import "../App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage";
import NewOrderPage from "./NewOrderPage";
import OrderHistoryPage from "./OrderHistoryPage";
import Navbar from "../components/Navbar";
import Art from "./Art";
import Home from "./Home";
import Footer from "../components/Footer";
import { getUser } from "../utilities/users-service";


// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());
  // console.log(user);

//   // call data from database

//   const [artData, setArtData] = useState(null);

//   // fires once upon render
//   useEffect(() => {
//   const fetchAllArt = async () => {
//     const response = await fetch('http://localhost:5000/api/arts')
//   // pass the json data on, gives array of objects
//     const json = await response.json()

//   if(response.ok){
//     setArtData(json)
//   }
// }

// // call the function
// fetchAllArt()
//   }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/orders/new/:id" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/art" element={<Art />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
};

export default App;

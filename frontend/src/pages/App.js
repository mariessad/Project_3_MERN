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

  const [poemApi, setPoemApi] = useState(["poem", "poems"]);

  const queryPoemAP1 = async () => {
    try {
      const response = await fetch(
        `https://www.poemist.com/api/v1/randompoems`
      );
      const data = await response.json();
      console.log(data);
      setPoemApi(data);
    } catch (e) {
      console.log(e);
    }
  };

  const [productApi, setProductApi] = useState([])

  const queryProductsApi = async () => {
    try {
      const response = fetch("https://fakestoreapi.com/products/1")
      const data = await response.json();
      console.log(data);
      setProductApi(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route
              path="/"
              element={<Home queryPoemAP1={queryPoemAP1} poemApi={poemApi} />}
            />
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

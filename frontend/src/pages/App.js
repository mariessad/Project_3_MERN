import "../App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./AuthPage"
import NewOrderPage from "./NewOrderPage";
import OrderHistoryPage from "./OrderHistoryPage";
import Navbar from "../components/Navbar";
import { getUser } from "../utilities/users-service";

// CREATE COMPONENT
const App = () => {
  // Create a variable to hold the state of our component
  const [user, setUser] = useState(getUser());
  // console.log(user);
  return (
    <main className="App">
      {user ? (
        <>
          <Navbar user={user} />
          <Routes>
            <Route path="/orders/new/:id" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
};

// EXPORT COMPONENT
export default App;

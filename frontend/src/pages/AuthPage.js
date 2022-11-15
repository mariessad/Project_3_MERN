// IMPORT REACT
import React from "react";
import background from "../pinkbg.jpg";
import SignIn from "../components/SignIn";

// ADDITIONAL IMPORTS
import SignUpForm from "../components/SignUpForm";

// CREATE COMPONENT
const AuthPage = ({ setUser }) => {
  return (
    <div style={{ backgroundImage: `url(${background})`, width: "100%", height:"100vh"}}>
      {/* <h1>AuthPage</h1> */}
      <h1 className="title">Sign up for an account or Log in</h1>
      <SignUpForm setUser={setUser} />
      <SignIn setUser={setUser} />
    </div>
  );
};

// EXPORT COMPONENT
export default AuthPage;

import React, { useState } from "react";



// ADDITIONAL IMPORTS
import { login } from "./../utilities/users-service";

// CREATE COMPONENT
const SignIn = ({ setUser }) => {
  // Create different state variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Create a function to handle input changes
  const handleInputChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  // Create a function to handle form submission
  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      // Retrieve the logged in user
      const user = await login({ email, password });
      // Add the user to state
      setUser(user.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form onSubmit={(e) => {
      return handleFormSubmission(e);
    }}>
      <h4 className=""> Have an Account? </h4>
      
        <label>Email address</label>
        <input type="email" name="email" required
          onChange={(e) => {
            return handleInputChange(e);
          }} value={email} placeholder="Enter email" />

        <label >Password</label>
        <input type="password"
          name="password"
          required
          onChange={(e) => {
            return handleInputChange(e);
          }}
          value={password} placeholder="Password" />
      <button className="login-button" type="submit">
        LOG IN
      </button>
      <p className="">&nbsp;{error}</p>
    </form>
  );


};

// EXPORT COMPONENT
export default SignIn;

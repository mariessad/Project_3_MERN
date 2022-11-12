import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { BrowserRouter as Router } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

// RENDER COMPONENTS
ReactDOM.createRoot(document.querySelector("#root")).render(
  <Router>
    <App />
  </Router>
);

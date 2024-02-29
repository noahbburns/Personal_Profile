// App.js

import React from "react";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
};

export default App;


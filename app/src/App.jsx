import React, { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import './App.css';


function App() {

  return (
    <Router>
    <div>
      <Layout>
        <div className='landingpage-container'>
          <div className="hero-container">
            <p>Hello, I'm</p>
            <div className="hero-text" style={{ fontFamily: 'CameraObsura, sans-serif'}} >Noah Burns</div>
          </div>
        </div>
      </Layout>
    </div>
    </Router>
  );
};

export default App;

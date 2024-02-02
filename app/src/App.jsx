import React, { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import locationIcon from "./assets/location.png";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink
} from "react-router-dom";

import './App.css';


function App() {

  return (
    <Router>
    <div>
      <Layout>
        <div className='landingpage-container'>
          <div className="hero-container">
            <div className="hero-text">Hi, I'm Noah</div>
            <div className="hero-location">
             <img className="location-icon" src={locationIcon}></img> 
             <NavLink className="location-link">Montréal, QC</NavLink>
            </div>
            
            <div className="hero-desription">
              I'm currently a third year Software Engineering student at Concordia University
            </div>
          </div>
          <div className="projects-container">
            <div className="projects-container-inner-large"></div>
            <div className="projects-container-inner-small">

            </div>
            <div className="projects-container-inner-small">
              
            </div>
          </div>
        </div>
      </Layout>
    </div>
    </Router>
  );
};

export default App;

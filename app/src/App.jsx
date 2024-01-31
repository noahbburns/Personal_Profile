import React, { useEffect, useState } from 'react';
import Layout from './Layout/Layout';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";


import './App.css'


function App() {

  return (
    <Router>
    <div>
      <Layout>
        <div className='landingpage-container'>
          
        </div>
      </Layout>
    </div>
    </Router>
  );
};

export default App;

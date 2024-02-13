import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
        <div className="header-links">
            <NavLink className="link"> About </NavLink>
            <NavLink className="link"> Porfolio </NavLink>
            <NavLink className="link"> Contact </NavLink>
        </div>
    </div>
  );
};

export default Header;
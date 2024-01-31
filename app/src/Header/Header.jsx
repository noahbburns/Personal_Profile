import React from 'react';
import { NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
         <NavLink className="header-name"> NOAH BURNS </NavLink>
        <div className="header-links">
            <NavLink className="link"> ABOUT </NavLink>
            <NavLink className="link"> PORTFOLIO </NavLink>
            <NavLink className="link"> CONTACT </NavLink>
        </div>
    </div>
  );
};

export default Header;
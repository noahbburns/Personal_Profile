import React from "react";
import "./Header.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-links">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
          activeClass="active-link"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1200}
          className="link"
          activeClass="active-link"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1200}
          className="link"
          activeClass="active-link"
        >
          Contact
        </ScrollLink>
      </div>
    </div>
  );
};

export default Header;

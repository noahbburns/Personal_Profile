import React from "react";
import "./Footer.css";
import githubIcon from "../assets/github.svg";
import resumeIcon from "../assets/resume.svg";
import linkedinIcon from "../assets/linkin.svg";
import { NavLink } from "react-router-dom";
import resume from "../assets/Noah Burns CV 2.0.pdf";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="copyright">©2024 - Noah Burns</div>
      </div>
      <div className="footer-right">
        <div className="extensions">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="extension"
          >
            <img src={resumeIcon} className="extension-icon" alt="Resume" />
          </a>
          <a
            href="https://github.com/noahbburns"
            target="_blank"
            rel="noopener noreferrer"
            className="extension"
          >
            <img src={githubIcon} className="extension-icon" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/noah-burns-279699284"
            target="_blank"
            rel="noopener noreferrer"
            className="extension"
          >
            <img src={linkedinIcon} className="extension-icon" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

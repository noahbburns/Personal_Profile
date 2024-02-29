import React from "react";
import "./About.css";

import java from "../assets/java.svg";
import python from "../assets/python.svg";
import javascript from "../assets/javascript.svg";
import c from "../assets/c.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import react from "../assets/react.svg";
import vite from "../assets/vite.svg";
import figma from "../assets/figma.svg";
import git from "../assets/git.svg";
import github from "../assets/github.svg";
import tailwindcss from "../assets/tailwindcss.svg";


const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-title">ABOUT ME</div>
        <div className="about-description">
          <div className="background">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam molestiae fugit iure repellat officia minima dolore omnis qui rerum eius nulla at suscipit hic laborum dolorum, fugiat voluptatum sint delectus! Velit perspiciatis ratione porro perferendis labore vero ab. Ducimus, commodi nostrum deleniti animi labore eius dicta eaque suscipit repellat. Saepe.
          </div>
          <div className="skills-container">
            <div className="skill-category">
              <div className="skill-category-label">LANGUAGES</div>
              <ul>
                <li className="skill-category-item">
                  <img src={java} className="skill-image" />
                  Java
                  </li>
                <li className="skill-category-item">
                <img src={javascript} className="skill-image" />JavaScript</li>
                <li className="skill-category-item">
                <img src={html} className="skill-image" />HTML</li>
                <li className="skill-category-item">
                <img src={css} className="skill-image" />CSS</li>
                <li className="skill-category-item">
                <img src={python} className="skill-image" />Python</li>
                <li className="skill-category-item">
                <img src={c} className="skill-image" />C</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-category-label">FRAMEWORKS</div>
              <ul>
                <li className="skill-category-item">
                <img src={react} className="skill-image" />ReactJS</li>
                <li className="skill-category-item">
                <img src={vite} className="skill-image" />Vite</li>
                <li className="skill-category-item">
                <img src={tailwindcss} className="skill-image" />Tailwindcss</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-category-label">TOOLS</div>
              <ul>
                <li className="skill-category-item">
                <img src={github} className="skill-image" />GitHub</li>
                <li className="skill-category-item">
                <img src={git} className="skill-image" />Git</li>
              </ul>
            </div>
            <div className="skill-category">
              <div className="skill-category-label">DESIGN</div>
              <ul>
                <li className="skill-category-item">
                <img src={figma} className="skill-image" />Figma</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default About;

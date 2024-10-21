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
      <h2 className="about-title">ABOUT ME</h2>
      <div className="about-description">
        <div className="background">
          Im not your average developer. I didn't grow up in a big city like
          where I am now, I grew up in a small town in the middle of nowhere
          working hard on my father's farm.
        </div>
        <div className="skills-container">
          <div className="skill-category">
            <h3 className="skill-category-label">LANGUAGES</h3>
            <ul>
              <li className="skill-category-item">
                <img src={java} alt="Java" className="skill-image" />
                Java
              </li>
              <li className="skill-category-item">
                <img
                  src={javascript}
                  alt="JavaScript"
                  className="skill-image"
                />
                JavaScript
              </li>
              <li className="skill-category-item">
                <img src={html} alt="HTML" className="skill-image" />
                HTML
              </li>
              <li className="skill-category-item">
                <img src={css} alt="CSS" className="skill-image" />
                CSS
              </li>
              <li className="skill-category-item">
                <img src={python} alt="Python" className="skill-image" />
                Python
              </li>
              <li className="skill-category-item">
                <img src={c} alt="C" className="skill-image" />C
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-label">FRAMEWORKS</h3>
            <ul>
              <li className="skill-category-item">
                <img src={react} alt="ReactJS" className="skill-image" />
                ReactJS
              </li>
              <li className="skill-category-item">
                <img src={vite} alt="Vite" className="skill-image" />
                Vite
              </li>
              <li className="skill-category-item">
                <img
                  src={tailwindcss}
                  alt="Tailwind CSS"
                  className="skill-image"
                />
                Tailwind CSS
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-label">TOOLS</h3>
            <ul>
              <li className="skill-category-item">
                <img src={github} alt="GitHub" className="skill-image" />
                GitHub
              </li>
              <li className="skill-category-item">
                <img src={git} alt="Git" className="skill-image" />
                Git
              </li>
            </ul>
          </div>
          <div className="skill-category">
            <h3 className="skill-category-label">DESIGN</h3>
            <ul>
              <li className="skill-category-item">
                <img src={figma} alt="Figma" className="skill-image" />
                Figma
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

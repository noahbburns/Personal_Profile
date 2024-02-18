import React from "react";
import "./About.css";

import profileImage from "../assets/cat.jpeg";

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-title">ABOUT ME</div>
      <div className="about-pair">
        <div className="about-image">
          <img className="portrait" src={profileImage}></img>
        </div>
        <div className="about-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          aliquam eum molestias blanditiis, quis rerum. Deleniti doloribus
          aspernatur repellendus eligendi alias. Voluptates vel ab amet iste
          excepturi magni incidunt eaque.
        </div>
      </div>
    </div>
  );
};

export default About;

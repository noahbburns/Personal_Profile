import React from "react";
import "./Hero.css";
import { NavLink } from "react-router-dom";

import locationIcon from "../assets/location.svg";
import FadeInOutText from "../FadeInOutText/FadeInOutText.jsx";

const Hero = () => {
  return (
    <div className="hero-container">
      <FadeInOutText text="HELLO THERE, I'M" additionalClass="hero-text" />
      <FadeInOutText text="Noah Burns" additionalClass="hero-name" />
      <div className="hero-location">
        <FadeInOutText
          text={
            <img
              className="location-icon"
              src={locationIcon}
              alt="Location Icon"
            />
          }
        />
        <FadeInOutText
          text={
            <NavLink
              to="https://www.google.ca/maps/place/Montreal,+QC/@45.5593046,-73.8766812,11z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu"
              className="location-link"
            >
              Montréal, QC
            </NavLink>
          }
        />
      </div>
      <FadeInOutText
        text="A third-year Software Engineering student at Concordia University"
        additionalClass="hero-small-about"
      />
    </div>
  );
};

export default Hero;

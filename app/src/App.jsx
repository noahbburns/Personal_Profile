// App.js

import React from 'react';
import Layout from './Layout/Layout';
import locationIcon from "./assets/location.svg";
import FadeInOutText from './FadeInOutText/FadeInOutText';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import './App.css';
import profileImage from "./assets/cat.jpeg";
import Contact from './Contact/Contact';
import ProjectsCard from "./ProjectsCard/ProjectsCard.jsx";

const App = () => {

  const realEstateWebsite = {
    projectImg: "./real-estate-website.png",
    projectTitle: "Real-Estate Web App",
    projectDescription: "A web app to explore available homes to rent or buy, among other functions.",
    projectTags: ["ReactJS", "NodeJS", "MySQL"],
    projectGitHub: "https://github.com/CedricLimAhTock/0verdrive-soen341projectF2023",
    projectLink: ""
  };
  
  const petAdoptionWebsite = {
    projectImg: "./pet-adoption-website.png",
    projectTitle: "Pet Adoption Website",
    projectDescription: "A simple website for pet adoption showcasing UI UX elements",
    projectTags: ["HTML", "CSS", "JavaScript", "PHP"],
    projectGitHub: "https://github.com/noahbburns/Adoption-Website",
    projectLink: "https://users.encs.concordia.ca/~n_burns/Pet-Adoption/home.php"
  };
  
  return (
    <Router>
      <div>
        <Layout>
          <div className='landingpage-container'>
            <div className="hero-container">
              <FadeInOutText text="HELLO THERE, I'M" additionalClass="hero-text" />
              <FadeInOutText text="Noah Burns" additionalClass="hero-name" />
              <div className="hero-location">
                <FadeInOutText text={<img className="location-icon" src={locationIcon} alt="Location Icon" />}/>
                <FadeInOutText text={<NavLink to="https://www.google.ca/maps/place/Montreal,+QC/@45.5593046,-73.8766812,11z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a541c64b70d:0x654e3138211fefef!8m2!3d45.5018869!4d-73.5673919!16zL20vMDUycDc?entry=ttu" className="location-link">Montréal, QC</NavLink>}/>
              </div>
              <FadeInOutText text="A third-year Software Engineering student at Concordia University" additionalClass="hero-small-about" />
            </div>
            <div className="content-container">
              <div id = "about" className="about-container">
                <div className="about-title">ABOUT ME</div>
                <div className="about-pair">
                  <div className="about-image">
                    <img className="portrait" src={profileImage}></img>
                  </div>
                  <div className="about-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aliquam eum molestias blanditiis, quis rerum. Deleniti doloribus aspernatur repellendus eligendi alias. Voluptates vel ab amet iste excepturi magni incidunt eaque.
                  </div>
                </div>
              </div>
              <div id = "projects" className="projects-container"> 
                <div className="projects-title">SELECTED WORKS</div>
                <div className="projects-container-inner">
                  <ProjectsCard {...realEstateWebsite} />
                  <ProjectsCard {...petAdoptionWebsite} />
                  <ProjectsCard {...petAdoptionWebsite} />
                </div>
              </div>
            </div>
            <Contact />
          </div>
        </Layout>
      </div>
    </Router>
  );
};

export default App;

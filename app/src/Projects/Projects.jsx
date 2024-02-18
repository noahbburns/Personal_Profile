import React from "react";
import "./Projects.css";

import ProjectsCard from "../ProjectsCard/ProjectsCard.jsx";

const Projects = () => {
  const realEstateWebsite = {
    projectImg: "./real-estate-website.png",
    projectTitle: "Real-Estate Web App",
    projectDescription:
      "A web app to explore available homes to rent or buy, among other functions.",
    projectTags: ["ReactJS", "NodeJS", "MySQL"],
    projectGitHub:
      "https://github.com/CedricLimAhTock/0verdrive-soen341projectF2023",
    projectLink: "",
  };

  const petAdoptionWebsite = {
    projectImg: "./pet-adoption-website.png",
    projectTitle: "Pet Adoption Website",
    projectDescription:
      "A simple website for pet adoption showcasing UI UX elements",
    projectTags: ["HTML", "CSS", "JavaScript", "PHP"],
    projectGitHub: "https://github.com/noahbburns/Adoption-Website",
    projectLink:
      "https://users.encs.concordia.ca/~n_burns/Pet-Adoption/home.php",
  };
  return (
    <div id="projects" className="projects-container">
      <div className="projects-title">SELECTED WORKS</div>
      <div className="projects-container-inner">
        <ProjectsCard {...realEstateWebsite} />
        <ProjectsCard {...petAdoptionWebsite} />
        <ProjectsCard {...petAdoptionWebsite} />
      </div>
    </div>
  );
};

export default Projects;

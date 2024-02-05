import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ 
    projectImg, 
    projectTitle, 
    projectDescription, 
    projectTags 
}) => {
  return (
    <div className="card-container">
      <img src={projectImg} className="project-image" />
      <div className="card-info">
        <div className="card-title">{projectTitle}</div>
        <div className="card-links"></div>
        <div className="card-tags">
          {projectTags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="card-description">{projectDescription}</div>
      </div>
    </div>
  );
};

export default ProjectsCard;

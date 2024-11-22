import React from 'react';

const ProjectCard = ({ image, title, description, demoLink, repoLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="buttons">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="demo-button">DEMO</button>
        </a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <button className="repo-button">REPO</button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;


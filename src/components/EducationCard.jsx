import React from 'react';

const EducationCard = ({ image, title, description, date }) => {
  return (
    <div className="education-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="education-date">{date}</span>
    </div>
  );
};

export default EducationCard;

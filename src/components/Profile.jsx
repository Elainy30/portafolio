import React from 'react';
import profilePic from '../assets/profile-pic.png'; 
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Profile = () => {
  return (
    <div id="profile" className="profile">
       <div className="social-links">
      <a href="https://www.instagram.com/elainyv_/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://web.facebook.com/elainy.vilorio" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
      <a href="https://github.com/Elainy30" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://www.linkedin.com/in/elainy-vilorio" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
    </div>
      <div className="profile-text">
        <h3>Hola! Soy</h3>
        <h1>Elainy Vilorio</h1>
        <h3>DESARROLLADORA WEB FRONT-END</h3>
        <p>
        Soy una desarrolladora web front-end con experiencia en HTML5, CSS3, JavaScript, y 
        frameworks como React. Me apasiona crear interfaces modernas y funcionales, utilizando tecnologías como TypeScript, 
        Tailwind CSS, y Redux. Además, domino herramientas como Git y GitHub para el control de versiones, 
        y tengo conocimientos en Node.js y MongoDB. 
        Mi enfoque es escribir código limpio y eficiente, siempre buscando mejorar y aprender nuevas tecnologías.
        </p>
        <a
          href="https://drive.google.com/file/d/1T73hEpO82WsBkTRZhw2O-DwD8XoIuGFB/view"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cv"
        >
          VER CV ACTUALIZADO
        </a>
      </div>
      <div className="profile-image">
        <img src={profilePic} alt="Elainy Vilorio" />
      </div>
    </div>
    
  );
};

export default Profile;

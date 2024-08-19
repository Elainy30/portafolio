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
          Soy una estudiante de programación con conocimientos en el área de frontend,
          específicamente en HTML, CSS, JavaScript, para trabajar de manera efectiva en entornos colaborativos.
          Me considero una persona pragmática, autodidacta y curiosa, cualidades que me han permitido iniciar y
          avanzar en mi camino en la tecnología.
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

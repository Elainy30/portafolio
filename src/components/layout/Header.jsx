import React from 'react';
import logo from '../../assets/logos/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li><a href="#profile">INICIO</a></li>
          <li><a href="#projects">PROYECTOS</a></li>
          <li><a href="#skills">HABILIDADES</a></li>
          <li><a href="#education">FORMACIÓN</a></li>
          <li><a href="#contact">CONTACTO</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;


import React from 'react';
import EducationCard from './EducationCard';
import Slider from 'react-slick';
import education01 from '../assets/digitalMujer.png';
import education02 from '../assets/unicaribe-logo.png';
import education03 from '../assets/aluraoracle.png';
import education04 from '../assets/udemy.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const EduSection = () => {
  const educationData = [
    {
      image: education01,
      title: 'Desarrollo web + Cloud Computing',
      description: ' Desarrollo de habilidades tecnológicas y liderazgo en el ámbito digital, con enfoque en empoderamiento y transformación profesional.',
      date: 'Enero 2024 - Agosto 2024'
    },
    {
      image: education02,
      title: 'Ingeniería de Software',
      description: 'Diseño, desarrollo y optimización de sistemas complejos, con un enfoque en buenas prácticas, arquitectura y gestión de proyectos.',
      date: 'Septiembre 2022 - Pausado'
    },
    {
      image: education03,
      title: 'Desarrollo Backend',
      description: 'Diseño y desarrollo de aplicaciones con Java, Spring Framework, y la integración de IA, enfocados en productividad y escalabilidad.',
      date: 'Agosto 2024 - Diciembre 2024'
    }, 
    {
      image: education04,
      title: 'React de Cero a Experto',
      description: 'Curso intensivo en desarrollo web full stack utilizando MERN stack (MongoDB, Express, React, Node.js)',
      date: 'Julio 2024 - Actual'
    }
  ];

 // Configuración del carrusel
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,           
    autoplaySpeed: 5000,      
  };

  return (
    <section id="education" className="edu-section">
      <h2>Formación</h2>
      <Slider {...settings}>
        {educationData.map((edu, index) => (
          <EducationCard
            key={index}
            image={edu.image}
            title={edu.title}
            description={edu.description}
            date={edu.date}
          />
        ))}
      </Slider>
    </section>
  );
};

export default EduSection;
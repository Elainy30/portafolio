import React from 'react';
import ProjectCard from './ProjectCard';
import projects01 from '../assets/projects01.png';
import projects02 from '../assets/projects02.png';
import projects04 from '../assets/projects04.png';

const ProjectsSection = () => {
  const projects = [
    {
      image: projects01,
      title: 'Encriptador de Texto',
      description: 'Aplicación web que permite encriptar y desencriptar texto de manera simple y rápida.',
      demoLink: 'https://elainy30.github.io/EncriptadorDeTexto/',
      repoLink: 'https://github.com/Elainy30/EncriptadorDeText'
    },
    {
      image: projects02,
      title: 'Juego del Número Secreto',
      description: 'Este proyecto es un sencillo juego del número secreto implementado en JavaScript.',
      demoLink: 'https://elainy30.github.io/2035-logica-programacion-2-Aula1/',
      repoLink: 'https://github.com/Elainy30/2035-logica-programacion-2-Aula1'
    },
    {
      image: projects04,
      title: 'Buscador de Gif',
      description: 'Aplicación web desarrollada en React que permite buscar y visualizar GIFs animados utilizando la API de Giphy.',
      demoLink: 'https://gif-expect.netlify.app',
      repoLink: 'https://github.com/Elainy30/gif-expect-react'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>PROYECTOS</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
      <a
          href="https://github.com/Elainy30?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cv"
        >
          VER CV ACTUALIZADO
        </a>
    </section>
  );
};

export default ProjectsSection;

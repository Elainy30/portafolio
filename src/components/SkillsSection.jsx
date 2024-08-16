import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaNodeJs } from 'react-icons/fa';
import { SiBabel, SiTailwindcss, SiRedux, SiJest, SiHeroku, SiMongodb, SiExpress } from 'react-icons/si';

const SkillsSection = () => {
  return (
    <div id="skills" className="skills-section">
      <h2>Habilidades</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt />
          <span>CSS3</span>
        </div>
        <div className="skill">
          <FaJs />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaGithub />
          <span>GitHub</span>
        </div>
        <div className="skill">
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div className="skill">
          <FaReact />
          <span>React</span>
        </div>
        <div className="skill">
          <SiRedux />
          <span>Redux</span>
        </div>
        <div className="skill">
          <FaNodeJs />
          <span>Node.js</span>
        </div>
        <div className="skill">
          <SiBabel />
          <span>Babel</span>
        </div>
        <div className="skill">
          <SiTailwindcss />
          <span>Tailwind CSS</span>
        </div>
        <div className="skill">
          <SiJest />
          <span>Jest</span>
        </div>
        <div className="skill">
          <SiHeroku />
          <span>Heroku</span>
        </div>
        <div className="skill">
          <SiMongodb />
          <span>MongoDB</span>
        </div>
        <div className="skill">
          <SiExpress />
          <span>Express</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;

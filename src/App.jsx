import React from 'react';
import './App.css'; 
import { Header, Footer, Profile, ProjectsSection, EduSection, SkillsSection, ContactForm, Modal } from './index';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Modal/>
      <main >
        <Profile/>
      </main>
      <ProjectsSection/>
      <EduSection/>
      <SkillsSection/>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default App;

import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import './App.css'; 
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EduSection from './components/EduSection';
import ContactForm from './components/ContactForm';
import Modal from './components/Modal';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
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

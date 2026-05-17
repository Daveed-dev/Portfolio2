import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import Project from './components/Project.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;

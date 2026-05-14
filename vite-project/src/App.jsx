import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Skill from './components/Skill.jsx';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skill />
    </>
  );
};

export default App;

import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import './index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import HomeContent from './homeContent';
import './styles.css';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Footer from './pages/footer';

export default function App() {
  return (
    <>
      <div className="home-page" id ='home'>
        <Navbar />
        <HomeContent />
      </div>
      <div className='new-page about' id ='about'>
          <About />
      </div>
      <div className='new-page services' id ='services'>
        <div className='box'></div>
          <Services />
      </div>
      <div className="new-page contact" id ='contact'>
        <Contact />
      </div>
      <div className="new-page footer">
        <Footer />
      </div>
    </>
  );
}

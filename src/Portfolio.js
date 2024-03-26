import './App.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import About from './Pages/About/About.jsx';
import Projects from './Pages/Projects/Projects.jsx';
function Portfolio() {
  return (
    <>
    <div className='portfolio'>
      <div className='portfolio-header'>
        <motion.div
          initial={{ opacity: 0, scale: 0}}
          animate={{ opacity: 1, scale: 1}}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ 
            scale: 1.1,
            color: 'red'
          }}
        > Welcome to Joshua Colin Yalung's Portfolio! </motion.div>
      </div>
      <div className='portfolio-contents'>
        <p>About Me</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </div>
      <About />
      <Projects />
    </div>
    </>
  );
}

export default Portfolio;
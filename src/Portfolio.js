import './Portfolio.css';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, animateScroll as scroll } from 'react-scroll';
import About from './Pages/About/About.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Overview from './Pages/Overview/Overview.jsx';
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
      <Overview />
      <About />
      <Projects />
    </div>
    </>
  );
}

/*
link references:
https://www.framer.com/motion/animation/
https://codesandbox.io/p/sandbox/basic-6t84k?file=%2Fsrc%2Findex.js
*/
export default Portfolio;
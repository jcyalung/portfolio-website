import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
export default function Projects() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <div className='projects'>
            <h3>Projects</h3>
            <div className='projects-description'>
                <p>Here are some of the projects I've worked on!</p>
            </div>
        </div>
        <motion.div
      layout
      data-isOpen={isOpen}
      initial={{ borderRadius: 50 }}
      className="parent"
      onClick={() => setIsOpen(!isOpen)}
    >
        <motion.div layout className="child" />
        </motion.div>
        </>
    )
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link, { animateScroll as scroll } from 'react-scroll';
import './About.css';

export default function About() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <motion.div
            className='about'
        >
            <h3>About Me</h3>
            <div className='about-description'>
            <p> My name is Joshua Colin Yalung and I'm currently pursuing Computer Science at Ohlone College.
                
            </p> 
            </div>
        </motion.div>
        
        </>
    )
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link, { animateScroll as scroll } from 'react-scroll';
import './About.css';
import Portrait from '../../images/portrait.jpg';

export default function About() {
    return (
        <>
        <motion.div
            className='about'
            id='about'
        >
            <div className='about-header'>
                <h3>About Me</h3>
            <motion.img
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
              }}
            src={Portrait}
            alt='Portrait'/>
            </div>
            <div className='about-description'>
            <p> My name is Joshua Colin Yalung and I'm currently pursuing Computer Science at Ohlone College.
                
            </p> 
            </div>
        </motion.div>
        
        </>
    )
}
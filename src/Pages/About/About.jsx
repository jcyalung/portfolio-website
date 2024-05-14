import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import Portrait from '../../images/portrait.jpg';

export default function About() {
    return (
        <>
        <div className='about-route' id='about'/>
        <motion.div className='about'>
            <div className='about-header'>
                <h2>About Me</h2>
                <motion.img
                    animate={{
                        scale: [1, 1.1, 1.1, 1],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 0.5, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    src={Portrait}
                    alt='Portrait'/>
            </div>
            <div className='about-description'>
                <p> 
                    My name is Joshua Colin Yalung and I'm currently pursuing Computer Science at Ohlone College.
                    In fall 2024, I will be transferring to the University of Califonia, Irvine to pursue a bachelor's degree
                    as well as a master's degree in computer science. I enjoy experimenting with different programming languages, frameworks, 
                    and libraries to create full-stack web applications. 
                    <motion.p
                    animate={{ 
                        scale: [1, 1.02, 1.02, 1],
                        color: ["#000000", "#000000", "#000000", "#000000"]
                        }}
                    transition={{ 
                        duration: 1,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1
                        }}> 
                        I am currently seeking a 2024 summer internship.  
                    </motion.p>  
                    <br />
                    Right now, I am working on SJSU's SCE club website using Next.js and a gym social media app using Swift.
                </p> 
            </div>
        </motion.div>
        </>
    )
}
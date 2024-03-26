import React from 'react';
import './Contact.css';
import LinkedIn from './Icons/linkedin.svg';
import GitHub from './Icons/github.svg';
import Email from './Icons/email.svg';
import { motion } from 'framer-motion';
const EMAIL = 'jyalung2022@gmail.com';
export default function ContactMe() {
    return (
        <>
        <div className='contact' id='contact'>
            <div className='contact-header'>
                <h2>Contact Me</h2>
            </div>
            <div className='contact-links'>
                <motion.a 
                href='https://www.linkedin.com/in/jcyal'
                target='_blank'
                whileHover={{ scale: 1.2 }}
                >
                    <img src={LinkedIn} alt='LinkedIn'/>
                </motion.a>
                <motion.a 
                href='https://github.com/jcyalung/'
                target='_blank'
                whileHover={{ scale: 1.2 }}
                >
                    <img src={GitHub} alt='GitHub'/>
                </motion.a>
                <motion.a 
                href={`mailto:${EMAIL}`}
                target='_blank'
                whileHover={{ scale: 1.2 }}
                >
                    <img src={Email} alt='Email'/>
                </motion.a>
            </div>
        </div>
        </>
    )
}
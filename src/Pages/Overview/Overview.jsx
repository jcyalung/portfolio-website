import './Overview.css';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import React from 'react';
export default function Overview() {
    return (
    <>
        <div className='overview'>
            <div 
            className='portfolio-contents'
            >
                <motion.p
                initial={{opacity: 1}}
                whileHover={{
                    scale: 1.2
                }}
                >
                    <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                        About Me
                    </Link>
                </motion.p>

                <motion.p
                initial={{opacity: 1}}
                whileHover={{
                    scale: 1.2
                }}
                > 
                    <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                        Projects
                    </Link>
                </motion.p>

                <motion.p
                initial={{opacity: 1}}
                whileHover={{
                    scale: 1.2
                }}
                > 
                    <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    >
                        Contact Me
                    </Link>
                </motion.p>
            <h4>Languages and Frameworks</h4>
            <div className='skills'>
                <div className='languages'>
                    <ul>
                        <b>Languages</b>
                        <motion.li whileHover={{color: '#000000', scale: 1.1}}>Python</motion.li>
                        <motion.li whileHover={{color: '#000000', scale: 1.1}}>JavaScript</motion.li>
                        <motion.li whileHover={{color: '#000000', scale: 1.1}}>C++</motion.li>
                        <motion.li whileHover={{color: '#000000', scale: 1.1}}>Java</motion.li>
                        <motion.li whileHover={{color: '#000000', scale: 1.1}}>HTML/CSS</motion.li>
                        <motion.li whileHover={{color: '#000000', scale: 1.1}}>SQL</motion.li>
                    </ul>
                </div>
                <div className='frameworks'>
                    <ul>
                        <b>Frameworks/Tools</b>
                        <motion.li whileHover={{color: '#000000', scale:1.1}}>React</motion.li>
                        <motion.li whileHover={{color: '#000000', scale:1.1}}>FastAPI</motion.li>
                        <motion.li whileHover={{color: '#000000', scale:1.1}}>Docker</motion.li>
                        <motion.li whileHover={{color: '#000000', scale:1.1}}>Qt</motion.li>
                        <motion.li whileHover={{color: '#000000', scale:1.1}}>Nginx</motion.li>
                        <motion.li whileHover={{color: '#000000', scale:1.1}}>Node</motion.li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}

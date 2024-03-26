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
                    <motion.ul>
                        <b>Languages</b>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>HTML/CSS</li>
                        <li>SQL</li>
                    </motion.ul>
                </div>
                <div className='frameworks'>
                    <motion.ul>
                        <b>Frameworks</b>
                        <li>React</li>
                        <li>FastAPI</li>
                        <li>Docker</li>
                        <li>Qt</li>
                        <li>Nginx</li>
                        <li>Node</li>
                    </motion.ul>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}

/*
initial={{opacity: 1}}
                whileHover={{
                    scale: 1.2
                }}
                */
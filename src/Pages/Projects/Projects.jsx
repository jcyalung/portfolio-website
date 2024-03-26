import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.css';
import SignIn from '../../images/sign-in.png';
import Bobatify from '../../images/bobatify.png';
export default function Projects() {
    const [project1, setProject1] = useState(false);
    const [project2, setProject2] = useState(false);
    const [project3, setProject3] = useState(false);
    return (
        <>
        <div className='projects' id='projects'>
            <h3>Projects</h3>
            <div className='projects-description'>
                <h4>Here are some of the projects I've worked on!</h4>
                <p>Click on the black dot to learn more.</p>
            </div>
            <div className='projects-list'>
            <a href='https://github.com/jcyalung/stedcskidsclub' target='_blank' rel='noreferrer'><h4>Sign-in/Sign-out Generator</h4></a>
                <motion.div
                    layout
                    data-isOpen={project1}
                    initial={{ borderRadius: 50 }}
                    className="parent"
                    onClick={() => setProject1(!project1)}>
                    <div className="project-content" data-isOpen={project1}>
                    <p>
                        I created a full-stack program using FastAPI and React to automate the process of signing in and out of extended care.
                        The program generates Microsoft Word documents containing a list of students who've checked in for the day.
                        This program is currently deployed and in use at Saint Edward Catholic School in Newark, California.
                    </p>
                    <img src={SignIn} alt='Sign-in Program' href='https://github.com/jcyalung/stedcskidsclub' target='_blank'/>
                    </div>
                    <motion.div layout className="child" data-isOpen={project1}/>
                </motion.div>
                <a href='https://github.com/jcyalung/stedcskidsclub' target='_blank' rel='noreferrer'><h4>Bobatify</h4></a>
                <motion.div
                    layout
                    data-isOpen={project2}
                    initial={{ borderRadius: 50 }}
                    className="parent"
                    onClick={() => setProject2(!project2)}>
                    <div className="project-content" data-isOpen={project2}>
                    <p>
                        Using OpenAI's GPT-3 and Spotify's API, 
                        I developed a web application that recommends boba drinks based on music playlists.
                        The program uses FastAPI, Python, and React for the backend and frontend.
                        This website was demoed and tested with a student base of 2000 students.
                    </p>
                    <img src={Bobatify} alt='Bobatify' href='https://github.com/jcyalung/bobatify' target='_blank'/>
                    </div>
                    <motion.div layout className="child" data-isOpen={project2}/>
                </motion.div>
                <h4>URL Shortener</h4>
                <motion.div
                    layout
                    data-isOpen={project3}
                    initial={{ borderRadius: 50 }}
                    className="parent"
                    onClick={() => setProject3(!project3)}>
                    <div className="url-shortener" data-isOpen={project3}>
                    <p>
                        I built a URL shortening service using Python's FastAPI library, SQLite, and Docker. 
                        With Python's sqlite3 library I managed stored URLs and shortened URLs in a SQLite database.
                        The API returns and HTTP 302 redirect to the stored link.
                        I added a frontend aspect with React for link management using Nginx as a reverse proxy to make requests
                        to the Python server.
                    </p>
                    </div>
                    <motion.div layout className="child" data-isOpen={project3}/>
                </motion.div>
            </div>
        </div>
        <div className='projects-end'/>
        </>
    )
}
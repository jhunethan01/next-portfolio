import { Link } from 'react-scroll';
import React, { useState, useEffect } from 'react';

const Nav = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = {
                home: 0,
                about: document.getElementById('about').offsetTop - 200,
                experience: document.getElementById('experience').offsetTop - 200,
                projects: document.getElementById('projects').offsetTop - 200,
                contact: document.documentElement.scrollHeight - window.innerHeight - 100
            }
            const scrollPosition = window.scrollY;

            Object.keys(sections).forEach(section => {
                const element = document.getElementById(section);
                const offset = sections[section];
                console.log(offset, scrollPosition);
                if (offset <= scrollPosition && offset + element.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='nav'>
            <div className='nav-links-filled'>
                <Link to="home" smooth={true} duration={250} className={`nav-links-item ${activeSection === 'home' ? 'nav-links-item-active' : ''}`} offset={-500}>Home</Link>
                <Link to="about" smooth={true} duration={250} className={`nav-links-item ${activeSection === 'about' ? 'nav-links-item-active' : ''}`} offset={-75}>About</Link>
                <Link to="experience" smooth={true} duration={250} className={`nav-links-item ${activeSection === 'experience' ? 'nav-links-item-active' : ''}`} offset={-75}>Experience</Link>
                <Link to="projects" smooth={true} duration={250} className={`nav-links-item ${activeSection === 'projects' ? 'nav-links-item-active' : ''}`} offset={-75}>Projects</Link>
                <Link to="contact" smooth={true} duration={250} className={`nav-links-item ${activeSection === 'contact' ? 'nav-links-item-active' : ''}`}>Contact</Link>
            </div>
        </div>
    );
};

export default Nav;
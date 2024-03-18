import React from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    return (
        <div>
            <nav>
                <Link to="home" smooth={true} duration={500} spy={true} className='nav-item' activeClass="nav-item-active" offset={-300}>Home</Link>
                <Link to="about" smooth={true} duration={500} spy={true} className='nav-item' activeClass="nav-item-active" offset={-300}>About</Link>
                <Link to="experience" smooth={true} duration={500} spy={true} className='nav-item' activeClass="nav-item-active" offset={-400}>Experience</Link>
                <Link to="projects" smooth={true} duration={500} spy={true} className='nav-item' activeClass="nav-item-active" offset={-450}>Projects</Link>
                <Link to="contact" smooth={true} duration={500} spy={true} className='nav-item' activeClass="nav-item-active" offset={-500}>Contact</Link>
            </nav>
        </div>
    );
};



export default Nav;
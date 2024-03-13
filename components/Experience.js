import React from 'react';

const Experience = () => {
    return (
        <div className='section'>
            <h1>Experience</h1>
            <table className='experience-table'>
                <tbody>
                    <tr>
                        <td className='small-column'>Nov 2021 - Present</td>
                        <td className='large-column'>
                            <h3>Main Event Travel</h3>
                            <p>Full Stack Web Developer</p>
                            <ul>
                                <li>
                                    HTML/CSS + JavaScript front end, PHP back end using CodeIgniter 3/4, Database using SQL
                                </li>
                                <li>
                                    Developed numerous new features, working with every aspect of the site, resulting in improved ease of use for both
                                    administration and customers.
                                </li>
                                <li>
                                    Conceptualized, and developed an automated email campaign system from scratch that reaches over 5,000
                                    customers, significantly boosting customer engagement and brand awareness.
                                </li>
                                <li>
                                    Successfully integrated an analytic feature that seamlessly tracked revenue and page views across the organization’s
                                    website, providing valuable insights for informed decision-making.
                                </li>
                                <li>
                                    Proven ability to navigate and maintain complex legacy code bases, identifying and rectifying existing bugs while
                                    enhancing existing features and implementing new functionalities.
                                </li>
                                <li>
                                    Developed an automated database repair tool that proactively id
                                </li>
                            </ul>
                            <div className='skills-container'>
                                <div className='skill-box'>Full Stack Web Development</div>
                                <div className='skill-box'>CodeIgniter 3 / 4</div>
                                <div className='skill-box'>PHP</div>
                                <div className='skill-box'>HTML</div>
                                <div className='skill-box'>CSS</div>
                                <div className='skill-box'>JavaScript</div>
                                <div className='skill-box'>PHP</div>
                                <div className='skill-box'>SQL</div>
                            </div>
                        </td>
                    </tr>
                    <tr className='experience-row'>
                        <td className='small-column'>Apr 2021 - Aug 2021</td>
                        <td className='large-column'>
                            <h3>Northcoders</h3>
                            <p>Student Web Developer</p>
                            <ul>
                                <li>
                                    Gained a comprehensive understanding of React and web development principles.
                                </li>
                                <li>
                                    Developed a strong foundation in full-stack web development, focusing on JavaScript and React.
                                    administration and customers.
                                </li>
                                <li>
                                    Mastered the full stack web development process, from planning and design with Figma to implementation and
                                    deployment.
                                </li>
                                <li>
                                    Collaborated with diverse teams of varying roles and sizes, contributing to the completion of sprint-based projects,
                                </li>
                            </ul>
                            <div className='skills-container'>
                                <div className='skill-box'>Full Stack Web Development</div>
                                <div className='skill-box'>React</div>
                                <div className='skill-box'>Node.js</div>
                                <div className='skill-box'>HTML</div>
                                <div className='skill-box'>CSS</div>
                                <div className='skill-box'>JavaScript / TypeScript</div>
                                <div className='skill-box'>PHP</div>
                                <div className='skill-box'>SQL</div>
                                <div className='skill-box'>Express</div>
                                <div className='skill-box'>SASS</div>
                                <div className='skill-box'>Unit Testing using JEST</div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Experience;
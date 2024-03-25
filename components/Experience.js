import React from 'react';

const Experience = () => {
    return (
        <div className='section' id='experience'>
            <h1 className='subtitle'>Experience</h1>
            <div className='experience-grid'>
                <div className='experience-item'>
                    <h1 className='subtitle'>Full Stack Web Developer</h1>
                    <p className='experience-date'>Main Event Travel [ Nov 2021 - Present ]</p>
                    <ul>
                        <li>
                            Main Event Travel is a provider of flights, hotels, buy ins and news for poker events around the world.
                        </li>
                        <li>
                            Independently launched <a href='https://maineventdealers.com' target='__blank'>Main Event Dealers</a> leading to the recruitment of 50+ dealers
                        </li>
                        <li>
                            Conceptualized, and <b>developed an automated email and push notification campaign system</b> from scratch
                            that reaches over 5,000 customers, significantly boosting customer engagement and brand awareness.
                        </li>
                        <li>
                            <b>Created a custom website analytics feature</b> to seamlessly track revenue and user behavior, enabling
                            data-driven decision-making.
                        </li>
                        <li>
                            Proven ability to navigate and <b>maintain complex 10+ year old legacy code bases</b>, identifying and rectifying
                            existing bugs while enhancing existing features and implementing new functionalities.
                        </li>
                        <li>
                            <b>Developed an automated database repair tool</b> that proactively identifies and restores corrupted database records,
                            ensuring the website’s stability and preventing downtime.
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
                </div>
                <div className='experience-item'>
                    <h1 className='subtitle'>Student Web Developer</h1>
                    <p className='experience-date'>Northcoders [ Apr 2021 - Aug 2021 ]</p>
                    <ul>
                        <li>
                            Attended and <b>completed a full time 14-week coding bootcamp</b> where I learnt a plethora of invaluable skills
                            and practices as well as a number of coding languages.
                        </li>
                        <li>
                            Developed a strong foundation in full-stack web development, focusing on <b>JavaScript and React</b>.
                        </li>
                        <li>
                            <b>Collaborated with diverse teams of varying roles and sizes</b>, contributing to the completion of sprint-based projects,
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
                </div>
            </div>
        </div>
    );
};

export default Experience;
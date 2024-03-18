import React from 'react';

const Projects = () => {
    return (
        <div className="project-grid row section" id='projects'>
            <div className="project-item col-md-12">
                <h2>Projects</h2>
            </div>
            <div className="project-item col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">React Customer Relationship Manager Dashboard</h5>
                        <div className='skills-container'>
                            <div className='skill-box'>React</div>
                            <div className='skill-box'>Node.js</div>
                            <div className='skill-box'>Chart.js</div>
                            <div className='skill-box'>TypeScript</div>
                            <div className='skill-box'>SQL</div>
                        </div>
                        <img src="/images/react_crm_screenshot.png" alt="React Customer Relationship Manager Dashboard" style={{ maxWidth: '100%', height: 'auto' }} />
                        <div className="card-text">
                            <ul>
                                <li>
                                    Developed an easy to use admin dashboard to view customers and test results.
                                </li>
                                <li>
                                    Created a user-friendly analytic dashboard highlighting customers and test results.
                                </li>
                                <li>
                                    Built a RESTful API using Node.js and Express which interacts with an SQL database
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a className="btn btn-dark" href='https://github.com/jhunethan01/react_crm'>Code &lt;/&gt;</a>
                            <a className="btn btn-dark" href='https://delightful-marzipan-66e584.netlify.app/'>Website</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-item col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Plant Shop using Next.js</h5>
                        <div className='skills-container'>
                            <div className='skill-box'>Next.js</div>
                            <div className='skill-box'>HTML</div>
                            <div className='skill-box'>CSS</div>
                            <div className='skill-box'>JavaScript</div>
                        </div>
                        <img src="/images/plant_shop_image.png" alt="Plant Shop using Next.js" style={{ maxWidth: '100%', height: 'auto' }} />
                        <div className="card-text">
                            <ul>
                                <li>
                                    Successfully created a mock homepage with a clean and user-friendly interface, showcasing my ability to build
                                    modern web applications using Next.js.
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a className="btn btn-dark" href='https://github.com/jhunethan01/plant-shop'>Code &lt;/&gt;</a>
                            <a className="btn btn-dark" href='https://elegant-bubblegum-ba6cc4.netlify.app/'>Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-item col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Laravel Shop with Comparison Tool</h5>
                        <div className='skills-container'>
                            <div className='skill-box'>Laravel</div>
                            <div className='skill-box'>Livewire</div>
                            <div className='skill-box'>JavaScript</div>
                            <div className='skill-box'>PHP</div>
                            <div className='skill-box'>SQL</div>
                        </div>
                        <img src="/images/laravel_shop_image.png" alt="Laravel Shop" style={{ maxWidth: '100%', height: 'auto' }} />
                        <div className="card-text">
                            <ul>
                                <li>
                                    Developed a Laravel project showcasing the use of Livewire for building modern, reactive, dynamic interfaces.
                                </li>
                                <li>
                                    Configured and managed database migrations and seeding, ensuring consistent and reliable data across development
                                    environments.
                                </li>
                                <li>
                                    Utilized Laravel and Livewire to create a full-stack application, demonstrating proficiency in both front-end and
                                    back-end development.
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a className="btn btn-dark" href='https://github.com/jhunethan01/laravel-shop'>Code &lt;/&gt;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Projects;
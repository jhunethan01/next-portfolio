import React from 'react';

const Projects = () => {
    return (
        <div className="d-flex flex-row row section" id='projects'>
            <h1 className='projects-heading'>Projects</h1>
            <div className="project-item col-md-6">
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">React Customer Manager</h5>
                        <div className='skills-container'>
                            <div className='skill-box'>React</div>
                            <div className='skill-box'>Node.js</div>
                            <div className='skill-box'>Chart.js</div>
                            <div className='skill-box'>TypeScript</div>
                            <div className='skill-box'>SQL</div>
                        </div>
                        <img src="/images/react_crm_screenshot.png" alt="React Customer Relationship Manager Dashboard" style={{ maxWidth: '100%', height: 'auto' }} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a className="btn btn-dark" href='https://github.com/jhunethan01/react_crm'>Code &lt;/&gt;</a>
                            <a className="btn btn-dark" href='https://delightful-marzipan-66e584.netlify.app/'>Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-item col-md-6">
                <div className="card m-2">
                    <div className="card-body">
                        <h5 className="card-title">Plant Shop using Next.js</h5>
                        <div className='skills-container'>
                            <div className='skill-box'>Next.js</div>
                            <div className='skill-box'>HTML</div>
                            <div className='skill-box'>CSS</div>
                            <div className='skill-box'>JavaScript</div>
                        </div>
                        <img src="/images/plant_shop_image.png" alt="Plant Shop using Next.js" style={{ maxWidth: '100%', height: 'auto' }} />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <a className="btn btn-dark" href='https://github.com/jhunethan01/plant-shop'>Code &lt;/&gt;</a>
                            <a className="btn btn-dark" href='https://elegant-bubblegum-ba6cc4.netlify.app/'>Website</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-item col-md-6">
                <div className="card m-2">
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
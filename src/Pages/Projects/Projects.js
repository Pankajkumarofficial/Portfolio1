import React from 'react'
import NEWS from '../../assets/images/newsmonkey.jpeg'
import './Project.css'
import TEXTUTILS from '../../assets/images/TextUtils1.png'
import Flip from 'react-reveal/Flip';

const Projects = () => {
    return (
        <>
            <div className="container project" id='projects'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>Top recents projects</h2>
                <hr />
                <p className='col-12 mt-3 mb-1 text-center pb-3'>
                    Here is my some recent projects with links and source code which i make by using following skills and working on my skills constantly
                </p>
                <div className="row" id='ads'>
                    <Flip>
                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">React</span>
                                    <img src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png" alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">API</span>
                                    <span className="card-detail-badge">Bootstrap</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title net">
                                        <h5 className="text-uppercase">netflix</h5>
                                    </div>
                                    <a className='ad-btn' href="https://pankajkumarofficial.github.io/Netflix/" target='_blank' rel='noreferrer'>view</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">React</span>
                                    <img src={NEWS} alt="project2" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">APIs</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title net">
                                        <h5 className="text-uppercase">news monkey</h5>
                                    </div>
                                    <a className='ad-btn' href="/">view</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="card rounded">
                                <div className="card-image">
                                    <span className="card-notify-badge">Full Stack</span>
                                    <img src={TEXTUTILS} alt="project1" />
                                </div>
                                <div className="card-image-overly m-auto mt-3">
                                    <span className="card-detail-badge">React</span>
                                    <span className="card-detail-badge">Node</span>
                                    <span className="card-detail-badge">bootstrap</span>
                                </div>
                                <div className="card-body text-center">
                                    <div className="ad-title">
                                        <h5 className="text-uppercase">textutils</h5>
                                    </div>
                                    <a className='ad-btn' href="https://pankajkumarofficial.github.io/my-app/" target='_blank' rel='noreferrer'>view</a>
                                </div>
                            </div>
                        </div>
                    </Flip>
                </div>
            </div>
        </>
    )
}

export default Projects

import React from 'react'
import './About.css'
import Profile from '../../assets/images/pic1.jpg'
import Jump from 'react-reveal/Jump';

const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id='about'>
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src={Profile} alt="profile" />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p>
                                Hello, I am Parjanand, a passionate B.Tech Computer Science and Information Technology (CSIT) student, dedicated to exploring the dynamic world of technology and innovation. Currently enrolled at PDM University, Bahadurgarh, I am on a journey to acquire knowledge and skills that will pave the way for a successful career in the ever-evolving field of computer science. My academic pursuits are complemented by a strong commitment to hands-on learning and practical application of theoretical concepts. With a keen interest in software development or MERN Stack, I am driven by the desire to contribute meaningfully to the advancement of technology. Beyond the classroom, I actively engage in extracurricular activities and collaborative projects, fostering a holistic approach to my education. Excited about the possibilities that the tech industry holds, I am eager to embrace challenges and continually grow as a CSIT professional.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    )
}

export default About

import React from 'react'
import './Menus.css'
import Pic from '../../assets/images/pic1.jpg'
import { FcHome, FcAbout, FcBiotech, FcReadingEbook, FcVideoProjector, FcContacts } from "react-icons/fc";
import { Link } from 'react-scroll';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome title='Home' />
                </Link>
              </div>
              <div className="nav-link">
                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout title='About' />
                </Link>
              </div>
              <div className="nav-link">
                <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook title='Education' />
                </Link>
              </div>
              <div className="nav-link">
                <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech title='Techstack' />
                </Link>
              </div>
              <div className="nav-link">
                <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector title='Projects' />
                </Link>
              </div>
              <div className="nav-link">
                <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                  <FcContacts title='Contact' />
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Zoom>
            <div className="navbar-profile-pic">
              <img src={Pic} alt="profile" />
            </div>
          </Zoom>
          <Fade left>
            <div className="nav-items">
              <div className="nav-item">
                <div className="nav-link">
                  <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcHome />Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcAbout />About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcReadingEbook />Education
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcBiotech />Tech Stack
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcVideoProjector />Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                    <FcContacts />Contact
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </>
      )}
    </>
  )
}

export default Menus

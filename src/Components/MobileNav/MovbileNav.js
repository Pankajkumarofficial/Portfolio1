import React, { useState } from 'react'
import './MovbileNav.css'
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { FcHome, FcAbout, FcBiotech, FcReadingEbook, FcVideoProjector, FcContacts } from "react-icons/fc";
import { Link } from 'react-scroll';

const MovbileNav = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(!open)
    }
    
    const handleMenuClick = () => {
        setOpen(false)
    }

    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen} />) : (<AiOutlineMenu size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
                    <span className='mobile-nav-title'>My Portfolio App</span>
                </div>
                {open && (
                    <div className="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcHome />Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcAbout />About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcReadingEbook />Education
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='techstack' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcBiotech />Tech Stack
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='projects' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcVideoProjector />Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                                        <FcContacts />Contact
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default MovbileNav

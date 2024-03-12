import React, { useState } from 'react'
import './Contact.css'
import axios from 'axios'
import CONTACT from '../../assets/images/contactus.jpeg'
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from 'react-toastify';

const Contact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [msg, setMsg] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !msg) {
                toast.error("Please provide all fields")
            }
            const res = await axios.post('/api/v1/portfolio/sendEmail', { name, email, msg });
            if (res.data.success) {
                toast.success(res.data.message);
                setName("");
                setEmail("");
                setMsg("");
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="contact" id='contact'>
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <img src={CONTACT} alt="contact" className='image' />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="card2 d-flex card border-0 px-4 py-5">
                                <div className="row">
                                    <div className="row">
                                        <h6>Contact with Me
                                            <a href="https://www.linkedin.com/in/pankaj-kumar-667857203/" target='_blank' rel='noreferrer'><FaLinkedin color='blue' size={30} className='ms-2' /></a>
                                            <a href="https://github.com/Pankajkumarofficial" target='_blank' rel='noreferrer'><FaGithub color='black' size={30} className='ms-2' /></a>
                                            <a href="https://www.facebook.com/pankaj.7266" target='_blank' rel='noreferrer'><FaFacebook color='blue' size={30} className='ms-2' /></a>
                                            <a href="https://www.instagram.com/pankaj.0066/?next=%2F" target='_blank' rel='noreferrer'><FaInstagram color='#E1306C' size={30} className='ms-2' /></a>
                                            <a href="https://twitter.com/Pankaj_7266" target='_blank' rel='noreferrer'><FaXTwitter color='black' size={30} className='ms-2' /></a>
                                        </h6>
                                    </div>
                                    <div className="row px-3 mb-3">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>
                                </div>
                                <div className="row px-3">
                                    <input type="text" name='name' placeholder='Enter your name' className='mb-3' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="row px-3">
                                    <input type="email" name='email' placeholder='Enter your Email Address' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="row px-3">
                                    <textarea type="text" name='msg' placeholder='Write your Message' className='mb-3' value={msg} onChange={(e) => setMsg(e.target.value)} />
                                </div>
                                <div className="row px-3">
                                    <button className='button' type='submit' onClick={handleSubmit}>
                                        SEND MESSAGE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact

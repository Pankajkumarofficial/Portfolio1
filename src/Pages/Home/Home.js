import React from 'react'
import Typewriter from 'typewriter-effect';
import './Home.css'
import Resume from '../../assets/docs/resume3.pdf'
import { useTheme } from '../../Context/ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

const Home = () => {

  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevstate) => (prevstate === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === 'light' ? (<BsFillMoonStarsFill size={30} />) : (<BsFillSunFill size={30} />)}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi👋 i am a</h2>
            <h1>
              <Typewriter
                options={{
                  strings: ['MERN Stack Developer!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <Fade bottom>
            <div className="home-button">
              <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=7496069145" rel='noreferrer' target='_blank'>Hire Me</a>
              <a className="btn btn-cv" href={Resume} download="resume.pdf">My Resume</a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home

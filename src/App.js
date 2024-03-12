import './App.css';
import Layout from './Components/Layout/Layout';
import { useTheme } from './Context/ThemeContext';
import About from './Pages/About/About';
import Education from './Pages/Education/Education';
import Projects from './Pages/Projects/Projects';
import Techstack from './Pages/Techstack/Techstack';
import Contact from './Pages/contact/Contact';
import ScrollToTop from 'react-scroll-to-top';
import Tada from 'react-reveal/Tada';
import MovbileNav from './Components/MobileNav/MovbileNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [theme] = useTheme();

  return (
    <>
      <div id={theme}>
        <ToastContainer />
        <MovbileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <div className="text-center">Made With 😍 by Pankaj &copy; 2024</div>
          </Tada>
        </div>
      </div>
      <ScrollToTop smooth color='#f29567' style={{ backgroundColor: '#1e1e2c', borderRadius: '80px' }} />
    </>
  );
}

export default App;

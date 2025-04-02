import React, { useEffect } from 'react';
import './App.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import { FaJava, FaHtml5, FaPython, FaCss3Alt, FaJsSquare, FaGithub,  } from 'react-icons/fa'; // Import all necessary icons
import { Link } from 'react-scroll'; // Import scroll functionality
import eventorImage from './Eventor.png'; // Import Shopee project image
import todoImage from './todo.png'; // Import  Todo project image
import facebook from './facebook.png'; // Import  Todo project image
import google from './google.jpg'; // Import  Todo project image
import insta from './insta.png'; // Import  Todo project image
import profilePic from './profilepic.png'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: 'ease-in-out', 
      offset: 120, 
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header" data-aos="fade-down">
    <div className="renz-img">
      <img src={profilePic} alt="Profile" className="profile-pic" />
      <div>
        <h1 className="renz">Renz Jan A. Limas</h1>
        <p>Web Developer</p>
      </div>
    </div>
      <nav className='nav-links'>
        <Link to="about" smooth={true} duration={500}>About</Link>
        <Link to="skills" smooth={true} duration={500}>Skills</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
      </nav>
    </header>
  );
}

function About() {
  return (
    <section id="about" className="about" data-aos="fade-up">
      <h2>About Me</h2>
      <p>
      Hi! I'm Renz Jan Limas, 
      a Bachelor of Science in Information Technology student. 
      I'm 20 years old, and I live in Brgy. Jibao-an, Pavia, Iloilo. 
      I'm one of the members of Eventer Corp.
      </p>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills-container" data-aos="fade-up">
      <h2>Skills</h2>
      <div className="skill java" data-aos="zoom-in">
        <p><FaJava /> Java: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level-2" style={{ width: '50%' }}></div>
        </div>
      </div>
      <div className="skill html" data-aos="zoom-in">
        <p><FaHtml5 /> HTML: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level-2" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="skill python" data-aos="zoom-in">
        <p><FaPython /> Python: 1 year</p>
        <div className="skill-bar">
          <div className="skill-level-1" style={{ width: '25  %' }}></div>
        </div>
      </div>
      <div className="skill css" data-aos="zoom-in">
        <p><FaCss3Alt /> CSS: 2 years</p>
        <div className="skill-bar">
          <div className="skill-level-2" style={{ width: '70%' }}></div>
        </div>
      </div>
      <div className="skill javascript-2" data-aos="zoom-in">
        <p><FaJsSquare /> JavaScript: 1 year</p>
        <div className="skill-bar">
          <div className="skill-level-1" style={{ width: '50%' }}></div>
        </div>
      </div>
    </section>
  );
} 

function Projects() {
  return (
    <section id="projects" className="project" data-aos="fade-up">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="projects" data-aos="flip-left">
          <h3 className="project-title">Eventor</h3>
          <img src={eventorImage} alt="Shopee Clone Screenshot" className="project-image" />
          <p className="project-description">A WEB USING MERN STACK</p>
          <a href="https://www.figma.com/proto/etRF1JdaznTe4xF73kuHse/Eventor?node-id=426-2&t=8oHyV3PL0IPWF8zK-1/" target="_blank" rel="noreferrer">
            View Project
          </a>  
        </div>
        <div className="projects" data-aos="flip-left">
          <h3 className="project-title">Todo App of 13 Steps</h3>
          <img src={todoImage} alt="Todo App Screenshot" className="project-image" />
          <p className="project-description">A Todo App Made using React and MONGODB</p>
          <a href="https://awesometodos-kmh0.onrender.com/" target="_blank" rel="noreferrer">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <h2>Contact Me</h2>

      <div className="social-icons">
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer">
          <img src={google} alt="Gmail" className="social-icon" />
        </a>
        <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noreferrer">
          <img src={facebook} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://github.com/Eventor-Arc" target="_blank" rel="noreferrer">
          <img src={insta} alt="Insta" className="social-icon" />
        </a>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="footer" data-aos="fade-up" data-aos-offset='0'>
      <p>© 2025 Renz Jan A.</p>
      <div className="social-links">
        <a href="https://github.com/Eventor-Arc" target="_blank" rel="noreferrer">
          <FaGithub size={24} /> GitHub
        </a>
      </div>
    </footer>
  );
}

export default App;

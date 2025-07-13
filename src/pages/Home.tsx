import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Saurav Kumar</span>
        </h1>
        <h2 className="hero-subtitle">
          Computer Engineering Student & Web Developer
        </h2>
        <p className="hero-description">
          Passionate about creating innovative solutions and building amazing web applications. 
          Currently pursuing B.Tech in Computer Engineering with a focus on modern web technologies and AI.
        </p>
        
        <div className="hero-buttons">
          <Link to="/projects" className="btn">
            View My Work
          </Link>
          <a 
            href="/Saurav_s_Resume_Jun.pdf" 
            download 
            className="btn btn-secondary"
          >
            <Download size={20} />
            Download Resume
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/Sauravyadav15" target="_blank" rel="noopener noreferrer">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/saurabh-yadav-20b19b243/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={24} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=skyjnv124@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-stats"
      >
        <div className="stat-card">
          <h3>1+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>5</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>15+</h3>
          <p>Technologies</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Home; 
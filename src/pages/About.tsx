import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Mail, Phone } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">About Me</h1>
        <p className="section-subtitle">
          Get to know me better - my background, interests, and what drives me in the world of technology.
        </p>
      </motion.div>

      <div className="grid grid-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card"
        >
          <h2>Personal Information</h2>
          <div className="info-list">
            <div className="info-item">
              <User size={20} />
              <span>Saurav Kumar</span>
            </div>
            <div className="info-item">
              <MapPin size={20} />
              <span>Kingston, ON, Canada</span>
            </div>
            <div className="info-item">
              <Calendar size={20} />
              <span>Computer Engineering Student at Queen's University</span>
            </div>
            <div className="info-item">
              <Mail size={20} />
              <span>23lp5@queensu.ca</span>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <span>+1 437-830-9047</span>
            </div>
            <div className="info-item">
              <Phone size={20} />
              <span>+91 8368788002</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card"
        >
          <h2>Background</h2>
          <p>
            I'm a passionate Engineering student at Queen's University, deeply fascinated by the ever-evolving world of technology. 
            My journey began with web development, where I discovered my love for creating digital experiences 
            that bridge the gap between users and technology.
          </p>
          <p>
            Currently working as a Web Development Intern at Bellurbis Technologies, I'm building full-stack applications 
            using the MERN stack and implementing performance optimizations like Redis caching. My expertise 
            lies in the MERN stack (MongoDB, Express.js, React, Node.js), and I have comprehensive knowledge 
            of Git and GitHub for version control and collaborative development workflows.
          </p>
          <p>
            I'm also actively involved in the Queen's Racing Formula SAE Team, working on automotive software 
            and embedded systems. My interests span across web development, embedded systems, and various 
            emerging technologies that are shaping the future of computing. I believe there's always more to 
            learn and explore in this dynamic field, and I'm excited to continue growing my skills while 
            contributing to meaningful projects that push the boundaries of what's possible with technology.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card"
      >
        <h2>Interests & Hobbies</h2>
        <div className="interests-grid">
          <div className="interest-item">
            <h3>MERN Stack Development</h3>
            <p>Building full-stack applications using MongoDB, Express.js, React, and Node.js with Redis caching and performance optimization</p>
          </div>
          <div className="interest-item">
            <h3>Embedded Systems</h3>
            <p>Working with Arduino, C++ for automotive software, and embedded systems development for Formula SAE racing</p>
          </div>
          <div className="interest-item">
            <h3>Social Impact Projects</h3>
            <p>Leading socio-economic assessments and health evaluations for community development initiatives</p>
          </div>
          <div className="interest-item">
            <h3>Performance Optimization</h3>
            <p>Implementing caching strategies, API optimization, and real-time systems for enhanced user experience</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="card"
      >
        <h2>Career Goals</h2>
        <div className="goals-list">
          <div className="goal-item">
            <h3>Short Term</h3>
            <p>Complete the website project at Bellurbis Technologies and continue learning more tech stack and explore new technologies.</p>
          </div>
          <div className="goal-item">
            <h3>Medium Term</h3>
            <p>Able to make the app and website scalable and efficient and Practicing DSA questions consistently</p>
          </div>
          <div className="goal-item">
            <h3>Long Term</h3>
            <p>Being able to delve and learn any technology specially in AI and development. Master core concepts of computer science (Networking, Database, Algorithms, Operating Systems, etc.)</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 
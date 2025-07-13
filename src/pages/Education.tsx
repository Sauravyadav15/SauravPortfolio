import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'Bachelor of Applied Science, Engineering',
      institution: 'Queen\'s University',
      duration: 'Sept. 2024 - Present',
      gpa: 'Queen\'s Karta Scholarship ($250,000+)',
      description: 'Currently pursuing Engineering degree with focus on software engineering, embedded systems, and web technologies.',
      achievements: [
        'Queen\'s Karta Scholarship Recipient ($250,000+ Awarded)',
        'Member of Queen\'s Racing Formula SAE Team',
        'Working on automotive software and embedded systems',
        'Full scholarship based on academic merit, leadership, and service orientation'
      ]
    },
    {
      degree: 'Class-12, CBSE',
      institution: 'Jawahar Navodaya Vidyalaya Koderma, India',
      duration: 'June 2022 - April 2023',
      gpa: 'CBSE Board',
      description: 'Completed 12th grade with Science stream, focusing on Mathematics and Computer Science.',
      achievements: [
        'Completed CBSE curriculum with strong foundation in sciences',
        'Prepared for higher education in engineering',
        'Developed strong analytical and problem-solving skills'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Queen\'s Karta Scholarship',
      issuer: 'Queen\'s University',
      date: '2024',
      credential: '$250,000+ Awarded',
      description: 'Full scholarship awarded through the Queen\'s-Karta partnership for undergraduate studies, based on academic merit, leadership qualities, service orientation, and financial need.'
    },
    {
      name: 'MERN Stack Development',
      issuer: 'Bellurbis Technologies',
      date: '2025',
      credential: 'Professional Experience',
      description: 'Hands-on experience building website using MongoDB, Express.js, React, Next.js and Node.js.'
    }
  ];

  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">Education</h1>
        <p className="section-subtitle">
          My academic journey and professional certifications that have shaped my technical foundation.
        </p>
      </motion.div>

      <div className="education-timeline">
        {education.map((edu, index) => (
          <motion.div
            key={edu.degree}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="education-item"
          >
            <div className="education-icon">
              <GraduationCap size={24} />
            </div>
            <div className="education-content">
              <div className="education-header">
                <h2>{edu.degree}</h2>
                <span className="education-gpa">{edu.gpa}</span>
              </div>
              <h3>{edu.institution}</h3>
              <div className="education-duration">
                <Calendar size={16} />
                <span>{edu.duration}</span>
              </div>
              <p>{edu.description}</p>
              <div className="achievements">
                <h4>Achievements:</h4>
                <ul>
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="card"
      >
        <h2>Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="certification-item"
            >
              <div className="cert-header">
                <Award size={20} />
                <h3>{cert.name}</h3>
              </div>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-details">
                <span className="cert-date">{cert.date}</span>
                <span className="cert-credential">{cert.credential}</span>
              </div>
              <p className="cert-description">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


    </div>
  );
};

export default Education; 
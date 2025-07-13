import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Development Intern",
      company: "Bellurbis Technologies",
      location: "Gurgaon, India",
      duration: "Jun 2025 - Present",
      type: "On-site",
      description: "Building a full-stack website for NGO (PBKMS) using the MERN stack (MongoDB, Express, React, Node).",
      achievements: [
        "Improved API performance by integrating Redis caching, reducing latency from 1-2 seconds to under 30ms",
        "Designed a responsive frontend and implemented RESTful APIs for efficient data handling and less server load",
        "Working on real-world client projects with focus on performance optimization and user experience"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redis", "REST API"]
    },
    {
      id: 2,
      title: "Automotive Software and Electronics Member",
      company: "Queen's Racing Formula SAE Team",
      location: "Ontario, Canada",
      duration: "Jan 2025 - Present",
      type: "Team Member",
      description: "Working on the car's dashboard software, ensuring proper signals to components like the odometer, braking, and battery systems.",
      achievements: [
        "Writing C++ code for embedded systems and learning bit shifting concepts",
        "Learning advanced embedded systems concepts while collaborating with senior team members",
        "Contributing to automotive software development for Formula SAE racing competition",
        "Enhancing technical knowledge and problem-solving skills in embedded systems"
      ],
      technologies: ["C++", "Arduino", "Embedded Systems", "Automotive Software", "Serial Communication"]
    },
    {
      id: 3,
      title: "Social Impact Intern",
      company: "Paschnim Banga Khet Majoor Samiti",
      location: "West Bengal, India",
      duration: "May 2024 - July 2024",
      type: "On-site",
      description: "Led comprehensive socio-economic and health assessments of 120+ families across four villages in Sukinda, Odisha, impacted by chromite mining activities.",
      achievements: [
        "Led socio-economic and health assessments of 120+ families across four villages in Sukinda, Odisha",
        "Submitted detailed reports to Ekta Niketan health center to expand their focus beyond tuberculosis",
        "Worked on community health challenges and social impact initiatives",
        "Developed strong analytical and reporting skills for social development projects"
      ],
      technologies: ["Data Analysis", "Report Writing", "Community Assessment", "Health Evaluation"]
    }
  ];

  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">Work Experience</h1>
        <p className="section-subtitle">
          My professional journey, internships, and roles that have shaped my technical and leadership skills.
        </p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="experience-item"
          >
            <div className="experience-icon">
              <Briefcase size={24} />
            </div>
            <div className="experience-content">
              <div className="experience-header">
                <h2>{experience.title}</h2>
                <span className="experience-type">{experience.type}</span>
              </div>
              <h3>{experience.company}</h3>
              <div className="experience-duration">
                <Calendar size={16} />
                <span>{experience.duration}</span>
                <MapPin size={16} />
                <span>{experience.location}</span>
              </div>
              <p>{experience.description}</p>
              
              <div className="experience-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="experience-technologies">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  {experience.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="card"
      >
        <h2>Professional Summary</h2>
        <p>
          My experience spans across web development, embedded systems, and social impact projects. 
          I've worked on real-world applications, from full-stack web development with performance optimization 
          to automotive software for Formula SAE racing. Each role has contributed to my growth as a 
          technical professional and team collaborator.
        </p>
        <p>
          I'm passionate about creating efficient, user-friendly solutions and continuously learning 
          new technologies to stay current with industry trends. My diverse experience in both 
          technical and social impact roles has given me a well-rounded perspective on how technology 
          can be used to solve real-world problems.
        </p>
      </motion.div>
    </div>
  );
};

export default Experience; 
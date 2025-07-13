import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Star, GitBranch, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  image: string;
  category: string;
  featured: boolean;
  hasCode: boolean;
  githubData?: {
    stars: number;
    forks: number;
    language: string;
    updatedAt: string;
  };
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([
    
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript. Features include smooth animations, dark theme, active navigation highlighting, and responsive design. Demonstrates skills in modern web development and UI/UX design.",
      technologies: ["React", "TypeScript", "CSS3", "Framer Motion", "Responsive Design"],
      githubUrl: "https://github.com/Sauravyadav15",
      liveUrl: "https://sauravyadav15.github.io/SauravPortfolio",
      image: "https://www.hostinger.com/in/tutorials/wp-content/uploads/sites/52/2022/04/web-developer-portfolio.webp",
      category: "Frontend",
      featured: false,
      hasCode: true
    },
    {
      id: 2,
      title: "PBKMS Trade Union Website",
      description: "Developed a comprehensive website for PBKMS (Paschim Banga Khet Majoor Samity), a trade union organization. Built a modern, responsive web application using React.js and Node.js. The website serves as a digital platform for the union's activities and information sharing.",
      technologies: ["React.js", "Node.js", "CSS", "JavaScript", "Web Development"],
      githubUrl: "https://github.com/Sauravyadav15/PBKMS",
      liveUrl: "https://sauravyadav15.github.io/PBKMS/",
      image: "https://pbs.twimg.com/profile_images/1328336486442229760/HOmsyYAR_400x400.jpg",
      category: "Full Stack",
      featured: true,
      hasCode: true
    },
    {
      id: 3,
      title: "911 Dispatcher Multitasking Test Device - APSC 103",
      description: "Engineered a real-time automated testing prototype for Toronto Police to assess 911 dispatcher multitasking using Python and Arduino. Integrated 4 cognitive modules with synchronized test flow, dynamic UIs, and serial communication. Built Arduino-based embedded system with 10+ components and integrated facial emotion recognition via OpenCV.",
      technologies: ["Python", "Arduino", "C++", "OpenCV", "Deep Learning", "Serial Communication"],
      githubUrl: "",
      liveUrl: "",
      image: "https://via.placeholder.com/400x250/1a1a1a/00d4ff?text=911+Dispatcher+Test",
      category: "Embedded Systems",
      featured: true,
      hasCode: false
    },
    // {
    //   id: 4,
    //   title: "User Authentication Dashboard",
    //   description: "Designed and developed a full-stack user authentication system using the MERN stack and REST API with signup/login features, dynamic user dashboard, and responsive UI. Utilized MongoDB for secure storage, React for frontend, and Express/Node for real-time API interactions.",
    //   technologies: ["React", "Node.js", "MongoDB", "Express", "REST API", "HTML/CSS"],
    //   githubUrl: "https://github.com/Sauravyadav15",
    //   liveUrl: "",
    //   image: "https://www.bytewebster.com/frontendprojects/uploads/images/css-javascript-form-bytewebster.png",
    //   category: "Full Stack",
    //   featured: true,
    //   hasCode: true
    // },
    {
      id: 5,
      title: "AMS Website Design",
      description: "Designed wireframes and front page layout for AMS (Association of Management Students) website using Figma. Created user interface mockups focusing on modern design principles and improved user experience for the organization's digital presence.",
      technologies: ["Figma", "UI/UX Design", "Wireframing", "Web Design", "Prototyping"],
      githubUrl: "",
      liveUrl: "https://www.figma.com/design/ewYZMlkoCe8ixIJIexbbJJ/AMS-Homepage-Design?node-id=0-1&p=f&t=rzhW21isLRiYfSNv-0",
      image: "https://www.myams.org/wp-content/themes/yootheme/cache/c4/AMS-Colour-White-Black-c484f0a7.webp",
      category: "UI/UX Design",
      featured: false,
      hasCode: false
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Embedded Systems', 'UI/UX Design', 'Data Analysis'];

  // Fetch GitHub data for projects
  useEffect(() => {
    const fetchGitHubData = async () => {
      const updatedProjects = await Promise.all(
        projects.map(async (project) => {
          if (!project.githubUrl) {
            return project; // Skip projects without GitHub URLs
          }
          
          try {
            const repoName = project.githubUrl.split('/').slice(-2).join('/');
            const response = await fetch(`https://api.github.com/repos/${repoName}`);
            if (response.ok) {
              const data = await response.json();
              return {
                ...project,
                githubData: {
                  stars: data.stargazers_count,
                  forks: data.forks_count,
                  language: data.language,
                  updatedAt: new Date(data.updated_at).toLocaleDateString()
                }
              };
            }
          } catch (error) {
            console.log('Error fetching GitHub data:', error);
          }
          return project;
        })
      );
      setProjects(updatedProjects);
    };

    fetchGitHubData();
  }, [projects]);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  return (
    <div className="page-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="section-title">My Projects</h1>
        <p className="section-subtitle">
          Here are some of the projects I've worked on. Projects marked with "View Code" have their source code available on GitHub, while others are completed projects where the code is not publicly available.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="category-filter"
      >
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`project-card ${project.featured ? 'featured' : ''}`}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              {project.featured && <span className="featured-badge">Featured</span>}
            </div>
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              {project.githubData && (
                <div className="github-stats">
                  <div className="stat">
                    <Star size={16} />
                    <span>{project.githubData.stars}</span>
                  </div>
                  <div className="stat">
                    <GitBranch size={16} />
                    <span>{project.githubData.forks}</span>
                  </div>
                  <div className="stat">
                    <Code size={16} />
                    <span>{project.githubData.language}</span>
                  </div>
                  <div className="stat">
                    <Calendar size={16} />
                    <span>{project.githubData.updatedAt}</span>
                  </div>
                </div>
              )}

              <div className="project-links">
                {project.hasCode && project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                {!project.hasCode && (
                  <span className="no-code-badge">
                    Project Completed - Code Not Available
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      
    </div>
  );
};

export default Projects; 
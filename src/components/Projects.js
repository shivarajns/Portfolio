import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Jobzey",
      category: "Full Stack System",
      description: "A full-stack recruitment platform that streamlines job posting, candidate discovery, and application management through intelligent search, secure authentication, and role-based workflows., ",
      tech: ["Spring Boot", "Java", "MySQL", "React.js", "Git", "Github"],
      demo: "https://shivarajns.github.io/Jobzey/",
      code: "https://github.com/shivarajns/Jobzey",
      size: "large" // Hero Tile
    },
    {
      id: 2,
      title: "Clima",
      category: "Frontend Architecture",
      description: "Real-time weather engine with dynamic UI state management.",
      tech: ["React.js", "API", "Git", "Github"],
      demo: "https://shivarajns.github.io/clima/",
      code: "https://github.com/shivarajns/clima",
      size: "medium" // Feature Tile
    }
  ];

  return (
    <section className="projects-section" id="Project">
      <div className="glow-field"></div>
      
      <div className="header-stack">
        <span className="mini-badge">Selected Works</span>
        <h2 className="title-gradient">Featured Projects</h2>
      </div>

      <div className="bento-grid">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            className={`bento-card ${project.size}`}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="card-glass">
              <div className="card-header">
                <span className="cat-text">{project.category}</span>
                <div className="tech-pills">
                  {project.tech.map((t, i) => (
                    <span key={i} className="pill">{t}</span>
                  ))}
                </div>
              </div>

              <div className="card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <div className="card-footer">
                <a href={project.demo} target="_blank" rel="noreferrer" className="action-link primary">
                  Launch Demo
                </a>
                <a href={project.code} target="_blank" rel="noreferrer" className="action-link secondary">
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Placeholder for future growth / Github link */}
        <motion.div className="bento-card small github-cta">
          <div className="card-glass center">
            <p>More on</p>
            <h4>GitHub</h4>
            <a href="https://github.com/shivarajns" className="round-btn">→</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
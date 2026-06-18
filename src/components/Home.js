import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-glass-card">
        <div className="home-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-side"
          >
            <span className="status-badge">
              <span className="pulse-dot"></span> Available for Projects
            </span>
            <h1>
              Hi, I'm <span className="text-gradient">Shivaraju NS</span>
            </h1>
            <p className="hero-bio">
              A <b>Full-Stack Developer</b> specializing in building robust <b>Spring Boot</b> architectures and high-performance <b>React</b> interfaces. I engineer scalable digital solutions with a focus on clean code and technical precision.
            </p>

            <div className="hero-actions">
              <a href="https://drive.google.com/file/d/1UNsGVGDbOlwcu3CHgdSH4iB4MYpR_GrJ/view?usp=drive_link" target="_blank" rel="noreferrer" className="btn-primary">
                Download Resume
              </a>
              <div className="sub-actions">
                <a href="#Project" className="btn-link">View Work</a>
                <span className="separator">/</span>
                <a href="#contact" className="btn-link">Contact</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="image-side"
          >
            <div className="profile-frame">
              <img src={profile} alt="Shivaraju NS" className="profile-img" />
              <div className="frame-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
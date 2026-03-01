import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "UniPlace",
      description:
        "A Placement Tracking System built using Java, Spring Boot, and MySQL. It allows students to manage profiles, track applications, and enables admins to monitor placement statistics efficiently.",
      demo: "https://shivarajns.github.io/placement-tracking-system/",
      code: "https://github.com/shivarajns/placement-tracking-system"
    },
    {
      title: "Clima",
      description:
        "A modern weather application built using React.js and OpenWeather API. Displays real-time weather data with dynamic UI updates and responsive design.",
      demo: "https://shivarajns.github.io/clima/",
      code: "https://github.com/shivarajns/clima"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === projects.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  return (
    <section className="projects-section" id="Project">
      <h2 className="section-title">Projects</h2>

      <div className="carousel">
        <button className="nav-btn left" onClick={prevSlide}>
          ❮
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {projects.map((project, index) => (
            <div className="carousel-slide" key={index}>
              <div className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-buttons">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <button className="primary-btn">Live Demo</button>
                  </a>

                  <a href={project.code} target="_blank" rel="noreferrer">
                    <button className="secondary-btn">View Code</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={nextSlide}>
          ❯
        </button>
      </div>
    </section>
  );
};

export default Projects;
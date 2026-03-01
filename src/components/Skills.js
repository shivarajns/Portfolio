import React, { useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [active, setActive] = useState("Frontend");

  const skillsData = {
    Frontend: [
      { name: "HTML", rating: 5 },
      { name: "CSS", rating: 4 },
      { name: "JavaScript", rating: 4 },
      { name: "React.js", rating: 4 }
    ],
    Backend: [
      { name: "Java", rating: 5 },
      { name: "Spring Boot", rating: 4 }
    ],
    Database: [
      { name: "MySQL", rating: 4 }
    ],
    Tools: [
      { name: "Git", rating: 4 },
      { name: "GitHub", rating: 4 },
      { name: "Postman", rating: 4 }
    ],
    Other: [
      { name: "Operating Systems", rating: 4 },
      { name: "Computer Networks", rating: 4 },
      { name: "Protocols", rating: 3 }
    ]
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "filled" : ""}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>

      <div className="tabs">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            className={`tab-btn ${active === category ? "active" : ""}`}
            onClick={() => setActive(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="skills-card">
        {skillsData[active].map((skill, index) => (
          <div className="skill-item" key={index}>
            <span className="skill-name">{skill.name}</span>
            {renderStars(skill.rating)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
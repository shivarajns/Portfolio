import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const skills = [
    { name: "React.js", cat: "frontend" },
    { name: "JavaScript", cat: "frontend" },
    { name: "Spring Boot", cat: "backend" },
    { name: "Java", cat: "backend" },
    { name: "MySQL", cat: "database" },
    { name: "RESTful APIs", cat: "backend" },
    { name: "Git / GitHub", cat: "tools" },
    { name: "Postman", cat: "tools" },
    { name: "Docker", cat: "tools" },
    { name: "HTML", cat: "frontend" },
    { name: "CSS", cat: "frontend" },
  ];

  const categories = ["frontend", "backend", "database", "tools"];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <span className="badge">Knowledge Base</span>
        <h2 className="title-gradient">Technical Arsenal</h2>
      </div>

      <div className="category-filters">
        {categories.map((cat) => (
          <button 
            key={cat}
            onMouseEnter={() => setHoveredCategory(cat)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`filter-tag ${hoveredCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="skills-cloud">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`skill-tag ${hoveredCategory === skill.cat ? "highlight" : ""} ${hoveredCategory && hoveredCategory !== skill.cat ? "dim" : ""}`}
          >
            <div className="dot"></div>
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
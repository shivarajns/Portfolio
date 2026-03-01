import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    // Trigger drop animation after load
    setTimeout(() => {
      setDrop(true);
    }, 100);
  }, []);

  return (
    <nav className={`navbar ${drop ? "drop" : ""}`}>
      <div className="logo">Shiv's Portfolio</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#Project">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div
        className={`hamburger ${isOpen ? "toggle" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
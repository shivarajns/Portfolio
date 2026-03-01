import React from "react";
import "./Home.css";
import profile from "../assets/profile.jpg"; // add your image here

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-container">

        <div className="home-left">
          <h1>
            Hi, I'm <span className="highlight">Shivaraju NS</span>
          </h1>

          <p className="bio">
            Java Backend Developer passionate about building scalable systems,
            clean APIs, and modern web applications. I love solving real-world
            problems with technology.
          </p>

          <div className="buttons">
            <button className="primary-btn">Resume</button>
            <button className="secondary-btn">Contact Me</button>
            <button className="secondary-btn">View Projects</button>
          </div>
        </div>

        <div className="home-right">
          <div className="image-wrapper">
            <img src={profile} alt="Profile" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;

import React from "react";
import SnowfallBackground from "./components/snowfallbackground";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app">
      <SnowfallBackground />


      <div className="content">
        <Navbar/>
        <Home/>
        <Skills/>
      </div>
    </div>
  );
}

export default App;
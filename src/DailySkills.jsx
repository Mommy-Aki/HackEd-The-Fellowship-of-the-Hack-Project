import React from "react";
import "./DailySkillsCss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function DailySkills () {
    return (
        <div>      <nav className="nav">
    <div className="title-wrapper">
        <div className="title">SoftSkills</div>
    </div>

    <div className="logo-wrapper">
        <div className="logo"></div>
    </div>
         <div className="search-container">
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
          <button className="search-btn">Search</button>
        </div>
      </nav>

        <div className="skills-container">
            <div className="skill"></div>
        </div>

        </div>

    );
}

export default DailySkills;
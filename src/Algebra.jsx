import React from "react";
import "./SkillPagesCss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Algebra () {
    return (
        <div>
            <nav className="nav">
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

      <div className="text">
        
        <div className="page-container">
          <div className="text-container">
            <p>
            🟦 Lesson 1: Introduction to Measurement
What Is Measurement?
Measurement is the process of finding the size, length, amount, or degree of something.

We use measurement every day when we:

Cook food
Travel distances
Build and design
Track time
Understand weather
Measurements use units, which help us describe quantities clearly and consistently.
        </p>
          </div>
        </div>

      </div>
        {/* last div */}
        </div>

    );
}

export default Algebra;
import React from "react";
import "./SkillPagesCss.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Budgeting () {
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
🟦 Lesson 1: What Is a Budget?
Definition
A budget is a simple plan that shows:

How much money you have coming in
What you need to spend
What you can save
A good budget helps you:

Feel more in control
Reduce financial stress
Make your money last longer
Even small changes can make a big difference.
        </p>
          </div>
        </div>
        

      </div>
        {/* last div */}
        </div>

    );
}

export default Budgeting;
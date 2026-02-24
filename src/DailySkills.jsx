import { useState } from "react";
import "./BasicSkillsStyle.css";
import "./App.css";

function DailySkills() {
  const [activeSection, setActiveSection] = useState("nutrition");

  return (
    <>
      <nav className="nav">
        <div className="title-wrapper">
          <div className="title">SoftSkills</div>
        </div>

        <div className="logo-wrapper">
          <div className="logo">
            <img src="./sbs-logo.png" alt="logo" />
          </div>
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

      <div className="MiniNav">
        <button className="btn" onClick={() => setActiveSection("nutrition")}>
          Nutrition
        </button>
        <button className="btn" onClick={() => setActiveSection("finance")}>
          Finance
        </button>
        <button className="btn" onClick={() => setActiveSection("social")}>
          Social
        </button>
      </div>

      {activeSection === "nutrition" && (
        <div>
          <h1>Nutrition Subjects</h1>
          <a className="btn block has-border">Healthy Eating Basics</a>
          <a className="btn block has-border">Understanding Macronutrients</a>
        </div>
      )}

      {activeSection === "finance" && (
        <div>
          <h1>Finance Subjects</h1>
          <a className="btn block has-border">Budgeting 101</a>
          <a className="btn block has-border">Saving and Investing Basics</a>
        </div>
      )}

      {activeSection === "social" && (
        <div>
          <h1>Social Subjects</h1>
          <a className="btn block has-border">Communication Skills</a>
          <a className="btn block has-border">Building Healthy Relationships</a>
        </div>
      )}
    </>
  );
}

export default DailySkills;
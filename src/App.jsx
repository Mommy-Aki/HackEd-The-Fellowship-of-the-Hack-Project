import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import BasicSkills from "./BasicSkills.jsx";
import DailySkills from "./DailySkills";
import Algebra from "./Algebra.jsx";
import Budgeting from "./Budgeting.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BasicSkills" element={<BasicSkills />} />
        <Route path="/DailySkills" element={<DailySkills />} />
        <Route path="/Algebra" element={<Algebra />} />
        <Route path="/Budgeting" element={<Budgeting />} />
        
      </Routes>
    </Router>
  );
}

export default App;

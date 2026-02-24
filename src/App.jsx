import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import BasicSkills from "./BasicSkills.jsx";
import DailySkills from "./DailySkills";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BasicSkills" element={<BasicSkills />} />
        <Route path="/DailySkills" element={<DailySkills />} />
      </Routes>
    </Router>
  );
}

export default App;

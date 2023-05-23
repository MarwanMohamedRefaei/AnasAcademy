import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Universities from './Pages/Universities';
import UniversityDetails from './Pages/UniversityDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Universities />}></Route>
          <Route path="/university" element={<UniversityDetails />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

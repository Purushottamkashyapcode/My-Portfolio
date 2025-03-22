import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import ProfileSection from './ProfileSection';
import AboutSection from './AboutSection';
import Technologies from './Technologies';
import Projects from './Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home route with all sections */}
          <Route
            path="/"
            element={
              <>
                <ProfileSection id="profile" />
                <AboutSection id="about" />
                <Technologies id="technologies" />
                <Projects id="projects" />
              </>
            }
          />
          {/* Individual routes for direct navigation */}
          <Route path="/about" element={<AboutSection id="about" />} />
          <Route path="/technologies" element={<Technologies id="technologies" />} />
          <Route path="/projects" element={<Projects id="projects" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
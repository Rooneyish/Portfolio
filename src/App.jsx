import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import PhotographyPage from './pages/PhotographyPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage'; // Import the new module

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/gallery" element={<PhotographyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
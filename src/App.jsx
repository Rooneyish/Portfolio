import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import PhotographyPage from './pages/PhotographyPage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';

// Invisible wrapper to inject powerful Schema.org structured data for Google bots
function SEORootWrapper({ children }) {
  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ronish Prajapati",
      "url": "https://ronishprajapati.com.np",
      "jobTitle": "AI Researcher & Software Engineer",
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Islington College"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kathmandu",
        "addressCountry": "Nepal"
      },
      "sameAs": [
        "https://github.com/Rooneyish",
        "https://linkedin.com" // Swap with your live profile link later
      ],
      "knowsAbout": [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Deep Learning",
        "Software Engineering",
        "React",
        "Full-Stack Development"
      ]
    };

    // Ensure we don't accidentally append multiple script tags during hot-reloads
    let script = document.getElementById('jsonld-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'jsonld-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);
  }, []);

  return children;
}

export default function App() {
  return (
    <Router>
      <SEORootWrapper>
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
          <Footer />
        </div>
      </SEORootWrapper>
    </Router>
  );
}
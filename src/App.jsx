import { useEffect } from 'react';
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
    // Person schema for Ronish
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ronish Prajapati",
      "url": "https://www.ronishprajapati.com.np",
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
        "https://www.linkedin.com/in/ronish-prajapati/"
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

    // WebSite schema for the portfolio site
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ronish Prajapati Portfolio",
      "url": "https://www.ronishprajapati.com.np",
      "description": "Personal portfolio showcasing AI research, machine learning projects, software development, and photography by Ronish Prajapati"
    };

    // Ensure we don't accidentally append multiple script tags during hot-reloads
    let personScript = document.getElementById('jsonld-person-schema');
    if (!personScript) {
      personScript = document.createElement('script');
      personScript.id = 'jsonld-person-schema';
      personScript.type = 'application/ld+json';
      document.head.appendChild(personScript);
    }
    personScript.text = JSON.stringify(personSchema);

    let websiteScript = document.getElementById('jsonld-website-schema');
    if (!websiteScript) {
      websiteScript = document.createElement('script');
      websiteScript.id = 'jsonld-website-schema';
      websiteScript.type = 'application/ld+json';
      document.head.appendChild(websiteScript);
    }
    websiteScript.text = JSON.stringify(websiteSchema);
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

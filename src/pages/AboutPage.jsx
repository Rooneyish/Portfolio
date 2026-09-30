import React from 'react';
import profileImg from '../assets/linkedinProfile_1 (1).png';
import SEOHelper from '../components/SEOHelper';

export default function AboutPage() {
  return (
    <>
      <SEOHelper
        title="About Ronish Prajapati | AI Engineer & Photographer"
        description="Learn about Ronish Prajapati's background, education, technical skills, and personal interests as an AI researcher, software engineer, and photographer."
        imageUrl="https://www.ronishprajapati.com.np/og-image.jpg"
        type="website"
      />
      <div className="px-6 py-16 font-mono text-sm">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-12 border-b border-scholz-line pb-2 select-none">
            / identity_matrix
          </h2>

          <div className="flex flex-col md:flex-row gap-12 items-start">

            {/* Profile Image Column */}
            <div className="w-full md:w-56 flex-shrink-0 flex flex-col items-center md:items-start space-y-3">
              <img
                src={profileImg}
                alt="Ronish Prajapati"
                className="w-full h-auto object-cover object-top grayscale"
                loading="eager"
              />
              <div className="text-center md:text-left select-none">
                <h3 className="text-xs font-bold text-scholz-text tracking-tight">
                  Ronish Prajapati
                </h3>
                <p className="text-[9px] text-scholz-muted mt-0.5">
                  // AI Engineer in progress
                </p>
              </div>
            </div>

            {/* Narrative & Metrics Column */}
            <div className="w-full md:w-5/6 space-y-14">

              {/* Academic Matrix */}
              <div>
                <h4 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
                  / academic_matrix
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 font-bold">
                    <span className="text-scholz-text text-sm">
                      Islington College / London Metropol
                    </span>
                    <span className="text-[10px] text-scholz-muted font-normal uppercase tracking-wider">
                      // GPA: 3.8/4.0
                    </span>
                  </div>
                  <p className="text-scholz-muted text-sm">
                    Bachelor of Science in Computing with AI | Expected 2025
                  </p>
                </div>
              </div>

              {/* Skills Matrix */}
              <div>
                <h4 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
                  / skills_matrix
                </h4>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      Machine Learning
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      Deep Learning
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      Natural Language Processing
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      Computer Vision
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      React
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      Node.js
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      Python
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      FastAPI
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      TensorFlow / PyTorch
                    </span>
                    <span className="text-[9px] text-scholz-muted px-2 py-0.5 rounded border border-scholz-line/30">
                      SQL / NoSQL
                    </span>
                  </div>
                </div>
              </div>

              {/* Personal Matrix */}
              <div>
                <h4 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
                  / personal_matrix
                </h4>
                <div className="space-y-2">
                  <ul className="space-y-1 text-[9px] text-scholz-muted">
                    <li className="leading-relaxed">
                      <span className="text-scholz-text font-bold block mb-0.5">[location]</span>
                      Kathmandu, Nepal
                    </li>
                    <li className="leading-relaxed">
                      <span className="text-scholz-text font-bold block mb-0.5">[languages]</span>
                      Nepali / English / Hindi
                    </li>
                    <li className="leading-relaxed">
                      <span className="text-scholz-text font-bold block mb-0.5">[camera_gears]</span>
                      Canon EOS 750D / Sony Alpha 7 III (@depict) / DJI Osmo Action
                    </li>
                    <li className="leading-relaxed">
                      <span className="text-scholz-text font-bold block mb-0.5">[instruments]</span>
                      Flute / Sarangi / GarageBand iPad
                    </li>
                    <li className="leading-relaxed">
                      <span className="text-scholz-text font-bold block mb-0.5">[football]</span>
                      Goalkeeper / Manchester United Supporter / Glory Glory Man UTD / FIFA Gamer
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}
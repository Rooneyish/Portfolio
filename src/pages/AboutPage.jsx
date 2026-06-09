import React from 'react';
import profileImg from '../assets/linkedinProfile_1 (1).png';

export default function AboutPage() {
  return (
    <div className="px-6 py-16 font-mono text-sm">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-12 border-b border-scholz-line pb-2 select-none">
          / identity_matrix
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-start">

          {/* Profile Image Column */}
          <div className="w-full md:w-1/6 flex flex-col items-center md:items-start space-y-4">

            {/* IMAGE + CIRCLE WRAPPER */}
            <div className="relative flex justify-center md:justify-start w-full">

              {/* Background circle behind head */}
              <div className="absolute top-10 left-1/2 md:left-10 -translate-x-1/2 md:translate-x-0
                              w-[320px] h-[320px] rounded-full
                              bg-scholz-muted/10 blur-2xl">
              </div>

              {/* Profile Image */}
              <img
                src={profileImg}
                alt="Ronish Prajapati"
                className="relative z-10 w-[700px] h-[500px] object-cover grayscale contrast-115"
                loading="eager"
              />
            </div>

            {/* Name */}
            <div className="text-center md:text-left select-none">
              <h3 className="text-xs font-bold text-scholz-text tracking-tight whitespace-nowrap">
                Ronish Prajapati
              </h3>
              <p className="text-[9px] text-scholz-muted mt-0.5 whitespace-nowrap">
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
                    Islington College / London Metropolitan University
                  </span>
                  <span className="text-xs text-scholz-muted font-normal tracking-wider">
                    [current_track]
                  </span>
                </div>

                <p className="text-scholz-muted text-xs sm:text-sm leading-relaxed text-justify">
                  B.Sc. (Hons) in Computing with a specialized focus in Artificial Intelligence.
                  Operating as an AI Engineer in Progress, prioritizing foundational model mastery
                  and structural deep learning execution over simple framework wrapper abstraction.
                </p>
              </div>
            </div>

            {/* Hardware Profile */}
            <div>
              <h4 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
                / hardware_profile
              </h4>

              <ul className="list-none space-y-2 text-xs sm:text-sm text-scholz-muted">
                <li>• <span className="text-scholz-text font-bold">os:</span> Ubuntu Linux</li>
                <li>• <span className="text-scholz-text font-bold">gpu:</span> NVIDIA RTX 5060 Laptop GPU</li>
                <li>• <span className="text-scholz-text font-bold">env:</span> 2025 Legion 5</li>
              </ul>
            </div>

            {/* Key Competencies */}
            <div>
              <h4 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
                / key_competencies
              </h4>

              <ul className="list-none space-y-4 text-xs sm:text-sm text-scholz-muted">

                <li className="leading-relaxed">
                  <span className="text-scholz-text font-bold block mb-0.5">[architectures]</span>
                  Transformers / BERT / Bi-LSTM / Seq2Seq / CNN / MobileNetV2
                </li>

                <li className="leading-relaxed">
                  <span className="text-scholz-text font-bold block mb-0.5">[languages]</span>
                  Python / Java / JavaScript / HTML / CSS
                </li>

                <li className="leading-relaxed">
                  <span className="text-scholz-text font-bold block mb-0.5">[frameworks]</span>
                  PyTorch / TensorFlow / FastAPI / Node.js / React Native / Tailwind CSS / Docker
                </li>

                <li className="leading-relaxed">
                  <span className="text-scholz-text font-bold block mb-0.5">[data_vector_engines]</span>
                  Qdrant / NumPy / Scikit-learn / OpenCV / Tokenizers / Hugging Face
                </li>
              </ul>
            </div>

            {/* Besides Engineering */}
            <div>
              <h4 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
                / besides_engineering
              </h4>

              <ul className="list-none space-y-4 text-xs sm:text-sm text-scholz-muted">

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
  );
}
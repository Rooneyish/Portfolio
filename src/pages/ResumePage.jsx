import React from 'react';
import SEOHelper from '../components/SEOHelper';

export default function Resume() {
  const resumePdfPath = new URL('../assets/Ronish_Prajapati.pdf', import.meta.url).href;

  return (
    <>
      <SEOHelper
        title="Resume | Ronish Prajapati"
        description="View Ronish Prajapati's resume highlighting education, work experience, projects, and technical skills in AI, machine learning, and software engineering."
        imageUrl="https://www.ronishprajapati.com.np/og-image.jpg"
        type="website"
      />
      <div className="w-full min-h-screen font-mono px-6 py-8">
        <div className="max-w-5xl mx-auto space-y-4">

          {/* Header bar */}
          <div className="flex justify-between items-center border-b border-scholz-line pb-3">
            <div className="space-y-0.5">
              <p className="text-xs font-bold text-scholz-text tracking-widest uppercase">
                Ronish_Prajapati.pdf
              </p>
              <p className="text-[10px] text-scholz-muted">// interactive_viewer</p>
            </div>
            <a
              href={resumePdfPath}
              download="Ronish_Prajapati_Resume.pdf"
              className="text-[11px] font-bold text-scholz-text hover:underline tracking-wider uppercase"
            >
              ↓ download_raw
            </a>
          </div>

          {/* PDF iframe */}
          <div className="w-full border border-scholz-line" style={{ height: '82vh' }}>
            <iframe
              src={resumePdfPath}
              title="Ronish Prajapati Resume"
              className="w-full h-full border-none"
            />
          </div>

        </div>
      </div>
    </>
  );
}
import React from 'react';

export default function Resume() {
  // Dynamically resolve the PDF location from src/assets/ for production builds
  const getPdfUrl = () => {
    return new URL('../assets/Ronish_Prajapati.pdf', import.meta.url).href;
  };

  const resumePdfPath = getPdfUrl();

  return (
    <div className="w-full min-h-screen bg-white text-black font-mono p-4">
      {/* 
        NOTE: The duplicate navigation bar has been removed from this file. 
        Your main App wrapper handles the top navigation bar globally!
      */}

      <hr className="border-black mb-2" />

      {/* Main Bar Info */}
      <div className="flex justify-between items-center text-sm font-bold tracking-tight mb-4">
        <span>RONISH_PRAJAPATI.PDF</span>
        <a 
          href={resumePdfPath} 
          download="Ronish_Prajapati_Resume.pdf"
          className="text-blue-600 hover:underline text-xs"
        >
          ↓ DOWNLOAD_RAW
        </a>
      </div>

      <div className="text-xs text-gray-500 mb-2">// interactive_viewer</div>
      
      {/* PDF Container Frame */}
      <div className="border border-black w-full h-[80vh] bg-gray-100">
        <iframe 
          src={resumePdfPath}
          title="Ronish Prajapati Resume Viewer"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
}
import React from 'react';

export default function Resume() {
  // Path points directly to public/ronish_prajapati.pdf via absolute routing
  const resumePdfPath = "/ronish_prajapati.pdf";

  return (
    <div className="w-full min-h-screen bg-white text-black font-mono p-4">
      {/* Header Navigation Link */}
      <div className="text-center text-xs uppercase tracking-widest mb-6">
        <span className="font-bold">Ronish Prajapati</span>
        <div className="mt-1 space-x-2 text-blue-600">
          <a href="/projects" className="hover:underline">projects</a>
          <span>/</span>
          <a href="/resume" className="underline">resume</a>
          <span>/</span>
          <a href="/about" className="hover:underline">about</a>
          <span>/</span>
          <a href="/photography" className="hover:underline">photography</a>
          <span>/</span>
          <a href="/contact" className="hover:underline">contact</a>
        </div>
      </div>

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
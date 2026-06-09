import React from 'react';

export default function ResumePage() {
  // Path pointing directly to your file inside the public directory
  const resumePdfPath = "src/assets/Ronish_Prajapati.pdf";

  return (
    <div className="w-full px-4 py-8 font-mono text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Action Header bar */}
        <div className="flex justify-between items-center border-b border-scholz-line pb-3">
          <div>
            <h2 className="text-xs font-bold text-scholz-text uppercase tracking-widest">
              RONISH_PRAJAPATI.pdf
            </h2>
            <p className="text-[10px] text-scholz-muted mt-0.5">// interactive_viewer</p>
          </div>
          
          {/* Native Download Action Link */}
          <a 
            href={resumePdfPath} 
            download="Ronish_Prajapati_Resume.pdf"
            className="flex items-center gap-2 text-xs bg-scholz-text text-white px-3 py-1.5 font-bold hover:opacity-80 transition-opacity select-none"
          >
            <span>↓</span> DOWNLOAD_RAW
          </a>
        </div>

        {/* 
          PDF Renderer Wrapper
          Using a responsive viewport height block (h-[75vh]) to ensure 
          the document takes center stage cleanly on different monitor sizes.
        */}
        <div className="w-full h-[75vh] border border-scholz-line/60 bg-white">
          <iframe
            src={`${resumePdfPath}#view=FitH`}
            title="Ronish Prajapati Resume"
            className="w-full h-full border-none"
          />
        </div>

      </div>
    </div>
  );
}
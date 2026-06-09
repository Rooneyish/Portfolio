import React from 'react';

export default function ContactPage() {
  return (
    <div className="px-6 py-16 font-mono text-sm flex flex-col justify-center min-h-[50vh]">
      <div className="max-w-xl mx-auto w-full space-y-8">
        
        <div>
          <h2 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-4 border-b border-scholz-line pb-2 select-none">
            / communication_endpoints
          </h2>
          <p className="text-scholz-muted text-xs sm:text-sm leading-relaxed mb-6">
            Looking to collaborate on core deep learning architectures, high-performance RAG engineering, 
            or multi-spectral computer vision arrays? Establish connection via the secure nodes below:
          </p>
        </div>

        {/* Network Nodes Grid */}
        <div className="space-y-4">
          <div className="flex items-baseline gap-2 text-xs sm:text-sm">
            <span className="text-scholz-text font-bold w-20 select-none">[email]</span>
            <a 
              href="mailto:ronishprajapati50@gmail.com" 
              className="text-scholz-muted hover:text-scholz-text hover:underline break-all"
            >
              ronishprajapati50@gmail.com
            </a>
          </div>

          <div className="flex items-baseline gap-2 text-xs sm:text-sm">
            <span className="text-scholz-text font-bold w-20 select-none">[github]</span>
            <a 
              href="https://github.com/Rooneyish" 
              target="_blank" 
              rel="noreferrer" 
              className="text-scholz-muted hover:text-scholz-text hover:underline"
            >
              github.com/Rooneyish
            </a>
          </div>

          <div className="flex items-baseline gap-2 text-xs sm:text-sm">
            <span className="text-scholz-text font-bold w-20 select-none">[linkedin]</span>
            <a 
              href="https://www.linkedin.com/in/ronish-prajapati/" 
              target="_blank" 
              rel="noreferrer" 
              className="text-scholz-muted hover:text-scholz-text hover:underline"
            >
              https://www.linkedin.com/in/ronish-prajapati/
            </a>
          </div>
        </div>

        {/* Console Footprint */}
        <div className="pt-6 border-t border-scholz-line/40 text-[11px] text-scholz-muted select-none">
          <span>// Location Matrix: Kathmandu, Nepal</span>
        </div>

      </div>
    </div>
  );
}
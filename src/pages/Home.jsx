import React from 'react';

export default function Home() {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center px-6 py-12 font-mono">
      <div className="max-w-xl mx-auto space-y-6">
        <p className="text-scholz-text font-bold leading-relaxed text-base sm:text-lg tracking-tight">
            <u>A Math Freak</u> | <u>AI Engineer in Progress</u> | <u>Software Developer</u> | <u>Photographer</u>
        </p>

        <p className="text-scholz-muted leading-relaxed text-xs sm:text-sm">
            Ronish Prajapati is a Computing with AI undergraduate at Islington College, Nepal, affiliated with London Metropolitan University. Motivated with the working mechanism of foundational models, Ronish focuses on Deep Learning architectures and the mathematical principles that govern them. 
            </p>

        <p className="text-scholz-muted leading-relaxed text-xs sm:text-sm">
        Through projects and practical software development experience, Ronish has worked across backend technologies while steadily expanding his expertise in ML and data-driven systems. His long-term vision is to keep up with the modern AI landscape and contribute to the field through research and development, with a particular interest in the intersection of deep learning and real-world applications.
        </p>
        
        <p className="text-scholz-muted leading-relaxed text-xs sm:text-sm">
        Aside from technology, Ronish loves to capture moments through photography, play music, football and drawing. These creativity space allows him to balance the technical and artistic sides of his personality.
        </p>

        <div className="pt-4 text-xs select-none flex items-center gap-2 border-t border-scholz-line/60">
          <span className="text-scholz-muted font-bold uppercase tracking-wider">status:</span>
          <span className="text-scholz-text">completing final year</span>
        </div>
      </div>
    </div>
  );
}
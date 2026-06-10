import React from 'react';
import signatureImg from '../assets/Signature2.jpg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-scholz-line px-6 py-6 font-mono select-none">
      <div className="max-w-5xl mx-auto flex justify-between items-center">

        <p className="text-[10px] text-scholz-muted">
          © {year} Ronish Prajapati. All rights reserved.
        </p>

        <img
          src={signatureImg}
          alt="Ronish Prajapati signature"
          className="h-12 w-auto opacity-60 grayscale"
        />

      </div>
    </footer>
  );
}
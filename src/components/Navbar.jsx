import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-scholz-line pt-6 pb-5 px-6 font-mono select-none">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">

        <Link
          to="/"
          className="text-sm font-bold tracking-widest text-scholz-text hover:opacity-75 transition-opacity whitespace-nowrap"
        >
          RONISH PRAJAPATI
        </Link>

        <div className="flex flex-wrap gap-x-4 gap-y-2 items-center justify-center sm:justify-end">
          <Link to="/projects" className="text-xs text-scholz-text hover:underline font-medium tracking-wider">Projects</Link>
          <span className="text-xs text-scholz-muted">//</span>
          <Link to="/resume"   className="text-xs text-scholz-text hover:underline font-medium tracking-wider">Resume</Link>
          <span className="text-xs text-scholz-muted">//</span>
          <Link to="/about"    className="text-xs text-scholz-text hover:underline font-medium tracking-wider">About</Link>
          <span className="text-xs text-scholz-muted">//</span>
          <Link to="/gallery"  className="text-xs text-scholz-text hover:underline font-medium tracking-wider">Gallery</Link>
          <span className="text-xs text-scholz-muted">//</span>
          <Link to="/contact"  className="text-xs text-scholz-text hover:underline font-medium tracking-wider">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
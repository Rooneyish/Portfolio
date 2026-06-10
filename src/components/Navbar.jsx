import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-scholz-line pt-10 pb-8 px-6 font-mono select-none">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Terminal Core Title / Brand link */}
        <Link
          to="/"
          className="font-bold text-sm tracking-widest text-scholz-text hover:opacity-75 transition-opacity whitespace-nowrap"
        >
          RONISH PRAJAPATI
        </Link>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs tracking-wider text-scholz-muted justify-center sm:justify-end">
          <Link
            to="/projects"
            className="text-scholz-text hover:underline font-medium"
          >
            projects
          </Link>
          <span>//</span>
          <Link
            to="/resume"
            className="text-scholz-text hover:underline font-medium"
          >
            resume
          </Link>
          <span>//</span>
          <Link
            to="/about"
            className="text-scholz-text hover:underline font-medium"
          >
            about
          </Link>
          <span>//</span>
          <Link
            to="/gallery"
            className="text-scholz-text hover:underline font-medium"
          >
            gallery
          </Link>
          <span>//</span>
          <Link
            to="/contact"
            className="text-scholz-text hover:underline font-medium"
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

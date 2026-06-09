import React from 'react';

export default function Photography() {
  // Comprehensive array containing labels and matching public system file names
  const photoLedger = [
    { id: 1, label: "Machapuchhre Base Camp", fileName: "photo_1.jpg" },
    { id: 2, label: "Pizza House", fileName: "photo_2.jpg" },
    { id: 3, label: "The Fall", fileName: "photo_3.jpg" },
    { id: 4, label: "Monkey 1", fileName: "photo_4.jpg" },
    { id: 5, label: "The Frame", fileName: "photo_5.jpg" },
    { id: 6, label: "The Fish Tail", fileName: "photo_6.jpg" },
    { id: 7, label: "Monkey 2", fileName: "photo_7.jpg" },
    { id: 8, label: "The Valley", fileName: "photo_8.jpg" },
    { id: 9, label: "The Annapurna", fileName: "photo_9.jpg" },
    { id: 10, label: "The Taxi", fileName: "photo_10.jpg" },
    { id: 11, label: "The Gumba", fileName: "photo_11.jpg" },
    { id: 12, label: "Houses of Nepal", fileName: "photo_12.jpg" },
    { id: 13, label: "The Buildings of Square", fileName: "photo_13.jpg" }
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black font-mono p-4">
      {/* Header Navigation Link */}
      <div className="text-center text-xs uppercase tracking-widest mb-6">
        <span className="font-bold">Ronish Prajapati</span>
        <div className="mt-1 space-x-2 text-blue-600">
          <a href="/projects" className="hover:underline">projects</a>
          <span>/</span>
          <a href="/resume" className="hover:underline">resume</a>
          <span>/</span>
          <a href="/about" className="hover:underline">about</a>
          <span>/</span>
          <a href="/photography" className="underline">photography</a>
          <span>/</span>
          <a href="/contact" className="hover:underline">contact</a>
        </div>
      </div>

      <hr className="border-black mb-4" />
      <h1 className="text-base font-bold uppercase mb-6 tracking-wider">/ VISUAL_LEDGER</h1>

      {/* Grid Layout Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {photoLedger.map((photo) => (
          <div key={photo.id} className="flex flex-col space-y-2">
            <span className="text-xs text-gray-700 font-medium">// {photo.label}</span>
            <div className="border border-gray-200 overflow-hidden bg-gray-50 aspect-[4/3] flex items-center justify-center">
              <img 
                src={`/photography/${photo.fileName}`} 
                alt={photo.label}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback handling to show a clear diagnostic error message if a file is missing
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  const msg = document.createElement('p');
                  msg.className = 'text-[10px] text-red-500 p-2 text-center';
                  msg.innerText = `Missing: public/photography/${photo.fileName}`;
                  e.target.parentNode.appendChild(msg);
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
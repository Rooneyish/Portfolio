import React from 'react';

// Eagerly grab references to all images inside src/assets/gallery/ at build time
const globbedImages = import.meta.glob('../assets/gallery/*.jpg', { eager: true });

export default function PhotographyPage() {
  const photoLedger = [
    { id: 1, title: "Machapuchhre Base Camp", location: "M.B.C, Nepal", date: "2024", fileName: "photo_1.jpg" },
    { id: 2, title: "Monkey 1", location: "Kathmandu, Nepal", date: "2024", fileName: "photo_2.jpg" },
    { id: 3, title: "Monkey 2", location: "Kathmandu, Nepal", date: "2024", fileName: "photo_3.jpg" },
    { id: 4, title: "The Taxi", location: "Pokhara, Nepal", date: "2024", fileName: "photo_4.jpg" },
    { id: 5, title: "The Village", location: "Ghandruk, Nepal", date: "2024", fileName: "photo_5.jpg" },
    { id: 6, title: "Pizza House", location: "Kathmandu, Nepal", date: "2024", fileName: "photo_6.jpg" },
    { id: 7, title: "The Nature's Frame", location: "Pokhara, Nepal", date: "2024", fileName: "photo_7.jpg" },
    { id: 8, title: "The Valley", location: "Mustang, Nepal", date: "2024", fileName: "photo_8.jpg" },
    { id: 9, title: "The Gumba", location: "Mustang, Nepal", date: "2024", fileName: "photo_9.jpg" },
    { id: 10, title: "The Buildings of KTM", location: "Kathmandu, Nepal", date: "2024", fileName: "photo_10.jpg" },
    { id: 11, title: "The Fall", location: "Dhumpus, Nepal", date: "2024", fileName: "photo_11.jpg" },
    { id: 12, title: "The Fish Tail", location: "Pokhara, Nepal", date: "2024", fileName: "photo_12.jpg" },
    { id: 13, title: "The Annapurna", location: "A.B.C Trail, Nepal", date: "2024", fileName: "photo_13.jpg" }
  ];

  // Dynamic path helper checking Vite's build-time lookup table
  const getImageUrl = (fileName) => {
    const fallbackUrl = new URL(`../assets/gallery/${fileName}`, import.meta.url).href;
    const globPath = `../assets/gallery/${fileName}`;
    
    return globbedImages[globPath]?.default || fallbackUrl;
  };

  return (
    <div className="w-full px-4 py-8 font-mono text-sm bg-white text-black min-h-screen">
      {/* Container wrapper balances screen space usage */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-200 pb-2 select-none">
          / visual_ledger
        </h2>

        {/* 
          Native CSS Masonry:
          Dense layouts scaling columns from 3 up to 6 on wider displays
        */}
        <div className="columns-3 sm:columns-4 md:columns-5 lg:columns-6 gap-2 [column-fill:_balance]">
          {photoLedger.map((photo) => (
            <div 
              key={photo.id} 
              className="break-inside-avoid w-full mb-2 group relative cursor-crosshair overflow-hidden bg-black"
            >
              <img 
                src={getImageUrl(photo.fileName)} 
                alt={photo.title}
                className="w-full h-auto block grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  const msg = document.createElement('p');
                  msg.className = 'text-[9px] text-red-500 p-2 text-center bg-zinc-900 border border-zinc-800';
                  msg.innerText = `ERR: ${photo.fileName}`;
                  e.target.parentNode.appendChild(msg);
                }}
              />
              
              {/* Micro text overlay frame */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute bottom-0 left-0 right-0 bg-black/90 text-white p-1.5 text-[9px] font-mono flex flex-col pointer-events-none leading-none">
                <div className="font-bold truncate">{photo.title}</div>
                <div className="flex justify-between items-center mt-1 text-[8px] text-gray-400">
                  <span className="truncate mr-1">{photo.location}</span>
                  <span>'{photo.date.slice(-2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
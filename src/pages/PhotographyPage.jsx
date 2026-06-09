import React from 'react';

export default function Photography() {
  const photoLedger = [
    { id: 1, label: "Machapuchhre Base Camp", fileName: "photo_1.jpg" },
    { id: 2, label: "Monekey 1", fileName: "photo_2.jpg" },
    { id: 3, label: "Monekey 2", fileName: "photo_3.jpg" },
    { id: 4, label: "The Taxi", fileName: "photo_4.jpg" },
    { id: 5, label: "The Village", fileName: "photo_5.jpg" },
    { id: 6, label: "Pizza House", fileName: "photo_6.jpg" },
    { id: 7, label: "The Nature's Frame", fileName: "photo_7.jpg" },
    { id: 8, label: "The Valley", fileName: "photo_8.jpg" },
    { id: 9, label: "The Gumba", fileName: "photo_9.jpg" },
    { id: 10, label: "The Buildings of KTM", fileName: "photo_10.jpg" },
    { id: 11, label: "The Fall", fileName: "photo_11.jpg" },
    { id: 12, label: "The Fish Tail", fileName: "photo_12.jpg" },
    { id: 13, label: "The Annapurna", fileName: "photo_13.jpg" }
  ];

  const getImageUrl = (fileName) => {
    return new URL(`../assets/gallery/${fileName}`, import.meta.url).href;
  };

  return (
    <div className="w-full min-h-screen bg-white text-black font-mono p-4">
      <h1 className="text-base font-bold uppercase mb-6 tracking-wider">/ VISUAL_LEDGER</h1>

      {/* 
        Pinterest Masonry Container using CSS columns.
        - columns-1 on small mobile screens
        - columns-2 on medium tablets
        - columns-3 on large screens
        - gap-6 keeps the vertical streams uniformly separated
      */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
        {photoLedger.map((photo) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid flex flex-col space-y-2 mb-6"
          >
            <span className="text-xs text-gray-700 font-medium">// {photo.label}</span>
            <div className="border border-gray-200 overflow-hidden bg-gray-50">
              <img 
                src={getImageUrl(photo.fileName)} 
                alt={photo.label}
                /* 
                  CRUCIAL FOR PINTEREST EFFECT: 
                  We remove the static aspect-[4/3] and h-full classes. 
                  h-auto lets the image maintain its natural, varying heights!
                */
                className="w-full h-auto object-cover display-block"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.style.display = 'none';
                  const msg = document.createElement('p');
                  msg.className = 'text-[10px] text-red-500 p-4 text-center';
                  msg.innerText = `Missing asset: src/assets/gallery/${photo.fileName}`;
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
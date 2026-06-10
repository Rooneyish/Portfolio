import React from 'react';

const globbedImages = import.meta.glob('../assets/gallery/*.jpg', { eager: true });

export default function PhotographyPage() {
  const photoLedger = [
    { id: 1,  title: "Machapuchhre Base Camp", location: "M.B.C, Nepal",        date: "2024", fileName: "photo_1.jpg"  },
    { id: 2,  title: "Monkey 1",               location: "Kathmandu, Nepal",     date: "2024", fileName: "photo_2.jpg"  },
    { id: 3,  title: "Monkey 2",               location: "Kathmandu, Nepal",     date: "2024", fileName: "photo_3.jpg"  },
    { id: 4,  title: "The Taxi",               location: "Pokhara, Nepal",       date: "2024", fileName: "photo_4.jpg"  },
    { id: 5,  title: "The Village",            location: "Deurali, Annapurna Trek, Nepal",      date: "2024", fileName: "photo_5.jpg"  },
    { id: 6,  title: "Pizza House",            location: "Chomrong, Nepal",     date: "2024", fileName: "photo_6.jpg"  },
    { id: 7,  title: "The Nature's Frame",     location: "ABC Trail, Nepal",       date: "2024", fileName: "photo_7.jpg"  },
    { id: 8,  title: "The Valley",             location: "Somewhere along ABC Trail, Nepal",       date: "2024", fileName: "photo_8.jpg"  },
    { id: 9,  title: "The Gumba",              location: "Kathmandu, Nepal",       date: "2024", fileName: "photo_9.jpg"  },
    { id: 10, title: "The Buildings of KTM",   location: "Kathmandu, Nepal",     date: "2024", fileName: "photo_10.jpg" },
    { id: 11, title: "The Fall",               location: "Somewhere in Nepal",       date: "2024", fileName: "photo_11.jpg" },
    { id: 12, title: "The Fish Tail",          location: "Chomrong, Nepal",       date: "2024", fileName: "photo_12.jpg" },
    { id: 13, title: "The Annapurna",          location: "A.B.C, Nepal",   date: "2024", fileName: "photo_13.jpg" },
  ];

  const getImageUrl = (fileName) => {
    const globPath = `../assets/gallery/${fileName}`;
    return globbedImages[globPath]?.default
      || new URL(`../assets/gallery/${fileName}`, import.meta.url).href;
  };

  return (
    <div className="w-full px-6 py-10 font-mono min-h-screen">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-8 border-b border-scholz-line pb-2 select-none">
          / visual_ledger
        </h2>
      </div>

      {/* Full-width masonry — 2 cols mobile, 3 tablet, 4 desktop */}
      <div className="max-w-6xl mx-auto columns-2 sm:columns-3 lg:columns-4 gap-3 [column-fill:_balance]">
        {photoLedger.map((photo) => (
          <div
            key={photo.id}
            className="break-inside-avoid mb-3 group relative overflow-hidden bg-black cursor-crosshair"
          >
            <img
              src={getImageUrl(photo.fileName)}
              alt={photo.title}
              className="w-full h-auto block grayscale group-hover:grayscale-0 opacity-90 group-hover:opacity-100 transition-all duration-300"
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

            {/* Hover overlay */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute bottom-0 left-0 right-0 bg-black/85 text-white px-2.5 py-2 pointer-events-none">
              <p className="text-[10px] font-bold truncate leading-tight">{photo.title}</p>
              <div className="flex justify-between items-center mt-0.5">
                <span className="text-[9px] text-gray-400 truncate mr-1">{photo.location}</span>
                <span className="text-[9px] text-gray-500 flex-shrink-0">'{photo.date.slice(-2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
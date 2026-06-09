import React from 'react';

const PHOTOGRAPHS = [
  {
    id: "img_01",
    title: "Machhapuchhre Base Camp",
    location: "Annapurna Trek, Nepal",
    date: "2024",
    url: "src/assets/gallery/photo_1.jpg"
  },
  {
    id: "img_02",
    title: "Monkey 1",
    location: "Swoyambhunath, Nepal",
    date: "2025",
    url: "src/assets/gallery/photo_2.jpg"
  },
  {
    id: "img_03",
    title: "Monkey 2",
    location: "Swoyambhunath, Nepal",
    date: "2025",
    url: "src/assets/gallery/photo_3.jpg"
  },
  {
    id: "img_04",
    title: "The Taxi",
    location: "Lakeside, Pokhara",
    date: "2024",
    url: "src/assets/gallery/photo_4.jpg"
  },
  {
    id: "img_05",
    title: "Houses of Nepal",
    location: "Deurali, Annapurna Trek",
    date: "2024",
    url: "src/assets/gallery/photo_5.jpg"
  },
  {
    id: "img_06",
    title: "Pizza House",
    location: "Chhomrong, Annapurna Trek",
    date: "2024",
    url: "src/assets/gallery/photo_6.jpg"
  },
  {
    id: "img_07",
    title: "The Frame",
    location: "Annapurna Trek, Nepal",
    date: "2024",
    url: "src/assets/gallery/photo_7.jpg"
  },
  {
    id: "img_08",
    title: "The Valley",
    location: "Annapurna Trek, Nepal",
    date: "2024",
    url: "src/assets/gallery/photo_8.jpg"
  },
  {
    id: "img_09",
    title: "The Gumba",
    location: "Kathmandu, Nepal",
    date: "2023",
    url: "src/assets/gallery/photo_9.jpg"
  },
  {
    id: "img_10",
    title: "The Buildings of Square",
    location: "Kathmandu, Nepal",
    date: "2023",
    url: "src/assets/gallery/photo_10.jpg"
  },
  {
    id: "img_11",
    title: "The Fall",
    location: "Annapurna Trek, Nepal",
    date: "2024",
    url: "src/assets/gallery/photo_11.jpg"
  },
  {
    id: "img_12",
    title: "The Fish Tail",
    location: "Annapurna Trek, Nepal",
    date: "2024",
    url: "src/assets/gallery/photo_12.jpg"
  },
  {
    id: "img_13",
    title: "The Annapurna",
    location: "ABC Base Camp, Nepal",
    date: "2024",
    url: "src/assets/gallery/photo_13.jpg"
  }
];

export default function PhotographyPage() {
  return (
    <div className="w-full px-4 py-8 font-mono text-sm">
      {/* Container wrapper balances screen space usage */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xs font-bold text-scholz-muted uppercase tracking-widest mb-6 border-b border-scholz-line pb-2 select-none">
          / visual_ledger
        </h2>

        {/* 
          Native CSS Masonry:
          Automatically balances ALL 6 images across 3 dense columns on mobile, 
          4 on medium views, and 5-6 on wider displays without ever hiding photos!
        */}
        <div className="columns-3 sm:columns-4 md:columns-5 lg:columns-6 gap-2 [column-fill:_balance]">
          {PHOTOGRAPHS.map((photo) => (
            <div 
              key={photo.id} 
              className="break-inside-avoid w-full mb-2 group relative cursor-crosshair overflow-hidden bg-black"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-auto block grayscale hover:grayscale-0 opacity-90 hover:opacity-100 transition-all duration-300"
                loading="lazy"
              />
              
              {/* Micro text overlay frame */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 absolute bottom-0 left-0 right-0 bg-black/90 text-white p-1.5 text-[9px] font-mono flex flex-col pointer-events-none leading-none">
                <div className="font-bold truncate">{photo.title}</div>
                <div className="flex justify-between items-center mt-1 text-[8px] text-gray-400">
                  <span className="truncate">{photo.location}</span>
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
import React from 'react';

const demoAds = [
  { id: 1, title: 'Senior Frontend Engineer', date: '2025-10-10' },
  { id: 2, title: 'Backend Node.js Developer', date: '2025-10-08' },
  { id: 3, title: 'Product Designer (UI/UX)', date: '2025-10-05' },
  { id: 4, title: 'Data Scientist', date: '2025-10-03' },
];

export default function RecentAds() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Recent Ads</h2>
          <a href="/company-home/ads" className="text-[#FFD700] hover:underline">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {demoAds.map((ad) => (
            <div key={ad.id} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 text-white hover:shadow-gold transition">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold leading-snug pr-2">{ad.title}</h3>
              </div>
              <p className="text-white/70 text-sm mb-5">Posted on {ad.date}</p>
              <div className="flex items-center gap-3">
                <button className="px-4 py-2 rounded-full text-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-sm font-semibold transform transition hover:scale-105">Edit</button>
                <button className="px-4 py-2 rounded-full border border-white/20 text-white text-sm font-semibold transform transition hover:scale-105 hover:border-[#FFA500]">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

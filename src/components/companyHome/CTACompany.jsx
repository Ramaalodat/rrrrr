import React from 'react';

export default function CTACompany() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-black/60 via-black/50 to-black/60 border border-white/10 rounded-3xl p-8 md:p-12">
          <div className="absolute -inset-12 bg-gradient-to-r from-[#FFD700]/20 to-[#FFA500]/20 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to find the perfect match for your company?
            </h3>
            <div className="flex flex-wrap items-center gap-4">
              <a href="/company-home/suggested" className="px-6 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#FFD700] to-[#FFA500] shadow-gold transition transform hover:scale-105">
                Discover Candidates
              </a>
              <a href="/company-home/ads" className="px-6 py-3 rounded-full font-semibold border border-[#FFD700]/70 text-white hover:text-black hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#FFA500] transition transform hover:scale-105">
                Add New Post
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

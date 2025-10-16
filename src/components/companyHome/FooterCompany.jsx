import React from 'react';

export default function FooterCompany() {
  return (
    <footer className="bg-black/70 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm md:text-base">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="opacity-80">© 2025 InsightCV. All rights reserved.</p>
          <p className="opacity-80">Contact: support@insightcv.ai | Amman | WhatsApp</p>
        </div>
      </div>
    </footer>
  );
}

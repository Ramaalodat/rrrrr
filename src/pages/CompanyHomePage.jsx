import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavbarCompany from '../components/companyHome/NavbarCompany';
import HeroCompany from '../components/companyHome/HeroCompany';
import QuickInfo from '../components/companyHome/QuickInfo';
import RecentAds from '../components/companyHome/RecentAds';
import CTACompany from '../components/companyHome/CTACompany';
import FooterCompany from '../components/companyHome/FooterCompany';

function LogoutRedirect() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login', { replace: true });
  }, [navigate]);
  return null;
}

function Placeholder({ title }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-white">
      <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="opacity-80">This is a placeholder section. Frontend only.</p>
      </div>
    </div>
  );
}

export default function CompanyHomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0f0f1a] via-[#1a1a2e] to-[#16213e]">
      {/* subtle background glow orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 -left-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#FFD700]/20 to-[#FFA500]/20 blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-[#FFA500]/15 to-[#FFD700]/15 blur-3xl" />
      </div>

      <NavbarCompany />
      <main className="pt-20">{/* offset for fixed navbar */}
        <HeroCompany />
        <QuickInfo />
        <RecentAds />
        <CTACompany />
      </main>
      <FooterCompany />

      {/* Nested routes under /company-home/* for placeholders */}
      <Routes>
        <Route path="ads" element={<Placeholder title="Your Ads" />} />
        <Route path="suggested" element={<Placeholder title="Suggested Candidates" />} />
        <Route path="edit-info" element={<Placeholder title="Edit Company Info" />} />
        <Route path="logout" element={<LogoutRedirect />} />
      </Routes>
    </div>
  );
}

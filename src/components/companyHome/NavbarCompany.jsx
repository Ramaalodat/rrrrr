import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavbarCompany() {
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const base = 'fixed top-0 left-0 right-0 z-50 transition-colors duration-400';
  const bg = scrolled ? 'bg-black/60 backdrop-blur border-b border-white/10' : 'bg-transparent';

  const linkClass = (to) =>
    `px-3 py-2 rounded-md text-sm md:text-base transition transform hover:scale-105 hover:shadow-gold ${
      location.pathname.includes(to) ? 'text-[#FFD700]' : 'text-white/90 hover:text-white'
    }`;

  return (
    <header className={`${base} ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-semibold tracking-wide text-white">
          <span className="text-white/90">InsightCV</span>
          <span className="mx-2">–</span>
          <span className="gradient-text">Company Dashboard</span>
        </div>
        <nav className="flex items-center gap-2 md:gap-4">
          <Link to="/company-home/ads" className={linkClass('/company-home/ads')}>Ads</Link>
          <Link to="/company-home/suggested" className={linkClass('/company-home/suggested')}>Suggested Candidates</Link>
          <Link to="/company-home/edit-info" className={linkClass('/company-home/edit-info')}>Edit Info</Link>
          <Link to="/company-home/logout" className={linkClass('/company-home/logout')}>Logout</Link>
        </nav>
      </div>
    </header>
  );
}

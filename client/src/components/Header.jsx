import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/?search=${encodeURIComponent(query.trim())}`);
    if (onSearch) onSearch(query.trim());
  }

  const navLinkClass = ({ isActive }) =>
    `text-xs font-semibold px-3 py-2 rounded-md transition-colors whitespace-nowrap hidden md:block ${
      isActive ? "bg-forest text-paper" : "text-forest hover:bg-sandlight"
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `flex flex-col items-center justify-center w-full h-full text-[10px] font-medium transition-colors ${
      isActive ? "text-forest" : "text-charcoal/60 hover:text-charcoal"
    }`;

  return (
    <header className="sticky top-0 z-30 border-b-2 border-brass/70 bg-white shadow-ledger">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="Karim's Cattle Farm" className="h-11 w-11 rounded-md object-contain" />
          <div>
            <div className="font-serif text-lg font-semibold leading-none text-forest">Karim's Cattle Farm</div>
            <div className="mt-0.5 text-[11px] tracking-wide text-charcoal/45">Goat &amp; Cattle Management</div>
          </div>
        </Link>

        <form onSubmit={handleSubmit} className="w-full max-w-xl lg:mx-4 lg:flex-1">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by Animal ID or owner name..."
              className="w-full rounded-md border border-sand bg-white shadow-sm px-4 py-2 text-sm text-charcoal focus:outline-none focus:border-brass focus:ring-1 focus:ring-brass placeholder:text-charcoal/40 transition-all"
            />
          </div>
        </form>

        <nav className="hidden md:flex flex-wrap items-center justify-end gap-1.5">
          <NavLink to="/client-search" className={navLinkClass}>
            Search Animals
          </NavLink>
          <NavLink to="/vaccinate" className={navLinkClass}>
            Vaccinate
          </NavLink>
          <NavLink to="/weigh-in" className={navLinkClass}>
            Record Weights
          </NavLink>
          <Link
            to="/add"
            className="shrink-0 rounded-md bg-brass px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brass-light"
          >
            + Add Animal
          </Link>
        </nav>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-sand shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] pb-safe">
        <div className="flex items-center justify-around h-16 px-2 relative">
          <NavLink to="/" className={mobileNavLinkClass}>
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </NavLink>
          <NavLink to="/client-search" className={mobileNavLinkClass}>
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search
          </NavLink>
          
          <div className="flex flex-col items-center justify-center w-full h-full relative -top-3">
            <Link
              to="/add"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-brass text-white shadow-lg shadow-brass/30 transition-transform active:scale-95"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </Link>
          </div>

          <NavLink to="/vaccinate" className={mobileNavLinkClass}>
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            Vaccinate
          </NavLink>
          <NavLink to="/weigh-in" className={mobileNavLinkClass}>
            <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            Weight
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

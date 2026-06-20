import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Events", path: "/events" },
  { label: "Announcements", path: "/announcements" },
  { label: "Calendar", path: "/calendar" },
  { label: "Donation", path: "/donation" },
  { label: "Invitation", path: "/invitation" },
];

const tickerMessages = [
  "📿 Vachan at 6:00 AM & 7:00 PM — Venue: Main Mandap",
  "🏵 VIP Seva passes now available — Limited seating",
  "🔔 Sant Shri Rameshacharyaji's discourse on Gita — Starts Monday",
  "🪔 Chaturmas Pravesh Mahotsav begins Ashadha",
];

export default function SacredHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Main Nav */}
      <div className="bg-white border-b border-gold shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Border Pattern Left */}
            <div className="hidden md:flex items-center gap-1 text-gold opacity-60 text-xs tracking-widest select-none">
              ❈ ❈ ❈
            </div>

            {/* Center Logo */}
            <Link to="/" className="flex flex-col items-center group">
              <div className="text-3xl md:text-4xl font-serif text-saffron leading-none group-hover:scale-105 transition-transform duration-200">
                ॐ
              </div>
              <div className="font-serif text-brown text-xs md:text-sm tracking-widest uppercase mt-0.5">
                Sanatani Chaturmas
              </div>
            </Link>

            {/* Border Pattern Right */}
            <div className="hidden md:flex items-center gap-1 text-gold opacity-60 text-xs tracking-widest select-none">
              ❈ ❈ ❈
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 absolute right-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 text-sm font-sans font-medium transition-colors duration-150 border-b-2 ${
                    location.pathname === link.path
                      ? "text-saffron border-saffron"
                      : "text-brown border-transparent hover:text-saffron hover:border-saffron"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                className="ml-2 px-4 py-1.5 text-sm font-sans font-semibold bg-brown text-white border border-gold hover:bg-saffron transition-colors duration-150"
              >
                Admin
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-brown hover:text-saffron transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-cream border-t border-gold">
            <nav className="flex flex-col px-4 py-3 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 px-3 text-sm font-sans font-medium border-l-2 transition-colors duration-150 ${
                    location.pathname === link.path
                      ? "text-saffron border-saffron bg-orange-50"
                      : "text-brown border-transparent hover:text-saffron hover:border-saffron"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/admin"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-2 px-3 text-sm font-sans font-semibold bg-brown text-white text-center border border-gold"
              >
                Admin Dashboard
              </Link>
            </nav>
          </div>
        )}
      </div>

      {/* Ticker */}
      <div className="bg-saffron overflow-hidden py-1.5">
        <div className="flex items-center gap-2 px-4">
          <span className="text-white text-xs font-sans font-bold uppercase tracking-wider shrink-0 bg-brown px-2 py-0.5 mr-2">
            LIVE
          </span>
          <div className="overflow-hidden flex-1">
            <div className="ticker-animate inline-block text-white text-xs md:text-sm font-sans font-medium">
              {tickerMessages.join("  ✦  ")}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {tickerMessages.join("  ✦  ")}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
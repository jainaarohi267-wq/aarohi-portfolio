import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl md:text-2xl font-bold tracking-tight text-white font-display hover:text-amber-400 transition-colors whitespace-nowrap"
        >
          {PERSONAL_INFO.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-neutral-300">
          <a
            href="#projects"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Featured Works
          </a>
          <a
            href="#skills"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Capabilities
          </a>
          <a
            href="#services"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Services
          </a>
          <a
            href="#studio"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            3D Studio
          </a>
          <a
            href="#why-me"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Why Work With Me
          </a>
          <a
            href="#contact"
            className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-amber-400 hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={PERSONAL_INFO.portfolioCanvaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1 transition-colors px-3 py-2"
          >
            Canva Portfolio
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={onOpenInquiry}
            className="px-4 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 transition-all rounded-md shadow-sm hover:shadow-amber-400/20 active:scale-95 whitespace-nowrap"
          >
            Start a Project
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="px-3 py-1.5 text-xs font-semibold text-black bg-amber-400 rounded hover:bg-amber-300 transition-colors"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f17] border-b border-white/10 px-6 py-6 transition-all animate-fadeIn">
          <nav className="flex flex-col gap-4 text-base font-medium text-neutral-200">
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Featured Works
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Capabilities
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#studio"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              3D Studio Preview
            </a>
            <a
              href="#why-me"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Why Work With Me
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-amber-400 transition-colors"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.portfolioCanvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-neutral-400 hover:text-amber-400 flex items-center justify-between"
              >
                <span>View Canva Portfolio</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-black bg-amber-400 rounded hover:bg-amber-300 transition-colors"
              >
                Start a Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#06070a] border-t border-white/10 text-xs text-neutral-400">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-3">
          <span className="text-sm font-bold text-white font-display">
            {PERSONAL_INFO.name}
          </span>
          <span className="hidden sm:inline text-white/20" aria-hidden="true">·</span>
          <span>{PERSONAL_INFO.studioName}</span>
          <span className="hidden sm:inline text-white/20" aria-hidden="true">·</span>
          <span className="text-amber-400">&ldquo;{PERSONAL_INFO.tagline}&rdquo;</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.portfolioCanvaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <span>Canva Portfolio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="hover:text-amber-400 transition-colors"
          >
            {PERSONAL_INFO.email}
          </a>
          <a
            href={`tel:${PERSONAL_INFO.phoneClean}`}
            className="hover:text-amber-400 transition-colors"
          >
            {PERSONAL_INFO.phone}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-6 pt-6 border-t border-white/5 text-[11px] text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>
          © {new Date().getFullYear()} Aarohi Jain. All rights reserved. 3D Graphics, Branding &amp; Motion Design.
        </div>
        <div className="text-neutral-400">
          Designed with intentional craft &amp; spatial precision.
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { ArrowDown, Sparkles, Box, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-500/10 via-amber-300/5 to-indigo-600/5 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-amber-500/5 blur-[90px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headline & Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Discipline Kicker - Clean unboxed text with typographic separator */}
            <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-amber-400 tracking-wide mb-4">
              <span>3D Graphic Designer</span>
              <span aria-hidden="true">·</span>
              <span>Branding Specialist</span>
              <span aria-hidden="true">·</span>
              <span>Visual Creator</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white font-display leading-[1.08] mb-6 text-balance">
              Where Creativity Meets Intelligent Automation.
            </h1>

            {/* Bio Narrative */}
            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.about}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#projects"
                className="px-6 py-3.5 text-sm font-semibold text-black bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all rounded-md shadow-lg shadow-amber-400/15 flex items-center gap-2"
              >
                <span>Explore Featured Works</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenInquiry}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-neutral-900 border border-neutral-700/80 hover:border-amber-400/60 hover:bg-neutral-800 transition-all rounded-md flex items-center gap-2 active:scale-95"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Discuss Your Project</span>
              </button>
            </div>

            {/* Credibility Rigor & Metrics - Clean Unboxed Discipline */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight tabular-nums">
                    {stat.value}
                  </span>
                  <span className="text-xs text-neutral-400 mt-1 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-5 relative">
            <div className="relative group rounded-2xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl shadow-black/80 transition-transform duration-500 hover:scale-[1.01]">
              {/* Image Frame with fallback */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                <img
                  src="/src/assets/images/hero_3d_design_sculpture_1790608141764.jpg"
                  alt="3D Abstract Luxury Sculpture rendered by Aarohi Jain"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to elegant CSS container if missing
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle vignette scrim */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Visual Artwork Label in bottom-left */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                  <div className="flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-2">
                      <Box className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-medium text-white">Design Studio by Aarohi</span>
                    </div>
                    <span className="text-neutral-400">Ray-traced 3D Art</span>
                  </div>
                  <div className="mt-1 text-xs text-neutral-400">
                    3D Fluid Form · Octane Metallic Shaders · Procedural Lighting
                  </div>
                </div>
              </div>

              {/* Discreet studio hallmark badge */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/10 px-3 py-1 rounded-md text-xs font-medium text-neutral-300 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>Available for Commission</span>
              </div>
            </div>

            {/* Quick Link to Canva Portfolio */}
            <div className="mt-4 flex items-center justify-between px-2 text-xs text-neutral-400">
              <span>View full Canva portfolio showcase</span>
              <a
                href={PERSONAL_INFO.portfolioCanvaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 hover:underline inline-flex items-center gap-1 font-medium"
              >
                <span>portfolio-aarohi.my.canva.site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

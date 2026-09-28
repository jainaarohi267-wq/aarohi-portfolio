import React, { useState } from 'react';
import { ArrowUpRight, Check, Wrench } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsSectionProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCaseStudy }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'branding') return project.category === 'Branding';
    if (activeFilter === 'packaging') return project.category === 'Packaging';
    if (activeFilter === 'campaigns') return project.category === 'Campaigns';
    if (activeFilter === '3d') return project.category === '3D Visualization';
    return true;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header & Functional Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
              Featured Projects
            </h2>
            <p className="text-neutral-400 text-sm mt-2 max-w-xl">
              Real commercial case studies demonstrating 3D brand positioning, bespoke packaging, and high-conversion social campaigns.
            </p>
          </div>

          {/* Functional interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-900 border border-white/10 rounded-lg overflow-x-auto max-w-full">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'branding', label: '3D Branding' },
              { id: 'packaging', label: 'Packaging Design' },
              { id: 'campaigns', label: 'Social Campaigns' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-amber-400 text-black font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Bento / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-[#0d0f17] hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-black/50"
            >
              {/* Visual Presentation Area */}
              <div
                className="relative aspect-[4/3] w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => onOpenCaseStudy(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />

                {/* Subtle scrim overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0d0f17] via-transparent to-transparent opacity-80"
                  aria-hidden="true"
                />

                {/* Top-Right Quick Expand Icon */}
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white/80 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                    <span className="text-amber-400 font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.clientIndustry}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.completionTime}</span>
                  </div>

                  {/* Title */}
                  <h3
                    onClick={() => onOpenCaseStudy(project)}
                    className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  {/* Objective */}
                  <div className="mt-3 text-xs text-neutral-300 line-clamp-2">
                    <span className="font-semibold text-neutral-200">Objective: </span>
                    {project.objective}
                  </div>

                  {/* Highlights Bulleted */}
                  <div className="mt-4 pt-4 border-t border-white/5 space-y-1.5">
                    {project.highlights.slice(0, 3).map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-[11px] text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools Used (Clean text list) */}
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-neutral-400">
                    <Wrench className="w-3 h-3 text-neutral-400 shrink-0" />
                    <span className="truncate">
                      {project.tools.join(' · ')}
                    </span>
                  </div>
                </div>

                {/* Result & Case Study Trigger */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-xs text-neutral-300">
                    <span className="text-amber-400 font-semibold">Result: </span>
                    <span className="truncate inline-block max-w-[170px] align-bottom">
                      {project.result}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project)}
                    className="text-xs font-semibold text-amber-400 hover:text-white flex items-center gap-1 transition-colors whitespace-nowrap"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

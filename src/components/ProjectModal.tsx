import React, { useEffect } from 'react';
import { X, Check, Wrench, Clock, Building, ArrowRight, Sparkles } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquireSimilar: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquireSimilar,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      {/* Backdrop click dismiss */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-label="Close modal backdrop"
      />

      <div className="relative w-full max-w-4xl bg-[#0f1118] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0e14] sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-amber-400">
              Case Study
            </span>
            <span className="text-white/20" aria-hidden="true">·</span>
            <span className="text-xs text-neutral-400">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close case study details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          {/* Main Title & Lead */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              {project.title}
            </h2>
            <p className="mt-2 text-base text-neutral-300 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* High-Resolution Project Showcase Image */}
          <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 bg-black">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1 rounded text-[11px] text-neutral-300">
              High Resolution 3D Render
            </div>
          </div>

          {/* Key Quick Facts Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-neutral-900/60 border border-white/5 text-xs">
            <div className="flex items-start gap-2.5">
              <Building className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-400">Industry / Sector</div>
                <div className="font-semibold text-white mt-0.5">{project.clientIndustry}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-400">Turnaround Time</div>
                <div className="font-semibold text-white mt-0.5">{project.completionTime}</div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 col-span-2 sm:col-span-1">
              <Wrench className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <div className="text-neutral-400">Tools &amp; Tech</div>
                <div className="font-semibold text-white mt-0.5">{project.tools.join(', ')}</div>
              </div>
            </div>
          </div>

          {/* Objective & Strategic Solution */}
          <div className="space-y-3">
            <h3 className="text-base font-bold text-white font-display">
              Project Objective
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed p-4 rounded-xl bg-white/5 border border-white/5">
              {project.objective}
            </p>
          </div>

          {/* Highlights & Deliverables Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Key Highlights
              </h3>
              <ul className="space-y-2.5">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                Services &amp; Deliverables
              </h3>
              <ul className="space-y-2.5">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Business Impact / Result */}
          <div className="p-5 rounded-xl bg-amber-400/10 border border-amber-400/30">
            <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
              Commercial Result &amp; Value Created
            </div>
            <div className="text-sm font-medium text-white leading-relaxed">
              {project.result}
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA Bar */}
        <div className="px-6 py-4 border-t border-white/10 bg-[#0c0e14] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs text-neutral-400">
            Ready to achieve similar visual excellence for your brand?
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquireSimilar(project.title);
              }}
              className="px-5 py-2.5 text-xs font-semibold text-black bg-amber-400 hover:bg-amber-300 rounded-md transition-all flex items-center gap-2 shadow-sm"
            >
              <span>Inquire About Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

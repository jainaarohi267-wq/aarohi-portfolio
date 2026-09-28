import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, Sparkles } from 'lucide-react';

interface ProjectEstimatorProps {
  onApplyEstimateToInquiry: (summary: string, timeline: string) => void;
}

interface DeliverableOption {
  id: string;
  label: string;
  category: string;
  days: number;
}

const DELIVERABLE_OPTIONS: DeliverableOption[] = [
  { id: 'logo-3d', label: '3D Sculpted Logo & Monogram', category: '3D & Branding', days: 4 },
  { id: 'vector-id', label: 'Complete 2D Brand Identity & Guidelines', category: 'Branding', days: 5 },
  { id: 'pkg-mockup', label: 'Product Packaging & 3D Bottle/Box Mockups', category: 'Packaging', days: 6 },
  { id: 'social-kit', label: '10x Social Media Posts & Motion Carousel', category: 'Marketing', days: 3 },
  { id: 'canva-templates', label: 'Editable Canva Pro Master Template Suite', category: 'Marketing', days: 2 },
  { id: 'print-collateral', label: 'Brochure, Flyer & Event Signage Vector Files', category: 'Graphic Design', days: 3 },
  { id: 'ad-bundle', label: 'Conversion Ad Creatives (Story/Feed/Display)', category: 'Marketing', days: 3 },
];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onApplyEstimateToInquiry }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['logo-3d', 'social-kit']);
  const [timelineUrgency, setTimelineUrgency] = useState<'rush' | 'standard' | 'relaxed'>('standard');

  const toggleItem = (id: string) => {
    if (selectedItems.includes(id)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter((i) => i !== id));
      }
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Calculate estimated business days
  const baseDays = selectedItems.reduce((acc, currId) => {
    const item = DELIVERABLE_OPTIONS.find((o) => o.id === currId);
    return acc + (item ? item.days : 0);
  }, 0);

  // Parallel overlapping timeline math
  const effectiveDays = Math.max(3, Math.ceil(baseDays * 0.65));
  const finalDays =
    timelineUrgency === 'rush'
      ? Math.max(2, Math.round(effectiveDays * 0.6))
      : timelineUrgency === 'relaxed'
      ? Math.round(effectiveDays * 1.3)
      : effectiveDays;

  const handleApply = () => {
    const selectedLabels = DELIVERABLE_OPTIONS.filter((o) => selectedItems.includes(o.id))
      .map((o) => o.label)
      .join(', ');
    const timelineStr = `${finalDays} Business Days (${timelineUrgency.toUpperCase()})`;
    onApplyEstimateToInquiry(selectedLabels, timelineStr);
  };

  return (
    <section className="py-16 md:py-20 bg-[#0a0c12] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#10131d] via-[#0d0f17] to-[#0a0c12] border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[90px] rounded-full pointer-events-none -z-10"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Interactive Checklist */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                <Calculator className="w-4 h-4" />
                <span>Interactive Project Scope Planner</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Estimate Your Design Timeline &amp; Scope
              </h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-2 leading-relaxed">
                Select the creative assets your brand requires. Get a realistic production timeline and send a structured brief directly to Aarohi.
              </p>

              {/* Deliverable Options List */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {DELIVERABLE_OPTIONS.map((option) => {
                  const isChecked = selectedItems.includes(option.id);
                  return (
                    <button
                      key={option.id}
                      onClick={() => toggleItem(option.id)}
                      className={`text-left p-3 rounded-xl border transition-all text-xs flex items-center justify-between gap-3 ${
                        isChecked
                          ? 'bg-amber-400/10 border-amber-400 text-white'
                          : 'bg-neutral-900/40 border-white/5 text-neutral-400 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                            isChecked
                              ? 'bg-amber-400 border-amber-400 text-black'
                              : 'border-white/30 bg-transparent'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className={`font-medium ${isChecked ? 'text-white' : 'text-neutral-300'}`}>
                          {option.label}
                        </span>
                      </div>
                      <span className="text-[10px] text-neutral-400 shrink-0">~{option.days}d</span>
                    </button>
                  );
                })}
              </div>

              {/* Timeline Urgency Switcher */}
              <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4 text-xs">
                <span className="text-neutral-300 font-medium">Production Pace:</span>
                <div className="flex items-center gap-1.5 p-1 bg-neutral-900 rounded-lg border border-white/10">
                  <button
                    onClick={() => setTimelineUrgency('rush')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      timelineUrgency === 'rush' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    ⚡ Rush (48h–72h)
                  </button>
                  <button
                    onClick={() => setTimelineUrgency('standard')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      timelineUrgency === 'standard' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Standard (Recommended)
                  </button>
                  <button
                    onClick={() => setTimelineUrgency('relaxed')}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      timelineUrgency === 'relaxed' ? 'bg-amber-400 text-black font-semibold' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Flexible
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Summary Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-neutral-900/90 border border-white/10 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-neutral-400 pb-3 border-b border-white/10">
                  <span>Selected Inclusions</span>
                  <span className="text-white font-mono">{selectedItems.length} Deliverables</span>
                </div>

                <div className="mt-4 space-y-1.5 text-xs">
                  {selectedItems.map((id) => {
                    const item = DELIVERABLE_OPTIONS.find((o) => o.id === id);
                    return (
                      <div key={id} className="flex items-center justify-between text-neutral-300">
                        <span className="truncate max-w-[200px]">{item?.label}</span>
                        <span className="text-neutral-400">Included</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Timeline metric */}
              <div className="p-4 rounded-xl bg-amber-400/10 border border-amber-400/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300">
                  <Clock className="w-4 h-4" />
                  <span>Estimated Total Completion</span>
                </div>
                <div className="text-3xl font-extrabold text-white font-display mt-2 tabular-nums">
                  {finalDays} <span className="text-base font-normal text-neutral-300">Business Days</span>
                </div>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Includes initial drafts, 3D texturing, revision round &amp; final handoff.
                </div>
              </div>

              {/* Apply Action */}
              <button
                onClick={handleApply}
                className="w-full py-3 px-4 text-xs font-bold text-black bg-amber-400 hover:bg-amber-300 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-400/10 active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>Lock Scope &amp; Request Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { Box, Sparkles, Package, Share2, Film, Palette, Cpu, TrendingUp, Layers, Eye, CheckCircle2 } from 'lucide-react';

interface SkillsTickerProps {
  onSelectSkillFilter?: (skillName: string) => void;
}

export const SkillsTicker: React.FC<SkillsTickerProps> = ({ onSelectSkillFilter }) => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Box':
        return <Box className="w-4 h-4 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-amber-400" />;
      case 'Package':
        return <Package className="w-4 h-4 text-amber-400" />;
      case 'Share2':
        return <Share2 className="w-4 h-4 text-amber-400" />;
      case 'Film':
        return <Film className="w-4 h-4 text-amber-400" />;
      case 'Palette':
        return <Palette className="w-4 h-4 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-amber-400" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-amber-400" />;
      case 'Eye':
        return <Eye className="w-4 h-4 text-amber-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  const handleSkillClick = (skillName: string) => {
    const next = selectedSkill === skillName ? null : skillName;
    setSelectedSkill(next);
    if (onSelectSkillFilter) {
      onSelectSkillFilter(next || 'all');
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 border-y border-white/10 bg-[#0b0d13]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Capabilities &amp; Core Stack
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Creative Expertise &amp; Specialized Disciplines
            </h2>
          </div>
          <p className="text-sm text-neutral-400 max-w-md">
            Synthesizing 3D craft with AI-powered ideation, precision typography, and brand-first strategic execution.
          </p>
        </div>

        {/* 10 Core Skills Interactive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {SKILLS_LIST.map((skill) => {
            const isSelected = selectedSkill === skill.name;
            return (
              <button
                key={skill.name}
                onClick={() => handleSkillClick(skill.name)}
                className={`text-left p-4 rounded-xl border transition-all text-xs flex flex-col justify-between min-h-[105px] group ${
                  isSelected
                    ? 'bg-amber-400/10 border-amber-400 text-white shadow-md shadow-amber-400/10 scale-[1.02]'
                    : 'bg-neutral-900/60 border-white/10 text-neutral-300 hover:border-amber-400/40 hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="p-2 rounded-lg bg-black/40 border border-white/5 group-hover:border-amber-400/20">
                    {getIcon(skill.icon)}
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-amber-400 animate-fadeIn" />
                  )}
                </div>

                <div>
                  <div className="font-semibold text-sm text-white group-hover:text-amber-300 transition-colors">
                    {skill.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-0.5">
                    {skill.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Skill Context Notice */}
        {selectedSkill && (
          <div className="mt-6 p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-2 text-amber-200">
              <span className="font-semibold text-white">Filtering by discipline:</span>
              <span className="font-bold underline text-amber-400">{selectedSkill}</span>
              <span className="text-neutral-400">· Projects below reflect this craft.</span>
            </div>
            <button
              onClick={() => handleSkillClick(selectedSkill)}
              className="text-amber-400 hover:text-white underline text-xs font-medium"
            >
              Reset view
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

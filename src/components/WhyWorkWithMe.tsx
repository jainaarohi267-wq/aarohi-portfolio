import React from 'react';
import { WHY_WORK_WITH_ME, WORKFLOW_STEPS, TESTIMONIALS } from '../data/portfolioData';
import { Target, Zap, MessageSquare, Sparkles, Cpu, TrendingUp, Quote, CheckCircle2 } from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-5 h-5 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-5 h-5 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="why-me" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            Value Proposition
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Why Work With Aarohi Jain?
          </h2>
          <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
            Bridging the gap between conceptual 3D artistry and commercial business growth. Every pixel and vertex is engineered with precision.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {WHY_WORK_WITH_ME.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-amber-400/40 transition-all group shadow-md shadow-black/30"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-5 group-hover:border-amber-400/30 transition-colors">
                {getIcon(pillar.icon)}
              </div>
              <h3 className="text-lg font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* 4-Step Collaborative Workflow */}
        <div className="mb-24 pt-16 border-t border-white/10">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Process
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Structured 4-Step Creative Workflow
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              From concept to finished master files with complete transparency at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WORKFLOW_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#0b0d14] border border-white/10 relative group"
              >
                <div className="text-3xl font-extrabold text-amber-400/40 font-mono mb-4 group-hover:text-amber-400 transition-colors">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-white font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Evidence & Testimonials */}
        <div className="pt-16 border-t border-white/10">
          <div className="max-w-xl mb-12">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Proof &amp; Feedback
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Endorsed by Founders &amp; Creative Directors
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#0d0f17] border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <Quote className="w-6 h-6 text-amber-400/40 mb-4" />
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="font-semibold text-sm text-white font-display">
                    {t.client}
                  </div>
                  <div className="text-xs text-neutral-400 mt-0.5">
                    {t.role} · <span className="text-amber-400">{t.company}</span>
                  </div>
                  <div className="text-[11px] text-neutral-400 mt-1">
                    Delivered: {t.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

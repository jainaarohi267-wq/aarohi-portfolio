import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/portfolioData';
import { Check, Clock, ArrowRight, Layers, Sparkles, Box, TrendingUp } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'branding':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'graphic-design':
        return <Layers className="w-5 h-5 text-amber-400" />;
      case '3d-design':
        return <Box className="w-5 h-5 text-amber-400" />;
      case 'digital-marketing':
        return <TrendingUp className="w-5 h-5 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
            What I Deliver
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
            Specialized Design Services &amp; Solutions
          </h2>
          <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
            Every engagement is bespoke, combining human artistic vision with automated production workflows for rapid, market-ready delivery.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-[#0d0f17] border border-white/10 hover:border-amber-400/40 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-md shadow-black/40"
            >
              <div>
                {/* Icon & Title */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 w-fit mb-5 group-hover:border-amber-400/30 transition-colors">
                  {getServiceIcon(service.id)}
                </div>

                <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                  {service.tagline}
                </p>

                {/* Sub-items Checklist */}
                <div className="mt-6 pt-5 border-t border-white/5 space-y-2.5">
                  <div className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Core Inclusions
                  </div>
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Timeline & Inquire Action */}
              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-4">
                  <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Est. Turnaround: <strong className="text-white font-medium">{service.timeline}</strong></span>
                </div>

                <button
                  onClick={() => onSelectServiceForInquiry(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-neutral-900 border border-white/15 text-white group-hover:bg-amber-400 group-hover:text-black group-hover:border-amber-400 transition-all flex items-center justify-center gap-2"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

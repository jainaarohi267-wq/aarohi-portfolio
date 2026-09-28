import React, { useState, useEffect } from 'react';
import { Mail, Phone, ExternalLink, Send, Check, Copy, MessageCircle, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
  initialNotes?: string;
  initialTimeline?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
  initialNotes = '',
  initialTimeline = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('3D Logo Design');
  const [budget, setBudget] = useState('$500 - $1,500');
  const [timeline, setTimeline] = useState('1 - 2 Weeks');
  const [message, setMessage] = useState('');
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success'>('idle');

  // Handle pre-fill from external interactions
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (initialNotes || initialTimeline) {
      let combined = message;
      if (initialTimeline && !message.includes(initialTimeline)) {
        combined += `\n[Scope Estimate]: Target Timeline: ${initialTimeline}`;
      }
      if (initialNotes && !message.includes(initialNotes)) {
        combined += `\n[Included Assets]: ${initialNotes}`;
      }
      setMessage(combined.trim());
    }
  }, [initialNotes, initialTimeline]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setIsCopiedEmail(true);
    setTimeout(() => setIsCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setIsCopiedPhone(true);
    setTimeout(() => setIsCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Build subject and body for standard mailto
    const subject = encodeURIComponent(`Project Inquiry: ${service} - ${name} (${company || 'Individual'})`);
    const body = encodeURIComponent(
      `Hello Aarohi,\n\nI would like to discuss a design project with Design Studio by Aarohi.\n\n` +
      `Client: ${name}\n` +
      `Email: ${email}\n` +
      `Company: ${company || 'N/A'}\n` +
      `Service Requested: ${service}\n` +
      `Budget Range: ${budget}\n` +
      `Target Timeline: ${timeline}\n\n` +
      `Project Brief / Notes:\n${message || 'Standard inquiry'}\n\n` +
      `Looking forward to hearing from you!`
    );

    // Provide immediate UI success feedback
    setSubmitStatus('success');

    // Trigger user mail client
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#090b10] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Cards & Studio Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Initiate Collaboration
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                Let&rsquo;s Create Something Extraordinary
              </h2>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                Whether you need a 3D metallic brand emblem, luxury packaging mockups, or an omnichannel social campaign—reach out today for a consultation and proposal.
              </p>

              {/* Tagline Badge */}
              <div className="mt-6 p-4 rounded-xl bg-neutral-900 border border-white/10 text-xs text-neutral-300 italic">
                &ldquo;{PERSONAL_INFO.tagline}&rdquo;
              </div>

              {/* Direct Channels */}
              <div className="mt-8 space-y-3">
                {/* Email Channel */}
                <div className="p-4 rounded-xl bg-[#0e111a] border border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 font-medium">Direct Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    title="Copy email to clipboard"
                  >
                    {isCopiedEmail ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone & WhatsApp Channel */}
                <div className="p-4 rounded-xl bg-[#0e111a] border border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 font-medium">Direct Call &amp; WhatsApp</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phoneClean}`}
                        className="text-xs font-semibold text-white hover:text-amber-400 transition-colors"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <a
                      href={`https://wa.me/${PERSONAL_INFO.phoneClean.replace('+', '')}?text=${encodeURIComponent(
                        "Hi Aarohi, I reviewed your 3D design portfolio and would like to discuss a project!"
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-emerald-400 hover:text-emerald-300 rounded-lg hover:bg-emerald-500/10 transition-colors"
                      title="Chat on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                    <button
                      onClick={copyPhone}
                      className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                      title="Copy phone to clipboard"
                    >
                      {isCopiedPhone ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Canva Portfolio Showcase Card */}
                <div className="p-4 rounded-xl bg-[#0e111a] border border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] text-neutral-400 font-medium">Official Canva Showcase</div>
                      <div className="text-xs font-semibold text-white">portfolio-aarohi.my.canva.site</div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.portfolioCanvaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-amber-400 hover:text-amber-300 rounded-lg hover:bg-amber-400/10 transition-colors"
                    title="Open Canva portfolio"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Studio Identity Tag in bottom-left */}
            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-neutral-400">
              <strong className="text-white">Design Studio by Aarohi</strong>
              <div className="mt-0.5">Based in India · Serving Global Clients Remotely</div>
            </div>
          </div>

          {/* Right Column: Direct Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl bg-[#0e111a] border border-white/15 shadow-xl relative">
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Project Inquiry &amp; Brief
              </h3>
              <p className="text-xs text-neutral-400 mb-6">
                Fill in your project specifications to receive a formal proposal and initial concept estimate within 24 hours.
              </p>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-amber-400/15 border border-amber-400/40 text-xs text-amber-200 flex items-start gap-3 animate-fadeIn">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-semibold">Inquiry Prepared!</strong> Your email client has been launched with the pre-filled brief. If it did not open, you can also reach Aarohi directly at{' '}
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-amber-400 underline font-medium">
                      {PERSONAL_INFO.email}
                    </a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Your Name <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Vikramaditya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Email Address <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. founder@brand.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Company / Brand */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Brand / Organization
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Lumina Luxury Goods"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Primary Service */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Primary Service Needed
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="3D Logo Design">3D Logo &amp; Metallic Wordmark</option>
                      <option value="Product Packaging Design">Product Packaging &amp; 3D Mockup</option>
                      <option value="Social Media Campaign">3D Social Media Campaign Suite</option>
                      <option value="Brand Identity Design">Comprehensive Brand Identity</option>
                      <option value="Digital Marketing Assets">Ad Creatives &amp; Marketing Kits</option>
                      <option value="Full Retainer / Custom Project">Full Retainer / Custom Project</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Budget */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Estimated Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Under $500">Under $500 / ₹25k - ₹40k</option>
                      <option value="$500 - $1,500">$500 - $1,500 / ₹40k - ₹1.2L</option>
                      <option value="$1,500 - $3,500">$1,500 - $3,500 / ₹1.2L - ₹3L</option>
                      <option value="$3,500+">$3,500+ / ₹3L+ (Enterprise/Retainer)</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                      Desired Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Rush: 48h to 72h">Rush (48h – 72h)</option>
                      <option value="1 - 2 Weeks">1 – 2 Weeks (Standard)</option>
                      <option value="3 - 4 Weeks">3 – 4 Weeks</option>
                      <option value="Flexible">Flexible / Ongoing</option>
                    </select>
                  </div>
                </div>

                {/* Brief Message */}
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                    Project Brief &amp; Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about your product, desired style (e.g. gold metallic, frosted glass, bold typography), target audience, and key deliverables..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-white/10 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold transition-all shadow-md shadow-amber-400/10 flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry to Aarohi</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

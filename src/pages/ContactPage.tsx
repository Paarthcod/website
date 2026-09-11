import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { AGENCY_INFO } from '../data/agencyData';
import { playHoverSound, playClickSound, playSuccessSound } from '../utils/audio';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Business Website',
    budget: '$10k–$25k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'Business Website',
    'Custom 3D Experience',
    'Web Application',
    'SEO & Speed Overhaul',
    'Google & Meta Ads',
    'Full Digital Growth Stack'
  ];

  const budgets = [
    '$5k–$10k',
    '$10k–$25k',
    '$25k–$50k',
    '$50k+',
    'Monthly Growth Partnership'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClickSound();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      playSuccessSound();

      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#737565', '#9A8064', '#242321'],
        });
      } catch {
        // fallback
      }
    }, 800);
  };

  return (
    <div className="w-full pt-36 pb-28 px-8 space-y-16 max-w-7xl mx-auto bg-[#F4F1EA] text-[#242321]">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ 07 // STRATEGIC ENGAGEMENT ]</span>
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight font-display text-[#242321]">
          START A PROJECT<span className="text-[#9A8064]">.</span>
        </h1>
        <p className="text-[#918B80] text-lg leading-relaxed font-normal">
          If you are ready to evaluate your existing digital presence, audit your technical stack, or engineer a new web platform from the ground up, connect with our engineering team.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Access Channels */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-white border border-[#B8B3A9]/60 shadow-sm space-y-6">
            <h3 className="font-mono text-xs font-bold text-[#9A8064] uppercase tracking-wider">
              DIRECT ACCESS CHANNELS
            </h3>

            <div className="space-y-4 text-xs font-mono">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#737565]" />
                <div>
                  <div className="text-[10px] text-[#918B80]">DIRECT INQUIRIES</div>
                  <div className="text-[#242321] font-semibold">hello@kinetixgrowth.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#737565]" />
                <div>
                  <div className="text-[10px] text-[#918B80]">STRATEGY DESK</div>
                  <div className="text-[#242321] font-semibold">+1 (555) 019-2834 / +91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#737565]" />
                <div>
                  <div className="text-[10px] text-[#918B80]">DIGITAL PORTAL</div>
                  <div className="text-[#242321] font-semibold">www.kinetixgrowth.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-[#B8B3A9]/30">
                <MapPin className="w-4 h-4 text-[#737565]" />
                <div>
                  <div className="text-[10px] text-[#918B80]">HEADQUARTERS</div>
                  <div className="text-[#242321] font-semibold">Executive Suite 400, Innovation Tower, Tech District</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-[#242321] text-[#F4F1EA] space-y-4">
            <div className="text-xs font-mono text-[#9A8064] uppercase">WHAT HAPPENS NEXT</div>
            <ol className="space-y-3 text-xs">
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-[#9A8064]">1.</span>
                <span><strong>Initial Discovery Call (20 Mins):</strong> We review your current assets, business targets, and key bottlenecks.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-[#9A8064]">2.</span>
                <span><strong>Technical & Growth Audit:</strong> We analyze code health, SEO indexability, speed metrics, and ad tracking.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-mono font-bold text-[#9A8064]">3.</span>
                <span><strong>Custom Asset Proposal:</strong> We deliver a complete architecture blueprint and timeline.</span>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Column: Direct Form Submission */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#B8B3A9]/60 shadow-md">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="font-display text-2xl font-semibold text-[#242321]">
                  PROJECT CONSULTATION FORM
                </h3>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-[#A47F68]/15 border border-[#A47F68] text-xs font-mono text-[#242321]">
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#737565] uppercase">01 // SELECT ASSET TYPE</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setFormData({ ...formData, projectType: type })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                          formData.projectType === type
                            ? 'bg-[#242321] text-[#F4F1EA] border-[#242321]'
                            : 'bg-[#F4F1EA] text-[#242321] border-[#B8B3A9]/50 hover:border-[#737565]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-[#737565] uppercase">02 // BUDGET RANGE</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => setFormData({ ...formData, budget: b })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono border transition-all ${
                          formData.budget === b
                            ? 'bg-[#242321] text-[#F4F1EA] border-[#242321]'
                            : 'bg-[#F4F1EA] text-[#242321] border-[#B8B3A9]/50 hover:border-[#737565]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#737565]">FULL NAME *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full p-3 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#737565]">WORK EMAIL *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full p-3 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-[#737565]">PROJECT DETAILS *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your current web presence, targets, and goals..."
                    className="w-full p-3 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-full bg-[#242321] text-[#F4F1EA] hover:bg-[#737565] font-semibold text-xs font-mono tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>{loading ? 'SUBMITTING...' : 'SUBMIT BLUEPRINT REQUEST'}</span>
                  <ArrowRight className="w-4 h-4 text-[#9A8064]" />
                </button>
              </form>
            ) : (
              <div className="py-16 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#737565] text-[#F4F1EA] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#F4F1EA]" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-[#242321]">
                  CONSULTATION REQUEST SUBMITTED
                </h3>
                <p className="text-xs font-mono text-[#918B80] max-w-md mx-auto">
                  Thank you, {formData.name}. Our engineering desk will review your details and connect with you shortly.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

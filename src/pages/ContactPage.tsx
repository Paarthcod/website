import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ContactCanvas } from '../components/3d/ContactCanvas';
import { AGENCY_INFO } from '../data/agencyData';
import { playHoverSound, playClickSound, playSuccessSound } from '../utils/audio';
import { ArrowUpRight, CheckCircle2, Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Website',
    budget: '₹1L–₹3L',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const projectTypes = [
    'Website',
    '3D Experience',
    'Web Application',
    'AI / Automation',
    'E-Commerce',
    'Dashboard',
    'Digital Product',
    'Other'
  ];

  const budgets = [
    '₹25K–₹50K',
    '₹50K–₹1L',
    '₹1L–₹3L',
    '₹3L+',
    "LET'S DISCUSS"
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
          particleCount: 70,
          spread: 55,
          origin: { y: 0.6 },
          colors: ['#B7A98F', '#171717', '#DCD9D2'],
        });
      } catch {
        // Ignore fallback
      }
    }, 900);
  };

  return (
    <div className="w-full pt-36 pb-28 px-8 relative overflow-hidden min-h-screen bg-[#F5F3EE] text-[#171717]">
      {/* Background Glass Canvas */}
      <ContactCanvas />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
        {/* Left Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-mono text-[#6F6F6A] uppercase tracking-widest font-medium"
            >
              [ PROJECT INQUIRY ]
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight font-display text-[#171717] leading-none">
              HAVE AN IDEA? <br />
              <span className="text-[#6F6F6A]">LET'S BUILD IT.</span>
            </h1>

            <p className="text-[#6F6F6A] text-base sm:text-lg font-light leading-relaxed">
              Tell us what you're building. We'll figure out how to make it better.
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-[#DCD9D2] text-sm font-mono">
            <div className="glass-panel p-4 rounded-2xl border border-[#DCD9D2] flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#171717]" />
              <div>
                <div className="text-xs text-[#6F6F6A]">EMAIL DIRECT</div>
                <div className="text-[#171717] font-semibold">{AGENCY_INFO.email}</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-[#DCD9D2] flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#171717]" />
              <div>
                <div className="text-xs text-[#6F6F6A]">PHONE DIRECT</div>
                <div className="text-[#171717] font-semibold">{AGENCY_INFO.phone}</div>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl border border-[#DCD9D2] flex items-center gap-4">
              <MapPin className="w-5 h-5 text-[#171717]" />
              <div>
                <div className="text-xs text-[#6F6F6A]">STUDIO</div>
                <div className="text-[#171717] font-semibold">{AGENCY_INFO.address}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#DCD9D2] space-y-8 shadow-sm relative bg-[#FAF8F5]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-[#171717] text-[#F5F3EE] border border-[#171717] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8 text-[#B7A98F]" />
                </div>
                <h3 className="text-3xl font-semibold font-display text-[#171717]">PROJECT INQUIRY RECEIVED</h3>
                <p className="text-[#6F6F6A] max-w-md mx-auto text-sm font-light leading-relaxed">
                  Thank you, <span className="text-[#171717] font-medium">{formData.name}</span>. Our technical director will review your brief and respond within 12 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      company: '',
                      email: '',
                      phone: '',
                      projectType: 'Website',
                      budget: '₹1L–₹3L',
                      message: '',
                    });
                  }}
                  className="px-6 py-3 rounded-full bg-[#F5F3EE] hover:bg-[#E5E3DD] border border-[#DCD9D2] text-[#171717] font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  SEND ANOTHER INQUIRY
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-mono">
                    {errorMsg}
                  </div>
                )}

                {/* 1. Project Type Selector */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">
                    1. PROJECT TYPE
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => {
                          playClickSound();
                          setFormData({ ...formData, projectType: type });
                        }}
                        onMouseEnter={playHoverSound}
                        className={`px-4 py-2 rounded-full font-mono text-xs transition-all border ${
                          formData.projectType === type
                            ? 'bg-[#171717] text-[#F5F3EE] font-semibold border-[#171717]'
                            : 'bg-[#F5F3EE] text-[#6F6F6A] border-[#DCD9D2] hover:border-[#171717]/40 hover:text-[#171717]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Budget Selector */}
                <div className="space-y-3">
                  <label className="block text-xs font-mono text-[#6F6F6A] uppercase tracking-widest">
                    2. ESTIMATED BUDGET
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        type="button"
                        key={b}
                        onClick={() => {
                          playClickSound();
                          setFormData({ ...formData, budget: b });
                        }}
                        onMouseEnter={playHoverSound}
                        className={`px-4 py-2 rounded-full font-mono text-xs transition-all border ${
                          formData.budget === b
                            ? 'bg-[#171717] text-[#F5F3EE] font-semibold border-[#171717]'
                            : 'bg-[#F5F3EE] text-[#6F6F6A] border-[#DCD9D2] hover:border-[#171717]/40 hover:text-[#171717]'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#6F6F6A] uppercase">NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F3EE] border border-[#DCD9D2] text-[#171717] placeholder-[#6F6F6A]/50 focus:outline-none focus:border-[#171717] text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#6F6F6A] uppercase">COMPANY / BRAND</label>
                    <input
                      type="text"
                      placeholder="Acme Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F3EE] border border-[#DCD9D2] text-[#171717] placeholder-[#6F6F6A]/50 focus:outline-none focus:border-[#171717] text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#6F6F6A] uppercase">EMAIL ADDRESS *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@acme.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F3EE] border border-[#DCD9D2] text-[#171717] placeholder-[#6F6F6A]/50 focus:outline-none focus:border-[#171717] text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-[#6F6F6A] uppercase">PHONE NUMBER</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#F5F3EE] border border-[#DCD9D2] text-[#171717] placeholder-[#6F6F6A]/50 focus:outline-none focus:border-[#171717] text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono text-[#6F6F6A] uppercase">PROJECT DETAILS & GOALS *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-[#F5F3EE] border border-[#DCD9D2] text-[#171717] placeholder-[#6F6F6A]/50 focus:outline-none focus:border-[#171717] text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  onMouseEnter={playHoverSound}
                  className="w-full py-4 rounded-xl bg-[#171717] hover:bg-[#26272B] text-[#F5F3EE] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all hover:scale-[1.01] disabled:opacity-50 shadow-sm"
                  data-cursor="SEND"
                >
                  {loading ? (
                    <span>TRANSMITTING INQUIRY...</span>
                  ) : (
                    <>
                      <span>START THE CONVERSATION</span>
                      <ArrowUpRight className="w-4 h-4 text-[#B7A98F]" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

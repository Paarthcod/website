import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, CheckCircle2, RefreshCw } from 'lucide-react';
import { playHoverSound, playClickSound } from '../../utils/audio';

interface BigCTASectionProps {
  setActiveTab: (tab: string) => void;
}

export const BigCTASection: React.FC<BigCTASectionProps> = ({ setActiveTab }) => {
  const [step, setStep] = useState<number>(1);
  const [buildingType, setBuildingType] = useState<string>('');
  const [scale, setScale] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [details, setDetails] = useState({ name: '', email: '', company: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const buildingOptions = [
    'Business Website',
    'Custom 3D Experience',
    'Full-Stack Web App',
    'SEO & Performance Overhaul',
    'Complete Growth Stack',
  ];

  const scaleOptions = [
    'Growth Asset ($5k - $10k)',
    'Enterprise System ($10k - $25k)',
    'Flagship Ecosystem ($25k+)',
    'Monthly Growth Partnership',
  ];

  const handleNext = () => {
    playClickSound();
    if (step < 4) setStep(step + 1);
    else setSubmitted(true);
  };

  return (
    <section id="contact" className="py-36 px-8 relative border-t border-[#B8B3A9]/40 bg-[#F4F1EA] text-[#242321] overflow-hidden">
      {/* Tactile Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#B8B3A9_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-[#737565] uppercase tracking-widest">[ 06 // STRATEGIC ENGAGEMENT ]</span>
          <h2 className="text-4xl sm:text-6xl font-semibold font-display tracking-tight text-[#242321]">
            LET'S CONSTRUCT AN ASSET<span className="text-[#9A8064]">.</span>
          </h2>
          <p className="text-[#918B80] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Answer a few strategic questions to initiate your custom architectural blueprint and project consultation.
          </p>
        </div>

        {/* Conversational Multi-Step Journey Card (Prompt Section 26) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#B8B3A9]/60 shadow-xl space-y-8">
          {/* Progress Tracker Bar */}
          <div className="flex items-center justify-between border-b border-[#B8B3A9]/30 pb-4">
            <span className="text-xs font-mono font-bold text-[#9A8064]">
              STAGE 0{step} OF 04
            </span>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4].map((s) => (
                <div
                  key={s}
                  className={`w-8 h-1.5 rounded-full transition-all duration-300 ${
                    s === step ? 'bg-[#737565]' : s < step ? 'bg-[#242321]' : 'bg-[#B8B3A9]/30'
                  }`}
                />
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* STEP 1: WHAT ARE WE BUILDING? */}
                {step === 1 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-semibold text-[#242321]">
                      01 // WHAT ARE WE BUILDING?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {buildingOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            playClickSound();
                            setBuildingType(opt);
                          }}
                          onMouseEnter={playHoverSound}
                          className={`p-4 rounded-xl border text-xs font-mono text-left transition-all ${
                            buildingType === opt
                              ? 'bg-[#242321] text-[#F4F1EA] border-[#242321] font-semibold'
                              : 'bg-[#F4F1EA] text-[#242321] border-[#B8B3A9]/50 hover:border-[#737565]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: WHAT'S THE SCALE? */}
                {step === 2 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-semibold text-[#242321]">
                      02 // WHAT IS THE INTENDED SCALE & BUDGET?
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {scaleOptions.map((opt) => (
                        <button
                          key={opt}
                          onClick={() => {
                            playClickSound();
                            setScale(opt);
                          }}
                          onMouseEnter={playHoverSound}
                          className={`p-4 rounded-xl border text-xs font-mono text-left transition-all ${
                            scale === opt
                              ? 'bg-[#242321] text-[#F4F1EA] border-[#242321] font-semibold'
                              : 'bg-[#F4F1EA] text-[#242321] border-[#B8B3A9]/50 hover:border-[#737565]'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: TELL US ABOUT IT */}
                {step === 3 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-semibold text-[#242321]">
                      03 // TELL US ABOUT YOUR PROJECT VISION
                    </h3>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your current digital presence, goals, and targets..."
                      className="w-full p-4 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                    />
                  </div>
                )}

                {/* STEP 4: YOUR DETAILS */}
                {step === 4 && (
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-semibold text-[#242321]">
                      04 // YOUR ACCESS & CONTACT DETAILS
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={details.name}
                        onChange={(e) => setDetails({ ...details, name: e.target.value })}
                        className="p-4 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                      />
                      <input
                        type="email"
                        placeholder="Work Email Address"
                        value={details.email}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                        className="p-4 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Company / Organization Name"
                      value={details.company}
                      onChange={(e) => setDetails({ ...details, company: e.target.value })}
                      className="w-full p-4 rounded-xl bg-[#F4F1EA] border border-[#B8B3A9]/60 text-xs font-mono text-[#242321] focus:outline-none focus:border-[#737565]"
                    />
                  </div>
                )}

                {/* Step Controls */}
                <div className="flex items-center justify-between pt-6 border-t border-[#B8B3A9]/30">
                  {step > 1 ? (
                    <button
                      onClick={() => setStep(step - 1)}
                      className="px-6 py-2.5 rounded-full border border-[#B8B3A9] text-xs font-mono text-[#242321] hover:bg-[#F4F1EA]"
                    >
                      PREVIOUS
                    </button>
                  ) : <div />}

                  <button
                    onClick={handleNext}
                    onMouseEnter={playHoverSound}
                    className="flex items-center gap-2 px-8 py-3 rounded-full bg-[#242321] text-[#F4F1EA] hover:bg-[#737565] active:bg-[#A47F68] font-semibold text-xs font-mono tracking-wider uppercase transition-all shadow-md"
                  >
                    <span>{step === 4 ? 'SUBMIT CONSULTATION REQUEST' : 'CONTINUE'}</span>
                    <ArrowRight className="w-4 h-4 text-[#9A8064]" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#737565] text-[#F4F1EA] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-[#F4F1EA]" />
                </div>
                <h3 className="font-display text-3xl font-semibold text-[#242321]">
                  CONSULTATION REQUEST RECEIVED
                </h3>
                <p className="text-xs font-mono text-[#918B80] max-w-md mx-auto">
                  Thank you. Our engineering desk will review your requirements and respond with a custom architecture proposal within 24 hours.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

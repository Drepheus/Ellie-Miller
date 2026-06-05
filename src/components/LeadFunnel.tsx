"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Shield, Feather, BookOpen } from 'lucide-react';

const PERKS = [
  { icon: Feather, label: 'Early draft chapters' },
  { icon: BookOpen, label: 'Deleted gothic subplots' },
  { icon: Shield, label: 'Theological battle notes' },
];

export default function LeadFunnel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="lead-funnel" className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #0c0205, #050203)' }}>

      {/* === AMBIENT BG === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px]" style={{ background: 'radial-gradient(circle, rgba(107,6,16,0.25) 0%, transparent 65%)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Glass Card */}
          <div className="relative rounded-sm overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(18,3,7,0.95) 0%, rgba(12,2,5,0.95) 100%)',
            border: '1px solid rgba(176,18,24,0.15)',
            boxShadow: '0 30px 80px rgba(0,0,0,0.9), 0 0 60px rgba(176,18,24,0.05), inset 0 1px 0 rgba(255,255,255,0.03)',
            backdropFilter: 'blur(30px)',
          }}>
            {/* Top gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(to right, transparent, #b01218, transparent)' }} />

            {/* Ambient inner glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(176,18,24,0.12)' }} />

            <div className="relative z-10 px-8 py-14 md:px-14 text-center">

              {/* Icon badge */}
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6 shadow-[0_0_30px_rgba(176,18,24,0.3)] breathe" style={{ background: 'rgba(176,18,24,0.12)', border: '1px solid rgba(176,18,24,0.25)' }}>
                <Sparkles className="w-6 h-6" style={{ color: '#b01218' }} />
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-5xl font-serif font-black text-accent mb-4 tracking-wide leading-tight">
                Join the<br />
                <span className="gradient-text-crimson">Inner Circle</span>
              </h2>

              {/* Subheading */}
              <p className="text-stone-400 mb-10 max-w-md mx-auto font-light leading-relaxed text-sm md:text-base">
                Gain passage into Ellie Miller's exclusive sanctum. Receive early drafts, deleted chapters, and invitations to monthly theological discussions.
              </p>

              {/* Perks Row */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {PERKS.map(({ icon: Icon, label }) => (
                  <div key={label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase text-stone-400" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <Icon className="w-3.5 h-3.5" style={{ color: '#b01218' }} />
                    {label}
                  </div>
                ))}
              </div>

              {/* Form / Success */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-sm mx-auto">
                  {/* Name Field */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="funnel-name"
                      placeholder="Your Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full bg-transparent py-4 px-1 text-white placeholder-stone-600 focus:outline-none font-light text-sm transition-colors duration-300"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
                      aria-label="Your Name"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full transition-all duration-400" style={{ background: '#b01218' }} />
                  </div>

                  {/* Email Field */}
                  <div className="relative group">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 text-stone-600 group-focus-within:text-cta transition-colors duration-300">
                      <Mail className="w-4 h-4" />
                    </span>
                    <input
                      type="email"
                      id="funnel-email"
                      placeholder="Email Address"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="w-full bg-transparent py-4 pl-7 pr-1 text-white placeholder-stone-600 focus:outline-none font-light text-sm transition-colors duration-300"
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.12)' }}
                      aria-label="Email Address"
                    />
                    <div className="absolute bottom-0 left-0 h-[1px] w-0 group-focus-within:w-full transition-all duration-400" style={{ background: '#b01218' }} />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    id="funnel-submit"
                    className="cta-shine w-full font-black uppercase tracking-[0.2em] py-4 rounded-sm mt-2 transition-all duration-400 text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #b01218 0%, #7a0a10 100%)',
                      color: '#f0dfe2',
                      boxShadow: '0 4px 25px rgba(176,18,24,0.35)',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(176,18,24,0.55)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 25px rgba(176,18,24,0.35)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}
                  >
                    Unlock Exclusive Access
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center breathe" style={{ background: 'rgba(176,18,24,0.15)', border: '1px solid rgba(176,18,24,0.35)' }}>
                    <Shield className="w-7 h-7" style={{ color: '#b01218' }} />
                  </div>
                  <p className="text-accent font-serif text-xl font-semibold mb-2">Welcome to the Inner Circle</p>
                  <p className="text-stone-500 text-sm font-light">You'll receive your first dispatch soon, {name || 'warrior'}.</p>
                </motion.div>
              )}

              {/* Bottom note */}
              <p className="text-stone-700 text-[10px] tracking-wider uppercase mt-8 font-medium">
                No spam. Unsubscribe anytime. Darkness optional.
              </p>
            </div>

            {/* Bottom gradient bar */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

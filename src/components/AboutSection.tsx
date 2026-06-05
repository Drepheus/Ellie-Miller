"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Cross, Shield, Sword, Flame, Eye, BookMarked } from 'lucide-react';

const PILLARS = [
  {
    icon: Sword,
    title: 'Spiritual Warfare',
    description: 'Our stories don\'t shy away from the battlefield. Faith is not passive — it is the sharpest weapon against the forces of darkness.',
  },
  {
    icon: Shield,
    title: 'Unyielding Faith',
    description: 'Even in the deepest shadow, grace remains. Our characters are broken, flawed, and tested — but never abandoned.',
  },
  {
    icon: Flame,
    title: 'Dark Atmosphere',
    description: 'Gothic tension, noir pacing, supernatural dread. We believe Christian fiction can be raw, visceral, and deeply honest.',
  },
  {
    icon: Eye,
    title: 'Theological Depth',
    description: 'Every page wrestles with real questions of faith. Our books are devotionally rich beneath the thriller surface.',
  },
  {
    icon: BookMarked,
    title: 'The Los Elegidos World',
    description: 'A shared universe of chosen warriors, supernatural threats, and urban spiritual conflict spanning multiple books.',
  },
  {
    icon: Cross,
    title: 'Redemptive Arc',
    description: 'No matter how dark the story gets, redemption is always possible. Light always wins — but the cost is real.',
  },
];

const TESTIMONIALS = [
  {
    text: "I've never read Christian fiction that felt this real and this dark. Ellie Miller doesn't sugarcoat spiritual warfare — and that's exactly what I needed.",
    author: 'Sarah K.',
    location: 'Texas',
    book: 'Family Ties',
  },
  {
    text: "Demonic Lies kept me up all night. The way faith weaves through the thriller plot feels completely natural. This is Christian fiction for adults.",
    author: 'Marcus T.',
    location: 'Georgia',
    book: 'Demonic Lies',
  },
  {
    text: "Finally, a micro-press that publishes stories that acknowledge the darkness without losing the light. Pink Pansy Publishing is unlike anything else.",
    author: 'Diane M.',
    location: 'California',
    book: 'Both Books',
  },
];

export default function AboutSection() {
  return (
    <>
      {/* === MANIFESTO / PILLARS === */}
      <section id="about" className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #060104, #050203)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(107,6,16,0.06) 0%, transparent 65%)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">

          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>Our Manifesto</span>
              <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-6 tracking-wide">
              Why <span className="gradient-text-crimson">Dark</span> Christian Fiction?
            </h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light leading-relaxed">
              We reject the notion that Christian stories must be sanitized. The Bible itself is full of darkness, violence, betrayal, and supernatural warfare.{' '}
              <em className="text-accent not-italic font-medium">Light shines brightest against absolute darkness.</em>
            </p>
          </motion.div>

          {/* Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="group relative p-7 rounded-sm overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(176,18,24,0.2)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(176,18,24,0.04)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                }}
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 flex items-center justify-center rounded-sm mb-5"
                  style={{ background: 'rgba(176,18,24,0.08)', border: '1px solid rgba(176,18,24,0.15)' }}
                >
                  <pillar.icon className="w-5 h-5" style={{ color: '#b01218' }} />
                </div>

                <h4 className="text-lg font-serif font-bold text-accent mb-3 tracking-wide">{pillar.title}</h4>
                <p className="text-stone-500 text-sm font-light leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* === READER TESTIMONIALS === */}
      <section id="testimonials" className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #07020a, #050203)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 50%, rgba(107,6,16,0.08) 0%, transparent 65%)' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-6xl">

          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>Reader Voices</span>
              <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-accent tracking-wide">
              What Readers <span className="gradient-text-crimson">Say</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                className="relative p-8 rounded-sm"
                style={{
                  background: 'rgba(12,3,7,0.8)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(16px)',
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12 }}
              >
                {/* Top crimson line */}
                <div className="absolute top-0 left-6 right-6 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.4), transparent)' }} />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Shield key={j} className="w-3 h-3 fill-current" style={{ color: '#b01218' }} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-300 font-serif italic text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                  <div>
                    <p className="text-accent text-xs font-bold tracking-wider">{t.author}</p>
                    <p className="text-stone-700 text-[10px] uppercase tracking-widest">{t.location}</p>
                  </div>
                  <span
                    className="text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(176,18,24,0.08)', border: '1px solid rgba(176,18,24,0.2)', color: '#b01218' }}
                  >
                    {t.book}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

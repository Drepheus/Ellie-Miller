"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9 10 15" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const SOCIAL_LINKS = [
  { id: 'social-youtube', icon: YoutubeIcon, label: 'YouTube' },
  { id: 'social-instagram', icon: InstagramIcon, label: 'Instagram' },
  { id: 'social-twitter', icon: TwitterIcon, label: 'Twitter / X' },
];

export default function PublisherBio() {
  return (
    <section className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #080205, #050203)' }}>

      {/* === AMBIENT BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.15), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.15), transparent)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px]" style={{ background: 'rgba(176,18,24,0.07)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ background: 'rgba(107,6,16,0.08)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-28 items-center max-w-6xl mx-auto">

          {/* LEFT: Author Portrait + Card */}
          <motion.div
            className="w-full lg:w-5/12 flex flex-col items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Portrait frame */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 mb-8 group">
              {/* Outer glow ring */}
              <div
                className="absolute -inset-1 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                style={{ background: 'radial-gradient(circle, rgba(176,18,24,0.6), transparent 70%)' }}
              />
              {/* Portrait */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)]" style={{ border: '1px solid rgba(176,18,24,0.25)' }}>
                <Image
                  src="/ellie_miller.png"
                  alt="Ellie Miller — Author"
                  fill
                  sizes="320px"
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  priority
                />
                {/* Dark vignette overlay */}
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,2,3,0.5) 100%)' }} />
              </div>

              {/* Decorative rotating ring */}
              <div
                className="absolute -inset-4 rounded-full border border-dashed opacity-10 group-hover:opacity-20 transition-opacity duration-700"
                style={{ borderColor: 'rgba(176,18,24,0.6)', animation: 'rotate-slow 25s linear infinite' }}
              />
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mb-8">
              {SOCIAL_LINKS.map(({ id, icon: Icon, label }) => (
                <a
                  key={id}
                  id={id}
                  href="#"
                  aria-label={label}
                  className="group relative w-11 h-11 flex items-center justify-center rounded-full transition-all duration-400"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(176,18,24,0.5)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(176,18,24,0.25)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-4 h-4 text-stone-400 group-hover:text-cta transition-colors duration-300" />
                </a>
              ))}
            </div>

            {/* Signature */}
            <div className="text-center">
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-600 block mb-1">Founder & Author</span>
              <span className="font-script text-accent/80 text-5xl block leading-tight drop-shadow-[0_2px_15px_rgba(176,18,24,0.25)]">
                Ellie Miller
              </span>
            </div>
          </motion.div>

          {/* RIGHT: Bio Text */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px" style={{ background: 'rgba(176,18,24,0.7)' }} />
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>The Mission</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-4 tracking-wide leading-tight">
              Pink Pansy<br />
              <span className="gradient-text-crimson">Publishing</span>
            </h2>

            {/* Accent rule */}
            <div className="w-16 h-[2px] mb-8" style={{ background: 'linear-gradient(to right, rgba(176,18,24,0.7), transparent)' }} />

            {/* Pull quote */}
            <div className="relative mb-8 pl-6 py-2" style={{ borderLeft: '3px solid rgba(176,18,24,0.45)' }}>
              <Quote className="absolute -top-1 -left-1 w-5 h-5 opacity-30" style={{ color: '#b01218' }} />
              <p className="text-lg md:text-xl leading-relaxed text-stone-200 font-serif italic font-light">
                We are a Christian micro-press that publishes faith-affirming speculative fiction — noir, horror, thriller, and dark fantasy.
              </p>
            </div>

            {/* Body copy */}
            <p className="text-stone-400 leading-relaxed mb-6 font-light text-base">
              Founded by Ellie Miller, Pink Pansy Publishing bridges the gap between the dark, atmospheric aesthetics of modern thrillers and the unyielding hope of Christian faith. We believe that light shines brightest in the deepest darkness.
            </p>
            <p className="text-stone-500 leading-relaxed mb-10 font-light text-sm">
              Our novels portray the raw reality of spiritual warfare without losing sight of redemption. Each book is a testament that faith is not naive — it is the most dangerous weapon against the darkness.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {[
                { value: '2+', label: 'Published Works' },
                { value: '5★', label: 'Reader Ratings' },
                { value: '∞', label: 'Faith & Hope' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-serif font-black text-accent mb-1 drop-shadow-[0_2px_12px_rgba(176,18,24,0.3)]">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

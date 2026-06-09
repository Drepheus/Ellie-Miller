"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Radio, Calendar, Play, Heart, MessageCircle, Zap, Eye, BookOpen, Mic, Film, Users } from 'lucide-react';

type IconProps = { className?: string; style?: React.CSSProperties };

const TikTokIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.87a8.18 8.18 0 0 0 4.78 1.52V7a4.85 4.85 0 0 1-1.01-.31z" />
  </svg>
);

const FacebookIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const PLATFORMS = [
  {
    id: 'tiktok-section',
    platform: 'TikTok',
    handle: '@PinkPansyPublishing',
    url: 'https://www.tiktok.com/@pinkpansypublishing',
    icon: TikTokIcon,
    ctaLabel: 'Follow on TikTok',
    liveBadge: true,
    accentColor: '#b01218',
    borderColor: 'rgba(176,18,24,0.25)',
    bgGlow: 'rgba(176,18,24,0.07)',
    headline: 'Live Readings & Behind-the-Scenes',
    tagline: 'The most raw, unfiltered look at what it means to write dark Christian fiction.',
    description:
      'TikTok is where the action happens. Ellie goes live for unscripted book readings, first-draft confessions, spiritual warfare devotionals, and late-night author vlogs. If you want to be in the room when a story is born — this is your place.',
    contentTypes: [
      { icon: Radio, label: 'Weekly Live Readings', desc: 'Real-time chapter reads with live Q&A' },
      { icon: Film, label: 'Writing Vlogs', desc: 'Behind-the-scenes of the dark fiction process' },
      { icon: Zap, label: 'Book Reveals', desc: 'Cover drops, title announcements, and more' },
      { icon: Mic, label: 'Faith & Fiction Talks', desc: 'Short-form theological discussions' },
    ],
  },
  {
    id: 'facebook-section',
    platform: 'Facebook',
    handle: 'Ellie Miller Books',
    url: 'https://www.facebook.com/elliemillerbooks/',
    icon: FacebookIcon,
    ctaLabel: 'Join the Group',
    liveBadge: false,
    accentColor: '#5a8ac9',
    borderColor: 'rgba(90,138,201,0.25)',
    bgGlow: 'rgba(90,138,201,0.06)',
    headline: 'The Reader Community Hub',
    tagline: 'A gathering place for believers who love dark, faith-affirming fiction.',
    description:
      'The Facebook community is Ellie\'s most intimate corner of the internet. Readers share reviews, discuss theological themes, and connect with other Christians who believe that darkness in fiction can be used as a tool for light. Monthly book discussions, prayer threads, and exclusive announcements live here.',
    contentTypes: [
      { icon: Users, label: 'Monthly Book Club', desc: 'Guided discussions on each release' },
      { icon: Heart, label: 'Prayer & Community', desc: 'A safe space for faith conversations' },
      { icon: MessageCircle, label: 'Reader Reviews', desc: 'Share your thoughts and reactions' },
      { icon: Calendar, label: 'Exclusive Events', desc: 'First access to signings and launches' },
    ],
  },
  {
    id: 'youtube-section',
    platform: 'YouTube',
    handle: '@PinkPansyPublishing',
    url: 'https://www.youtube.com/@PinkPansyPublishing/videos',
    icon: YoutubeIcon,
    ctaLabel: 'Watch on YouTube',
    liveBadge: false,
    accentColor: '#c0392b',
    borderColor: 'rgba(192,57,43,0.25)',
    bgGlow: 'rgba(192,57,43,0.07)',
    headline: 'Deep Dives Into Faith & Craft',
    tagline: 'Long-form content for readers and writers who want to go deeper.',
    description:
      'YouTube is the classroom. Full-length author interviews, chapter-by-chapter theological breakdowns, writing tutorials for aspiring dark fiction authors, and documentary-style explorations of the spiritual themes in the Los Elegidos universe. Subscribe to never miss a new upload.',
    contentTypes: [
      { icon: Play, label: 'Full Chapter Reads', desc: 'Narrated readings of complete chapters' },
      { icon: BookOpen, label: 'Theology Deep Dives', desc: 'Unpacking the faith inside the fiction' },
      { icon: Eye, label: 'Craft Tutorials', desc: 'Writing dark fiction the right way' },
      { icon: Film, label: 'Author Interviews', desc: 'Inside the mind of Ellie Miller' },
    ],
  },
];

export default function CommunityConnect() {
  return (
    <section id="community" className="relative overflow-hidden noise-overlay" style={{ background: '#050203' }}>

      {/* Section Header */}
      <div className="relative py-24 text-center" style={{ borderTop: '1px solid rgba(176,18,24,0.15)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(107,6,16,0.1) 0%, transparent 65%)' }} />
        <motion.div
          className="relative z-10 container mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>Follow the Journey</span>
            <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-4 tracking-wide">
            Connect Across <span className="gradient-text-crimson">Every Platform</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto font-light text-sm leading-relaxed">
            Each platform serves a different purpose. Find your place in the community — live events, deep discussions, or long-form content.
          </p>
        </motion.div>
      </div>

      {/* Individual Platform Sections */}
      {PLATFORMS.map((p, idx) => (
        <div
          key={p.id}
          id={p.id}
          className="relative py-24 overflow-hidden"
          style={{
            background: idx % 2 === 0
              ? 'linear-gradient(to right, #050203, #07020a)'
              : 'linear-gradient(to right, #07020a, #050203)',
            borderTop: '1px solid rgba(255,255,255,0.03)',
          }}
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute rounded-full blur-[160px]"
              style={{
                background: p.bgGlow,
                width: '500px',
                height: '500px',
                top: '50%',
                transform: 'translateY(-50%)',
                [idx % 2 === 0 ? 'right' : 'left']: '-100px',
              }}
            />
          </div>

          <div className="container mx-auto px-6 relative z-10 max-w-6xl">
            <div className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>

              {/* Left/Right: Platform Identity Block */}
              <motion.div
                className="w-full lg:w-5/12"
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                {/* Big platform icon */}
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-sm mb-8 shadow-2xl"
                  style={{
                    background: `${p.bgGlow}`,
                    border: `1px solid ${p.borderColor}`,
                    boxShadow: `0 0 40px ${p.bgGlow}`,
                  }}
                >
                  <p.icon className="w-10 h-10" style={{ color: p.accentColor }} />
                </div>

                {/* Live badge */}
                {p.liveBadge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                    style={{ background: 'rgba(176,18,24,0.1)', border: '1px solid rgba(176,18,24,0.3)' }}>
                    <span className="w-2 h-2 rounded-full bg-cta animate-ping" style={{ background: '#b01218' }} />
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: '#b01218' }}>Live Weekly</span>
                  </div>
                )}

                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2" style={{ color: p.accentColor }}>{p.platform}</p>
                <h3 className="text-3xl md:text-4xl font-serif font-black text-accent mb-3 tracking-wide leading-tight">
                  {p.headline}
                </h3>
                <p className="text-stone-400 italic font-serif text-base mb-6 leading-relaxed">
                  "{p.tagline}"
                </p>
                <p className="text-stone-500 text-sm font-light leading-relaxed mb-8">
                  {p.description}
                </p>

                {/* Handle */}
                <p className="text-xs font-bold tracking-wider mb-6" style={{ color: p.accentColor }}>
                  {p.handle}
                </p>

                {/* CTA */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`cta-${p.id}`}
                  className="cta-shine btn-glass-primary inline-flex px-7 py-3.5 rounded-sm"
                  style={{ borderColor: p.borderColor }}
                >
                  <p.icon className="mr-2.5 w-4 h-4" style={{ color: p.accentColor }} />
                  {p.ctaLabel}
                  <ExternalLink className="ml-2 w-3.5 h-3.5 opacity-50" />
                </a>
              </motion.div>

              {/* Content Types Grid */}
              <motion.div
                className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.15 }}
              >
                {p.contentTypes.map((ct, i) => (
                  <motion.div
                    key={ct.label}
                    className="group p-6 rounded-sm"
                    style={{
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.05)',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = p.borderColor;
                      (e.currentTarget as HTMLElement).style.background = p.bgGlow;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.02)';
                    }}
                  >
                    <ct.icon className="w-5 h-5 mb-4" style={{ color: p.accentColor }} />
                    <h4 className="text-sm font-bold text-accent mb-2 tracking-wide font-serif">{ct.label}</h4>
                    <p className="text-stone-600 text-xs font-light leading-relaxed">{ct.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

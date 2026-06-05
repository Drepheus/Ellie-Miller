"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Tv2, Users, Radio } from 'lucide-react';

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

type Channel = {
  id: string;
  platform: string;
  handle: string;
  icon: React.ComponentType<IconProps>;
  url: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  badge: string;
  badgeIcon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  stat: string;
};

const CHANNELS: Channel[] = [
  {
    id: 'channel-tiktok',
    platform: 'TikTok',
    handle: '@PinkPansyPublishing',
    icon: TikTokIcon,
    url: 'https://www.tiktok.com/@pinkpansypublishing',
    color: '#b01218',
    bgColor: 'rgba(176,18,24,0.08)',
    borderColor: 'rgba(176,18,24,0.2)',
    description: 'Live readings, author vlogs, behind-the-scenes writing sessions & book reveals.',
    badge: 'Live Events',
    badgeIcon: Radio,
    stat: 'Live & Stories',
  },
  {
    id: 'channel-facebook',
    platform: 'Facebook',
    handle: 'Ellie Miller Books',
    icon: FacebookIcon,
    url: 'https://www.facebook.com/elliemillerbooks/',
    color: '#7a9ecf',
    bgColor: 'rgba(122,158,207,0.06)',
    borderColor: 'rgba(122,158,207,0.15)',
    description: 'Join the community. Connect with fellow readers, share thoughts, and join monthly discussion groups.',
    badge: 'Community',
    badgeIcon: Users,
    stat: 'Reader Community',
  },
  {
    id: 'channel-youtube',
    platform: 'YouTube',
    handle: '@PinkPansyPublishing',
    icon: YoutubeIcon,
    url: 'https://www.youtube.com/@PinkPansyPublishing/videos',
    color: '#c0392b',
    bgColor: 'rgba(192,57,43,0.07)',
    borderColor: 'rgba(192,57,43,0.18)',
    description: 'Deep dives into theology, author interviews, chapter reads, and the craft of Christian dark fiction.',
    badge: 'Video Channel',
    badgeIcon: Tv2,
    stat: 'Watch Now',
  },
];

export default function CommunityConnect() {
  return (
    <section id="community" className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #080104, #050203)' }}>

      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(107,6,16,0.08) 0%, transparent 65%)' }} />
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
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>Follow the Journey</span>
            <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-4 tracking-wide">
            Join the <span className="gradient-text-crimson">Community</span>
          </h2>
          <p className="text-stone-500 max-w-lg mx-auto font-light text-sm leading-relaxed">
            Connect across platforms. Live events on TikTok, deep discussions on YouTube, and a thriving reader family on Facebook.
          </p>
        </motion.div>

        {/* Channel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CHANNELS.map((ch, i) => (
            <motion.a
              key={ch.id}
              id={ch.id}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col p-7 rounded-sm overflow-hidden transition-all duration-500 focus:outline-none"
              style={{
                background: ch.bgColor,
                border: `1px solid ${ch.borderColor}`,
                backdropFilter: 'blur(16px)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.8), 0 0 30px ${ch.bgColor.replace('0.0', '0.2')}`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
              }}
            >
              {/* Subtle top edge glow */}
              <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: `linear-gradient(to right, transparent, ${ch.color}50, transparent)` }} />

              {/* Platform Icon */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-sm"
                  style={{ background: `${ch.bgColor}`, border: `1px solid ${ch.borderColor}` }}
                >
                  <ch.icon className="w-6 h-6" style={{ color: ch.color }} />
                </div>
                <div
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase"
                  style={{ background: `${ch.bgColor}`, border: `1px solid ${ch.borderColor}`, color: ch.color }}
                >
                  <ch.badgeIcon className="w-2.5 h-2.5" />
                  {ch.badge}
                </div>
              </div>

              {/* Platform name */}
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-600 mb-1">{ch.platform}</p>
              <h3 className="text-xl font-serif font-bold text-accent mb-3 tracking-wide group-hover:text-white transition-colors duration-300">
                {ch.handle}
              </h3>

              {/* Description */}
              <p className="text-stone-500 text-sm font-light leading-relaxed mb-6 flex-1">
                {ch.description}
              </p>

              {/* CTA row */}
              <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: ch.color }}>{ch.stat}</span>
                <ExternalLink className="w-4 h-4 text-stone-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-stone-400 transition-all duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-stone-600 text-xs tracking-[0.2em] uppercase font-medium mb-4">
            Live readings every week — don't miss out
          </p>
          <a
            href="https://www.tiktok.com/@pinkpansypublishing"
            target="_blank"
            rel="noopener noreferrer"
            id="community-live-cta"
            className="cta-shine btn-glass-primary inline-flex px-8 py-3.5 rounded-sm"
          >
            <Radio className="mr-2 w-4 h-4" />
            Watch Live on TikTok
          </a>
        </motion.div>
      </div>
    </section>
  );
}

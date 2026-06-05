import React from 'react';

const FooterIcon = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    aria-label={label}
    className="w-9 h-9 flex items-center justify-center rounded-full text-stone-600 hover:text-cta transition-all duration-300"
    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(176,18,24,0.4)';
      (e.currentTarget as HTMLElement).style.boxShadow = '0 0 12px rgba(176,18,24,0.2)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
    }}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden" style={{ background: '#030102', borderTop: '1px solid rgba(255,255,255,0.04)' }}>

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-6">

          {/* Brand */}
          <div className="text-center">
            <span className="font-script text-accent/60 text-4xl block leading-tight mb-1">Ellie Miller</span>
            <span className="text-[10px] font-bold tracking-[0.35em] uppercase text-stone-700 block">Pink Pansy Publishing</span>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['Home', 'Books', 'About', 'Newsletter', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-stone-600 hover:text-cta transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full max-w-sm h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />

          {/* Copyright */}
          <p className="text-stone-700 text-[10px] tracking-[0.2em] uppercase font-medium text-center">
            © {new Date().getFullYear()} Ellie Miller &amp; Pink Pansy Publishing. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex gap-6 text-[10px] tracking-widest uppercase font-semibold text-stone-700">
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" className="hover:text-cta transition-colors duration-300">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

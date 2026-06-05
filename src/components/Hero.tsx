"use client";
import React from 'react';
import { ChevronDown, BookOpen, Cross } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark noise-overlay">
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Hero bg with Ken Burns slow zoom */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero_bg.png')" }}
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        {/* Deep gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-dark" />
        {/* Radial vignette */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 20%, #050203 90%)' }} />
      </div>

      {/* === ATMOSPHERIC ORBS === */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none animate-pulse-slow" style={{ background: 'rgba(176,18,24,0.12)' }} />
      <div className="absolute bottom-[15%] right-[5%] w-[500px] h-[500px] rounded-full blur-[150px] pointer-events-none animate-pulse-slow" style={{ background: 'rgba(107,6,16,0.1)', animationDelay: '3s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(176,18,24,0.06) 0%, transparent 70%)' }} />

      {/* === MAIN CONTENT === */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center pt-24">

        {/* Cinematic Top Eyebrow Label */}
        <motion.div
          className="inline-flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="w-8 h-[1px]" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.7))' }} />
          <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>Pink Pansy Publishing</span>
          <div className="w-8 h-[1px]" style={{ background: 'linear-gradient(to left, transparent, rgba(176,18,24,0.7))' }} />
        </motion.div>

        {/* Author Name */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="font-script text-accent/70 text-4xl md:text-5xl tracking-widest block leading-none drop-shadow-[0_2px_12px_rgba(176,18,24,0.3)]">
            Ellie Miller
          </span>
        </motion.div>

        {/* Main Title - Cinematic */}
        <motion.h1
          className="text-5xl md:text-8xl lg:text-[9rem] font-serif font-black tracking-tight leading-[0.9] mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.6 }}
        >
          <span className="block gradient-text-crimson">DARK</span>
          <span className="block text-white opacity-95">CHRISTIAN</span>
          <span className="block text-stone-400 text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] uppercase mt-2">FICTION</span>
        </motion.h1>

        {/* Divider ornament */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <div className="h-[1px] w-16 md:w-32" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.5))' }} />
          <div className="w-1.5 h-1.5 rotate-45 border border-cta/50" />
          <div className="h-[1px] w-16 md:w-32" style={{ background: 'linear-gradient(to left, transparent, rgba(176,18,24,0.5))' }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl text-stone-300 mb-12 max-w-2xl font-light leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          Where the raw, gothic intensity of{' '}
          <em className="text-accent font-medium not-italic">spiritual warfare</em>
          {' '}collides with the unyielding light of Christian hope.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
        >
          <a
            href="#lead-funnel"
            id="hero-join-cta"
            className="cta-shine btn-glass-primary w-full sm:w-auto px-10 py-4 rounded-sm"
          >
            Join the Inner Circle
          </a>
          <a
            href="#portfolio"
            id="hero-books-cta"
            className="btn-glass-secondary w-full sm:w-auto px-10 py-4 rounded-sm"
          >
            <BookOpen className="mr-2.5 h-4 w-4 text-cta/80" />
            Discover the Books
          </a>
        </motion.div>

        {/* Author portrait thumbnail floating */}
        <motion.div
          className="relative mt-20 w-24 h-24 rounded-full overflow-hidden border-2 shadow-[0_0_40px_rgba(176,18,24,0.3)] breathe"
          style={{ borderColor: 'rgba(176,18,24,0.4)' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark/60 z-10" />
          <Image src="/ellie_miller.png" alt="Ellie Miller" fill className="object-cover" sizes="96px" />
        </motion.div>
      </div>

      {/* === SCROLL INDICATOR === */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.a
          href="#portfolio"
          className="flex flex-col items-center gap-2 text-stone-500 hover:text-cta transition-colors pointer-events-auto"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

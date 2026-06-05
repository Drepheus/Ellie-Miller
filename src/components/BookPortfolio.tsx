"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Star, BookMarked, ShoppingCart, ChevronRight } from 'lucide-react';

const AMAZON_URL = "https://www.amazon.com/stores/Ellie-Miller/author/B0DK7N3VWG";

const BOOKS = [
  {
    id: 'family-ties',
    title: 'Family Ties',
    subtitle: 'A Supernatural Thriller',
    cover: '/family_ties.png',
    accentColor: '#8a0a10',
    synopsis:
      "Bloodlines and battlegrounds. When past sins and spiritual threats converge on a family's legacy, the stakes are raised in a deadly game of survival. Can faith endure when shadows take aim at what you love most?",
    excerpt:
      "The ancestral home tasted of ash and old secrets. She traced the cold steel of the barrel — a grim inheritance for a war fought in the unseen places. 'Not today,' she whispered to the creeping shadows. 'Not on my watch.'",
    praise: [
      { text: "A visceral, heart-pounding journey into the heart of spiritual conflict.", source: "Christian Fiction Weekly" },
      { text: "Ellie Miller masterfully blends raw suspense with unyielding hope.", source: "Speculative Faith Reviews" },
    ],
  },
  {
    id: 'demonic-lies',
    title: 'Demonic Lies',
    subtitle: 'A Los Elegidos Novella',
    cover: '/demonic_lies.png',
    accentColor: '#7a1030',
    synopsis:
      "An immersive supernatural thriller where urban shadows and spiritual warfare collide. Under the watchful gaze of an ancient force, faith becomes the only shield against the conspiracy lurking beneath the city's surface.",
    excerpt:
      "The skyline bled crimson as the sun dipped below the jagged towers. Below, the city pulsed with an ignorant rhythm, oblivious to the ancient eyes watching from the smog. He tightened his grip on the silver pendant. The real war was just beginning.",
    praise: [
      { text: "A chilling, fast-paced novella that pulls you into its dark, atmospheric world.", source: "Urban Fantasy Digest" },
      { text: "A brilliant exploration of light piercing through modern darkness.", source: "Theological Thrills" },
    ],
  },
];

const TABS = [
  { id: 'synopsis', label: 'Synopsis' },
  { id: 'excerpt', label: 'Excerpt' },
  { id: 'praise', label: 'Praise' },
];

export default function BookPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('synopsis');
  const book = BOOKS[activeIndex];

  return (
    <section id="portfolio" className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #0a0205, #050203)' }}>

      {/* === AMBIENT BACKGROUND === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full blur-[140px]" style={{ background: 'rgba(107,6,16,0.12)' }} />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[140px]" style={{ background: 'rgba(176,18,24,0.08)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* === SECTION HEADER === */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
            <BookMarked className="w-4 h-4" style={{ color: '#b01218' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>Amazon Author Store</span>
            <BookMarked className="w-4 h-4" style={{ color: '#b01218' }} />
            <div className="w-6 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-5 tracking-wide leading-tight">
            The Dark Fiction<br />
            <span className="gradient-text-crimson">Collection</span>
          </h2>
          <a
            href={AMAZON_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="books-amazon-link"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-stone-500 hover:text-cta transition-colors duration-300 group"
          >
            View Full Catalog on Amazon
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* === BOOK SHOWCASE === */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start max-w-6xl mx-auto">

          {/* LEFT: Cover + Selector */}
          <motion.div
            className="w-full lg:w-5/12 flex flex-col items-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            {/* Main Book Cover */}
            <div className="relative w-full max-w-[300px] aspect-[2/3] mb-8 group">
              {/* Glow behind cover */}
              <div
                className="absolute -inset-3 rounded-sm blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"
                style={{ background: `radial-gradient(ellipse at center, ${book.accentColor}, transparent 70%)` }}
              />
              {/* Cover */}
              <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.95)]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={book.id}
                    initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, scale: 1.04, filter: 'blur(8px)' }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={book.cover}
                      alt={`${book.title} by Ellie Miller`}
                      fill
                      sizes="300px"
                      className="object-cover group-hover:scale-[1.04] transition-transform duration-700"
                      priority
                    />
                    {/* Subtle bottom overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="flex gap-4 items-center">
              {BOOKS.map((b, i) => (
                <button
                  key={b.id}
                  id={`book-select-${b.id}`}
                  onClick={() => { setActiveIndex(i); setActiveTab('synopsis'); }}
                  className="relative w-[60px] h-[90px] rounded-sm overflow-hidden transition-all duration-400 focus:outline-none"
                  style={{
                    border: activeIndex === i ? '2px solid rgba(176,18,24,0.8)' : '2px solid rgba(255,255,255,0.08)',
                    opacity: activeIndex === i ? 1 : 0.45,
                    boxShadow: activeIndex === i ? '0 0 20px rgba(176,18,24,0.4)' : 'none',
                    transform: activeIndex === i ? 'scale(1.1)' : 'scale(1)',
                  }}
                  aria-label={`Select ${b.title}`}
                >
                  <Image src={b.cover} alt={b.title} fill sizes="60px" className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Book Details */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            {/* Title Block */}
            <AnimatePresence mode="wait">
              <motion.div
                key={book.id + '-header'}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-xs font-bold tracking-[0.25em] uppercase mb-2" style={{ color: '#b01218' }}>
                  {book.subtitle}
                </p>
                <h3 className="text-5xl md:text-7xl font-serif font-black text-accent leading-none tracking-tight mb-6 drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                  {book.title}
                </h3>
              </motion.div>
            </AnimatePresence>

            {/* Tab Navigation */}
            <div className="flex gap-8 mb-8 border-b border-white/5 overflow-x-auto hide-scrollbar">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  id={`book-tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className="relative pb-4 text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap transition-colors duration-300 focus:outline-none"
                  style={{ color: activeTab === tab.id ? '#f0dfe2' : '#57534e' }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-[2px]"
                      style={{ background: '#b01218' }}
                      layoutId="bookTabLine"
                      transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[180px] mb-10">
              <AnimatePresence mode="wait">
                {activeTab === 'synopsis' && (
                  <motion.p
                    key={book.id + '-synopsis'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="text-stone-300 leading-relaxed text-base md:text-lg font-light"
                  >
                    {book.synopsis}
                  </motion.p>
                )}
                {activeTab === 'excerpt' && (
                  <motion.blockquote
                    key={book.id + '-excerpt'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="italic font-serif text-stone-200 text-base md:text-lg leading-relaxed pl-5 py-1"
                    style={{ borderLeft: '3px solid rgba(176,18,24,0.6)' }}
                  >
                    "{book.excerpt}"
                  </motion.blockquote>
                )}
                {activeTab === 'praise' && (
                  <motion.div
                    key={book.id + '-praise'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                    className="space-y-7"
                  >
                    {book.praise.map((review, i) => (
                      <div key={i}>
                        <div className="flex gap-1 mb-2">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} className="h-3 w-3 fill-current" style={{ color: '#b01218' }} />
                          ))}
                        </div>
                        <p className="italic font-serif text-stone-200 text-base mb-2 leading-relaxed">
                          "{review.text}"
                        </p>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-stone-500">
                          — {review.source}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="book-buy-amazon"
                className="cta-shine btn-glass-primary px-8 py-4 rounded-sm"
              >
                <ShoppingCart className="mr-2.5 h-4 w-4" />
                Buy on Amazon
              </a>
              <a
                href="#"
                id="book-read-chapter"
                className="btn-glass-secondary px-8 py-4 rounded-sm"
              >
                Read Chapter One
                <ChevronRight className="ml-2 h-4 w-4 opacity-60" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

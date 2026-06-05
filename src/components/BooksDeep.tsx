"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, ShoppingCart, Star, BookOpen } from 'lucide-react';

const BOOKS = [
  {
    id: 'family-ties',
    title: 'Family Ties',
    series: 'A Los Elegidos Novel',
    cover: '/family_ties.png',
    amazonUrl: 'https://www.amazon.com/Family-Ties-Elegidos-Ellie-Miller/dp/B0DL5NB8FB',
    genre: ['Supernatural Thriller', 'Christian Fiction', 'Spiritual Warfare'],
    rating: 4.8,
    reviews: 47,
    pages: '312 pages',
    format: 'Paperback & Kindle',
    description:
      'When family secrets and supernatural threats converge, the Elegidos are forced into a deadly game of survival. As ancient powers seek to destroy what matters most, faith becomes the only weapon that can stand against the darkness. A gripping, fast-paced thriller that explores the cost of loyalty, the power of prayer, and whether bloodlines can truly protect those you love.',
    themes: ['Family Legacy', 'Spiritual Warfare', 'Redemption', 'Sacrifice'],
    accentColor: 'rgba(140,10,16,0.8)',
    glowColor: 'rgba(140,10,16,0.15)',
  },
  {
    id: 'demonic-lies',
    title: 'Demonic Lies',
    series: 'A Los Elegidos Novella',
    cover: '/demonic_lies.png',
    amazonUrl: 'https://www.amazon.com/Demonic-Ties-Supernatural-Thriller-Christians/dp/B0FXQCC1XV',
    genre: ['Supernatural Thriller', 'Christian Novella', 'Urban Dark Fiction'],
    rating: 4.9,
    reviews: 23,
    pages: '186 pages',
    format: 'Paperback & Kindle',
    description:
      'In a city where every shadow hides a conspiracy and every whisper could be a lie, one woman must discern truth from deception before the darkness consumes everything she holds dear. Set in the gritty world of Los Elegidos, this novella plunges readers into a terrifying spiritual battle hidden beneath the city\'s surface — where faith is tested at every corner and the enemy\'s greatest weapon is doubt.',
    themes: ['Discernment', 'Urban Warfare', 'Faith Under Fire', 'Truth vs. Deception'],
    accentColor: 'rgba(100,10,40,0.8)',
    glowColor: 'rgba(100,10,40,0.15)',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className={`w-3.5 h-3.5 ${s <= Math.round(rating) ? 'fill-current' : 'opacity-20'}`}
        style={{ color: '#b01218' }}
      />
    ))}
    <span className="ml-1 text-xs text-stone-500 font-medium">{rating} / 5</span>
  </div>
);

export default function BooksDeep() {
  return (
    <section id="books" className="relative py-36 overflow-hidden noise-overlay" style={{ background: 'linear-gradient(to bottom, #050203, #07030a, #050203)' }}>

      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(176,18,24,0.2), transparent)' }} />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full blur-[180px]" style={{ background: 'rgba(107,6,16,0.1)' }} />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[160px]" style={{ background: 'rgba(140,10,16,0.07)' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">

        {/* Section header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: '#b01218' }}>The Los Elegidos Universe</span>
            <div className="w-8 h-px" style={{ background: 'rgba(176,18,24,0.6)' }} />
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-black text-accent mb-4 tracking-wide">
            Enter the <span className="gradient-text-crimson">Darkness</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto font-light text-sm leading-relaxed">
            Two stories. One universe. Infinite spiritual battles. Each book is a standalone journey into faith-affirming supernatural fiction.
          </p>
        </motion.div>

        {/* Books */}
        <div className="flex flex-col gap-20">
          {BOOKS.map((book, idx) => (
            <motion.div
              key={book.id}
              id={`book-detail-${book.id}`}
              className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-16 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1 }}
            >
              {/* Cover */}
              <div className="w-full lg:w-5/12 flex justify-center">
                <div className="relative w-64 md:w-72 group">
                  {/* Glow */}
                  <div
                    className="absolute -inset-4 rounded-sm blur-2xl opacity-30 group-hover:opacity-55 transition-opacity duration-700"
                    style={{ background: `radial-gradient(ellipse, ${book.accentColor}, transparent 70%)` }}
                  />
                  {/* Cover Image */}
                  <div
                    className="relative aspect-[2/3] rounded-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)]"
                    style={{ border: '1px solid rgba(255,255,255,0.08)' }}
                  >
                    <Image
                      src={book.cover}
                      alt={`${book.title} — ${book.series}`}
                      fill
                      sizes="288px"
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Rating badge */}
                  <div
                    className="absolute -bottom-4 -right-4 px-4 py-2 rounded-sm shadow-xl"
                    style={{
                      background: 'rgba(10,2,5,0.95)',
                      border: '1px solid rgba(176,18,24,0.25)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <StarRating rating={book.rating} />
                    <p className="text-[10px] text-stone-600 mt-0.5 tracking-widest uppercase font-medium">{book.reviews} Reviews</p>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="w-full lg:w-7/12">
                {/* Series badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-5"
                  style={{ background: 'rgba(176,18,24,0.08)', border: '1px solid rgba(176,18,24,0.2)', color: '#b01218' }}>
                  <BookOpen className="w-3 h-3" />
                  {book.series}
                </div>

                <h3 className="text-5xl md:text-7xl font-serif font-black text-accent leading-none tracking-tight mb-4">
                  {book.title}
                </h3>

                {/* Genre tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {book.genre.map((g) => (
                    <span
                      key={g}
                      className="text-[10px] font-semibold tracking-[0.15em] uppercase text-stone-500 px-2.5 py-1 rounded-full"
                      style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                    >
                      {g}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-stone-300 leading-relaxed text-sm md:text-base font-light mb-6">
                  {book.description}
                </p>

                {/* Themes */}
                <div className="mb-8 p-5 rounded-sm" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-600 mb-3">Key Themes</p>
                  <div className="flex flex-wrap gap-3">
                    {book.themes.map((t) => (
                      <div key={t} className="flex items-center gap-1.5 text-xs text-stone-400 font-medium">
                        <div className="w-1 h-1 rounded-full" style={{ background: '#b01218' }} />
                        {t}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex gap-6 text-xs text-stone-600 mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                  <span className="font-medium">{book.pages}</span>
                  <span className="font-medium">{book.format}</span>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`buy-${book.id}`}
                    className="cta-shine btn-glass-primary px-8 py-4 rounded-sm"
                  >
                    <ShoppingCart className="mr-2.5 h-4 w-4" />
                    Buy on Amazon
                  </a>
                  <a
                    href="#lead-funnel"
                    id={`sample-${book.id}`}
                    className="btn-glass-secondary px-8 py-4 rounded-sm"
                  >
                    <ExternalLink className="mr-2 h-4 w-4 opacity-60" />
                    Get Free Sample
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

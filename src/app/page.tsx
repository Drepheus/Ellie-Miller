import Hero from '@/components/Hero';
import BookPortfolio from '@/components/BookPortfolio';
import BooksDeep from '@/components/BooksDeep';
import AboutSection from '@/components/AboutSection';
import PublisherBio from '@/components/PublisherBio';
import CommunityConnect from '@/components/CommunityConnect';
import LeadFunnel from '@/components/LeadFunnel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans" style={{ overflowX: 'hidden' }}>
      {/* 1. Hero — cinematic opener */}
      <Hero />

      {/* 2. Book Showcase — interactive tabbed book picker */}
      <BookPortfolio />

      {/* 3. Deep Book Detail — full descriptions, Amazon links, alternating layout */}
      <BooksDeep />

      {/* 4. Manifesto + Testimonials — why dark Christian fiction + reader voices */}
      <AboutSection />

      {/* 5. Publisher Bio — author portrait, mission, social links */}
      <PublisherBio />

      {/* 6. Community — TikTok Live, Facebook Group, YouTube */}
      <CommunityConnect />

      {/* 7. Lead Funnel — email capture, inner circle */}
      <LeadFunnel />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}

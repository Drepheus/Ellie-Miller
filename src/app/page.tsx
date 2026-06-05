import Hero from '@/components/Hero';
import BookPortfolio from '@/components/BookPortfolio';
import PublisherBio from '@/components/PublisherBio';
import LeadFunnel from '@/components/LeadFunnel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-cta selection:text-dark">
      <Hero />
      <BookPortfolio />
      <PublisherBio />
      <LeadFunnel />
      <Footer />
    </div>
  );
}

import React from 'react';
import SalesHero from './components/SalesHero';
import MethodSection from './components/MethodSection';
import TargetAudienceSection from './components/TargetAudienceSection';
import TestimonialsSection from './components/TestimonialsSection';
import ProductOfferSection from './components/ProductOfferSection';
import BioSection from './components/BioSection';
import ClosingArgumentSection from './components/ClosingArgumentSection';
import FAQSection from './components/FAQSection';
import SupportCTASection from './components/SupportCTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <SalesHero />
      <TestimonialsSection />
      <MethodSection />
      <TargetAudienceSection />
      <ProductOfferSection />
      <BioSection />
      <ClosingArgumentSection />
      <FAQSection />
      <SupportCTASection />
      <Footer />
    </div>
  );
};

export default App;
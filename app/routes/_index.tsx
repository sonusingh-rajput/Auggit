import HeroSection from "~/components/home/HeroSection";
import BrandTicker from "~/components/home/BrandTicker";
import WhyAuggitSection from "~/components/home/WhyAuggitSection";
import SlaiceProductSection from "~/components/home/SlaiceProductSection";
import AutomationProductSection from "~/components/home/AutomationProductSection";
import HomeProductsGrid from "~/components/home/HomeProductsGrid";
import IntegrationsSection from "~/components/home/IntegrationsSection";
import TestimonialSection from "~/components/home/TestimonialSection";

export default function Index() {
  return (
    <div className="bg-white">
      {/* 1. Hero with 10th Year Badge & 3-Slide Carousel */}
      <HeroSection />

      {/* 2. Client Brand Ticker & 2M+ Paper Saved Metric Banner */}
      <BrandTicker />

      {/* 3. Why Business Prefer Auggit (6 Value Pillars + Executive Visual + 5 ROI Metrics) */}
      <WhyAuggitSection />

      {/* 4. SLaiCE Core Section (Built on SAP, 10X/5X/100%, Video Link) */}
      <SlaiceProductSection />

      {/* 5. Automation Suite Section (SCM Workflows, Video Link) */}
      <AutomationProductSection />

      {/* 6. Auggit Products Grid (Vendor Onboarding | AP | GatePass | Weighbridge | ADE | Digital Signatures | OCR) */}
      <HomeProductsGrid />

      {/* 7. Integrations Section (SAP, Tally, Zoho) */}
      <IntegrationsSection />

      {/* 8. Customer Testimonials (Case Studies, Real CFO Quotes, LinkedIn Video Testimonial) */}
      <TestimonialSection />
    </div>
  );
}
import HeroSection from "~/components/home/HeroSection";
import BrandTicker from "~/components/home/BrandTicker";
import TestimonialSection from "~/components/home/TestimonialSection";
import LeadershipSection from "~/components/home/LeadershipSection";
import SlaiceProductSection from "~/components/home/SlaiceProductSection";
import AutomationProductSection from "~/components/home/AutomationProductSection";
import VideoSection from "~/components/home/VideoSection";

export default function Index() {
  return (
    <div >
      <HeroSection />
      <BrandTicker />
      <VideoSection />
      <SlaiceProductSection />
      <AutomationProductSection />
      <LeadershipSection />
      <TestimonialSection />
    </div>
  );
}
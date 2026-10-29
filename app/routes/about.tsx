import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AboutHero from "~/components/about/AboutHero";
import AboutStory from "~/components/about/AboutStory";
import VisionMissionCards from "~/components/about/VisionMissionCards";
import AboutTimeline from "~/components/about/AboutTimeline";
import AboutLeadership from "~/components/about/AboutLeadership";
import AboutBrochureDownload from "~/components/about/AboutBrochureDownload";
import AboutLifeAtAuggit from "~/components/about/AboutLifeAtAuggit";
import AboutAwardsEvents from "~/components/about/AboutAwardsEvents";
import AboutCareers from "~/components/about/AboutCareers";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffffff] via-[#f1f2f2]/60 to-[#ffffff] text-[#353535] relative overflow-hidden py-8 sm:py-10 px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-16">
      
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-tr from-[#9eddf7]/20 via-[#41a0c8]/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[45%] right-0 w-[600px] h-[600px] bg-gradient-to-b from-[#ffeda0]/15 via-[#9eddf7]/10 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12 sm:space-y-14">
        {/* 1. Hero */}
        <AboutHero />

        {/* 2. Story & Heritage */}
        <AboutStory />

        {/* 3. Timeline */}
        <AboutTimeline />

        {/* 4. Vision & Mission Cards */}
        <VisionMissionCards />

        {/* 5. Executive Leadership (CEO on Top, 5 Leaders in row below) */}
        <AboutLeadership />

        {/* 6. Download the Brochure (Same Page) */}
        <AboutBrochureDownload />

        {/* 7. Life at Auggit (Outings, Celebrations, Culture) */}
        <AboutLifeAtAuggit />

        {/* 8. Awards & Recognitions + Industry Events */}
        <AboutAwardsEvents />

        {/* 9. Jobs - Join @Auggit */}
        <AboutCareers />

        {/* 10. Bottom Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#062039] via-[#062039] to-[#1267a7] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden border border-[#1267a7]/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,160,200,0.25),transparent_50%)] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Ready to Build the Enterprise of Tomorrow?
          </h3>
          <p className="text-[#9eddf7]/90 text-sm sm:text-base max-w-xl mx-auto relative z-10">
            From documents to data. From data to intelligence. Auggit is your digital foundation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <a 
              href="/contact" 
              className="px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer active:scale-95"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
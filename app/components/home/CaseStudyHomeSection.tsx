import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiCheckCircle,
  FiChevronLeft,
  FiChevronRight,
  FiAward,
} from "react-icons/fi";
import { caseStudiesData } from "~/routes/case-studies";

export default function CaseStudyHomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll every 5 seconds, paused when hovering
  useEffect(() => {
    if (isHovered) return;
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % caseStudiesData.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [isHovered]);

  const visibleItems = [0, 1, 2].map(
    (offset) => caseStudiesData[(activeIndex + offset) % caseStudiesData.length]
  );

  const showPrevious = () => {
    setActiveIndex(
      (current) => (current - 1 + caseStudiesData.length) % caseStudiesData.length
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % caseStudiesData.length);
  };

  return (
    <section className="relative py-10 sm:py-14 bg-white border-b border-slate-200 text-[#353535] overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-[#9eddf7]/15 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-[#ffeda0]/15 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 relative z-10">
        {/* Centered Section Header matching design flow */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <FiAward className="w-3.5 h-3.5 text-[#f7c037]" />
            <span>Proven Client Results</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#062039] tracking-tight">
            Featured Enterprise Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Real-world ROI, compliance milestones, and operational speed achieved across manufacturing, aviation, and automotive leaders.
          </p>
        </div>

        {/* Carousel Container with identical width & structure as Awards & Industry Events */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Wrapper with padding so hover lift & blue border are never clipped */}
            <div className="overflow-hidden p-2 sm:p-3 -m-2 sm:-m-3">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0.75, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {visibleItems.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/casestudy/${item.slug}`}
                    className="bg-white border-2 border-slate-200/90 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#41a0c8] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 cursor-pointer relative"
                  >
                    {/* Top Content Area */}
                    <div className="p-6 pb-4 flex flex-col items-center text-center space-y-3">
                      {/* Stacked Industry Badge & Client to prevent text crowding */}
                      <div className="flex flex-col items-center gap-1.5 w-full">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-[#41a0c8]/10 text-[#1267a7] border border-[#41a0c8]/20">
                          {item.industry}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 line-clamp-1 max-w-[240px]">
                          {item.client}
                        </span>
                      </div>

                      {/* Case Study Title with arrow */}
                      <h4 className="text-base font-bold text-[#062039] group-hover:text-[#41a0c8] transition-colors leading-snug line-clamp-2 text-center pt-1">
                        {item.title}{" "}
                        <FiArrowRight className="inline-block ml-1 w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </h4>

                      {/* Metric Tag */}
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{item.metric}</span>
                      </div>
                    </div>

                    {/* Bottom Arched Dome-Top Image */}
                    <div className="p-3 pt-0 w-full mt-auto">
                      <div className="relative w-full h-48 sm:h-52 rounded-t-[3.5rem] rounded-b-2xl overflow-hidden bg-slate-100 border border-slate-200/60 shadow-inner">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Left Chevron Button */}
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous case studies"
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#062039] shadow-md flex items-center justify-center cursor-pointer hover:border-[#41a0c8] hover:text-[#41a0c8] transition-all z-10"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Chevron Button */}
            <button
              type="button"
              onClick={showNext}
              aria-label="Next case studies"
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#062039] shadow-md flex items-center justify-center cursor-pointer hover:border-[#41a0c8] hover:text-[#41a0c8] transition-all z-10"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {caseStudiesData.map((item, index) => (
                <button
                  key={item.slug}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === activeIndex
                      ? "w-8 bg-[#41a0c8]"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Centered Explore All Link */}
          <div className="text-center pt-2">
            <Link
              to="/casestudy"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] transition-all shadow-2xs cursor-pointer"
            >
              <span>Explore All Case Studies</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

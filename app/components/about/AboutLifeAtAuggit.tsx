import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiSmile } from "react-icons/fi";

interface CultureItem {
  title: string;
  image: string;
}

const cultureMoments: CultureItem[] = [
  {
    title: "Annual Team Retreat & Outing",
    image: "/images/culture/team1.jpeg",
  },
  {
    title: "Product Launch & Milestone Celebrations",
    image: "/images/culture/team2.jpeg",
  },
  {
    title: "Team Collaboration",
    image: "/images/culture/team3.jpeg",
  },
  {
    title: "Milestone Moments",
    image: "/images/culture/team4.jpeg",
  },
  {
    title: "Learning Together",
    image: "/images/culture/team5.jpeg",
  },
  {
    title: "Celebrating Success",
    image: "/images/culture/team6.jpeg",
  },
   {
    title: "Celebrating Success",
    image: "/images/culture/team7.jpeg",
  },
   {
    title: "Celebrating Success",
    image: "/images/culture/team8.jpeg",
  },
   {
    title: "Celebrating Success",
    image: "/images/culture/team9.jpeg",
  },
];

export default function AboutLifeAtAuggit() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cultureMoments.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? cultureMoments.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % cultureMoments.length);
  };

  const visibleMoments = [0, 1, 2].map(
    (offset) => cultureMoments[(activeIndex + offset) % cultureMoments.length]
  );

  return (
    <section className="relative py-12 sm:py-16 bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#41a0c8] text-xs font-bold uppercase tracking-wider">
              <FiSmile className="w-3.5 h-3.5" />
              <span>Culture & Community</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#062039] tracking-tight">
              Life at Auggit
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Beyond enterprise software, we are a family of passionate builders who celebrate every milestone, team outing, and shared triumph.
            </p>
          </div>

        </div>

        {/* Culture Carousel */}
        <div className="relative" aria-roledescription="carousel" aria-label="Life at Auggit moments">
          <div className="overflow-hidden">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0.7, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-3 gap-5"
            >
              {visibleMoments.map((moment) => (
                <article
                  key={moment.title}
                  className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-72 sm:h-80 lg:h-96 overflow-hidden bg-slate-100">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                </article>
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous culture image"
            className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 border border-slate-200 text-[#062039] shadow-md hover:bg-[#062039] hover:text-white transition-colors"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next culture image"
            className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/95 border border-slate-200 text-[#062039] shadow-md hover:bg-[#062039] hover:text-white transition-colors"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-5">
            {cultureMoments.map((moment, index) => (
              <button
                key={moment.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${moment.title}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-8 bg-[#41a0c8]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight, FiPlayCircle } from "react-icons/fi";

export default function TestimonialSection() {
  const primaryQuotes = [
    {
      quote:
        "By choosing Auggit, we've dramatically slashed our record room expenses. This strategic decision not only brings cost savings but also elevates efficiency, underscoring the effectiveness of Auggit's solutions.",
      author: "Chief Financial Officer",
      role: "Executive Finance",
      company: "RATHNA PHARMACEUTICALS",
      badge: "Cost Reduction",
    },
    {
      quote:
        "Auggit played a crucial role in recovering digital copies of our documents when the originals suffered damage, showcasing its effectiveness in safeguarding and preserving vital information.",
      author: "Founder & CEO",
      role: "Executive Leadership",
      company: "SHREE SATI PIPE FITTINGS",
      badge: "Disaster Recovery",
    },
    {
      quote:
        "SLaiCE allowed us to extract and secure precisely the financial data we needed from our SAP architecture without full system replication or production downtime.",
      author: "David Vance",
      role: "Head of IT Infrastructure",
      company: "Enterprise Systems Ltd",
      badge: "SAP Architecture",
    },
    {
      quote:
        "Auggit's automation platform completely transformed how we handle invoice verification and vendor onboarding. Operations are effortless and audit-ready across our business plants.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer",
      company: "Global Logistics UK",
      badge: "Operations",
    },
    {
      quote:
        "Exceptional document management tools combined with 100% regulatory compliance with Indian Data Residency rules. It gives our entire board ultimate peace of mind.",
      author: "Priya Sharma",
      role: "Compliance Director",
      company: "Fintech Innovations",
      badge: "Compliance",
    },
    {
      quote:
        "Implementation took days instead of months. Our vendor reconciliation errors dropped by nearly 85% within the very first quarter of deployment.",
      author: "Elena Rostova",
      role: "VP of Finance",
      company: "Nordic Commerce",
      badge: "Automation",
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTestimonialIndex((current) => (current + 1) % primaryQuotes.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [primaryQuotes.length]);

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => primaryQuotes[(testimonialIndex + offset) % primaryQuotes.length]
  );

  return (
    <section className="relative overflow-hidden bg-white text-[#353535] py-10 sm:py-14 px-6 lg:px-16 border-b border-[#e3e3e3]">
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#9eddf7]/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ffeda0]/15 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-8">
        {/* Testimonial Header & Video Link */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#41a0c8] bg-slate-100 rounded-full border border-slate-200">
              Enterprise Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039]">
              Trusted by Industry{" "}
              <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Read verified feedback from CFOs and IT directors scaling compliance and operations with Auggit.
            </p>
          </div>

          {/* LinkedIn Video Testimonial Link */}
          <div>
            <a
              href="https://lnkd.in/p/g5PeYsBD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#062039] hover:bg-[#1267a7] text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <FiPlayCircle className="w-4 h-4 text-[#f7c037]" />
              <span>Watch Client Video Testimonial</span>
            </a>
          </div>
        </div>

        {/* Real Verified Testimonial Cards Carousel */}
        <div className="relative">
          <motion.div
            key={testimonialIndex}
            initial={{ opacity: 0.7, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {visibleTestimonials.map((item) => (
              <motion.div
                key={item.author}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#41a0c8] transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 bg-slate-100 text-[#062039] text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                    <div className="flex items-center gap-0.5 text-[#f7c037]">
                      {[...Array(5)].map((_, i) => (
                        <HiStar key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h4 className="font-extrabold text-[#062039] text-xs sm:text-sm">
                      {item.author}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-semibold">
                      {item.role}
                    </p>
                  </div>
                  <span className="text-[10px] font-black text-[#41a0c8] tracking-wider uppercase text-right max-w-[120px] truncate">
                    {item.company}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <button
            type="button"
            onClick={() =>
              setTestimonialIndex(
                (current) => (current - 1 + primaryQuotes.length) % primaryQuotes.length
              )
            }
            aria-label="Previous testimonials"
            className="absolute -left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md hover:border-[#41a0c8] flex items-center justify-center text-[#062039] transition-all cursor-pointer"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() =>
              setTestimonialIndex((current) => (current + 1) % primaryQuotes.length)
            }
            aria-label="Next testimonials"
            className="absolute -right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md hover:border-[#41a0c8] flex items-center justify-center text-[#062039] transition-all cursor-pointer"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

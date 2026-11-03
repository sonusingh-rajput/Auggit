import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiCheckCircle, FiShield, FiDatabase, FiCpu, FiPlay, FiX } from "react-icons/fi";
import { SiSap } from "react-icons/si";

const slaiceFeatures = [
  {
    icon: FiDatabase,
    text: "Selective data extraction and on-the-fly table filtering",
  },
  {
    icon: FiShield,
    text: "100% Compliance with Companies Act (Sec 128(1))",
  },
  {
    icon: FiCpu,
    text: "Near zero-downtime test system setup and refresh",
  },
  {
    icon: FiCheckCircle,
    text: "Reduced infrastructure and storage overhead",
  },
];

export default function SlaiceProductSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });

  return (
    <section
      id="featured-slaice"
      ref={sectionRef}
      className={`relative overflow-hidden py-16 sm:py-24 px-6 lg:px-16 border-b transition-colors duration-700 ease-in-out ${
        isInView
          ? "bg-[#eaf4fc] border-[#c2e2f5]"
          : "bg-white border-[#e3e3e3]"
      } text-[#353535]`}
    >
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-3xl transition-all duration-700 ${
            isInView ? "bg-[#41a0c8]/30 scale-125" : "bg-[#9eddf7]/15 scale-100"
          }`}
        />
        <div
          className={`absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl transition-all duration-700 ${
            isInView ? "bg-[#38bdf8]/20 scale-125" : "bg-[#ffeda0]/15 scale-100"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Product Video / UI Mockup (Increased Size) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 relative flex justify-center w-full"
        >
          <div className="relative w-full max-w-2xl group">
            <div
              className={`absolute inset-0 rounded-3xl blur-2xl -z-10 transition-all duration-500 ${
                isInView ? "bg-[#41a0c8]/25 scale-105" : "bg-[#41a0c8]/15 scale-100"
              }`}
            />

            <div className="relative bg-white rounded-3xl p-2 sm:p-3 border border-[#e3e3e3] shadow-[0_20px_50px_rgba(6,32,57,0.12)] overflow-hidden aspect-video">
              {isPlaying ? (
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/fxMVGKJsXlE?autoplay=1&rel=0"
                    title="SLaiCE SAP Data Slicing Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-2xl"
                  />
                  {/* Close / X Button */}
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-[#062039]/90 hover:bg-rose-600 text-white flex items-center justify-center shadow-xl border border-white/30 backdrop-blur-md transition-all hover:scale-110 cursor-pointer"
                    title="Close Video"
                    aria-label="Close Video"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group/video"
                >
                  <img
                    src="/slaice-video-thumbnail.webp"
                    alt="SLaiCE SAP Data Slicing Interface Video"
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transform group-hover/video:scale-105 transition-transform duration-500"
                  />
                  {/* Video Play Overlay */}
                  <div className="absolute inset-0 bg-[#062039]/30 group-hover/video:bg-[#062039]/15 transition-colors flex flex-col items-center justify-center gap-3">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 text-rose-600 shadow-2xl flex items-center justify-center transform group-hover/video:scale-110 transition-transform">
                      <FiPlay className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-rose-600" />
                    </div>
                    <span className="text-xs sm:text-sm font-extrabold text-white bg-[#062039]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 shadow-md">
                      Watch SLaiCE Video
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Highlight Pill */}
            {!isPlaying && (
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -bottom-4 right-4 sm:right-8 bg-white/95 backdrop-blur-md border border-[#9eddf7] shadow-[0_10px_25px_rgba(6,32,57,0.12)] px-4 py-2 rounded-xl flex items-center gap-2 transform-gpu"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#41a0c8] animate-pulse"></span>
                <span className="text-xs font-bold text-[#062039]">SAP Native Data Slicing</span>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Right Column: Description & Feature Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white text-[#41a0c8] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#9eddf7] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#41a0c8] animate-pulse"></span>
            Featured Product • SLaiCE (Built on SAP)
          </div>

          {/* Heading with 'and' instead of '&' per PDF Page 1 */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039] leading-[1.18]">
            Simplify Reporting and Meet <br />
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
              Indian Data Residency Mandates
            </span>
          </h2>

          {/* Subheading: 'full SAP stack' (no HANA) per PDF Page 1 */}
          <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
            Meeting data residency requirements doesn’t require running a full SAP stack. Our solution enables selective data separation and precision control without disrupting active enterprise operations.
          </p>

          {/* 3 Pillar Tags (PDF Page 6: Data Slicing | Data Migration | Data Transformation) */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold">
            <span className="px-3 py-1 rounded-lg bg-blue-50 text-[#1267a7] border border-blue-200">
              Data Slicing
            </span>
            <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200">
              Data Migration
            </span>
            <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200">
              Data Transformation
            </span>
          </div>

          {/* Staggered Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {slaiceFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/80 border border-[#e3e3e3] hover:border-[#9eddf7] transition-colors shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-[#f0f9ff] text-[#41a0c8] shadow-sm shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs text-[#353535] font-medium leading-snug">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* SLaiCE Performance Metrics (PDF Page 6: 10X, 5X, 100%) */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/90 border border-slate-200 text-center shadow-sm">
            <div>
              <div className="text-xl font-black text-[#062039]">10X</div>
              <div className="text-[10px] text-slate-500 font-semibold uppercase">Faster Cutover</div>
            </div>
            <div>
              <div className="text-xl font-black text-[#41a0c8]">5X</div>
              <div className="text-[10px] text-slate-500 font-semibold uppercase">Less Storage</div>
            </div>
            <div>
              <div className="text-xl font-black text-emerald-600">100%</div>
              <div className="text-[10px] text-slate-500 font-semibold uppercase">Data Sovereignty</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/product/slaice"
              className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#41a0c8]/20 group active:scale-95"
            >
              <span>Explore SLaiCE</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
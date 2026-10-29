import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiCheckCircle, FiShield, FiDatabase, FiCpu, FiPlayCircle } from "react-icons/fi";
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
  return (
    <section className="relative overflow-hidden bg-white text-[#353535] py-16 sm:py-20 px-6 lg:px-16 border-b border-[#e3e3e3]">

      {/* Background Accent Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#9eddf7]/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffeda0]/15 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Product UI Mockup */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center"
        >
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-0 bg-[#41a0c8]/15 rounded-3xl blur-xl -z-10 group-hover:bg-[#41a0c8]/25 transition-all duration-500" />

            <div className="relative bg-white rounded-3xl p-3 border border-[#e3e3e3] shadow-[0_20px_50px_rgba(6,32,57,0.1)] overflow-hidden">
              <img
                src="/product1.webp"
                alt="SLaiCE SAP Data Slicing Interface"
                width={640}
                height={380}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Floating Highlight Pill - SLT removed per PDF Page 1 */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 sm:right-8 bg-white/95 backdrop-blur-md border border-[#9eddf7] shadow-[0_10px_25px_rgba(6,32,57,0.12)] px-4 py-2 rounded-xl flex items-center gap-2 transform-gpu"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#41a0c8] animate-pulse"></span>
              <span className="text-xs font-bold text-[#062039]">SAP Native Data Slicing</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Description & Feature Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-[#f1f2f2] text-[#41a0c8] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#9eddf7] shadow-sm">
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
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#f1f2f2]/60 border border-[#e3e3e3] hover:border-[#9eddf7] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-white text-[#41a0c8] shadow-sm shrink-0">
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
          <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
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

          {/* Actions & Video Link per PDF Page 6 */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/product/slaice"
              className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#41a0c8]/20 group active:scale-95"
            >
              <span>Explore SLaiCE</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://www.youtube.com/watch?v=fxMVGKJsXlE&t=2s"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#062039] border border-slate-200 text-xs font-bold shadow-sm transition-all"
            >
              <FiPlayCircle className="w-4 h-4 text-rose-600" />
              <span>Watch SLaiCE Video (2:27)</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
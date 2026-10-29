import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiCheckCircle, FiLayers, FiFileText, FiTrendingUp, FiPlayCircle, FiCpu } from "react-icons/fi";

const automationFeatures = [
  {
    icon: FiLayers,
    text: "Automated vendor onboarding and verification workflows",
  },
  {
    icon: FiFileText,
    text: "Secure electronic document management (eDMS)",
  },
  {
    icon: FiTrendingUp,
    text: "Real-time performance metrics and audit trails",
  },
  {
    icon: FiCheckCircle,
    text: "Instant gate pass tracking and invoice validation",
  },
];

export default function AutomationProductSection() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] text-[#353535] py-16 sm:py-20 px-6 lg:px-16 border-b border-[#e3e3e3]">

      {/* Background Subtle Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#9eddf7]/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#ffeda0]/15 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

        {/* Left Column: Description & Staggered Features */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white text-[#41a0c8] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#9eddf7] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#41a0c8] animate-pulse"></span>
            Featured Product • Automation Suite
          </div>

          {/* Heading with 'and' per PDF Page 1 */}
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039] leading-[1.18]">
            Streamline Workflows and <br />
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
              Accelerate Document Management
            </span>
          </h2>

          <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
            Eliminate manual bottlenecks across departments with our end-to-end enterprise automation engine, built to secure documents and track compliance effortlessly.
          </p>

          {/* Staggered Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {automationFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#e3e3e3] shadow-sm hover:border-[#41a0c8] hover:shadow-[0_8px_20px_rgba(65,160,200,0.12)] transition-all group"
                >
                  <div className="p-2 rounded-xl bg-[#f1f2f2] group-hover:bg-[#9eddf7]/40 text-[#41a0c8] shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-[#353535] group-hover:text-[#062039] transition-colors leading-snug pt-0.5">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Action Buttons & YouTube Video Link per PDF Page 6 */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/product/automation-suite"
              className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-[#41a0c8]/25 group active:scale-95 cursor-pointer"
            >
              <span>Explore Automation Suite</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="https://www.youtube.com/watch?v=aLZsnVJbzFY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-[#062039] border border-slate-200 text-xs font-bold shadow-sm transition-all"
            >
              <FiPlayCircle className="w-4 h-4 text-rose-600" />
              <span>Watch Video (1:44)</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Visual Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center"
        >
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-0 bg-[#41a0c8]/15 rounded-3xl blur-2xl -z-10 group-hover:bg-[#41a0c8]/25 transition-all duration-500" />

            <div className="relative bg-white rounded-3xl p-3 border border-[#e3e3e3] shadow-[0_20px_50px_rgba(6,32,57,0.1)] overflow-hidden">
              <img
                src="/Automation_Suite_image/Automation_Suite_Introducing.webp"
                alt="Auggit Automation Suite Dashboard"
                width={640}
                height={380}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Floating Highlight Pill */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 left-4 sm:left-8 bg-white/95 backdrop-blur-md border border-[#9eddf7] shadow-[0_10px_25px_rgba(6,32,57,0.12)] px-4 py-2 rounded-xl flex items-center gap-2 transform-gpu"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-bold text-[#062039]">Live Enterprise Automation</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
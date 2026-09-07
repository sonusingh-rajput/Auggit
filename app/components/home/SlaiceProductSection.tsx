import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiCheckCircle, FiShield, FiDatabase, FiCpu, FiCheck } from "react-icons/fi";

const slaiceFeatures = [
  {
    icon: FiDatabase,
    text: "Selective data extraction & on-the-fly table filtering",
  },
  {
    icon: FiShield,
    text: "100% Compliance with Companies Act (Sec 128)",
  },
  {
    icon: FiCpu,
    text: "Near zero-downtime test system setup & refresh",
  },
  {
    icon: FiCheckCircle,
    text: "Reduced infrastructure and storage overhead",
  },
];

export default function SlaiceProductSection() {
  return (
    <section className="relative overflow-hidden bg-white text-[#353535] py-16 sm:py-10 px-6 lg:px-16 border-b border-[#e3e3e3]">
      
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#9eddf7]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ffeda0]/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Product Screenshot / UI Mockup with Floating Chip */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center"
        >
          <div className="relative w-full max-w-xl group">
            <div className="absolute inset-0 bg-[#41a0c8]/15 rounded-3xl blur-2xl -z-10 group-hover:bg-[#41a0c8]/25 transition-all duration-500" />
            
            <div className="relative bg-white rounded-3xl p-3 border border-[#e3e3e3] shadow-[0_20px_50px_rgba(6,32,57,0.1)] overflow-hidden">
              <img 
                src="/product1.webp" 
                alt="SLaiCE SAP Data Slicing Interface" 
                className="w-full h-auto rounded-2xl object-cover transform group-hover:scale-[1.01] transition-transform duration-500"
              />
            </div>

            {/* Floating Highlight Pill */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-4 right-4 sm:right-8 bg-white/95 backdrop-blur-md border border-[#9eddf7] shadow-[0_10px_25px_rgba(6,32,57,0.12)] px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#41a0c8] animate-pulse"></span>
              <span className="text-xs font-bold text-[#062039]">SAP SLT Native Carving</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Description & Staggered Feature Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-[#f1f2f2] text-[#41a0c8] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#9eddf7] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#41a0c8] animate-pulse"></span>
            Featured Product • SLaiCE
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039] leading-[1.18]">
            Simplify Reporting & Meet <br />
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
              Indian Data Residency Mandates
            </span>
          </h2>

          <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
            Meeting data residency requirements doesn’t require running a full SAP HANA stack. Our solution enables selective data separation and precision control without disrupting active enterprise operations.
          </p>

          {/* Staggered Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
            {slaiceFeatures.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-[#e3e3e3] shadow-sm hover:border-[#41a0c8] hover:shadow-[0_8px_20px_rgba(65,160,200,0.12)] transition-all group"
                >
                  <div className="p-2 rounded-xl bg-[#f1f2f2] group-hover:bg-[#9eddf7]/40 text-[#41a0c8] shrink-0 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-medium text-[#353535] group-hover:text-[#062039] transition-colors leading-snug pt-0.5">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="pt-3">
            <Link
              to="/product/slaice"
              className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(65,160,200,0.3)] hover:shadow-[0_6px_24px_rgba(18,103,167,0.4)] group active:scale-95"
            >
              <span>Explore SLaiCE</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
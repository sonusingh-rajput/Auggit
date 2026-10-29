import { motion } from "framer-motion";
import {
  FiAward,
  FiCompass,
  FiLayers,
  FiShield,
  FiFileText,
  FiUsers,
  FiTrendingUp,
  FiSettings,
  FiDollarSign,
  FiClock,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";
import { RiBuilding4Line, RiTeamLine } from "react-icons/ri";
import AnimatedCounter from "~/components/common/AnimatedCounter";

export default function WhyAuggitSection() {
  const pillars = [
    {
      icon: FiAward,
      title: "10+ Years of Excellence",
      desc: "Trusted enterprise compliance and data architecture expertise built over a decade.",
    },
    {
      icon: FiCompass,
      title: "Unified ERP Technologies",
      desc: "Native SAP tools built to empower CIOs, CFOs and IT leaders across global landscapes.",
    },
    {
      icon: FiLayers,
      title: "Rich Product Portfolio",
      desc: "Comprehensive suite covering SLaiCE, eDMS, AP Automation, and Plant Logistics.",
    },
    {
      icon: FiShield,
      title: "Agile & Innovative",
      desc: "Enterprise solutions backed by cutting-edge AI OCR, selective data slicing and ABAP R&D.",
    },
    {
      icon: RiBuilding4Line,
      title: "Enterprise-Grade Compliance",
      desc: "Section 128(1) daily India backups, Section 62 audit trails, and strict data sovereignty.",
    },
    {
      icon: RiTeamLine,
      title: "Human-Centric Approach",
      desc: "Designed by domain veterans for finance and supply chain teams to empower operations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#353535] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41a0c8] bg-[#f1f2f2] px-4 py-1.5 rounded-full border border-slate-200">
            Why Business Prefer Auggit?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062039] tracking-tight mt-4">
            Engineered for High-Stakes Enterprise Performance
          </h2>
        </div>

        {/* 1. Main Dark Hero Card with 6 Pillars & Executive Visual (Matching Page 5 Reference) */}
        <div className="gsap-card rounded-3xl bg-[#031322] text-white shadow-2xl overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12 items-stretch">

          {/* Left Grid: 6 Pillars */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Why businesses prefer Auggit?
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-lg">
                Delivering high-availability compliance and last-mile workflow connectivity across India.
              </p>
            </div>

            <div className="gsap-stagger-container grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all space-y-2 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-[#f7c037] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#9eddf7] transition-colors leading-snug">
                      {pillar.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Executive Corporate Visual */}
          <div className="lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden">
            <img
              src="/images/why_auggit_exec.webp"
              alt="Why businesses prefer Auggit Executive"
              width={640}
              height={480}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
            {/* Ambient vignette gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#031322] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#031322] lg:via-transparent lg:to-transparent" />
          </div>
        </div>

        {/* 2. ROI & Performance Metric Bar (Exact Replication of Page 5 Screenshot) */}
        <div className="space-y-8 pt-4">

          {/* Top Single ROI Center Banner */}
          <div className="gsap-card max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#1267a7] flex items-center justify-center flex-shrink-0">
              <FiTrendingUp className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Return on Investments
              </div>
              <div className="text-2xl font-black text-[#062039] flex items-center gap-1.5 mt-0.5">
                <FiArrowUp className="w-6 h-6 text-emerald-600 stroke-[3]" />
                <span className="text-emerald-600">
                  <AnimatedCounter value={40} suffix="%" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom 4 Performance Metrics Grid */}
          <div className="gsap-stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Metric 1: Process Efficiency */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#41a0c8] flex items-center justify-center flex-shrink-0">
                  <FiSettings className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Process efficiency
                  </div>
                  <div className="text-2xl font-black text-[#062039] flex items-center gap-1 mt-0.5">
                    <FiArrowUp className="w-5 h-5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-600">
                      <AnimatedCounter value={45} suffix="%" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 2: Finance Cost */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                  <FiDollarSign className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Finance cost
                  </div>
                  <div className="text-2xl font-black text-[#062039] flex items-center gap-1 mt-0.5">
                    <FiArrowDown className="w-5 h-5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-600">
                      <AnimatedCounter value={30} suffix="%" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 3: Resource Optimization */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <FiUsers className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Resource optimization
                  </div>
                  <div className="text-2xl font-black text-[#062039] flex items-center gap-1 mt-0.5">
                    <FiArrowUp className="w-5 h-5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-600">
                      <AnimatedCounter value={40} suffix="%" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Metric 4: Auditing Time */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md flex items-center justify-between hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Auditing time
                  </div>
                  <div className="text-2xl font-black text-[#062039] flex items-center gap-1 mt-0.5">
                    <FiArrowDown className="w-5 h-5 text-emerald-600 stroke-[3]" />
                    <span className="text-emerald-600">
                      <AnimatedCounter value={70} suffix="%" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

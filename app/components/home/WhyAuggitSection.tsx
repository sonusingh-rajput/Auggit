import { motion } from "framer-motion";
import {
  FiUsers,
  FiTrendingUp,
  FiSettings,
  FiDollarSign,
  FiClock,
  FiArrowUp,
  FiArrowDown,
} from "react-icons/fi";
import AnimatedCounter from "~/components/common/AnimatedCounter";

export default function WhyAuggitSection() {
  const performanceMetrics = [
    {
      icon: FiTrendingUp,
      title: "Return on Investments",
      value: 40,
      suffix: "%",
      trend: "up",
    },
    {
      icon: FiSettings,
      title: "Process Efficiency",
      value: 45,
      suffix: "%",
      trend: "up",
    },
    {
      icon: FiDollarSign,
      title: "Cut Down Cost",
      value: "35",
      suffix: "%",
      trend: "down",
    },
    {
      icon: FiUsers,
      title: "Resource Optimization",
      value: 40,
      suffix: "%",
      trend: "up",
    },
    {
      icon: FiClock,
      title: "Auditing Time",
      value: 70,
      suffix: "%",
      trend: "down",
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

          {/* Left Grid: ROI & Performance Metrics */}
          <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Measured business impact
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-lg">
                Measurable improvements across finance operations, process efficiency, resources, and auditing.
              </p>
            </div>

            <div className="gsap-stagger-container grid grid-cols-1 sm:grid-cols-2 gap-4">
              {performanceMetrics.map((metric, i) => {
                const Icon = metric.icon;
                const TrendIcon = metric.trend === "up" ? FiArrowUp : FiArrowDown;
                return (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-all space-y-2 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/10 text-[#f7c037] flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider leading-snug">
                      {metric.title}
                    </h4>
                    <div className="text-2xl font-black text-emerald-400 flex items-center gap-1.5">
                      <TrendIcon className="w-5 h-5 stroke-[3]" />
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
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

      </div>
    </section>
  );
}

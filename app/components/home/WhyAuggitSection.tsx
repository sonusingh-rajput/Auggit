import { motion } from "framer-motion";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import AnimatedCounter from "~/components/common/AnimatedCounter";

export default function WhyAuggitSection() {
  const secondaryMetrics = [
    {
      title: "Process Efficiency",
      value: 85,
      suffix: "%",
      trend: "+45%",
      isPositive: true,
      color: "bg-[#41a0c8]",
      badgeBg: "bg-[#e8f4fc] text-[#1267a7]",
    },
    {
      title: "Higher ROI",
      value: 65,
      suffix: "%",
      trend: "+35%",
      isPositive: true,
      color: "bg-[#1267a7]",
      badgeBg: "bg-[#e3f2fd] text-[#062039]",
    },
    {
      title: "Resource Optimization",
      value: 75,
      suffix: "%",
      trend: "+40%",
      isPositive: true,
      color: "bg-[#062039]",
      badgeBg: "bg-slate-100 text-[#062039]",
    },
    {
      title: "Auditing Time Saved",
      value: 85,
      suffix: "%",
      trend: "+70%",
      isPositive: true,
      color: "bg-[#41a0c8]",
      badgeBg: "bg-[#e8f4fc] text-[#1267a7]",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#f8fbfe] text-[#353535] relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1267a7] bg-[#e1f3fc] px-4 py-1.5 rounded-full border border-[#bce3f7]">
            Why Business Prefer Auggit?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062039] tracking-tight mt-3">
            Engineered for High-Stakes Enterprise Performance
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Measurable business impact validated across enterprise finance, supply chain operations, resource efficiency, and statutory audits.
          </p>
        </div>

        {/* Dashboard Cards Layout (Matching Reference: 1 Hero Card on Left + 2x2 Grid on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* 1. Large Hero Metric Card (Left Column) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-white border border-[#e5edf4] rounded-[24px] sm:rounded-[28px] p-7 sm:p-9 shadow-[0_4px_25px_rgba(6,32,57,0.04)] hover:shadow-[0_8px_30px_rgba(65,160,200,0.10)] hover:bg-[#fafcfe] transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Header: Title + Trend Badge */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg sm:text-xl font-bold text-[#062039] tracking-tight">
                  Return on Investments
                </h3>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#e8f4fc] text-[#1267a7] border border-[#d3ecfb]">
                  <FiArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>+40%</span>
                </span>
              </div>

              {/* Progress Track */}
              <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-3.5">
                <div className="h-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] rounded-full w-[75%]" />
              </div>

              {/* Huge Metric Number */}
              <div className="my-7 sm:my-10">
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#062039] tracking-tight leading-none">
                  <AnimatedCounter value={75} suffix="%" />
                </div>
              </div>
            </div>

            {/* Bottom Insight Note */}
            <p className="text-xs sm:text-sm text-slate-400 font-normal leading-relaxed pt-6 border-t border-slate-100/90">
              Validated enterprise returns driven by automated 3-way invoice matching, hardware-integrated gate pass traceability, and zero-defect audit compliance.
            </p>
          </motion.div>

          {/* 2. 2x2 Grid of 4 Metric Cards (Right Column) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {secondaryMetrics.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-[#e5edf4] rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 shadow-[0_4px_20px_rgba(6,32,57,0.04)] hover:shadow-[0_8px_25px_rgba(65,160,200,0.10)] hover:bg-[#fafcfe] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: Title + Pill Badge */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-base sm:text-lg font-bold text-[#062039] tracking-tight">
                      {item.title}
                    </h4>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${item.badgeBg}`}
                    >
                      {item.isPositive ? (
                        <FiArrowUp className="w-3.5 h-3.5 stroke-[2.5]" />
                      ) : (
                        <FiArrowDown className="w-3.5 h-3.5 stroke-[2.5]" />
                      )}
                      <span>{item.trend}</span>
                    </span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden mt-3.5">
                    <div
                      className={`h-full ${item.color} rounded-full`}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>

                {/* Big Metric Number */}
                <div className="mt-8 sm:mt-10">
                  <div className="text-4xl sm:text-5xl font-black text-[#062039] tracking-tight leading-none">
                    <AnimatedCounter value={item.value} suffix={item.suffix} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

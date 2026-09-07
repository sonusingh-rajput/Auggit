import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

interface Milestone {
  year: string;
  title: string;
  desc: string;
  color: string;
  icon: string;
}

interface MilestoneCardProps {
  item: Milestone;
  index: number;
  isLeft: boolean;
}

const journeyMilestones: Milestone[] = [
  {
    year: "2017",
    title: "Document Management Beginnings",
    desc: "Auggit began its journey with an on‑premise document management solution, addressing enterprise documentation and audit challenges.",
    color: "from-[#1267a7] to-[#41a0c8]",
    icon: "📄",
  },
  {
    year: "2019",
    title: "Digitization & Sync",
    desc: "Expanded beyond document management by introducing document digitization services, Document Sync, Health Reports, and physical record conversions.",
    color: "from-[#41a0c8] to-[#1267a7]",
    icon: "🔄",
  },
  {
    year: "2020",
    title: "Moving to the Cloud",
    desc: "Transitioned to a cloud‑based platform, enabling organizations and auditors to securely access documentation and conduct digital audits remotely.",
    color: "from-[#062039] to-[#1267a7]",
    icon: "☁️",
  },
  {
    year: "2022",
    title: "Enterprise eDMS & Mobile",
    desc: "Evolved into a comprehensive Electronic Document Management System (eDMS) alongside the launch of our mobile application for on‑the‑move access.",
    color: "from-[#1267a7] to-[#41a0c8]",
    icon: "📱",
  },
  {
    year: "2024",
    title: "ERP Integration & Patents",
    desc: "Launched ERP‑integrated eDMS connecting document management directly with SAP environments, crossing 100+ active users with patent certifications.",
    color: "from-[#062039] to-[#1267a7]",
    icon: "🔗",
  },
  {
    year: "2026",
    title: "Compliance Intelligence (SLaiCE)",
    desc: "Introduced SLaiCE, our patented compliance management solution addressing requirements under the Indian Companies Act for SAP data slicing and governance.",
    color: "from-[#062039] to-[#41a0c8]",
    icon: "⚖️",
  },
];

const MilestoneCard = ({ item, index, isLeft }: MilestoneCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      className={`flex flex-col items-center gap-4 ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div className="w-full md:w-[calc(50%-2rem)]">
        <motion.div
          whileHover={{ y: -6, scale: 1.01 }}
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} p-6 sm:p-7 text-white shadow-xl shadow-[#41a0c8]/20 border border-white/20 transition-all duration-300`}
        >
          {/* Decorative number background */}
          <div className="absolute -right-4 -bottom-8 text-[120px] font-black text-white/5 select-none leading-none pointer-events-none">
            {item.year.slice(2)}
          </div>

          {/* Icon and year */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">{item.icon}</span>
            <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
              {item.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold tracking-tight leading-snug">
            {item.title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-[#f1f2f2] text-sm leading-relaxed opacity-90">
            {item.desc}
          </p>

          {/* Subtle divider */}
          <div className="mt-5 pt-4 border-t border-white/20 flex justify-end">
            <span className="text-xs font-medium uppercase tracking-wider text-white/60">
              Milestone
            </span>
          </div>
        </motion.div>
      </div>

      {/* Center marker – visible only on desktop */}
      <div className="hidden md:flex w-12 h-12 rounded-full bg-white border-4 border-[#41a0c8] text-[#41a0c8] items-center justify-center font-bold text-xs shadow-xl shrink-0 z-20">
        {item.year.slice(2)}
      </div>

      {/* Spacer for alignment */}
      <div className="hidden md:block w-full md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

export default function AboutTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-8 sm:py-12 bg-gradient-to-b from-[#f1f2f2]/80 via-white to-[#f1f2f2]/60 rounded-3xl border border-[#e3e3e3] shadow-[0_15px_50px_rgba(6,32,57,0.05)] overflow-hidden">
      {/* Ambient background glow & subtle dot matrix */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-[#9eddf7]/25 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-[#ffeda0]/25 rounded-full blur-[120px]" />
        <div 
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `radial-gradient(#41a0c8 1.2px, transparent 1.2px)`,
            backgroundSize: `28px 28px`
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 mb-14 sm:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#9eddf7] text-[#41a0c8] text-xs font-bold uppercase tracking-[0.15em] shadow-sm"
        >
          <span className="relative flex w-2 h-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
          </span>
          Our Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#062039] leading-tight"
        >
          One Journey.{" "}
          <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
            Multiple Transformations.
          </span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-[#353535] text-base max-w-2xl mx-auto"
        >
          From a simple document manager to a comprehensive compliance intelligence platform — every step shaped by our commitment to enterprise excellence.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-8">
        {/* Vertical line with animated progress – desktop only */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-[#e3e3e3] rounded-full hidden md:block overflow-hidden shadow-inner">
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#41a0c8] via-[#1267a7] to-[#062039] rounded-full"
            style={{ height: lineHeight }}
            initial={{ height: "0%" }}
          />
        </div>

        {/* Milestones */}
        <div className="space-y-16 sm:space-y-20 relative z-10">
          {journeyMilestones.map((item, index) => (
            <MilestoneCard
              key={item.year}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* "Now" indicator at the bottom */}
        <motion.div
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] text-white items-center justify-center text-xs font-bold uppercase tracking-wider shadow-2xl shadow-[#41a0c8]/40 border-4 border-white z-30"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          Now
        </motion.div>
      </div>
    </section>
  );
}
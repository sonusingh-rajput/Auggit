import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiShield, FiZap, FiCheckCircle } from "react-icons/fi";

export default function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yIllustration = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacityIllustration = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const floatingBadge1Y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const floatingBadge2Y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden bg-[#ffffff] text-[#353535] pt-6 pb-12 px-4 sm:px-6 lg:px-12 min-h-[90vh] flex items-center border-b border-[#e3e3e3]"
    >
      {/* Background Code Effects Layer with Brand Palette Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Repeating Subtle Grid/Stripe Pattern in Brand Sky Light */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `repeating-linear-gradient(90deg, 
              rgba(255, 255, 255, 0.9) 0px, 
              rgba(255, 255, 255, 0.9) 30px, 
              rgba(158, 221, 247, 0.25) 31px, 
              rgba(65, 160, 200, 0.3) 60px
            )`,
          }}
        />

        {/* Ambient Radial Glows */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#ffeda0]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#41a0c8]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top-to-Bottom Soft Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#f1f2f2]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Text Content & Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-6 space-y-6 text-left"
        >
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 bg-[#f1f2f2] text-[#062039] px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#9eddf7] shadow-sm backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-[#41a0c8] animate-pulse shadow-[0_0_8px_#41a0c8]"></span>
            <span>Enterprise Compliance & Automation</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#062039] leading-[1.12]">
           From Unstructured Records to {' '}
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
               Flawless SAP Compliance in Real Time.
            </span>
          </h1>

          {/* Description Paragraph */}
          <p className="text-base sm:text-lg text-[#353535] max-w-xl leading-relaxed">
            Unify data management, automate regulatory workflows, and eliminate compliance bottlenecks across your SAP ecosystem.
          </p>

          {/* Quick Value Metrics */}
          <div className="flex items-center gap-6 py-1 text-xs sm:text-sm font-medium text-[#353535]">
            <div className="flex items-center gap-2">
              <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
              <span>Companies Act 128 Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <FiCheckCircle className="w-4 h-4 text-[#41a0c8]" />
              <span>SAP SLT Native</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/product/slaice"
              className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(65,160,200,0.35)] hover:shadow-[0_6px_24px_rgba(18,103,167,0.4)] group active:scale-95"
            >
              <span>Explore Solutions</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#f1f2f2] text-[#062039] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm border border-[#e3e3e3] hover:border-[#979797] group backdrop-blur-md active:scale-95"
            >
              <span>Request a Demo</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#353535]" />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Parallax 3D Dashboard Image Showcase with Floating Dynamic Badges */}
        <motion.div 
          style={{ y: yIllustration, opacity: opacityIllustration }}
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-6 relative flex justify-center items-center"
        >
          {/* Main Dashboard Image Container */}
          <div className="relative w-full max-w-2xl lg:max-w-none group">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-[#41a0c8]/20 rounded-3xl blur-3xl pointer-events-none -z-10" />
            
            <img 
              src="/hero_image1.png" 
              alt="Auggit Platform Dashboard" 
              className="w-full h-auto object-contain filter drop-shadow-[0_20px_45px_rgba(6,32,57,0.14)] transform group-hover:scale-[1.015] transition-transform duration-700 ease-out"
            />

            {/* Floating Metric Badge 1: Compliance */}
            <motion.div
              style={{ y: floatingBadge1Y }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 sm:right-4 bg-white/95 backdrop-blur-xl border border-[#9eddf7] shadow-[0_12px_28px_rgba(6,32,57,0.12)] px-4 py-2.5 rounded-2xl flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#93cb3a]/20 border border-[#5e8b22]/30 flex items-center justify-center text-[#5e8b22]">
                <FiShield className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-[#062039] uppercase tracking-wider">100% Compliant</div>
                <div className="text-[10px] text-[#353535]">Indian Companies Act 128</div>
              </div>
            </motion.div>

            {/* Floating Metric Badge 2: Performance */}
            <motion.div
              style={{ y: floatingBadge2Y }}
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-2 sm:left-4 bg-white/95 backdrop-blur-xl border border-[#e3e3e3] shadow-[0_12px_28px_rgba(6,32,57,0.12)] px-4 py-2.5 rounded-2xl flex items-center gap-3 z-20 pointer-events-none"
            >
              <div className="w-9 h-9 rounded-xl bg-[#f7c037]/20 border border-[#f7c037]/40 flex items-center justify-center text-[#062039]">
                <FiZap className="w-5 h-5 text-[#f7c037]" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-[#062039] uppercase tracking-wider">Zero-Downtime</div>
                <div className="text-[10px] text-[#353535]">Continuous SLT Synchronization</div>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
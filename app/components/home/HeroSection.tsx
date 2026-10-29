import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiAward,
  FiFileText,
  FiCpu,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "slaice",
      badge: "SLaiCE • Built on SAP",
      badgeIcon: SiSap,
      title: "From Unstructured Records to Flawless SAP Compliance in Real Time.",
      desc: "Eliminate the need for full system replication while ensuring data integrity, statutory compliance under Section 128(1), and reduced infrastructure cost.",
      checks: ["Data Residency Ready", "SAP Native", "SAP approved"],
      primaryCta: { text: "Explore SLaiCE", href: "/product/slaice" },
      secondaryCta: { text: "Book Your Free POC", href: "/book-poc" },
      image: "/hero_image1.webp",
      floatingStat1: { title: "100% Compliant", subtitle: "Data Residency Ready" },
      floatingStat2: { title: "SAP Native", subtitle: "Zero Full-DB Clones" },
    },
    {
      id: "edms",
      badge: "Auggit eDMS • Document Intelligence",
      badgeIcon: FiFileText,
      title: "Connecting Internal and External Documents Seamlessly Across ERPs.",
      desc: "Connect your enterprise departments, suppliers, and auditors on one unified platform. Sub-second indexed search, automated ERP transaction linking, and audit-ready governance.",
      checks: ["Instant ERP Linking", "AWS India Cloud Storage", "Role-Based Vaults"],
      primaryCta: { text: "Explore eDMS", href: "/product/edms" },
      secondaryCta: { text: "Request a Live Demo", href: "/product/automation-suite/edms-demo" },
      image: "/Automation_Suite_image/Automation_Suite_Introducing.webp",
      floatingStat1: { title: "2M+ Saved", subtitle: "Paperless Enterprise" },
      floatingStat2: { title: "AES-256", subtitle: "Encrypted at Rest & Transit" },
    },
    {
      id: "automation",
      badge: "Automation Suite • End-to-End SCM",
      badgeIcon: FiCpu,
      title: "Streamline SCM Workflows: Vendor to AP to GatePass to Weighbridge.",
      desc: "Eliminate manual data entry and plant leakage. Self-service vendor onboarding, AI 3-way matching (MIRO – MIGO), QR gate passes, and tamper-proof weighbridge capture.",
      checks: ["AI/LLM Powered OCR", "3-Way Matching (MIRO-MIGO)", "Hardware Interlocks"],
      primaryCta: { text: "Explore Automation Suite", href: "/product/automation-suite" },
      secondaryCta: { text: "Book Your Free POC", href: "/book-poc" },
      image: "/Automation_Suite_image/Automation_Suite_Vendor_Management.webp",
      floatingStat1: { title: "-70% Cost", subtitle: "Per Invoice Processing" },
      floatingStat2: { title: "Zero Leakage", subtitle: "Weighbridge & Gate Sync" },
    },
  ];

  // Auto-advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[currentSlide];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section className="relative overflow-hidden bg-white text-[#353535] pt-6 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-12 min-h-[85vh] flex items-center border-b border-[#e3e3e3]">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-xl pointer-events-none" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#ffeda0]/20 rounded-full blur-xl pointer-events-none" />
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-[#41a0c8]/15 rounded-full blur-xl pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#f1f2f2]/60 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Top Celebrating 10th Yr Floating Banner Badge (PDF Page 4) */}
        <div className="flex items-center justify-between mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border border-[#f7c037]/50 text-[#062039] text-xs font-bold shadow-sm backdrop-blur-md">
            <FiAward className="w-4 h-4 text-[#f7c037]" />
            <span className="font-extrabold text-[#062039]">Celebrating 10th Year</span>
            <span className="text-[#f7c037] font-black">•</span>
            <span className="text-slate-600 font-semibold">10 Years of Enterprise Excellence</span>
          </div>

          {/* Slide Navigation Buttons */}
          <div className="hidden sm:flex items-center gap-2">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-[#41a0c8]" : "w-2 bg-slate-200 hover:bg-slate-300"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.45 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
          >
            {/* Left Column: Text Content & Actions */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 bg-[#f1f2f2] text-[#062039] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#9eddf7] shadow-sm">
                <BadgeIcon className="w-3.5 h-3.5 text-[#41a0c8]" />
                <span>{slide.badge}</span>
              </div>

              {/* Slide Main Heading */}
              <h1 className="text-3xl sm:text-5xl lg:text-[2.85rem] font-black tracking-tight text-[#062039] leading-[1.14]">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                {slide.desc}
              </p>

              {/* Statutory Checks (PDF Page 1: Data Residency Ready, SAP Native, SAP approved) */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-1 text-xs sm:text-sm font-bold text-[#062039]">
                {slide.checks.map((check, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{check}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to={slide.primaryCta.href}
                  className="inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-[#41a0c8]/25 group active:scale-95 cursor-pointer"
                >
                  <span>{slide.primaryCta.text}</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  to={slide.secondaryCta.href}
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#062039] px-7 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm border border-slate-200 hover:border-slate-300 group cursor-pointer"
                >
                  <span>{slide.secondaryCta.text}</span>
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-slate-400" />
                </Link>
              </div>

              {/* Slide Selector Indicator on Mobile */}
              <div className="flex sm:hidden items-center gap-2 pt-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      currentSlide === idx ? "w-8 bg-[#41a0c8]" : "w-2 bg-slate-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Visual Dashboard Showcase & Floating Badges */}
            <div className="lg:col-span-6 relative flex justify-center items-center">
              <div className="relative w-full max-w-lg lg:max-w-none group">
                {/* Glow */}
                <div className="absolute inset-0 bg-[#41a0c8]/15 rounded-3xl blur-xl pointer-events-none" />

                <div className="p-3 sm:p-5 rounded-3xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-xl overflow-hidden flex items-center justify-center min-h-[300px]">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    width={640}
                    height={380}
                    fetchPriority={currentSlide === 0 ? "high" : "auto"}
                    loading={currentSlide === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full max-h-[380px] object-contain rounded-2xl filter drop-shadow-md group-hover:scale-[1.01] transition-transform duration-500"
                  />
                </div>

                {/* Floating Metric 1 */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -top-3 -right-2 sm:right-2 bg-white/95 backdrop-blur-md border border-[#9eddf7] shadow-lg px-4 py-2 rounded-2xl flex items-center gap-3 z-20 pointer-events-none transform-gpu"
                >
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <FiShield className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-[#062039] uppercase tracking-wider">
                      {slide.floatingStat1.title}
                    </div>
                    <div className="text-[10px] text-slate-500">{slide.floatingStat1.subtitle}</div>
                  </div>
                </motion.div>

                {/* Floating Metric 2 */}
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-2 sm:left-2 bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg px-4 py-2 rounded-2xl flex items-center gap-3 z-20 pointer-events-none transform-gpu"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#f7c037]/20 flex items-center justify-center text-[#062039]">
                    <FiZap className="w-4 h-4 text-[#f7c037]" />
                  </div>
                  <div className="text-left">
                    <div className="text-[11px] font-bold text-[#062039] uppercase tracking-wider">
                      {slide.floatingStat2.title}
                    </div>
                    <div className="text-[10px] text-slate-500">{slide.floatingStat2.subtitle}</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiFileText,
  FiActivity,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

/* =========================================================================
   MAIN HERO SECTION COMPONENT (With Updated Product Images)
   ========================================================================= */
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      id: "slaice",
      badge: "SLaiCE • Built on SAP",
      badgeIcon: SiSap,
      headline: "The Simplest Way to Automate SAP Workflows Across Every Module",
      subtitle:
        "Streamline your enterprise compliance and automate SAP ECC & S/4HANA with zero database clones in just a few clicks.",
      primaryCta: {
        text: "Explore SLaiCE",
        href: "/product/slaice",
      },
      secondaryCta: {
        text: "Request Live Demo",
        href: "/book-poc",
      },
      imageSrc: "/hero_image/splice.png",
      imageAlt: "Auggit SLaiCE - SAP Real-Time Performance & ROI Analytics",
    },
    {
      id: "edms",
      badge: "Auggit eDMS • Universal Repository",
      badgeIcon: FiFileText,
      headline: "The Simplest Way to Index & Unify Enterprise Documents Across Every ERP",
      subtitle:
        "Connect teams, suppliers, and auditors on one unified repository that indexes millions of invoices with sub-second search.",
      primaryCta: {
        text: "Explore eDMS",
        href: "/product/edms",
      },
      secondaryCta: {
        text: "Request Live Demo",
        href: "/product/automation-suite/edms-demo",
      },
      imageSrc: "/hero_image/edms.png",
      imageAlt: "Auggit eDMS - Upload, Tag, and Track Architecture",
    },
    {
      id: "automation",
      badge: "Automation Suite • End-to-End SCM",
      badgeIcon: FiActivity,
      headline: "The Simplest Way to Streamline SCM & Gate Pass Across Every Plant",
      subtitle:
        "Eliminate plant leakage and manual errors from vendor onboarding to AI 3-way invoice matching and digital weighbridge capture.",
      primaryCta: {
        text: "Explore Automation",
        href: "/product/automation-suite",
      },
      secondaryCta: {
        text: "Request Live Demo",
        href: "/book-poc",
      },
      imageSrc: "/hero_image/autamation.png",
      imageAlt: "Auggit Automation Suite - Connected Procurement & Gate Pass Pipeline",
    },
  ];

  // Auto-advance timer (Cycles every 7 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section className="relative overflow-hidden bg-white text-[#353535] pt-6 sm:pt-8 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-12 min-h-[82vh] flex items-center border-b border-slate-100">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Top Minimal Navigation Controls */}
        <div className="flex items-center justify-end gap-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-1.5 bg-slate-100/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? "w-7 bg-[#41a0c8]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous slide"
              className="w-7 h-7 rounded-full bg-white border border-slate-200 hover:border-[#41a0c8] text-slate-600 hover:text-[#062039] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <FiChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next slide"
              className="w-7 h-7 rounded-full bg-white border border-slate-200 hover:border-[#41a0c8] text-slate-600 hover:text-[#062039] flex items-center justify-center transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <FiChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Bold Typography & Action Controls */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-5 sm:space-y-6"
              >
                {/* Category Pill Badge */}
                <div className="inline-flex items-center gap-2 bg-[#e8f4fc] text-[#062039] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#bce3f7] shadow-xs">
                  <BadgeIcon className="w-3.5 h-3.5 text-[#1267a7]" />
                  <span>{slide.badge}</span>
                </div>

                {/* Big Bold Headline */}
                <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#062039] leading-[1.12]">
                  {slide.headline}
                </h1>

                {/* Concise Subtitle with highlighted benefits */}
                <p className="text-base sm:text-lg text-slate-500 font-normal leading-relaxed max-w-xl">
                  {slide.subtitle}
                </p>

                {/* Action Buttons: Clean "Explore [Product]" + "Request Live Demo" */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to={slide.primaryCta.href}
                    className="inline-flex items-center gap-3 bg-[#062039] hover:bg-[#1267a7] text-white px-8 sm:px-9 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base shadow-[0_10px_25px_rgba(6,32,57,0.22)] hover:shadow-[0_14px_30px_rgba(65,160,200,0.3)] transition-all duration-300 group active:scale-95 cursor-pointer"
                  >
                    <span>{slide.primaryCta.text}</span>
                    <FiArrowRight className="w-4 h-4 text-[#41a0c8] transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to={slide.secondaryCta.href}
                    className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#062039] hover:text-[#1267a7] px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all border border-slate-200 hover:border-[#41a0c8] shadow-xs active:scale-95 cursor-pointer"
                  >
                    <span>{slide.secondaryCta.text}</span>
                    <FiArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#1267a7] transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: High-Fidelity Product Image with Smooth Slide Animation (No background) */}
          <div className="lg:col-span-7 relative flex justify-center items-center w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[560px] overflow-hidden">
            <div className="relative z-10 w-full flex items-center justify-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: direction * 45 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -45 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full flex items-center justify-center"
                >
                  <img
                    src={slide.imageSrc}
                    alt={slide.imageAlt}
                    className="w-full h-auto max-h-[580px] sm:max-h-[660px] object-contain select-none"
                    loading="eager"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

export default function AboutHero() {
  return (
    <div className="relative overflow-hidden py-1 px-4 sm:px-6 lg:px-8">
      
      {/* Background Glow Effects & Grid Pattern */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#9eddf7]/30 via-[#41a0c8]/20 to-[#1267a7]/20 blur-[100px] rounded-full" />
        
        {/* Subtle geometric dot grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `radial-gradient(#41a0c8 1px, transparent 1px)`,
            backgroundSize: `24px 24px`
          }}
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto space-y-8 relative z-10"
      >
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-[0.2em] uppercase text-[#41a0c8] bg-white/90 backdrop-blur-md rounded-full border border-[#9eddf7] shadow-[0_8px_30px_rgba(65,160,200,0.15)]">
          <HiSparkles className="w-4 h-4 text-[#41a0c8] animate-pulse" /> 
          <span>Where innovation meets Enterprise needs</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#062039] leading-[1.15]">
          SAP Document Management & Data Complaince   {' '}
          <span className="relative inline-block mt-1">
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
             Automated !
            </span>
            {/* Underline accent glow */}
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#41a0c8]/60 via-[#1267a7]/60 to-transparent rounded-full blur-[1px]" />
          </span>
        </h1>

        {/* Description */}
        <p className="text-[#353535] text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
          Auggit helps organizations manage documents, enterprise data, and compliance with greater clarity, control, and efficiency.
        </p>

        {/* Quick Tech Pill Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {["Enterprise Document Management", "SAP Data Slicing", "Digital Audits", "Section 128 Compliance"].map((tag, idx) => (
            <span key={idx} className="px-3.5 py-1.5 rounded-xl bg-white/80 backdrop-blur-sm border border-[#e3e3e3] text-[#353535] text-xs font-semibold shadow-sm">
              ✓ {tag}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
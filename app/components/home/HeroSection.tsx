import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
  FiUploadCloud,
  FiTag,
  FiSearch,
  FiCheck,
  FiShoppingCart,
  FiTruck,
  FiUserCheck,
  FiFileText,
  FiActivity,
  FiClock,
  FiBarChart2,
  FiCheckCircle,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

/* =========================================================================
   1. SLaiCE VISUAL (Faithfully animated from public/hero_image/slaice.png)
   ========================================================================= */
function SlaiceDashboardVisual() {
  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto flex items-center justify-center select-none p-2 sm:p-4">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9eddf7]/30 via-[#41a0c8]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Main Base Window (Chart Background from reference) */}
      <div className="w-full h-full rounded-2xl sm:rounded-3xl bg-white/95 border border-[#d6e7f2] shadow-[0_15px_40px_rgba(6,32,57,0.08)] p-3 sm:p-5 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
        {/* Window Top Controls */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-2 text-[10px] sm:text-[11px] font-bold text-slate-400">
              SAP S/4HANA & ECC Live Telemetry
            </span>
          </div>
          <span className="text-[9px] font-extrabold text-[#1267a7] bg-[#e8f4fc] px-2 py-0.5 rounded-full border border-[#bce3f7]">
            RFC Connected
          </span>
        </div>

        {/* Background Coordinate Grid & Smooth Curve Line */}
        <div className="relative w-full h-[65%] mt-1">
          <div className="absolute left-0 top-0 bottom-6 w-8 flex flex-col justify-between text-[9px] font-bold text-slate-300">
            <span>750</span>
            <span>500</span>
            <span>350</span>
            <span>100</span>
          </div>

          {/* SVG Wave Line from reference image */}
          <svg className="w-full h-full pl-8 pb-5 overflow-visible" viewBox="0 0 450 160" fill="none">
            <defs>
              <linearGradient id="slaiceCurveGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#41a0c8" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#41a0c8" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Area under curve */}
            <path
              d="M 10 120 Q 60 70 120 100 T 230 40 T 340 70 T 440 20 L 440 150 L 10 150 Z"
              fill="url(#slaiceCurveGrad)"
            />

            {/* Primary Curve Line */}
            <path
              d="M 10 120 Q 60 70 120 100 T 230 40 T 340 70 T 440 20"
              stroke="#41a0c8"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Glowing Data Point Nodes */}
            <circle cx="120" cy="100" r="4.5" fill="#1267a7" stroke="#fff" strokeWidth="2" />
            <circle cx="230" cy="40" r="5" fill="#41a0c8" stroke="#fff" strokeWidth="2.5" />
            <circle cx="340" cy="70" r="4.5" fill="#1267a7" stroke="#fff" strokeWidth="2" />
            <circle cx="440" cy="20" r="5.5" fill="#062039" stroke="#fff" strokeWidth="2.5" />
          </svg>

          {/* Months Axis */}
          <div className="absolute bottom-0 left-8 right-2 flex justify-between text-[9px] font-bold text-slate-400">
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
          </div>
        </div>
      </div>

      {/* Floating Modern Metric Cards (Directly matching slaice.png) */}

      {/* 1. Top Left: Return on Investment 75% */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 sm:-left-3 p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-[#cbe6f6] shadow-[0_12px_28px_rgba(6,32,57,0.12)] backdrop-blur-md flex items-center gap-3 z-20"
      >
        <div className="relative w-12 h-12 flex items-center justify-center">
          <svg className="w-12 h-12 -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="4"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#1267a7"
              strokeWidth="4"
              strokeDasharray="75, 100"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute text-[11px] font-black text-[#062039]">75%</span>
        </div>
        <div>
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">
            Return on
          </div>
          <div className="text-xs font-black text-[#062039]">Investment</div>
          <div className="flex items-end gap-1 mt-1">
            <span className="w-1.5 h-3 bg-[#41a0c8] rounded-sm" />
            <span className="w-1.5 h-4.5 bg-[#1267a7] rounded-sm" />
            <span className="w-1.5 h-2.5 bg-[#9eddf7] rounded-sm" />
            <span className="w-1.5 h-5 bg-[#062039] rounded-sm" />
          </div>
        </div>
      </motion.div>

      {/* 2. Top Right: Process Efficiency 85% */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="absolute top-2 right-0 sm:-right-2 p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-[#cbe6f6] shadow-[0_12px_28px_rgba(6,32,57,0.12)] backdrop-blur-md z-20 space-y-1.5 text-center min-w-[130px]"
      >
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-black text-[#062039]">Process Efficiency</span>
          <span className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[9px]">
            <FiCheck className="stroke-[3]" />
          </span>
        </div>
        {/* Speedometer semi-circle */}
        <div className="relative w-20 h-10 mx-auto overflow-hidden">
          <div className="w-20 h-20 rounded-full border-[6px] border-[#e2e8f0] border-t-[#41a0c8] border-r-[#1267a7] -rotate-45" />
          <div className="absolute inset-0 flex items-end justify-center">
            <span className="text-sm font-black text-[#062039]">85%</span>
          </div>
        </div>
      </motion.div>

      {/* 3. Center Highlight: Higher ROI 65% */}
      <motion.div
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3.5 sm:p-4 rounded-2xl bg-white border border-[#9eddf7] shadow-[0_14px_35px_rgba(65,160,200,0.22)] backdrop-blur-md z-30 min-w-[160px]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-black text-[#062039]">Higher ROI</span>
          <span className="p-1 rounded-md bg-[#e8f4fc] text-[#1267a7] text-[10px] font-bold">
            ↗
          </span>
        </div>
        <div className="text-2xl font-black text-[#062039] my-1">65%</div>
        {/* Mini rising sparkline */}
        <svg className="w-full h-7 overflow-visible" viewBox="0 0 100 28" fill="none">
          <path
            d="M 0 24 Q 25 10 50 18 T 95 4"
            stroke="#1267a7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* 4. Bottom Left: 75% Resource Optimization */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="absolute bottom-1 left-2 sm:-left-2 p-3 rounded-2xl bg-white/95 border border-[#cbe6f6] shadow-[0_12px_28px_rgba(6,32,57,0.12)] backdrop-blur-md z-20 flex items-center gap-3"
      >
        <div>
          <div className="text-base font-black text-[#062039]">75%</div>
          <div className="text-[10px] font-bold text-slate-500">Resource Optimization</div>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-7 h-7 rounded-full border-4 border-[#41a0c8] border-t-transparent" />
          <div className="w-5 h-5 rounded-full bg-[#1267a7]" />
        </div>
      </motion.div>

      {/* 5. Bottom Right: 85% Auditing Time */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute bottom-0 right-1 sm:-right-2 p-3 rounded-2xl bg-white/95 border border-[#cbe6f6] shadow-[0_12px_28px_rgba(6,32,57,0.12)] backdrop-blur-md z-20 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-full bg-[#e8f4fc] border border-[#bce3f7] flex items-center justify-center text-[#1267a7]">
          <FiClock className="w-5 h-5 stroke-[2.5]" />
        </div>
        <div>
          <div className="text-base font-black text-[#062039]">85%</div>
          <div className="text-[10px] font-bold text-slate-500">Auditing Time Saved</div>
          <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden mt-1">
            <div className="w-[85%] h-full bg-[#41a0c8] rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================================================
   2. eDMS VISUAL (Faithfully animated from public/hero_image/edms.png)
   ========================================================================= */
function EdmsWorkflowVisual() {
  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto flex flex-col justify-between select-none p-2 sm:p-4">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9eddf7]/30 via-[#41a0c8]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* Top Box: AUGGIT eDMS - All Connected */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[340px] mx-auto bg-white/95 border border-[#bce3f7] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-[0_12px_30px_rgba(6,32,57,0.09)] text-center relative z-20 backdrop-blur-md"
      >
        <div className="text-xs sm:text-sm font-black tracking-tight text-[#062039] uppercase">
          AUGGIT eDMS
        </div>

        {/* Floating document icons grid from reference */}
        <div className="grid grid-cols-4 gap-2 my-2.5 max-w-[200px] mx-auto">
          <div className="w-8 h-9 rounded-lg bg-[#41a0c8]/15 border border-[#41a0c8]/30 flex items-center justify-center text-[#1267a7] shadow-xs">
            <span className="text-[8px] font-black">IMG</span>
          </div>
          <div className="w-8 h-9 rounded-lg bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-700 shadow-xs">
            <span className="text-[8px] font-black">XLS</span>
          </div>
          <div className="w-8 h-9 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 shadow-xs">
            <span className="text-[8px] font-black">DOC</span>
          </div>
          <div className="w-8 h-9 rounded-lg bg-[#0070f2]/15 border border-[#0070f2]/30 flex items-center justify-center text-[#0070f2] shadow-xs">
            <span className="text-[8px] font-black">SAP</span>
          </div>
        </div>

        <div className="text-[11px] font-bold text-[#1267a7]">All Connected.</div>
      </motion.div>

      {/* Middle Animated Connector: PROCESS ENGINE */}
      <div className="relative w-full my-2 flex flex-col items-center justify-center z-20">
        {/* Animated Connecting SVG Wires */}
        <svg className="w-full h-12 overflow-visible" viewBox="0 0 500 50" fill="none">
          <path
            d="M 250 0 L 250 20 Q 250 35 100 48"
            stroke="#41a0c8"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-pulse"
          />
          <path
            d="M 250 0 L 250 50"
            stroke="#1267a7"
            strokeWidth="3.5"
          />
          <path
            d="M 250 0 L 250 20 Q 250 35 400 48"
            stroke="#062039"
            strokeWidth="3"
            strokeDasharray="6 4"
            className="animate-pulse"
          />
        </svg>

        {/* Process Engine Badge (as in reference edms.png) */}
        <div className="absolute top-1 px-4 py-1 rounded-full bg-white border border-[#9eddf7] shadow-md flex items-center gap-1.5 text-[10px] font-black text-[#062039]">
          <span className="w-2 h-2 rounded-full bg-[#41a0c8] animate-ping" />
          <span>PROCESS ENGINE</span>
        </div>
      </div>

      {/* Bottom 3 Stage Cards: 1. UPLOAD, 2. TAG, 3. TRACK (Directly from edms.png) */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3.5 z-20">
        {/* Stage 1: Upload */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white/95 border border-slate-200 hover:border-[#41a0c8] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-[0_8px_20px_rgba(6,32,57,0.06)] backdrop-blur-md transition-all text-left"
        >
          <div className="w-8 h-8 rounded-xl bg-[#e8f4fc] text-[#1267a7] flex items-center justify-center mb-1.5">
            <FiUploadCloud className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="text-[11px] sm:text-xs font-black text-[#062039]">1. UPLOAD</div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
            Internal & external documents from any source.
          </div>
        </motion.div>

        {/* Stage 2: Tag */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white/95 border border-slate-200 hover:border-emerald-500 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-[0_8px_20px_rgba(6,32,57,0.06)] backdrop-blur-md transition-all text-left"
        >
          <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5">
            <FiTag className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="text-[11px] sm:text-xs font-black text-[#062039]">2. TAG</div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
            Patented tagging maps each file to its transaction.
          </div>
        </motion.div>

        {/* Stage 3: Track */}
        <motion.div
          whileHover={{ y: -3 }}
          className="bg-white/95 border border-slate-200 hover:border-[#062039] rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-[0_8px_20px_rgba(6,32,57,0.06)] backdrop-blur-md transition-all text-left"
        >
          <div className="w-8 h-8 rounded-xl bg-slate-100 text-[#062039] flex items-center justify-center mb-1.5">
            <FiSearch className="w-4 h-4 stroke-[2.5]" />
          </div>
          <div className="text-[11px] sm:text-xs font-black text-[#062039]">3. TRACK</div>
          <div className="text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight mt-0.5">
            Completeness, approvals & audit trail in one view.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. AUTOMATION VISUAL (Faithfully animated from public/hero_image/automation.png)
   ========================================================================= */
function AutomationPipelineVisual() {
  const nodes = [
    { title: "Procurement", icon: FiShoppingCart, color: "bg-[#41a0c8]", pos: "top-4 left-2 sm:left-4" },
    { title: "Gate Pass", icon: FiActivity, color: "bg-[#1267a7]", pos: "bottom-10 left-2 sm:left-6" },
    { title: "Weighbridge", icon: FiTruck, color: "bg-[#062039]", pos: "bottom-1 left-28 sm:left-32" },
    { title: "Vendor Onboard", icon: FiUserCheck, color: "bg-emerald-600", pos: "top-2 right-6 sm:right-10" },
    { title: "Invoice Match", icon: FiFileText, color: "bg-indigo-600", pos: "bottom-6 right-8 sm:right-12" },
    { title: "Document Vault", icon: FiTag, color: "bg-amber-500", pos: "top-24 right-0 sm:right-2" },
  ];

  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto flex items-center justify-center select-none p-2 sm:p-4">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#9eddf7]/30 via-[#41a0c8]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

      {/* SVG Connecting Loop Path (Matching automation.png) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 540 360" fill="none">
        <path
          d="M 80 120 C 60 260, 200 340, 270 300 C 360 260, 480 320, 480 180 C 480 80, 360 40, 270 80 C 180 120, 100 40, 80 120 Z"
          stroke="#9eddf7"
          strokeWidth="18"
          strokeLinecap="round"
          strokeOpacity="0.6"
        />
        <path
          d="M 80 120 C 60 260, 200 340, 270 300 C 360 260, 480 320, 480 180 C 480 80, 360 40, 270 80 C 180 120, 100 40, 80 120 Z"
          stroke="#41a0c8"
          strokeWidth="3.5"
          strokeDasharray="8 6"
        />
      </svg>

      {/* Center Box: AUGGIT AUTOMATION SUITE (Interactive Gantt Workflow) */}
      <motion.div
        animate={{ scale: [1, 1.015, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="w-full max-w-[290px] sm:max-w-[310px] rounded-2xl bg-white/95 border border-[#bce3f7] shadow-[0_15px_35px_rgba(6,32,57,0.12)] p-3 sm:p-4 text-center z-20 backdrop-blur-md"
      >
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <span className="text-[11px] font-black tracking-tight text-[#062039] uppercase">
            AUGGIT AUTOMATION SUITE
          </span>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[9px] font-bold text-emerald-600">Active</span>
          </div>
        </div>

        {/* Workflow Gantt Simulation */}
        <div className="space-y-2 my-2.5 text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#41a0c8]" />
            <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[85%] h-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 pl-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[65%] h-full bg-emerald-500 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-2 pl-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            <div className="flex-1 h-3 rounded-full bg-slate-100 overflow-hidden">
              <div className="w-[90%] h-full bg-indigo-500 rounded-full" />
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-bold text-slate-500">
          <span>AI 3-Way Match</span>
          <span className="text-emerald-600 font-black">Zero Leakage ✓</span>
        </div>
      </motion.div>

      {/* Floating Node Badges connected along the loop */}
      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={i}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
            className={`absolute ${node.pos} flex items-center gap-2 bg-white/95 border border-slate-200 px-2.5 py-1.5 rounded-full shadow-lg z-30`}
          >
            <div className={`w-6 h-6 rounded-full ${node.color} text-white flex items-center justify-center text-xs shadow-xs`}>
              <Icon className="w-3.5 h-3.5" />
            </div>
            <span className="text-[10px] font-black text-[#062039] whitespace-nowrap hidden sm:inline">
              {node.title}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}

/* =========================================================================
   MAIN HERO SECTION COMPONENT (With requested simplifications & design)
   ========================================================================= */
export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      visualComponent: <SlaiceDashboardVisual />,
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
      visualComponent: <EdmsWorkflowVisual />,
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
      visualComponent: <AutomationPipelineVisual />,
    },
  ];

  // Auto-advance timer (Cycles every 7 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];
  const BadgeIcon = slide.badgeIcon;

  return (
    <section className="relative overflow-hidden bg-white text-[#353535] pt-6 sm:pt-8 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-12 min-h-[82vh] flex items-center border-b border-slate-100">
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] bg-gradient-to-tr from-[#9eddf7]/30 to-[#41a0c8]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-gradient-to-bl from-[#ffeda0]/15 via-[#9eddf7]/20 to-transparent rounded-full blur-3xl" />
      </div>

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Bold Typography & Action Controls */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
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

          {/* Right Column: Custom Animated Product Visual per Slide */}
          <div className="lg:col-span-6 relative flex justify-center items-center w-full min-h-[420px] sm:min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full flex items-center justify-center"
              >
                {slide.visualComponent}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

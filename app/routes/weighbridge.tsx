import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import {
  FiCheckCircle,
  FiArrowRight,
  FiCpu,
  FiLayers,
  FiShield,
  FiTrendingUp,
  FiChevronDown,
  FiCheck,
  FiRefreshCw,
  FiActivity,
  FiTruck,
  FiDatabase,
  FiAlertCircle,
  FiZap,
  FiClock,
  FiFileText,
  FiSliders,
  FiLock,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export function meta() {
  return [
    { title: "Weighbridge Management & SAP Integration | AUGGIT" },
    {
      name: "description",
      content:
        "Connect existing industrial weighbridge systems with SAP ECC and SAP S/4HANA for automated digital weight capture, PO-linked records, and tamper-proof gate control.",
    },
  ];
}

/* ─────────────────────────────────────────────────────────────
    HERO ANIMATED WEIGHT CAPTURE PROCESS COMPONENT
    Live industrial truck, digital indicator, and sensor pulses
   ───────────────────────────────────────────────────────────── */
function AnimatedWeighbridgeHero() {
  return (
    <div className="w-full relative select-none">
      <div className="rounded-3xl p-5 sm:p-7 bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/20 shadow-[0_25px_70px_rgba(0,19,50,0.45)] backdrop-blur-md overflow-hidden">
        {/* Header Indicator Strip */}
        <div className="flex items-center justify-between text-xs font-bold text-sky-200 mb-4 pb-3 border-b border-white/10">
          <span className="tracking-widest uppercase text-xs sm:text-sm text-white font-mono font-black">
            WEIGHBRIDGE CONTROL OVERVIEW
          </span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            INTEGRATION FLOW
          </span>
        </div>

        {/* SVG Graphic with Animated Elements */}
        <svg
          viewBox="0 0 560 270"
          className="w-full h-auto drop-shadow-xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wbGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#45c9ed" />
              <stop offset="100%" stopColor="#087bc4" />
            </linearGradient>
            <linearGradient id="truckCab" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1267a7" />
              <stop offset="100%" stopColor="#062039" />
            </linearGradient>
            <linearGradient id="scaleDeck" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d5effa" />
              <stop offset="100%" stopColor="#9ed4f0" />
            </linearGradient>
          </defs>

          {/* Weighbridge Ground & Load Cells */}
          <rect x="38" y="206" width="484" height="15" rx="7" fill="url(#scaleDeck)" stroke="#68b7df" strokeWidth="1.5" />
          <rect x="68" y="221" width="26" height="15" rx="4" fill="#084777" />
          <rect x="456" y="221" width="26" height="15" rx="4" fill="#084777" />
          <rect x="262" y="221" width="26" height="15" rx="4" fill="#084777" />

          {/* Laser Aligners / Sensor Scanners */}
          <motion.line
            x1="38"
            y1="204"
            x2="522"
            y2="204"
            stroke="#41a0c8"
            strokeWidth="2.5"
            strokeDasharray="8 8"
            animate={{ strokeDashoffset: [0, -32] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />

          {/* Truck Body */}
          <g>
            <rect
              x="105"
              y="95"
              width="255"
              height="105"
              rx="8"
              fill="#e8f5ff"
              stroke="#b8dff5"
              strokeWidth="4"
            />
            <rect x="125" y="116" width="205" height="60" rx="4" fill="url(#wbGrad)" opacity="0.85" />
            <rect x="146" y="125" width="150" height="42" rx="4" fill="#c8eaff" opacity="0.8" />

            <path d="M360 128 h76 l42 40 v32 H360 z" fill="#d9efff" stroke="#b8dff5" strokeWidth="4" />
            <path d="M385 138 h43 l27 29 h-70 z" fill="url(#truckCab)" />

            <g transform="translate(170, 203)">
              <circle cx="0" cy="0" r="24" fill="#071d49" stroke="#c7e8fa" strokeWidth="8" />
              <circle cx="0" cy="0" r="8" fill="#41a0c8" />
            </g>
            <g transform="translate(385, 203)">
              <circle cx="0" cy="0" r="24" fill="#071d49" stroke="#c7e8fa" strokeWidth="8" />
              <circle cx="0" cy="0" r="8" fill="#41a0c8" />
            </g>
            <g transform="translate(460, 203)">
              <circle cx="0" cy="0" r="24" fill="#071d49" stroke="#c7e8fa" strokeWidth="8" />
              <circle cx="0" cy="0" r="8" fill="#41a0c8" />
            </g>
          </g>

          {/* Optical Barrier Sensors */}
          <path d="M70 90 v-35 h55" stroke="#65d8ee" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="70" cy="55" r="6" fill="#65d8ee" />
          <path d="M480 92 h36 v-35" stroke="#65d8ee" strokeWidth="3" fill="none" strokeLinecap="round" />
          <circle cx="516" cy="57" r="6" fill="#65d8ee" />

          {/* Top Digital Indicator Readout */}
          <g transform="translate(195, 20)">
            <rect
              x="0"
              y="0"
              width="170"
              height="54"
              rx="10"
              fill="#061c42"
              stroke="#6adbf0"
              strokeWidth="2.5"
            />
            <text
              x="85"
              y="20"
              fill="#9ceafa"
              textAnchor="middle"
              fontSize="11"
              fontWeight="900"
              letterSpacing="1px"
            >
              DIGITAL INDICATOR
            </text>
            <motion.text
              x="85"
              y="42"
              fill="#ffffff"
              textAnchor="middle"
              fontSize="18"
              fontWeight="900"
              letterSpacing="1px"
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              42,180 KG
            </motion.text>
          </g>

          <motion.path
            d="M280 76 v20"
            stroke="#65d8ee"
            strokeWidth="3"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [0, -16] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />

          <text
            x="280"
            y="256"
            fill="#d5edff"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            letterSpacing="0.5px"
          >
            CONNECTED WEIGHBRIDGE PLATFORM
          </text>
        </svg>

        {/* 3 Metrics Footer Cards */}
        <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
          <div className="bg-[#061b43]/85 border border-white/15 rounded-xl p-3 text-center">
            <small className="block text-[#a9c9e8] text-[10px] font-bold uppercase tracking-wider mb-0.5">
              Weight Source
            </small>
            <strong className="text-sm sm:text-base font-black text-white">Digital Indicator</strong>
          </div>
          <div className="bg-[#061b43]/85 border border-white/15 rounded-xl p-3 text-center">
            <small className="block text-[#a9c9e8] text-[10px] font-bold uppercase tracking-wider mb-0.5">
              ERP Connection
            </small>
            <strong className="text-sm sm:text-base font-black text-[#65d8ee]">SAP BAPI / RFC</strong>
          </div>
          <div className="bg-[#061b43]/85 border border-white/15 rounded-xl p-3 text-center">
            <small className="block text-[#a9c9e8] text-[10px] font-bold uppercase tracking-wider mb-0.5">
              Traceability
            </small>
            <strong className="text-sm sm:text-base font-black text-[#f7c037]">PO-Linked eDMS</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
    PROMINENT, ENLARGED VEHICLE JOURNEY SHOWCASE COMPONENT
    Redesigned with larger truck, clear flow stages, and no timer text
   ───────────────────────────────────────────────────────────── */
function EnlargedVehicleJourney() {
  return (
    <div className="w-full bg-gradient-to-br from-[#071e44] via-[#0b2f66] to-[#081a38] rounded-3xl p-6 sm:p-9 text-white shadow-2xl border border-sky-400/20">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/15">
        <div>
          <span className="text-xs font-bold text-[#f7c037] uppercase tracking-widest block mb-1">
            Real-Time Vehicle Flow
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            One Connected Vehicle Journey
          </h3>
          <p className="text-sm text-slate-300 mt-1">
            Illustrative incoming & outgoing material movement with automated digital weight capture
          </p>
        </div>
        <div className="flex items-center gap-2 self-start sm:self-auto px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-mono font-bold text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          ACTIVE SCALE SIMULATION
        </div>
      </div>

      {/* Prominent Scale Indicators Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
        <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-center">
          <span className="text-[11px] font-bold text-sky-300 uppercase tracking-wider block mb-1">
            Stage 01
          </span>
          <b className="text-base sm:text-lg font-black text-white block">Initial Gross / Tare</b>
          <span className="text-xs text-slate-300 block mt-1">Direct from Digital Indicator</span>
        </div>
        <div className="p-4 rounded-2xl bg-[#f7c037]/15 border border-[#f7c037]/30 text-center">
          <span className="text-[11px] font-bold text-[#f7c037] uppercase tracking-wider block mb-1">
            Stage 02
          </span>
          <b className="text-base sm:text-lg font-black text-white block">Material Handling</b>
          <span className="text-xs text-slate-300 block mt-1">Loading or Unloading at Bay</span>
        </div>
        <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 text-center">
          <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block mb-1">
            Stage 03
          </span>
          <b className="text-base sm:text-lg font-black text-white block">Net Weight & SAP GRN</b>
          <span className="text-xs text-slate-300 block mt-1">Automated ERP Posting & Gate Pass</span>
        </div>
      </div>

      {/* Enlarged Animated Track */}
      <div className="relative h-36 sm:h-44 rounded-2xl border-b-4 border-sky-400 bg-gradient-to-b from-white/5 via-white/10 to-white/5 overflow-hidden my-6">
        {/* Track Guideline */}
        <div className="absolute inset-x-0 bottom-3 border-b-2 border-dashed border-sky-300/40" />

        {/* 3 Key Checkpoint Markers */}
        <div className="absolute inset-y-0 left-[20%] w-px border-l-2 border-dashed border-sky-300/40">
          <span className="absolute top-2 left-2 text-[10px] font-mono text-sky-300 uppercase font-bold">
            Scale 01 (Arrival)
          </span>
        </div>
        <div className="absolute inset-y-0 left-[50%] w-px border-l-2 border-dashed border-amber-300/40">
          <span className="absolute top-2 left-2 text-[10px] font-mono text-amber-300 uppercase font-bold">
            Handling Bay
          </span>
        </div>
        <div className="absolute inset-y-0 left-[80%] w-px border-l-2 border-dashed border-emerald-300/40">
          <span className="absolute top-2 left-2 text-[10px] font-mono text-emerald-300 uppercase font-bold">
            Scale 02 (Exit)
          </span>
        </div>

        {/* Large Animated Heavy Commercial Vehicle */}
        <motion.div
          className="absolute bottom-3.5 w-44 sm:w-52 h-20 sm:h-24 pointer-events-none"
          animate={{
            left: ["-180px", "20%", "20%", "50%", "50%", "80%", "80%", "115%"],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            times: [0, 0.12, 0.32, 0.44, 0.65, 0.77, 0.88, 1],
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 220 110" className="w-full h-full drop-shadow-2xl">
            {/* Heavy Trailer Bed */}
            <rect x="10" y="40" width="130" height="46" rx="6" fill="#d9efff" stroke="#70c9e8" strokeWidth="3" />
            {/* Front Cabin */}
            <path d="M140 52 h40 l26 22 v12 h-66 z" fill="#b8e5f8" stroke="#70c9e8" strokeWidth="3" />
            <path d="M160 56 h18 l18 16 h-36 z" fill="#08264b" />

            {/* Dynamic Cargo Loading Animation */}
            <motion.g
              animate={{
                opacity: [0, 0, 0, 1, 1, 1, 1, 0],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                times: [0, 0.12, 0.42, 0.48, 0.65, 0.77, 0.88, 1],
              }}
            >
              <rect x="20" y="22" width="44" height="20" rx="3" fill="#f2bd52" stroke="#ffe0a0" strokeWidth="2" />
              <rect x="66" y="14" width="40" height="28" rx="3" fill="#d89b39" stroke="#ffe0a0" strokeWidth="2" />
              <rect x="108" y="25" width="24" height="17" rx="3" fill="#f2bd52" stroke="#ffe0a0" strokeWidth="2" />
            </motion.g>

            {/* Rotating Heavy Wheels */}
            <motion.circle
              cx="45"
              cy="88"
              r="15"
              fill="#06152f"
              stroke="#a9dff2"
              strokeWidth="6"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              style={{ transformOrigin: "45px 88px" }}
            />
            <motion.circle
              cx="95"
              cy="88"
              r="15"
              fill="#06152f"
              stroke="#a9dff2"
              strokeWidth="6"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              style={{ transformOrigin: "95px 88px" }}
            />
            <motion.circle
              cx="165"
              cy="88"
              r="15"
              fill="#06152f"
              stroke="#a9dff2"
              strokeWidth="6"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              style={{ transformOrigin: "165px 88px" }}
            />
          </svg>
        </motion.div>
      </div>

      {/* Prominent Formula Highlight Banner */}
      <div className="p-6 rounded-2xl bg-[#06172f]/90 border border-sky-400/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
        <div>
          <span className="text-xs font-bold text-[#8fdff2] uppercase tracking-wider block mb-1">
            AUTOMATED QUANTITY RECONCILIATION
          </span>
          <div className="text-2xl sm:text-4xl font-black text-[#f7c037] tracking-tight">
            Net Material Weight = Gross Weight − Tare Weight
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Calculated instantly with zero manual tampering and matched against SAP Purchase Order tolerances.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-center">
            <span className="text-[10px] text-sky-200 block font-bold">ACCURACY</span>
            <span className="text-base font-black text-white">±0.00%</span>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-center">
            <span className="text-[10px] text-sky-200 block font-bold">ERP SYNC</span>
            <span className="text-base font-black text-[#65d8ee]">BAPI Direct</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
    MAIN WEIGHBRIDGE MANAGEMENT PAGE
   ───────────────────────────────────────────────────────────── */
export default function WeighbridgePage() {
  const [simulationActive, setSimulationActive] = useState(false);
  const [weightCaptured, setWeightCaptured] = useState<number | null>(null);

  const simulateWeighment = () => {
    setSimulationActive(true);
    setWeightCaptured(null);
    setTimeout(() => {
      setWeightCaptured(42180);
      setSimulationActive(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-white text-[#14233d] selection:bg-[#41a0c8] selection:text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (HOMEPAGE STYLED HEADER, SHORT CAPSULE, DARK NAVY HERO)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#06172f] via-[#0a3159] to-[#087ca7] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5 bg-radial from-[#41a0c8]/25 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full border border-white/5 bg-radial from-[#1267a7]/25 via-transparent to-transparent blur-2xl" />
          <div className="absolute right-[-170px] bottom-[-340px] w-[560px] h-[560px] rounded-full border border-white/10 shadow-[0_0_0_45px_rgba(255,255,255,0.03),0_0_0_90px_rgba(255,255,255,0.02)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Short Homepage Capsule Badge without icon */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span>HARDWARE &amp; SAP INTEGRATION</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.1]">
                Weighbridge Control, Connected to SAP
              </h1>

              {/* Description */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Connect your existing weighbridge system with SAP ECC and SAP S/4HANA. Capture available gross,
                tare and net weight readings and link each weighment record with the relevant goods receipt.
              </p>

              {/* Dual Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/product/automation-suite/book-poc"
                  className="px-7 py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm shadow-[0_8px_24px_rgba(247,192,55,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Schedule a Weighbridge Demo</span>
                  <FiArrowRight className="w-4 h-4 text-[#062039]" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("workflow");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 rounded-xl bg-[#1267a7] hover:bg-[#0e5488] text-white font-bold text-sm border border-sky-400/30 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#1267a7]/30 hover:scale-105 active:scale-95"
                >
                  <span>Explore the Workflow</span>
                  <FiChevronDown className="w-4 h-4 text-[#9eddf7]" />
                </button>
              </div>
            </motion.div>

            {/* Right Hero Visual: Animated Weight Capture Process */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 flex items-center justify-center"
            >
              <AnimatedWeighbridgeHero />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TRUST STRIP (ONE CONNECTED MATERIAL-RECEIPT WORKFLOW)
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#f5f9fd] border-b border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <strong className="text-xs sm:text-sm font-black text-[#153a68] uppercase tracking-wider">
            ONE CONNECTED MATERIAL-RECEIPT WORKFLOW
          </strong>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Digital Weight Capture",
              "SAP ECC / S/4HANA",
              "Auggit eDMS",
              "Gate Control",
            ].map((tag, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[#d5e4f2] text-xs font-bold text-[#315477] shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE OPERATIONAL CHALLENGE (3 PROBLEM CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiAlertCircle className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>The Operational Challenge</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              One Controlled Weighbridge Process
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Manual recording, separate ERP entry and disconnected documents can slow down vehicle movement
              and make quantity reconciliation difficult.
            </p>
          </motion.div>

          {/* 3 Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Manual weight recording",
                desc: "Re-entering readings creates avoidable effort and increases the possibility of data-entry errors.",
                icon: FiCpu,
                tag: "Typo Risk",
              },
              {
                title: "Quantity discrepancies",
                desc: "Actual received material may differ from supplier or Purchase Order quantities and require investigation.",
                icon: FiSliders,
                tag: "Disputes",
              },
              {
                title: "Disconnected records",
                desc: "Weighment slips, GRNs and supporting evidence may be stored separately from the related PO.",
                icon: FiLayers,
                tag: "Siloed Docs",
              },
            ].map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(8,38,75,0.05)] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#e7f5ff] text-[#087fc1] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                      <prob.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {prob.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#062039] mb-2 leading-snug">
                    {prob.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PROCESS FLOW (PROMINENT LARGE VEHICLE SHOWCASE & 4 MILESTONE CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="workflow" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-14"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiRefreshCw className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Process Flow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              From Weighment to SAP Goods Receipt
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Capture digital weight values directly from indicator hardware, automate reconciliation, and post instant SAP Goods Receipts with zero paperwork.
            </p>
          </motion.div>

          {/* Large Prominent Vehicle Journey Showcase */}
          <div className="mb-12">
            <EnlargedVehicleJourney />
          </div>

          {/* 4 Structured Milestone Step Cards (Concise, Clean & Balanced) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                phase: "Arrival & Identification",
                items: [
                  "Vehicle arrives at the facility weighbridge",
                  "First weight reading captured directly from indicator",
                ],
                highlight: "Gross / Tare Locked",
              },
              {
                step: "02",
                phase: "Material Handling",
                items: [
                  "Vehicle proceeds to designated loading / unloading bay",
                  "Material handling completed under plant supervision",
                ],
                highlight: "Yard Verification",
              },
              {
                step: "03",
                phase: "Second Weighment",
                items: [
                  "Vehicle returns to weighbridge for second reading",
                  "Net material weight auto-calculated (Gross − Tare)",
                ],
                highlight: "Net Weight Computed",
              },
              {
                step: "04",
                phase: "SAP Posting & Clearance",
                items: [
                  "Instant SAP Goods Receipt (GRN) auto-posted via BAPI",
                  "Weighment slip tagged in Auggit eDMS & boom barrier opened",
                ],
                highlight: "Gate Release Cleared",
              },
            ].map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_8px_25px_rgba(8,38,75,0.05)] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1267a7] to-[#41a0c8] text-white flex items-center justify-center font-black text-base shadow-sm">
                      {milestone.step}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#1267a7] bg-sky-50 px-2.5 py-1 rounded-full">
                      {milestone.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-[#062039] mb-3 group-hover:text-[#1267a7] transition-colors">
                    {milestone.phase}
                  </h3>

                  <ul className="space-y-2 text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {milestone.items.map((it, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#41a0c8] mt-1.5 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. CONNECTED ENTERPRISE PROCESS (4 INTEGRATION CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="integration" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiActivity className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Connected Enterprise Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              One Connected Weighment Flow
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Auggit acts as the integration layer between the physical weighing process and the enterprise
              transaction and document records.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Weighbridge Hardware",
                desc: "Digital indicator, load cells and weighing platform.",
                icon: FiSliders,
              },
              {
                step: "02",
                title: "Auggit Integration",
                desc: "Capture available readings and pass transaction data to SAP.",
                icon: FiZap,
              },
              {
                step: "03",
                title: "SAP ECC / S/4HANA",
                desc: "PO reference, quantity checks and goods receipt.",
                icon: SiSap,
              },
              {
                step: "04",
                title: "Auggit eDMS",
                desc: "Weighment records, GRN and PO-level traceability.",
                icon: FiLayers,
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-[0_10px_25px_rgba(8,38,75,0.04)] hover:shadow-xl transition-all relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-slate-100 text-[#062039] font-black text-sm flex items-center justify-center">
                      {card.step}
                    </span>
                    <card.icon className="w-6 h-6 text-[#1267a7] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-lg font-bold text-[#062039] mb-2">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SOLUTION CAPABILITIES (6 FEATURE CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="features" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiCheckCircle className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Solution Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Control Every Weighment
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Capabilities can be configured to the weighbridge hardware, plant process and SAP landscape.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Direct digital weight capture",
                desc: "Read weight values from supported digital indicators through configured serial or network interfaces.",
                icon: FiCpu,
              },
              {
                title: "Zero-manual-entry workflow",
                desc: "Use direct indicator readings and restrict manual editing of captured weight values according to system configuration.",
                icon: FiShield,
              },
              {
                title: "Vehicle and transaction details",
                desc: "Associate vehicle identification, PO or delivery reference, weighment readings and transaction details for a clear digital record.",
                icon: FiTruck,
              },
              {
                title: "SAP PO reference and receipt linkage",
                desc: "Associate captured weighment information with the relevant PO or delivery and the SAP goods receipt.",
                icon: SiSap,
              },
              {
                title: "Gate and barrier integration",
                desc: "Connect vehicle release steps with configured boom barriers, traffic lights or gate-control systems.",
                icon: FiActivity,
              },
              {
                title: "PO-linked document storage",
                desc: "Store weighment records and GRNs in Auggit eDMS with links to the respective Purchase Order.",
                icon: FiDatabase,
              },
            ].map((ft, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_25px_rgba(8,38,75,0.04)] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1267a7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <ft.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#062039] mb-2 leading-snug">
                    {ft.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{ft.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INDUSTRIAL APPLICATIONS (CARD DESIGN WITH IMAGE HEADERS)
          ───────────────────────────────────────────────────────────── */}
      <section id="industries" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <span>Industrial Applications</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Built for High-Volume Material Movement
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Support incoming raw materials and outgoing finished goods across heavy industrial environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Steel & Mining",
                desc: "Heavy ore, scrap metal, minerals and finished coil movement with tamper-proof load cell readings.",
                tag: "Ore & Coils",
                img: "/images/weighbridge/steel-mining.svg",
              },
              {
                title: "Cement & Aggregates",
                desc: "Continuous tipper truck gross and tare cycles for limestone, sand, clinker and cement dispatches.",
                tag: "Bulk Tippers",
                img: "/images/weighbridge/cement-aggregates.svg",
              },
              {
                title: "Agri & Sugar Mills",
                desc: "High-season sugarcane, grain and bulk agricultural produce procurement with multi-bridge sync.",
                tag: "Harvest Peaks",
                img: "/images/weighbridge/agri-sugar.svg",
              },
              {
                title: "Chemicals & Petrochemicals",
                desc: "Bulk liquid tanker receipts with density compensation and synchronized CCTV safety verification.",
                tag: "Liquid Tankers",
                img: "/images/weighbridge/chemicals-petro.svg",
              },
            ].map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(8,38,75,0.06)] hover:shadow-2xl transition-all group flex flex-col"
              >
                {/* Header Image */}
                <div className="h-44 w-full overflow-hidden bg-slate-900 relative">
                  <img
                    src={ind.img}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-black uppercase tracking-wider text-[#f7c037] border border-white/10">
                    {ind.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#062039] mb-2 group-hover:text-[#1267a7] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BUSINESS OUTCOMES (REDESIGNED PREMIUM EXECUTIVE OUTCOME CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiTrendingUp className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Business Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              More Gate Control. Better SAP Records.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Measurable improvements across weighing velocity, ERP accuracy, dispute reduction, and operational audit readiness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Reduced Manual Entry",
                desc: "Eliminates repeated manual typing of weighment values, cutting errors and operator fatigue.",
                metric: "100%",
                metricLabel: "Automated Data Capture",
                icon: FiCpu,
                tag: "Zero Typo Effort",
              },
              {
                title: "Reliable Data Transfer",
                desc: "Transfers verified indicator weights directly into SAP BAPI/RFC without human intervention.",
                metric: "Direct",
                metricLabel: "BAPI / RFC Integration",
                icon: SiSap,
                tag: "Tamper Proof",
              },
              {
                title: "Faster Receipt Processing",
                desc: "Seamlessly connects physical weighing with instant Goods Receipt generation (MIGO approval).",
                metric: "3x",
                metricLabel: "Faster Gate Throughput",
                icon: FiClock,
                tag: "High Velocity",
              },
              {
                title: "Clear Transaction References",
                desc: "Automatically pairs captured weights with the respective Purchase Order or Delivery document.",
                metric: "1:1",
                metricLabel: "PO-Weighment Linkage",
                icon: FiFileText,
                tag: "Reconciled",
              },
              {
                title: "Digital Document Trail",
                desc: "Automatically archives tamper-proof weighment slips and GRN receipts in Auggit eDMS.",
                metric: "Instant",
                metricLabel: "eDMS Tagged Storage",
                icon: FiLayers,
                tag: "Audit Proof",
              },
              {
                title: "End-to-End Traceability",
                desc: "Provides forensic visibility connecting vehicle arrival, weight readings, GRN, and gate exit.",
                metric: "360°",
                metricLabel: "Facility Traceability",
                icon: FiShield,
                tag: "Complete Audit Trail",
              },
            ].map((outcome, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(8,38,75,0.05)] hover:shadow-2xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#1267a7]/10 to-[#41a0c8]/20 text-[#1267a7] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                      <outcome.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                      {outcome.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#062039] mb-2 leading-snug group-hover:text-[#1267a7] transition-colors">
                    {outcome.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{outcome.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-baseline justify-between">
                  <span className="text-2xl sm:text-3xl font-black text-[#1267a7]">{outcome.metric}</span>
                  <span className="text-xs font-bold text-slate-400">{outcome.metricLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. LIVE WEIGHBRIDGE CAPTURE SIMULATOR (DECREASED STABILIZING FONT SIZE)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#06172f] to-[#0a294c] rounded-[32px] p-8 sm:p-14 text-white shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold tracking-widest uppercase text-[#f7c037]">
                  Anti-Tamper Technology
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Zero-Manual-Entry Weight Capture Flow
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Auggit eliminates manual weight overrides. The system communicates directly with digital
                  indicators (Mettler Toledo, Avery, Essae, Cardinal) over RS232/Ethernet, locks on stable weight,
                  and verifies tolerances before triggering SAP goods receipt.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Direct RS-232, Modbus & IP socket indicator connectivity",
                    "Synchronized CCTV snapshot embedded on slip",
                    "SAP PO Tolerance check (Blocks MIGO if deviation exceeds configured threshold)",
                    "Automated boom barrier and traffic light interlock",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                      <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl space-y-4 text-center">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#9eddf7]">
                    Digital Weight Indicator Readout
                  </div>

                  <div className="bg-[#031322] p-6 rounded-xl border border-white/15 font-mono">
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-wider">
                      {simulationActive ? (
                        <span className="animate-pulse">STABILIZING...</span>
                      ) : weightCaptured ? (
                        `${weightCaptured.toLocaleString()} KG`
                      ) : (
                        "00,000 KG"
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-2 flex justify-between px-2">
                      <span>Protocol: RS-232 Serial</span>
                      <span>Status: {weightCaptured ? "LOCKED & VERIFIED" : "STANDBY"}</span>
                    </div>
                  </div>

                  <button
                    onClick={simulateWeighment}
                    disabled={simulationActive}
                    className="w-full py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer hover:scale-105 active:scale-95"
                  >
                    {simulationActive ? "Capturing Serial Feed..." : "Simulate Truck Scale Weight Capture"}
                  </button>

                  {weightCaptured && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-left text-xs bg-white/10 p-3 rounded-lg border border-white/15 space-y-1 text-slate-200"
                    >
                      <div className="flex justify-between">
                        <span>PO Target:</span> <span className="font-bold">42,000 KG</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deviation:</span>{" "}
                        <span className="text-emerald-300 font-bold">+180 KG (+0.42% OK)</span>
                      </div>
                      <div className="flex justify-between">
                        <span>SAP MIGO Status:</span>{" "}
                        <span className="text-emerald-300 font-bold">Approved for Posting</span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FINAL CTA BANNER (DARK NAVY LIKE AUGGIT AUTOMATION SUITE)
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 bg-[#06172f] relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,103,167,0.25),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0b2440]/80 border border-[#f7c037]/50 text-[#f7c037] text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md">
              <span>AUGGIT AUTOMATION SUITE</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight max-w-4xl mx-auto">
              Make Every Weighment Count.
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Connect physical weighment with SAP goods receipt and digital document traceability.
              Let's discuss your weighbridge hardware, plant workflow and SAP environment.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:pt-6">
              <Link
                to="/product/automation-suite/book-poc"
                className="px-8 py-4 rounded-full bg-[#f7c037] hover:bg-[#eab327] text-[#062039] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>REQUEST A DEMO</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-[#132c4a]/90 hover:bg-[#1a3a61] text-white border border-slate-600/50 font-semibold text-xs transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

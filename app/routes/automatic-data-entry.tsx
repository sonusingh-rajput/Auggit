import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FiMail,
  FiFileText,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
  FiArrowDown,
  FiLayers,
  FiZap,
  FiShield,
  FiPaperclip,
  FiDatabase,
  FiFolder,
  FiCheck,
  FiTrendingUp,
  FiCreditCard,
  FiDollarSign,
  FiClock,
  FiSmartphone,
  FiActivity,
  FiExternalLink,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export function meta() {
  return [
    { title: "Auggit ADE | Automatic Data Entry - Email to ERP" },
    {
      name: "description",
      content:
        "Auggit Automatic Data Entry turns emails, PDFs and scanned documents into structured business data and automates posting into SAP, Tally and other ERP systems.",
    },
  ];
}

export default function AutomaticDataEntryPage() {
  const [activeTab, setActiveTab] = useState<"invoice" | "manifest" | "statement">("invoice");
  const [scanProgress, setScanProgress] = useState(0);

  // Auto-cycling scan progress animation
  useEffect(() => {
    const timer = setInterval(() => {
      setScanProgress((prev) => (prev >= 100 ? 0 : prev + 25));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#17233d] selection:bg-[#41a0c8] selection:text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#062039] via-[#0d2a4a] to-[#081e35] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        {/* Subtle geometric backdrop glow and rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5 bg-radial from-[#41a0c8]/20 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[480px] h-[480px] rounded-full border border-white/5 bg-radial from-[#1267a7]/20 via-transparent to-transparent blur-2xl" />
          <div className="absolute right-[-100px] top-[80px] w-[500px] h-[500px] rounded-full border border-white/5 shadow-[0_0_0_50px_rgba(255,255,255,0.015),0_0_0_100px_rgba(255,255,255,0.01)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 space-y-6"
            >
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm">
                  <span>Auggit · Automatic Data Entry</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                  End{" "}
                  <span className="bg-gradient-to-r from-[#41a0c8] via-[#9eddf7] to-[#10b981] bg-clip-text text-transparent">
                    manual data entry.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  Turn emails, PDFs and scanned documents into structured business data. Auggit helps
                  capture information, read documents and automate entries into SAP, Tally and other
                  ERP systems.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById("how");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-7 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Explore ADE</span>
                    <FiArrowRight className="w-4 h-4" />
                </button>
                <Link
                  to="/product/automation-suite/edms-demo"
                  className="px-7 py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#eab308] text-[#062039] font-extrabold text-sm shadow-[0_8px_20px_rgba(247,192,55,0.25)] hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>Request Live Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Workflow Glass Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-[0_25px_70px_rgba(0,0,0,0.35)] relative">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-bold tracking-wider">
                  <span className="text-white/90">DOCUMENT-TO-ERP WORKFLOW</span>
                  <span className="text-[#10b981] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping" />
                    CONNECTED PROCESS
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="bg-white text-[#062039] rounded-2xl p-4 flex items-center gap-3.5 shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1267a7] flex items-center justify-center shrink-0">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <b className="block text-sm font-bold">Email Ingestion</b>
                      <small className="text-slate-500 text-xs">
                        Receive, identify and route documents
                      </small>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                      CAPTURE
                    </span>
                  </div>

                  <div className="text-center text-slate-400 text-sm font-black -my-1">↓</div>

                  {/* Step 2 */}
                  <div className="bg-white text-[#062039] rounded-2xl p-4 flex items-center gap-3.5 shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10b981] flex items-center justify-center shrink-0">
                      <FiCpu className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <b className="block text-sm font-bold">OCR & AI Processing</b>
                      <small className="text-slate-500 text-xs">
                        Read, extract and structure information
                      </small>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-sky-50 text-sky-700">
                      EXTRACT
                    </span>
                  </div>

                  <div className="text-center text-slate-400 text-sm font-black -my-1">↓</div>

                  {/* Step 3 */}
                  <div className="bg-white text-[#062039] rounded-2xl p-4 flex items-center gap-3.5 shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                      <FiLayers className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <b className="block text-sm font-bold">ERP Automation</b>
                      <small className="text-slate-500 text-xs">
                        Prepare and post business entries
                      </small>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                      PROCESS
                    </span>
                  </div>

                  <div className="text-center text-slate-400 text-sm font-black -my-1">↓</div>

                  {/* Step 4 */}
                  <div className="bg-white text-[#062039] rounded-2xl p-4 flex items-center gap-3.5 shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#d97706] flex items-center justify-center shrink-0">
                      <FiPaperclip className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <b className="block text-sm font-bold">Document Traceability</b>
                      <small className="text-slate-500 text-xs">
                        Link source documents to transactions
                      </small>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                      TRACK
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. TRUST BAR / CAPABILITY TICKER
          ───────────────────────────────────────────────────────────── */}
      <section className="py-6 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs sm:text-sm font-bold text-slate-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              Email & attachment processing
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#41a0c8]" />
              PDF & scanned document reading
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#1267a7]" />
              Structured data extraction
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#f7c037]" />
              SAP · Tally · ERP integration
            </span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THREE CONNECTED STEPS - CARD DESIGN MATCHING USER IMAGE
          ───────────────────────────────────────────────────────────── */}
        <section id="how" className="scroll-mt-24 py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
            >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
                  <FiLayers className="w-3.5 h-3.5 text-[#f7c037]" />
                  <span>One connected solution</span>
                </div>
                <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
                  Email to ERP. Fully automated.
                </h2>
                <p className="mt-4 text-slate-600 text-base sm:text-lg">
                  Auggit brings together three connected capabilities to reduce manual effort across the
                  document and data-entry journey.
                </p>
            </motion.div>

            {/* Cards Grid: Matching the reference image aesthetic */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* ──────── CARD 1: CAPTURE ──────── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
              >
                {/* Visual Area (Phone Top with Floating Rounded Chips) */}
                <div className="h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef4fb] border border-slate-100 p-4 relative overflow-hidden flex items-end justify-center">
                  {/* Phone Top Bezel */}
                  <div className="w-48 h-36 rounded-t-3xl bg-white border-2 border-slate-200 shadow-md relative p-3 flex flex-col items-center">
                    <div className="w-16 h-3 rounded-full bg-slate-200 mb-4" />
                    {/* Central App Emblem */}
                    <div className="w-12 h-12 rounded-2xl bg-[#062039] text-[#41a0c8] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FiMail className="w-6 h-6 text-[#9eddf7]" />
                    </div>
                  </div>

                  {/* Floating Chip 1: Left */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-6 left-4 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 max-w-[150px]"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-700">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center">
                        <FiCheck className="w-2.5 h-2.5 text-emerald-600" />
                      </span>
                      <span>Saving</span>
                    </div>
                    <div className="text-sm font-black text-[#062039] mt-1">$2,650</div>
                    <div className="text-[9px] text-slate-400">saved out of $10,000</div>
                  </motion.div>

                  {/* Floating Chip 2: Right */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-10 right-4 bg-white rounded-2xl p-3 shadow-xl border border-slate-100 max-w-[140px]"
                  >
                    <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#b45309]">
                      <span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
                        <FiTrendingUp className="w-2.5 h-2.5 text-[#d97706]" />
                      </span>
                      <span>Expenses</span>
                    </div>
                    <div className="text-sm font-black text-[#062039] mt-1">$650</div>
                    <div className="text-[9px] text-slate-400">spent out of $6,000</div>
                  </motion.div>
                </div>

                {/* Bottom Content Area */}
                <div className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#41a0c8] mb-1.5">
                      01 / CAPTURE
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#062039] tracking-tight">
                      Collect & segregate
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      Bring documents in through email and attachments, then route them using
                      configurable sender, recipient and domain-based rules.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <a
                      href="#email"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1267a7] hover:text-[#41a0c8] transition-colors"
                    >
                      <span>View Email Ingestion details</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* ──────── CARD 2: UNDERSTAND ──────── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
              >
                {/* Visual Area (Phone Outline with Floating Circular Badges) */}
                <div className="h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef4fb] border border-slate-100 p-4 relative overflow-hidden flex items-end justify-center">
                  {/* Phone Bezel */}
                  <div className="w-48 h-40 rounded-t-3xl bg-white border-2 border-slate-200 shadow-md relative p-3 flex flex-col items-center">
                    <div className="flex justify-between w-full px-2 text-[9px] text-slate-400 font-bold mb-3">
                      <span>9:41</span>
                      <span className="w-3 h-1.5 rounded-xs bg-slate-300" />
                    </div>

                    {/* Central 3D / Soft Emblem Badge */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-300 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FiCpu className="w-7 h-7 text-[#1267a7]" />
                    </div>

                    <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center mt-3 text-slate-500 text-xs">
                      ^
                    </div>
                  </div>

                  {/* Floating Circular Badge 1 (Top Left): Credit Card */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-8 left-8 w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#1267a7] flex items-center justify-center shadow-lg"
                  >
                    <FiCreditCard className="w-5 h-5" />
                  </motion.div>

                  {/* Floating Circular Badge 2 (Top Right): Dollar / Currency */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-10 right-8 w-11 h-11 rounded-2xl bg-amber-50 border border-amber-100 text-[#d97706] flex items-center justify-center shadow-lg"
                  >
                    <FiDollarSign className="w-5 h-5" />
                  </motion.div>

                  {/* Floating Circular Badge 3 (Bottom Left): Document / OCR */}
                  <motion.div
                    animate={{ x: [0, -4, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 left-6 w-11 h-11 rounded-2xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center shadow-lg"
                  >
                    <FiFileText className="w-5 h-5" />
                  </motion.div>

                  {/* Floating Circular Badge 4 (Bottom Right): Cash / Bank note */}
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 right-6 w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shadow-lg"
                  >
                    <FiCheckCircle className="w-5 h-5" />
                  </motion.div>
                </div>

                {/* Bottom Content Area */}
                <div className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#10b981] mb-1.5">
                      02 / UNDERSTAND
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#062039] tracking-tight">
                      Read & structure
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      Use OCR and AI-assisted document understanding to identify relevant information
                      and convert it into structured fields.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <a
                      href="#ocr"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1267a7] hover:text-[#41a0c8] transition-colors"
                    >
                      <span>View OCR & AI extraction details</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* ──────── CARD 3: AUTOMATE ──────── */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
              >
                {/* Visual Area (Stacked Angled Transaction Cards) */}
                <div className="h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] to-[#eef4fb] border border-slate-100 p-4 relative overflow-hidden flex flex-col justify-center items-center gap-3">
                  {/* Transaction Card 1 (Top) */}
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full bg-white rounded-2xl p-3 shadow-lg border border-slate-100 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <FiArrowDown className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#062039]">Purchase Invoice</div>
                        <div className="text-[10px] text-slate-400">12 Nov 2026</div>
                      </div>
                    </div>
                    <div className="text-xs font-black text-emerald-600">+₹3,880.00</div>
                  </motion.div>

                  {/* Transaction Card 2 (Middle - Offset) */}
                  <motion.div
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                    className="w-[94%] bg-white rounded-2xl p-3 shadow-md border border-slate-100 flex items-center justify-between -translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-sky-50 text-[#41a0c8] flex items-center justify-center shrink-0">
                        <FiZap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#062039]">Tally Auto-Entry</div>
                        <div className="text-[10px] text-slate-400">TXN-00128</div>
                      </div>
                    </div>
                    <div className="text-xs font-black text-[#1267a7]">POSTED</div>
                  </motion.div>

                  {/* Transaction Card 3 (Bottom - Offset) */}
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                    className="w-[88%] bg-white rounded-2xl p-2.5 shadow-xs border border-slate-100 flex items-center justify-between -translate-y-2 opacity-90"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <FiPaperclip className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-[#062039]">Source Document</div>
                        <div className="text-[9px] text-slate-400">invoice.pdf linked</div>
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-slate-500">Traceable</div>
                  </motion.div>
                </div>

                {/* Bottom Content Area */}
                <div className="pt-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-[#1267a7] mb-1.5">
                      03 / AUTOMATE
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#062039] tracking-tight">
                      Enter & connect
                    </h3>
                    <p className="mt-3 text-sm text-slate-500 leading-relaxed">
                      Use extracted information to automate entries in Tally and connect document data
                      with SAP or other ERP workflows.
                    </p>
                  </div>
                  <div className="pt-4 mt-auto">
                    <a
                      href="#tally"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1267a7] hover:text-[#41a0c8] transition-colors"
                    >
                      <span>View Tally Automation details</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
          4. DETAIL SECTION 1: EMAIL INGESTION
          ───────────────────────────────────────────────────────────── */}
        <section id="email" className="py-20 sm:py-28 bg-[#f8fafc] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-5"
              >
                <div className="inline-block text-xs font-black uppercase tracking-widest text-[#1267a7]">
                  01 · Email Ingestion
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062039] tracking-tight leading-tight">
                  Email Ingestion: Start with Every Invoice.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Business documents often arrive as email attachments. Auggit's Email Ingestion
                  capability helps identify incoming emails, apply configurable rules and segregate
                  documents for the next stage of processing.
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    {
                      title: "Sender and recipient rules",
                      desc: "Route emails using combinations of sender email IDs, recipient email IDs and domains.",
                    },
                    {
                      title: "Mailbox and domain-based segregation",
                      desc: "Separate messages received at addresses such as sales@ or legal@, or from selected domains.",
                    },
                    {
                      title: "Configurable rule conditions",
                      desc: "Set pattern, destination folder, type, priority, active status, exceptions and attachment-related conditions.",
                    },
                    {
                      title: "Ready for downstream processing",
                      desc: "Organise incoming documents so they can move into OCR and further processing.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                        ✓
                      </span>
                      <div>
                        <b className="text-[#062039] font-bold block">{item.title}</b>
                        <span className="text-slate-500 text-xs sm:text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Live Simulation Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-5">
                  {/* Animated Mail Flow Motion */}
                  <div className="rounded-2xl p-4 bg-gradient-to-br from-[#f8fbfe] to-[#edf4fc] border border-slate-200/80">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <span>Email routing in action</span>
                      <span className="text-emerald-600 font-extrabold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        LIVE FLOW
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                      {/* Inbound Emails */}
                      <div className="sm:col-span-5 space-y-2">
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs shadow-xs"
                        >
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                            <FiMail className="w-3 h-3 text-[#41a0c8]" />
                            <b>vendor@abc.com</b>
                          </div>
                          <div className="text-[11px] font-bold text-[#062039] mt-0.5">
                            Tax Invoice #2048 attached
                          </div>
                        </motion.div>

                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 3, repeat: Infinity, delay: 0.8 }}
                          className="bg-white p-2.5 rounded-xl border border-slate-200 text-xs shadow-xs"
                        >
                          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                            <FiMail className="w-3 h-3 text-[#1267a7]" />
                            <b>sales@company.com</b>
                          </div>
                          <div className="text-[11px] font-bold text-[#062039] mt-0.5">
                            Customer PO & Order doc
                          </div>
                        </motion.div>
                      </div>

                      {/* Routing Hub */}
                      <div className="sm:col-span-2 flex justify-center py-2 sm:py-0">
                        <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center font-black shadow-xs">
                          →
                        </div>
                      </div>

                      {/* Sorted Destination Folders */}
                      <div className="sm:col-span-4 space-y-2">
                        <div className="bg-white p-2.5 rounded-xl border border-emerald-200 bg-emerald-50/30 text-xs flex items-center gap-2">
                          <FiFolder className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-bold text-[#062039] text-[11px]">Vendor Invoices</span>
                        </div>
                        <div className="bg-white p-2.5 rounded-xl border border-blue-200 bg-blue-50/30 text-xs flex items-center gap-2">
                          <FiFolder className="w-3.5 h-3.5 text-[#1267a7]" />
                          <span className="font-bold text-[#062039] text-[11px]">Sales Orders</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Email Rule Manager Table */}
                  <div className="border border-slate-200 rounded-2xl overflow-hidden">
                    <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                      <span>Email Rule Manager</span>
                      <span className="text-emerald-600 text-[11px]">● 4 Rules Configured</span>
                    </div>

                    <div className="divide-y divide-slate-100 text-xs">
                      <div className="grid grid-cols-12 px-4 py-2 bg-slate-50/70 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        <span className="col-span-5">Rule / Pattern</span>
                        <span className="col-span-4">Destination</span>
                        <span className="col-span-3 text-right">Status</span>
                      </div>

                      <div className="grid grid-cols-12 px-4 py-2.5 items-center">
                        <span className="col-span-5 font-semibold text-[#062039]">
                          From: vendor domain
                        </span>
                        <span className="col-span-4 text-slate-600">Vendor Invoices</span>
                        <span className="col-span-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                            Active
                          </span>
                        </span>
                      </div>

                      <div className="grid grid-cols-12 px-4 py-2.5 items-center">
                        <span className="col-span-5 font-semibold text-[#062039]">
                          To: accounts@company.com
                        </span>
                        <span className="col-span-4 text-slate-600">Accounts Queue</span>
                        <span className="col-span-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                            Active
                          </span>
                        </span>
                      </div>

                      <div className="grid grid-cols-12 px-4 py-2.5 items-center">
                        <span className="col-span-5 font-semibold text-[#062039]">
                          Attachment: PDF &gt; 0KB
                        </span>
                        <span className="col-span-4 text-slate-600">OCR Queue</span>
                        <span className="col-span-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px]">
                            Active
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mailboxes Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-1">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <b className="text-[#062039] block font-bold text-[12px] mb-0.5">
                        ✉ Accounts Inbox
                      </b>
                      <span className="text-slate-500 text-[11px]">
                        Invoices & bills routed for extraction
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                      <b className="text-[#062039] block font-bold text-[12px] mb-0.5">
                        ✉ Legal Inbox
                      </b>
                      <span className="text-slate-500 text-[11px]">
                        Contracts & NDAs separated for review
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
          5. DETAIL SECTION 2: OCR & AI EXTRACTION
          ───────────────────────────────────────────────────────────── */}
        <section id="ocr" className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Interactive Scanning Mock (Reverse Layout) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 order-2 lg:order-1"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-5">
                  {/* Laser Scan Animation Box */}
                  <div className="relative rounded-2xl p-4 bg-gradient-to-br from-[#f8fbfe] to-[#edf4fc] border border-slate-200/80 overflow-hidden">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <span>OCR & AI extraction in action</span>
                      <span className="text-[#41a0c8] font-extrabold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#41a0c8] animate-ping" />
                        SCANNING
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                      {/* Simulated Document with Animated Beam */}
                      <div className="sm:col-span-5 bg-white border border-slate-200 rounded-xl p-3.5 relative overflow-hidden shadow-xs">
                        {/* Laser Beam */}
                        <motion.div
                          animate={{ top: ["5%", "90%", "5%"] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute left-0 right-0 h-0.5 bg-[#41a0c8] shadow-[0_0_12px_#41a0c8] z-10"
                        />

                        <div className="text-[10px] font-black text-[#062039] mb-2 tracking-wider">
                          COMMERCIAL INVOICE
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-slate-200 rounded-full w-full" />
                          <div className="h-1.5 bg-slate-200 rounded-full w-4/5" />
                          <div className="h-1.5 bg-[#41a0c8]/30 rounded-full w-3/5" />
                          <div className="h-1.5 bg-slate-200 rounded-full w-5/6" />
                          <div className="h-1.5 bg-[#10b981]/30 rounded-full w-2/3" />
                        </div>
                        <div className="mt-3 text-[9px] text-slate-400 font-mono">
                          Reading fields...
                        </div>
                      </div>

                      {/* Detected Realtime Fields */}
                      <div className="sm:col-span-7 space-y-2">
                        <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between text-xs shadow-2xs">
                          <span className="text-slate-400 text-[11px]">Invoice No.</span>
                          <b className="text-emerald-700 font-bold">INV-2048</b>
                        </div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between text-xs shadow-2xs">
                          <span className="text-slate-400 text-[11px]">Invoice Date</span>
                          <b className="text-emerald-700 font-bold">12-Nov-2026</b>
                        </div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between text-xs shadow-2xs">
                          <span className="text-slate-400 text-[11px]">Voucher Ref.</span>
                          <b className="text-[#1267a7] font-bold">VCH-00128</b>
                        </div>
                        <div className="p-2 bg-white rounded-lg border border-slate-200 flex justify-between text-xs shadow-2xs">
                          <span className="text-slate-400 text-[11px]">Port Code</span>
                          <b className="text-[#062039] font-bold">INNSA1</b>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Structured Extraction Table */}
                  <div className="border border-slate-200 rounded-2xl overflow-hidden">
                    <div className="bg-slate-50 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                      <span>OCR · Document Understanding</span>
                      <span className="text-emerald-600 text-[11px]">● 6 Extracted Fields</span>
                    </div>

                    <div className="divide-y divide-slate-100 text-xs">
                      <div className="flex justify-between px-4 py-2.5">
                        <span className="text-slate-500">Invoice Number</span>
                        <b className="text-[#062039]">INV-2048</b>
                      </div>
                      <div className="flex justify-between px-4 py-2.5">
                        <span className="text-slate-500">Invoice Date</span>
                        <b className="text-[#062039]">12-Nov-2026</b>
                      </div>
                      <div className="flex justify-between px-4 py-2.5">
                        <span className="text-slate-500">Voucher Number</span>
                        <b className="text-[#1267a7]">VCH-00128</b>
                      </div>
                      <div className="flex justify-between px-4 py-2.5">
                        <span className="text-slate-500">Shipping Bill No.</span>
                        <b className="text-[#062039]">SB-90812</b>
                      </div>
                      <div className="flex justify-between px-4 py-2.5">
                        <span className="text-slate-500">Port Code</span>
                        <b className="text-[#062039]">INNSA1</b>
                      </div>
                      <div className="flex justify-between px-4 py-2.5">
                        <span className="text-slate-500">Location</span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px]">
                          Mumbai
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-5 order-1 lg:order-2"
              >
                <div className="inline-block text-xs font-black uppercase tracking-widest text-[#10b981]">
                  02 · OCR & AI-assisted extraction
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062039] tracking-tight leading-tight">
                  OCR & AI: Turn Documents into Data.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Documents can arrive as PDFs, scanned copies or paper-based records. Auggit's OCR
                  process reads document content and helps convert relevant information into
                  structured fields for further processing.
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    {
                      title: "Read different document inputs",
                      desc: "Process PDF files, scanned documents and attachments received through email.",
                    },
                    {
                      title: "Identify relevant information",
                      desc: "Extract document-specific details such as invoice numbers, voucher references, dates, port codes and locations, depending on the document and configured requirements.",
                    },
                    {
                      title: "Structure extracted content",
                      desc: "Present the information in organised fields instead of requiring users to retype it manually.",
                    },
                    {
                      title: "Prepare data for the next step",
                      desc: "Make the extracted information available for downstream ERP entry and processing.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                        ✓
                      </span>
                      <div>
                        <b className="text-[#062039] font-bold block">{item.title}</b>
                        <span className="text-slate-500 text-xs sm:text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>


              </motion.div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
          6. DETAIL SECTION 3: TALLY AUTOMATION
          ───────────────────────────────────────────────────────────── */}
        <section id="tally" className="py-20 sm:py-28 bg-[#f8fafc] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-5"
              >
                <div className="inline-block text-xs font-black uppercase tracking-widest text-[#1267a7]">
                  03 · Tally Automation
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062039] tracking-tight leading-tight">
                  Tally Automation: Invoice to Entry.
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  Once the required information has been read and extracted, Auggit can use it to
                  automate the corresponding entry in Tally. The original supporting document can also
                  be attached to the relevant transaction for reference.
                </p>

                <ul className="space-y-4 pt-2">
                  {[
                    {
                      title: "Upload the source document",
                      desc: "Provide the invoice or other relevant document to Auggit for processing.",
                    },
                    {
                      title: "Extract the required details",
                      desc: "Read invoice numbers and other information needed for the Tally entry.",
                    },
                    {
                      title: "Automate the Tally entry",
                      desc: "Transfer the required data into Tally and pass the corresponding entry.",
                    },
                    {
                      title: "Attach the original document",
                      desc: "Link the supporting document with the respective transaction ID to help maintain document traceability.",
                    },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3.5 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                        ✓
                      </span>
                      <div>
                        <b className="text-[#062039] font-bold block">{item.title}</b>
                        <span className="text-slate-500 text-xs sm:text-sm">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Tally Voucher Simulation Mockup */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xl space-y-5">
                  {/* Auto Post Animation Banner */}
                  <div className="rounded-2xl p-4 bg-gradient-to-br from-[#f8fbfe] to-[#edf4fc] border border-slate-200/80">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">
                      <span>Invoice to Tally entry</span>
                      <span className="text-emerald-600 font-extrabold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        AUTO POST
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                      <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-slate-200 text-xs shadow-xs">
                        <div className="text-[10px] text-slate-400 font-bold">EXTRACTED DATA</div>
                        <b className="text-sm font-black text-[#062039] block mt-0.5">INV-2048</b>
                        <div className="text-[11px] text-slate-500">Invoice details ready</div>
                      </div>

                      <div className="sm:col-span-1 flex justify-center py-1 sm:py-0 text-emerald-600 font-black">
                        ➜
                      </div>

                      <div className="sm:col-span-5 bg-white p-3 rounded-xl border border-emerald-200 text-xs shadow-xs">
                        <div className="text-[10px] text-emerald-600 font-bold">TALLY · PURCHASE</div>
                        <div className="text-[11px] font-semibold text-[#062039] mt-0.5">
                          Ref: VCH-00128
                        </div>
                        <div className="text-[10px] text-emerald-700 font-bold">Entry Posted ✓</div>
                      </div>
                    </div>
                  </div>

                  {/* Tally Prime Voucher View */}
                  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                      <span className="font-extrabold text-[#062039]">
                        Tally Prime · Purchase Voucher
                      </span>
                      <span className="text-slate-400 text-[11px]">Illustrative Workflow</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 text-[11px]">Supplier / Ledger</span>
                        <b className="block text-[#062039] font-bold mt-0.5">ABC Suppliers Ltd.</b>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 text-[11px]">Voucher Date</span>
                        <b className="block text-[#062039] font-bold mt-0.5">12-Nov-2026</b>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 text-[11px]">Invoice Number</span>
                        <b className="block text-[#062039] font-bold mt-0.5">INV-2048</b>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                        <span className="text-slate-400 text-[11px]">Amount</span>
                        <b className="block text-[#062039] font-bold mt-0.5">As per extracted</b>
                      </div>
                    </div>

                    {/* Transaction Status Badge */}
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                      <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                        Transaction Entry Passed
                      </span>
                      <b className="text-emerald-900 font-mono">TXN-00128</b>
                    </div>

                    {/* Traceability Attachment */}
                    <div className="p-3 rounded-xl border border-dashed border-slate-300 bg-white flex items-center gap-3 text-xs">
                      <FiPaperclip className="w-4 h-4 text-slate-400 shrink-0" />
                      <div>
                        <b className="text-[#062039] block font-bold">Source Document Attached</b>
                        <span className="text-slate-500 text-[11px]">
                          invoice_INV-2048.pdf · Linked directly to transaction ID
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
          7. BUSINESS IMPACT: GIVE YOUR TEAM TIME BACK
          ───────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <div className="inline-block text-xs font-black uppercase tracking-widest text-[#1267a7] mb-2">
                Business Impact
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
                Give Your Team Time Back.
              </h2>
              <p className="mt-4 text-slate-600 text-base sm:text-lg">
                Reduce the repetitive work involved in moving information from documents into business
                systems.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Less manual typing",
                  desc: "Reduce repetitive data-entry work across incoming business documents.",
                  icon: FiCpu,
                  color: "text-[#41a0c8] bg-sky-50 border-sky-100",
                },
                {
                  title: "Fewer typing mistakes",
                  desc: "Reduce errors associated with manually re-entering document information.",
                  icon: FiCheckCircle,
                  color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                },
                {
                  title: "Connected workflows",
                  desc: "Bring email capture, document reading and ERP entry into one process.",
                  icon: FiLayers,
                  color: "text-[#1267a7] bg-blue-50 border-blue-100",
                },
                {
                  title: "Document traceability",
                  desc: "Keep supporting documents linked to the relevant Tally transaction.",
                  icon: FiPaperclip,
                  color: "text-[#d97706] bg-amber-50 border-amber-100",
                },
              ].map((b, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#41a0c8]/40 transition-all flex flex-col"
                >
                  <div
                    className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 mb-4 ${b.color}`}
                  >
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#062039] mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
          8. ENTERPRISE CTA
          ───────────────────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-20 sm:py-28 bg-gradient-to-br from-[#062039] via-[#0d2a4a] to-[#062039] text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,160,200,0.18),transparent_50%)] pointer-events-none" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f7c037]/20 text-[#f7c037] border border-[#f7c037]/30 text-xs font-bold uppercase tracking-widest">
                <span>Auggit Automatic Data Entry</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                Move Business Forward. Skip Manual Entry.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Explore how Email Ingestion, OCR and ERP automation can simplify the way your organisation
                processes business documents.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Link
                  to="/product/automation-suite/edms-demo"
                  className="px-9 py-4 rounded-full bg-[#f7c037] hover:bg-[#eab308] text-[#062039] font-black text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Request Live Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 hover:border-white/40 transition-all"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
        </section>
    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  FiCheckCircle,
  FiArrowRight,
  FiCpu,
  FiLayers,
  FiShield,
  FiTrendingUp,
  FiRefreshCw,
  FiActivity,
  FiTruck,
  FiDatabase,
  FiAlertCircle,
  FiZap,
  FiClock,
  FiFileText,
  FiCheck,
  FiSearch,
  FiMaximize2,
  FiZoomIn,
  FiZoomOut,
  FiX,
  FiChevronRight,
  FiInbox,
  FiEye,
  FiGitPullRequest,
  FiSliders,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export function meta() {
  return [
    { title: "AP Process Automation for SAP | Auggit" },
    {
      name: "description",
      content:
        "Auggit AP Process Automation for SAP: supplier invoice capture, MIGO goods receipt, MIRO invoice verification, two-way and three-way matching, document completeness and SAP posting.",
    },
  ];
}

/* ─────────────────────────────────────────────────────────────
    HERO ANIMATED AP WORKFLOW COMPONENT
   ───────────────────────────────────────────────────────────── */
function AnimatedHeroFlow() {
  return (
    <div className="w-full relative select-none">
      <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-white/15 via-white/10 to-white/5 border border-white/20 shadow-[0_25px_70px_rgba(0,19,50,0.4)] backdrop-blur-md overflow-hidden">
        {/* Header Indicator */}
        <div className="flex items-center justify-between text-xs font-bold text-sky-200 mb-5 pb-3 border-b border-white/10">
          <span className="tracking-widest uppercase font-mono text-[11px] text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CONNECTED AP WORKFLOW
          </span>
          <span className="font-mono text-[11px] text-[#f7c037]">01 — 04</span>
        </div>

        {/* 2x2 Flow Matrix with Connected Center Arrow */}
        <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 sm:gap-2 items-center">
          {/* Column 1: Intake & References */}
          <div className="sm:col-span-5 space-y-3">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#071d34]/60 border border-white/15 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-400/15 text-[#8de6f2] flex items-center justify-center shrink-0">
                <FiFileText className="w-5 h-5" />
              </div>
              <div>
                <b className="text-xs sm:text-sm font-bold text-white block">Supplier Invoice</b>
                <span className="text-[11px] text-slate-300 block">AI Ingestion &amp; OCR</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#071d34]/60 border border-white/15 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-400/15 text-[#8de6f2] flex items-center justify-center shrink-0">
                <FiSearch className="w-5 h-5" />
              </div>
              <div>
                <b className="text-xs sm:text-sm font-bold text-white block">PO &amp; GRN Lookup</b>
                <span className="text-[11px] text-slate-300 block">Instant SAP sync</span>
              </div>
            </motion.div>
          </div>

          {/* Center Connector Arrow */}
          <div className="sm:col-span-1 flex items-center justify-center py-2 sm:py-0">
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[#67d2e6] font-bold text-lg"
            >
              →
            </motion.div>
          </div>

          {/* Column 2: Matching & Posting */}
          <div className="sm:col-span-5 space-y-3">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#071d34]/60 border border-white/15 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-400/15 text-[#f7c037] flex items-center justify-center shrink-0">
                <FiGitPullRequest className="w-5 h-5" />
              </div>
              <div>
                <b className="text-xs sm:text-sm font-bold text-white block">2-Way / 3-Way Match</b>
                <span className="text-[11px] text-slate-300 block">Tolerance validation</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-400/40 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-400/20 text-[#78e7bd] flex items-center justify-center shrink-0">
                <FiCheckCircle className="w-5 h-5" />
              </div>
              <div>
                <b className="text-xs sm:text-sm font-bold text-white block">Approval &amp; SAP MIRO</b>
                <span className="text-[11px] text-emerald-300 block">Auto-posted to ERP</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex items-center justify-between text-[11px] font-semibold text-sky-200 mt-5 pt-3 border-t border-white/10">
          <span>AI data capture · Exception review</span>
          <span className="text-[#f7c037]">eDMS document linkage</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
    MAIN AP AUTOMATION PAGE
   ───────────────────────────────────────────────────────────── */
export default function ApAutomationPage() {
  const [activeSapTab, setActiveSapTab] = useState<"migo" | "miro">("migo");
  const [activeMatchMode, setActiveMatchMode] = useState<"two" | "three">("two");

  // Lightbox State for Screenshots
  const [activeImage, setActiveImage] = useState<{ src: string; caption: string } | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const openLightbox = (src: string, caption: string) => {
    setActiveImage({ src, caption });
    setZoomLevel(1);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImage(null);
    setZoomLevel(1);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "+" || e.key === "=") setZoomLevel((z) => Math.min(z + 0.25, 3));
      if (e.key === "-") setZoomLevel((z) => Math.max(z - 0.25, 0.5));
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const galleryScreens = [
    {
      src: "/images/ap-automation/screen-1.png",
      caption: "SAP Sync – material movement and supplier invoice",
    },
    {
      src: "/images/ap-automation/screen-2.png",
      caption: "AI-enabled OCR – supplier invoice header extraction",
    },
    {
      src: "/images/ap-automation/screen-3.png",
      caption: "Invoice line items and extracted tax details",
    },
    {
      src: "/images/ap-automation/screen-4.png",
      caption: "Invoice comparison summary – matches and mismatches",
    },
    {
      src: "/images/ap-automation/screen-5.png",
      caption: "Header comparison – OCR values against SAP values",
    },
    {
      src: "/images/ap-automation/screen-6.png",
      caption: "Item comparison – line-level validation",
    },
    {
      src: "/images/ap-automation/screen-7.png",
      caption: "Editable SAP preview before invoice posting",
    },
    {
      src: "/images/ap-automation/screen-8.png",
      caption: "Successful SAP posting confirmation",
    },
    {
      src: "/images/ap-automation/screen-9.png",
      caption: "SAP Processing dashboard – transaction status and document references",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-[#263748] selection:bg-[#41a0c8] selection:text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION (HOMEPAGE HEADER PILL, DARK NAVY HERO)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#06172f] via-[#0a3159] to-[#087ca7] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        {/* Subtle geometric circles */}
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
              {/* Homepage Capsule Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span>AUGGIT AUTOMATION SUITE · AP PROCESS AUTOMATION</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white leading-[1.1]">
                AP Process Automation{" "}
                <span className="text-[#67d2e6]">for SAP</span>
              </h1>

              {/* Subtitle */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl">
                Connect supplier invoices, purchase orders, goods receipts, invoice verification and approvals in one intelligent workflow.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/product/automation-suite/book-poc"
                  className="px-7 py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm shadow-[0_8px_24px_rgba(247,192,55,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Book a Demo</span>
                  <FiArrowRight className="w-4 h-4 text-[#062039]" />
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("process");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 rounded-xl bg-[#1267a7] hover:bg-[#0e5488] text-white font-bold text-sm border border-sky-400/30 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#1267a7]/30 hover:scale-105 active:scale-95"
                >
                  <span>Explore the Process</span>
                  <FiChevronRight className="w-4 h-4 text-[#9eddf7]" />
                </button>
              </div>
            </motion.div>

            {/* Right Hero Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 flex items-center justify-center"
            >
              <AnimatedHeroFlow />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TRUST STRIP
          ───────────────────────────────────────────────────────────── */}
      <div className="bg-[#fbfdff] border-b border-slate-200 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {[
              "AI-enabled invoice data capture",
              "PO, GRN and invoice matching",
              "SAP-connected processing",
              "Centralised document records",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-[#42566b]">
                <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-xs">
                  ✓
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          2. THE AP CHALLENGE (3 PROBLEM CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="solution" className="scroll-mt-24 py-20 sm:py-28 bg-[#f5f9fc] border-b border-slate-200">
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
              <span>The AP Challenge</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight">
              Too much time spent moving invoices instead of processing them
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              When invoice data, purchase orders, goods receipts and approvals sit across different steps and teams,
              finance operations can become slow and difficult to track.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Manual invoice data entry",
                desc: "Teams repeatedly enter supplier, invoice, tax, amount and PO details from documents into business systems.",
                tag: "Repetitive Typing",
                icon: FiFileText,
              },
              {
                title: "Time-consuming reconciliation",
                desc: "Finding the right PO and GRN and checking invoice values can involve multiple screens and manual follow-ups.",
                tag: "Multi-Screen Hassle",
                icon: FiGitPullRequest,
              },
              {
                title: "Limited process visibility",
                desc: "Exceptions, SAP posting failures and approval delays can make it difficult to understand where an invoice is held up.",
                tag: "Siloed Blindspots",
                icon: FiClock,
              },
            ].map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(22,54,83,0.05)] hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#e9f4fb] text-[#247fbd] flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                      <prob.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {prob.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#102e4d] mb-2 leading-snug">{prob.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{prob.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SPLIT VALUE SECTION (ONE CONNECTED WORKFLOW)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Context & Ticklist */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <span>One Connected Workflow</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight leading-tight">
                Bring supplier invoice processing and SAP transactions together
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                Auggit helps digitise supplier invoices, extract relevant information, retrieve corresponding SAP references, compare values and move verified invoices through approval and posting.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Capture and store supplier invoices in Auggit eDMS.",
                  "Extract invoice header and line-item details using AI-enabled OCR.",
                  "Fetch corresponding PO and GRN information from SAP.",
                  "Identify matches, partial matches and mismatches for review.",
                  "Push reviewed transactions to SAP and retain linked documents.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#43576a]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Insight Box */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#eef7fc] via-[#f5faff] to-[#f9fcfe] border border-[#d8e9f3] shadow-lg space-y-4">
                <h3 className="text-xl font-black text-[#102e4d] mb-4">What happens to an invoice?</h3>

                {[
                  {
                    step: "01",
                    title: "Capture the invoice",
                    desc: "Read supplier, invoice, tax and amount details",
                  },
                  {
                    step: "02",
                    title: "Find its SAP references",
                    desc: "Retrieve PO and GRN information",
                  },
                  {
                    step: "03",
                    title: "Validate and resolve",
                    desc: "Compare values and identify exceptions",
                  },
                  {
                    step: "04",
                    title: "Approve, post and link",
                    desc: "Continue to SAP and retain document links",
                  },
                ].map((row, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-3.5 rounded-2xl bg-white border border-[#dce8ef] shadow-2xs"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#247fbd] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-2xs">
                      {row.step}
                    </span>
                    <div>
                      <b className="text-sm font-bold text-[#102e4d] block leading-snug">{row.title}</b>
                      <small className="text-xs text-slate-500 block">{row.desc}</small>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PROCESS FLOW (9 SEQUENTIAL STEPS)
          ───────────────────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 py-20 sm:py-28 bg-[#f5f9fc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiRefreshCw className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight">
              From invoice receipt to payment processing
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              A connected sequence for capturing, validating, approving and posting supplier invoices.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-3">
            {[
              {
                step: "01",
                title: "Supplier invoice received",
                desc: "Invoice enters the AP automation process.",
                tag: "Intake",
              },
              {
                step: "02",
                title: "Invoice tagged and stored in Auggit eDMS",
                desc: "Keep the source invoice in a central document repository.",
                tag: "eDMS",
              },
              {
                step: "03",
                title: "AI-enabled data capture",
                desc: "Extract vendor, invoice number, date, tax, amount and line-item details.",
                tag: "OCR / AI",
              },
              {
                step: "04",
                title: "Fetch corresponding PO and supporting documents",
                desc: "Retrieve relevant purchase order and goods receipt references from SAP.",
                tag: "SAP sync",
              },
              {
                step: "05",
                title: "Perform two-way or three-way matching",
                desc: "Compare invoice values against PO, and GRN where applicable.",
                tag: "Validation",
              },
              {
                step: "06",
                title: "Manage discrepancies or verify invoice",
                desc: "Park exceptions for correction and repeat matching, or move verified invoices forward.",
                tag: "Exception control",
              },
              {
                step: "07",
                title: "Invoice approval workflow",
                desc: "Route the verified invoice through the required approval process.",
                tag: "Approval",
              },
              {
                step: "08",
                title: "Post approved invoice in SAP",
                desc: "Review the editable SAP preview and push the invoice to SAP.",
                tag: "SAP posting",
              },
              {
                step: "09",
                title: "Link documents and process payment as per terms",
                desc: "Associate invoice with the relevant PO and GRN in Auggit eDMS; payment follows applicable terms.",
                tag: "Invoice-to-pay",
              },
            ].map((st, idx) => (
              <div key={idx} className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1267a7] to-[#41a0c8] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-2xs">
                      {st.step}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[#102e4d] group-hover:text-[#247fbd] transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-xs text-slate-500">{st.desc}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e9f7f3] text-[#16866e] shrink-0">
                    {st.tag}
                  </span>
                </motion.div>
                {idx < 8 && (
                  <div className="text-center text-slate-300 font-bold text-sm">↓</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. SAP PROCESS AUTOMATION (MIGO & MIRO TABS)
          ───────────────────────────────────────────────────────────── */}
      <section id="sap" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <SiSap className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>SAP Process Automation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight">
              MIGO and MIRO: two connected parts of the procurement cycle
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Record what the business receives, then verify what the supplier bills.
            </p>
          </motion.div>

          {/* Tab Selector */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveSapTab("migo")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeSapTab === "migo"
                  ? "bg-[#102e4d] text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              MIGO · Goods Receipt
            </button>
            <button
              onClick={() => setActiveSapTab("miro")}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                activeSapTab === "miro"
                  ? "bg-[#102e4d] text-white shadow-md"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              MIRO · Invoice Verification
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeSapTab === "migo" && (
                <motion.div
                  key="migo"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#f8fbfd] to-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <span className="text-xs font-bold text-[#247fbd] uppercase tracking-wider block mb-1">
                        01 / Material Movement
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#102e4d]">
                        MIGO – Goods Receipt / GRN
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Record the physical receipt of material against a purchase order and update SAP inventory.
                      </p>
                    </div>
                    <span className="px-4 py-1.5 rounded-lg bg-[#e7f3fa] text-[#247fbd] text-xs font-bold whitespace-nowrap">
                      MATERIAL RECEIVED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {[
                      {
                        title: "Purchase Order",
                        sub: "PO created for required material",
                        icon: FiFileText,
                      },
                      {
                        title: "Material Arrives",
                        sub: "Truck delivers goods to warehouse",
                        icon: FiTruck,
                      },
                      {
                        title: "Verify Receipt",
                        sub: "Check quantity, PO and quality",
                        icon: FiCheckCircle,
                      },
                      {
                        title: "Post GRN",
                        sub: "Post goods movement and update stock",
                        icon: SiSap,
                      },
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white border border-slate-200 text-center relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-[#eaf5fb] text-[#247fbd] flex items-center justify-center mx-auto mb-3">
                            <step.icon className="w-6 h-6" />
                          </div>
                          <b className="block text-sm font-bold text-[#102e4d] leading-snug mb-1">
                            {step.title}
                          </b>
                          <small className="text-xs text-slate-400 block">{step.sub}</small>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-[#edf7f4] text-[#277b68] text-xs sm:text-sm font-medium">
                    <strong className="text-[#176b58] font-bold">Key control:</strong> MIGO records the physical receipt in SAP. Inventory is updated when the goods receipt is posted.
                  </div>
                </motion.div>
              )}

              {activeSapTab === "miro" && (
                <motion.div
                  key="miro"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-[#f8fbfd] to-white rounded-3xl p-7 sm:p-10 border border-slate-200 shadow-xl"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                    <div>
                      <span className="text-xs font-bold text-[#247fbd] uppercase tracking-wider block mb-1">
                        02 / Accounts Payable
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#102e4d]">
                        MIRO – Supplier Invoice Verification
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Capture the supplier invoice and validate it against the purchase order and goods receipt before posting.
                      </p>
                    </div>
                    <span className="px-4 py-1.5 rounded-lg bg-[#e7f3fa] text-[#247fbd] text-xs font-bold whitespace-nowrap">
                      INVOICE VERIFIED
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative">
                    {[
                      {
                        title: "Enter Invoice Data",
                        sub: "Invoice number, date and amount",
                        icon: FiFileText,
                      },
                      {
                        title: "Fetch References",
                        sub: "Retrieve PO and GRN details",
                        icon: FiSearch,
                      },
                      {
                        title: "Three-Way Match",
                        sub: "Compare PO, GRN and invoice",
                        icon: FiGitPullRequest,
                      },
                      {
                        title: "Review & Post",
                        sub: "Resolve exceptions and post invoice",
                        icon: SiSap,
                      },
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white border border-slate-200 text-center relative flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-12 h-12 rounded-2xl bg-[#eaf5fb] text-[#247fbd] flex items-center justify-center mx-auto mb-3">
                            <step.icon className="w-6 h-6" />
                          </div>
                          <b className="block text-sm font-bold text-[#102e4d] leading-snug mb-1">
                            {step.title}
                          </b>
                          <small className="text-xs text-slate-400 block">{step.sub}</small>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-[#edf7f4] text-[#277b68] text-xs sm:text-sm font-medium">
                    <strong className="text-[#176b58] font-bold">Key control:</strong> MIRO records and verifies the supplier invoice against the PO and GRN before invoice posting.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. INVOICE VALIDATION (2-WAY VS 3-WAY MATCHING)
          ───────────────────────────────────────────────────────────── */}
      <section id="match" className="scroll-mt-24 py-20 sm:py-28 bg-[#102e4d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#8de6f2] text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
              <span>Invoice Validation</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Choose the right matching control
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              See how the invoice is checked against the records available in the procurement process.
            </p>
          </motion.div>

          {/* Toggle Button */}
          <div className="flex justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveMatchMode("two")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeMatchMode === "two"
                  ? "bg-white text-[#102e4d] shadow-lg"
                  : "bg-transparent text-slate-300 border border-white/30 hover:bg-white/10"
              }`}
            >
              2-way matching
            </button>
            <button
              onClick={() => setActiveMatchMode("three")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeMatchMode === "three"
                  ? "bg-white text-[#102e4d] shadow-lg"
                  : "bg-transparent text-slate-300 border border-white/30 hover:bg-white/10"
              }`}
            >
              3-way matching
            </button>
          </div>

          {/* Interactive Match Visual Box */}
          <div className="max-w-3xl mx-auto p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
            <AnimatePresence mode="wait">
              {activeMatchMode === "two" && (
                <motion.div
                  key="two"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-center"
                >
                  <div>
                    <h3 className="text-2xl font-black text-[#8de6f2]">2-way matching (2 records)</h3>
                    <p className="text-slate-300 text-sm mt-1">
                      Compare what was ordered with what the supplier has billed.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <div className="w-full sm:w-56 p-5 rounded-2xl bg-white text-[#102e4d] shadow-md text-center">
                      <span className="text-3xl block mb-2">📄</span>
                      <b className="block text-base font-bold">Purchase Order</b>
                      <small className="text-xs text-slate-500">What was ordered?</small>
                    </div>

                    <span className="text-2xl font-black text-[#8de6f2]">↔</span>

                    <div className="w-full sm:w-56 p-5 rounded-2xl bg-white text-[#102e4d] shadow-md text-center">
                      <span className="text-3xl block mb-2">🧾</span>
                      <b className="block text-base font-bold">Supplier Invoice</b>
                      <small className="text-xs text-slate-500">What is being billed?</small>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                    2 documents are compared: <strong className="text-emerald-300 font-bold">PO + Supplier Invoice</strong>.
                  </div>
                </motion.div>
              )}

              {activeMatchMode === "three" && (
                <motion.div
                  key="three"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 text-center"
                >
                  <div>
                    <h3 className="text-2xl font-black text-[#8de6f2]">3-way matching (3 records)</h3>
                    <p className="text-slate-300 text-sm mt-1">
                      Compare what was ordered, what was received and what the supplier has billed.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                    <div className="w-full sm:w-48 p-4 rounded-2xl bg-white text-[#102e4d] shadow-md text-center">
                      <span className="text-3xl block mb-2">📄</span>
                      <b className="block text-sm font-bold">Purchase Order</b>
                      <small className="text-xs text-slate-500">What was ordered?</small>
                    </div>

                    <span className="text-2xl font-black text-[#8de6f2]">↔</span>

                    <div className="w-full sm:w-48 p-4 rounded-2xl bg-white text-[#102e4d] shadow-md text-center">
                      <span className="text-3xl block mb-2">📦</span>
                      <b className="block text-sm font-bold">Goods Receipt (GRN)</b>
                      <small className="text-xs text-slate-500">What was received?</small>
                    </div>

                    <span className="text-2xl font-black text-[#8de6f2]">↔</span>

                    <div className="w-full sm:w-48 p-4 rounded-2xl bg-white text-[#102e4d] shadow-md text-center">
                      <span className="text-3xl block mb-2">🧾</span>
                      <b className="block text-sm font-bold">Supplier Invoice</b>
                      <small className="text-xs text-slate-500">What is billed?</small>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/15 text-xs sm:text-sm text-slate-300">
                    3 documents are compared: <strong className="text-emerald-300 font-bold">PO + GRN + Supplier Invoice</strong>.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. AUGGIT CAPABILITIES (9 FEATURE CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section id="features" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiZap className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Auggit Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight">
              More control at every stage of AP processing
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Bring invoice capture, SAP validation, exception handling and document traceability into one process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "AI-enabled OCR",
                desc: "Extract invoice header fields, tax details and item-level information for review.",
                icon: FiFileText,
              },
              {
                title: "PO and GRN retrieval",
                desc: "Fetch relevant SAP references using the PO number or supplier invoice details.",
                icon: FiSearch,
              },
              {
                title: "Comparison summary",
                desc: "View matches, partial matches, mismatches and fields that are not available.",
                icon: FiGitPullRequest,
              },
              {
                title: "Editable SAP preview",
                desc: "Review and correct extracted values before pushing a transaction to SAP.",
                icon: FiSliders,
              },
              {
                title: "SAP posting and response",
                desc: "View posting success or rejection messages and the returned SAP document reference.",
                icon: SiSap,
              },
              {
                title: "Central document linkage",
                desc: "Link supplier invoices with the relevant PO and GRN in Auggit eDMS, where applicable.",
                icon: FiLayers,
              },
              {
                title: "Exception visibility",
                desc: "Review SAP posting failures, error details and transactions requiring correction.",
                icon: FiAlertCircle,
              },
              {
                title: "Processing dashboard",
                desc: "View processing records, document types, SAP document numbers and response status.",
                icon: FiActivity,
              },
              {
                title: "Approval workflow",
                desc: "Move verified invoices through the configured approval process before posting.",
                icon: FiCheckCircle,
              },
            ].map((ft, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-[0_10px_25px_rgba(16,46,77,0.04)] hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#247fbd] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <ft.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#102e4d] mb-2 leading-snug">
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
          8. PRODUCT INTERFACE SCREENSHOT GALLERY (9 SCREENS + LIGHTBOX)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#f5f9fc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiEye className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Product Interface</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight">
              Explore the SAP sync and invoice validation screens
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Select any screenshot to open a larger interactive view. Zoom in, zoom out, or fit to your display.
            </p>
          </motion.div>

          {/* 3x3 Screenshot Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryScreens.map((screen, idx) => (
              <motion.button
                key={idx}
                type="button"
                onClick={() => openLightbox(screen.src, screen.caption)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_14px_rgba(17,48,77,0.06)] hover:shadow-xl transition-all group text-left cursor-zoom-in flex flex-col justify-between"
              >
                <div className="h-52 w-full p-3 bg-slate-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={screen.src}
                    alt={screen.caption}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold text-[#40566a] line-clamp-1">{screen.caption}</span>
                  <span className="text-xs font-bold text-[#247fbd] flex items-center gap-1 shrink-0">
                    <span>View</span>
                    <FiMaximize2 className="w-3 h-3" />
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. BUSINESS OUTCOMES (4 BENEFIT CARDS)
          ───────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
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
            <h2 className="text-3xl sm:text-5xl font-black text-[#102e4d] tracking-tight">
              Make AP processing easier to manage
            </h2>
            <p className="mt-4 text-slate-500 text-base sm:text-lg">
              Reduce repetitive work while giving finance and operations teams a clearer view of invoice progress.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Less manual entry",
                desc: "Use OCR-based extraction to reduce repetitive invoice data capture.",
              },
              {
                title: "Better matching control",
                desc: "Validate invoice values against PO and GRN references.",
              },
              {
                title: "Clearer exception handling",
                desc: "Identify mismatches and SAP posting failures for review.",
              },
              {
                title: "Document traceability",
                desc: "Keep invoice, PO and GRN records connected in Auggit eDMS.",
              },
            ].map((ben, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-7 border-l-4 border-l-[#67d2e6] border-y border-r border-slate-200 shadow-[0_6px_20px_rgba(17,48,77,0.04)] hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-[#102e4d] mb-2">{ben.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{ben.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. FINAL CTA BANNER (DARK NAVY LIKE AUGGIT AUTOMATION SUITE)
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
              Ready to simplify your AP process?
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              See how Auggit can connect supplier invoice processing, MIGO goods receipt, MIRO verification and SAP posting in your business workflow.
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
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("match");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-full bg-[#132c4a]/90 hover:bg-[#1a3a61] text-white border border-slate-600/50 font-semibold text-xs transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Explore Invoice Matching</span>
                <FiChevronRight className="w-4 h-4 text-[#67d2e6]" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. LIGHTBOX MODAL FOR SCREENSHOTS
          ───────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#05111e]/95 backdrop-blur-md flex flex-col p-4 sm:p-8"
            onClick={closeLightbox}
          >
            {/* Top Toolbar */}
            <div
              className="flex items-center justify-between text-white max-w-6xl mx-auto w-full mb-4 pb-2 border-b border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-sm font-bold text-slate-200">{activeImage.caption}</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.5))}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer flex items-center gap-1"
                >
                  <FiZoomOut className="w-3.5 h-3.5" />
                  <span>Zoom −</span>
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 3))}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer flex items-center gap-1"
                >
                  <FiZoomIn className="w-3.5 h-3.5" />
                  <span>Zoom +</span>
                </button>
                <button
                  type="button"
                  onClick={() => setZoomLevel(1)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all cursor-pointer"
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={closeLightbox}
                  className="p-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 text-xs font-bold border border-red-500/30 transition-all cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Stage Viewport */}
            <div
              className="flex-1 w-full flex items-center justify-center overflow-auto p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={activeImage.src}
                alt={activeImage.caption}
                style={{ transform: `scale(${zoomLevel})` }}
                className="max-w-full max-h-[82vh] object-contain rounded-xl shadow-2xl transition-transform duration-200"
              />
            </div>

            {/* Bottom Tip */}
            <div className="text-center text-[11px] text-slate-400 mt-2">
              Tip: Press ESC or click outside to close. Use +/- keys to zoom.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

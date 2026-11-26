import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router";
import {
  FiArrowRight,
  FiChevronDown,
  FiCheckCircle,
  FiLayers,
  FiZap,
  FiShield,
  FiPaperclip,
  FiFileText,
  FiTruck,
  FiUsers,
  FiActivity,
  FiCheck,
  FiHelpCircle,
  FiDatabase,
  FiSearch,
  FiAlertCircle,
  FiClock,
  FiSliders,
  FiLock,
  FiTrendingUp,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export function meta() {
  return [
    { title: "Automation Suite | AUGGIT" },
    {
      name: "description",
      content:
        "AUGGIT Automation Suite connects vendor management, supplier invoicing, material movement, gate passes, weighbridge operations and intelligent document management.",
    },
  ];
}

const faqs = [
  {
    num: "01",
    q: "What is the AUGGIT Automation Suite?",
    a: "AUGGIT Automation Suite is a unified platform that helps organisations simplify, automate and manage business operations by connecting processes, documents, approvals, communication and enterprise systems.",
  },
  {
    num: "02",
    q: "What business processes can AUGGIT automate?",
    a: "The suite supports vendor onboarding, supplier invoice verification, material movement, gate pass management, weighbridge integration, document management, digital signatures and audit and compliance reporting.",
  },
  {
    num: "03",
    q: "Which industries can benefit from AUGGIT Automation Suite?",
    a: "The platform is designed for organisations that manage vendors, procurement, material movement, invoices and supporting documents across their operations. Industry-specific suitability can be assessed during a process discussion.",
  },
  {
    num: "04",
    q: "Does AUGGIT replace our existing ERP system?",
    a: "The Automation Suite is positioned as a connected automation and workflow layer. It can integrate with relevant enterprise systems; the integration scope depends on your existing landscape and requirements.",
  },
  {
    num: "05",
    q: "Can AUGGIT integrate with SAP, Oracle, Zoho and Tally?",
    a: "The platform supports ERP and enterprise system integration. The exact systems, data flows and integration approach are confirmed during solution discovery.",
  },
  {
    num: "06",
    q: "How does AUGGIT reduce manual work?",
    a: "It helps digitise submissions, capture document information, connect related records, route approvals and reduce repeated manual entry and follow-up across process teams.",
  },
  {
    num: "07",
    q: "Can AUGGIT automate our existing business processes?",
    a: "Existing workflows can be reviewed to understand process steps, documents, approvals and system touchpoints. The automation design is then aligned to the organisation's requirements.",
  },
  {
    num: "08",
    q: "Can we implement individual products or the complete suite?",
    a: "The modules and capabilities can be evaluated around the organisation's process priorities and integration requirements. The implementation scope is defined during solution discovery.",
  },
];

export default function AutomationSuite() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [flippedWorkflow, setFlippedWorkflow] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const toggleWorkflowFlip = (index: number) => {
    setFlippedWorkflow((prev) => (prev === index ? null : index));
  };

  return (
    <div className="relative min-h-screen bg-white text-[#17233d] selection:bg-[#41a0c8] selection:text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span>INTELLIGENT ENTERPRISE OPERATIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06]">
                AUGGIT{" "}
                <span className="bg-gradient-to-r from-[#41a0c8] via-[#9eddf7] to-[#10b981] bg-clip-text text-transparent">
                  Automation Suite
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                <strong className="text-white font-bold">Automate. Simplify. Analyze. Audit.</strong>{" "}
                A unified platform that enables organizations to simplify, automate and manage
                business operations across the enterprise.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("workflow");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 rounded-xl bg-[#1267a7] hover:bg-[#0e5488] text-white font-bold text-sm border border-sky-400/30 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#1267a7]/30 hover:scale-105 active:scale-95"
                >
                  <span>Explore the Process</span>
                  <FiChevronDown className="w-4 h-4 text-[#9eddf7]" />
                </button>
                <Link
                  to="/product/automation-suite/edms-demo"
                  className="px-7 py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm shadow-[0_8px_24px_rgba(247,192,55,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Request a Demo</span>
                  <FiArrowRight className="w-4 h-4 text-[#062039]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Ecosystem Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="p-6 sm:p-8 rounded-[32px] border border-white/20 bg-gradient-to-br from-white/15 via-white/5 to-white/10 backdrop-blur-md shadow-[0_25px_70px_rgba(0,19,38,0.35)] relative overflow-hidden">
                <div className="text-center font-bold text-sm sm:text-base text-sky-100 mb-5">
                  One connected business ecosystem
                </div>

                {/* Central Suite Core */}
                <div className="w-56 mx-auto mb-6 p-4 text-center rounded-2xl bg-gradient-to-r from-[#087fc1] to-[#25c5d5] text-white shadow-[0_12px_30px_rgba(0,165,201,0.35)]">
                  <small className="block text-[10px] tracking-widest uppercase font-extrabold opacity-90 mb-0.5">
                    INTELLIGENT OPERATIONS
                  </small>
                  <b className="text-base sm:text-lg font-black block leading-tight">
                    AUGGIT Automation Suite
                  </b>
                </div>

                {/* 6 Connected Nodes */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { title: "Vendor", sub: "Onboarding", icon: FiUsers },
                    { title: "Procurement", sub: "PO & Invoices", icon: FiFileText },
                    { title: "Gate Pass", sub: "Material Movement", icon: FiTruck },
                    { title: "Weighbridge", sub: "Weight Capture", icon: FiSliders },
                    { title: "Documents", sub: "Capture & Tagging", icon: FiPaperclip },
                    { title: "Approvals", sub: "Review & Control", icon: FiCheckCircle },
                  ].map((node, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 transition-all text-center group"
                    >
                      <node.icon className="w-5 h-5 mx-auto mb-1.5 text-[#9eddf7] group-hover:scale-110 transition-transform" />
                      <div className="text-xs font-bold text-white">{node.title}</div>
                      <small className="text-[10px] text-slate-300 block">{node.sub}</small>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE OPERATIONAL CHALLENGE (6 QUESTIONS)
          ───────────────────────────────────────────────────────────── */}
      <section className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
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
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight leading-tight">
              Operations don't slow down because people stop working.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              They slow down when the information people need isn't where they expect it to be.
              Teams lose time chasing documents, confirmations and approvals.
            </p>
          </motion.div>

          {/* Challenge 6 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", category: "Vendor Ops", text: "Why is vendor onboarding taking this long?", icon: FiUsers },
              { num: "02", category: "Procurement", text: "Is the purchase order verified?", icon: FiCheckCircle },
              { num: "03", category: "Gate & Stores", text: "Is this the right material?", icon: FiTruck },
              { num: "04", category: "Documentation", text: "Where is the supporting document?", icon: FiPaperclip },
              { num: "05", category: "Workflow", text: "Is the approval complete?", icon: FiClock },
              { num: "06", category: "Finance & Audit", text: "Has every transaction been recorded?", icon: FiDatabase },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-[26px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(6,32,57,0.04)] hover:shadow-[0_16px_40px_rgba(18,103,167,0.1)] hover:border-[#41a0c8]/60 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-sky-100/60 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1267a7] to-[#41a0c8] text-white flex items-center justify-center font-black text-xs shadow-sm">
                      {item.num}
                    </span>
                    <span className="text-[11px] font-bold text-[#1267a7] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-bold text-[#062039] leading-snug group-hover:text-[#1267a7] transition-colors">
                    “{item.text}”
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-slate-500">Eliminated with AUGGIT</span>
                  <item.icon className="w-4 h-4 text-[#41a0c8] group-hover:scale-110 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 max-w-3xl mx-auto text-base sm:text-lg font-bold text-[#062039]">
            When departments don't have the complete picture, delays, process gaps and{" "}
            <span className="text-[#d97706] underline decoration-amber-300">
              possible financial leakage
            </span>{" "}
            can follow.
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. THE CONNECTED PLATFORM (INTRODUCING AUTOMATION SUITE)
          ───────────────────────────────────────────────────────────── */}
      <section id="platform" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs">
                <FiZap className="w-3.5 h-3.5 text-[#f7c037]" />
                <span>The Connected Platform</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight leading-tight">
                Introducing Automation Suite
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                A unified platform that enables organizations to simplify, automate and manage
                business operations across the enterprise. Built to replace fragmented, manual
                operations with a connected and structured approach.
              </p>

              <div className="p-5 rounded-2xl bg-sky-50 border-l-4 border-[#41a0c8] text-[#062039] font-bold text-sm sm:text-base leading-relaxed">
                Bring business processes, documents, approvals, communication and enterprise
                systems together in one connected operational environment.
              </div>

              <div className="pt-2">
                <Link
                  to="/product/automation-suite/edms-demo"
                  className="px-7 py-3.5 rounded-xl bg-[#062039] hover:bg-[#1267a7] text-white font-bold text-sm shadow-md hover:scale-105 transition-all inline-flex items-center gap-2"
                >
                  <span>Request a Demo</span>
                  <FiArrowRight className="w-4 h-4 text-[#9eddf7]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Orbital Graphic */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="p-7 sm:p-8 rounded-[32px] bg-gradient-to-br from-[#f0f8fc] to-[#e4f1f8] border border-sky-100 relative shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { label: "Business Processes", icon: FiLayers },
                    { label: "Documents", icon: FiPaperclip },
                    { label: "Approvals", icon: FiCheckCircle },
                    { label: "Communication", icon: FiActivity },
                    { label: "Vendor Information", icon: FiUsers },
                    { label: "Enterprise Systems", icon: FiDatabase },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center gap-3 font-bold text-xs sm:text-sm text-[#062039]"
                    >
                      <item.icon className="w-5 h-5 text-[#1267a7] shrink-0" />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#087fc1] to-[#25c5d5] text-white text-center font-black text-base sm:text-lg shadow-lg flex items-center justify-center gap-2">
                  <FiShield className="w-5 h-5" />
                  <span>AUGGIT Automation Suite</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. THE CONNECTED WORKFLOW (7 STEPS)
          ───────────────────────────────────────────────────────────── */}
      <section id="workflow" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiLayers className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>The Connected Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              One process. Connected from start to finish.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Connect key steps from vendor onboarding and procurement through material movement,
              receipt, invoice processing and supporting records.
            </p>
          </motion.div>

          {/* 7 Workflow Interactive Flip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              {
                id: 1,
                code: "V",
                title: "Vendor Onboarding",
                desc: "Vendor details & docs",
                icon: FiUsers,
                color: "text-sky-600 bg-sky-50 border-sky-100",
                backTitle: "Vendor KYC",
                details: "Collect digital documents, verify GST / PAN in real time and configure vendor portal profiles.",
              },
              {
                id: 2,
                code: "PO",
                title: "PO & Verification",
                desc: "Purchase order checks",
                icon: FiCheckCircle,
                color: "text-blue-600 bg-blue-50 border-blue-100",
                backTitle: "PO Validation",
                details: "Fetch purchase orders from ERP, validate terms, quantities and pricing thresholds automatically.",
              },
              {
                id: 3,
                code: "GP",
                title: "Gate Pass",
                desc: "Inward & outward logs",
                icon: FiTruck,
                color: "text-indigo-600 bg-indigo-50 border-indigo-100",
                backTitle: "Gate Security",
                details: "Generate secure QR passes for vehicle arrival, driver KYC, and inward/outward tracking.",
              },
              {
                id: 4,
                code: "WB",
                title: "Weighbridge",
                desc: "Weight data capture",
                icon: FiSliders,
                color: "text-teal-600 bg-teal-50 border-teal-100",
                backTitle: "Weighment",
                details: "Direct digital scale integration to capture gross, tare and net weights without human tamper.",
              },
              {
                id: 5,
                code: "GR",
                title: "Material Receipt",
                desc: "Goods receipt process",
                icon: FiLayers,
                color: "text-emerald-600 bg-emerald-50 border-emerald-100",
                backTitle: "GRN & QC",
                details: "Record quality checks, store receipts and update ERP goods-movement transactions instantly.",
              },
              {
                id: 6,
                code: "AP",
                title: "Invoice Processing",
                desc: "Matching & approvals",
                icon: FiFileText,
                color: "text-amber-600 bg-amber-50 border-amber-100",
                backTitle: "3-Way Match",
                details: "Match supplier invoice lines with PO & GRN, route approvals and post directly to ERP.",
              },
              {
                id: 7,
                code: "✓",
                title: "Audit Trail",
                desc: "Records & traceability",
                icon: FiShield,
                color: "text-purple-600 bg-purple-50 border-purple-100",
                backTitle: "Compliance",
                details: "Full immutable transaction log linking documents, approvals, and timestamps in eDMS.",
              },
            ].map((step) => {
              const isFlipped = flippedWorkflow === step.id;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: step.id * 0.06 }}
                  className="[perspective:1000px] h-[210px] group cursor-pointer"
                  onClick={() => toggleWorkflowFlip(step.id)}
                >
                  <div
                    className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-2xl ${
                      isFlipped ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                    }`}
                  >
                    {/* Front Face: Icon + Name */}
                    <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-2xl p-4 border border-slate-200/90 shadow-[0_6px_20px_rgba(6,32,57,0.05)] flex flex-col items-center justify-center text-center">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-3 ${step.color} shadow-2xs group-hover:scale-110 transition-transform`}
                      >
                        <step.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-[#062039] leading-snug">
                        {step.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">{step.desc}</p>
                    </div>

                    {/* Back Face: Basic Details */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#062039] to-[#0a3159] text-white rounded-2xl p-3.5 shadow-xl flex flex-col justify-between border border-white/10 text-left">
                      <div>
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/15 mb-2">
                          <span className="text-[10px] font-black uppercase tracking-wider text-[#9eddf7]">
                            {step.backTitle}
                          </span>
                          <span className="text-[9px] font-bold text-[#10b981]">Step {step.id}</span>
                        </div>
                        <p className="text-[11px] text-slate-200 leading-relaxed font-medium">
                          {step.details}
                        </p>
                      </div>
                      <div className="text-[9px] text-[#41a0c8] font-bold">
                        Connected in Suite
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-slate-500 text-xs sm:text-sm mt-8">
            Supporting documents, emails, approvals and traceability can be connected across the process.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CONNECTED CAPABILITIES (9 MODULES)
          ───────────────────────────────────────────────────────────── */}
      <section id="modules" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
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
              <span>Connected Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Modules that work together.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Bring vendor, finance, stores, operations and document processes into a more structured workflow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {[
              {
                title: "Vendor Onboarding",
                desc: "Onboard and manage vendors through a single portal. Collect information and documents through secure links and validate GST details as part of onboarding.",
                tag: "VENDOR MANAGEMENT",
                icon: FiUsers,
                link: "/product/automation-suite/vendor-onboarding",
              },
              {
                title: "AP Process Automation",
                desc: "Support invoice verification through two-way or three-way matching, goods receipt checks and workflow-enabled approvals.",
                tag: "INVOICE WORKFLOW",
                icon: FiFileText,
                link: "/product/automation-suite/ap-automation",
              },
              {
                title: "Gate Pass Management",
                desc: "Digitise returnable and non-returnable gate passes to improve visibility and control over material movement.",
                tag: "MATERIAL MOVEMENT",
                icon: FiTruck,
                link: "/product/automation-suite/gate-pass",
              },
              {
                title: "Weighbridge Integration",
                desc: "Connect weighbridge information with gate pass, material received and invoice processes.",
                tag: "WEIGHT DATA CAPTURE",
                icon: FiSliders,
                link: "/product/automation-suite/weighbridge",
              },
              {
                title: "Document Management",
                desc: "Keep documents, emails and approvals connected to business processes, with organised records and easier retrieval.",
                tag: "CENTRAL DOCUMENT VIEW",
                icon: FiPaperclip,
                link: "/product/edms",
              },
              {
                title: "Document Digitisation & OCR",
                desc: "Digitise incoming documents and extract information to support document processing and downstream workflows.",
                tag: "AI/LLM-POWERED OCR",
                icon: FiSearch,
                link: "/product/automation-suite/automatic-data-entry",
              },
              {
                title: "Digital Signatures",
                desc: "Digitally sign documents for secure approvals wherever required as part of the business process.",
                tag: "SECURE APPROVALS",
                icon: FiLock,
                link: "/product/automation-suite/edms-demo",
              },
              {
                title: "Enterprise Integration",
                desc: "Connect relevant business workflows with ERP and enterprise systems based on integration requirements and configuration.",
                tag: "ERP CONNECTIVITY",
                icon: FiDatabase,
                link: "/product/automation-suite/edms-demo",
              },
              {
                title: "Audit & Compliance Reporting",
                desc: "Generate reports with traceability and visibility into supporting, compliance and statutory documents.",
                tag: "AUDIT READINESS",
                icon: FiShield,
                link: "/product/automation-suite/edms-demo",
              },
            ].map((module, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#1267a7] border border-sky-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <module.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#062039] mb-2">{module.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-6">{module.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#41a0c8]">
                  <span>{module.tag}</span>
                  <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. DOCUMENT INTELLIGENCE (PATENTED TAG REPORT)
          ───────────────────────────────────────────────────────────── */}
      <section id="intelligence" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#061a36] via-[#0a3158] to-[#082244] rounded-[36px] p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm mb-4">
                <FiActivity className="w-3.5 h-3.5 text-[#10b981]" />
                <span>Document Intelligence</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Know what's missing before it becomes a problem.
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Monitor document completeness, identify gaps and improve visibility into the records
                supporting your business processes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              {/* Card 1: Patented Tag Report */}
              <div className="p-7 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#9eddf7]">
                  PATENTED CAPABILITY
                </div>
                <h3 className="text-2xl font-bold text-white">Patented Tag Report</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Identify missing or unlinked supporting documents so teams can spot gaps before
                  they become delays, disputes or audit issues.
                </p>
                <div className="pt-2 rounded-xl bg-white/5 border border-white/10 p-3.5 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-200">Purchase order</span>
                    <b className="text-emerald-400 font-bold">AVAILABLE</b>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-200">Supplier invoice</span>
                    <b className="text-emerald-400 font-bold">AVAILABLE</b>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-200">Delivery challan</span>
                    <b className="text-amber-400 font-bold">MISSING</b>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-200">Weighment slip</span>
                    <b className="text-emerald-400 font-bold">AVAILABLE</b>
                  </div>
                </div>
              </div>

              {/* Card 2: Document Health Reports */}
              <div className="p-7 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-sm space-y-4">
                <div className="text-[10px] font-black uppercase tracking-widest text-[#9eddf7]">
                  DOCUMENT MONITORING
                </div>
                <h3 className="text-2xl font-bold text-white">Document Health Reports</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Monitor document completeness and understand the status of required records across
                  business processes.
                </p>
                <div className="pt-2 rounded-xl bg-white/5 border border-white/10 p-3.5 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-200">Required documents</span>
                    <b className="text-[#9eddf7] font-bold">COMPLETENESS VIEW</b>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-200">Document availability</span>
                    <b className="text-emerald-400 font-bold">TRACKED</b>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-white/10">
                    <span className="text-slate-200">Missing information</span>
                    <b className="text-amber-400 font-bold">FLAGGED</b>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-200">Audit traceability</span>
                    <b className="text-emerald-400 font-bold">REPORTABLE</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. CASE STUDY (THE 7-STEP MANUAL PROCESS MAZE)
          ───────────────────────────────────────────────────────────── */}
      <section id="case-study" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiFileText className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Case Study</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              The 7-Step Manual Process Maze
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Illustrative workflow: a French fries manufacturer supplying McDonald's and PepsiCo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Steps Visual Chain */}
            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { num: "01", channel: "WhatsApp / Email", title: "PO Received", desc: "Unstructured PO documents sent informally without validation", color: "from-sky-500/10 to-blue-500/5", tagColor: "bg-sky-50 text-sky-700" },
                  { num: "02", channel: "Physical Gate", title: "Truck Arrival", desc: "Driver carries loose physical e-way bill & paper invoices", color: "from-blue-500/10 to-indigo-500/5", tagColor: "bg-blue-50 text-blue-700" },
                  { num: "03", channel: "Logbook Entry", title: "Security Logged", desc: "Security guards write license plate and vendor details by hand", color: "from-indigo-500/10 to-purple-500/5", tagColor: "bg-indigo-50 text-indigo-700" },
                  { num: "04", channel: "Random Sampling", title: "Quality Check", desc: "QC team inspects random raw materials with paper tick-sheets", color: "from-teal-500/10 to-emerald-500/5", tagColor: "bg-teal-50 text-teal-700" },
                  { num: "05", channel: "Weighbridge", title: "Unload & Scale", desc: "Manual weigh slip printed and hand-carried to stores clerk", color: "from-emerald-500/10 to-amber-500/5", tagColor: "bg-emerald-50 text-emerald-700" },
                  { num: "06", channel: "Accounts Dept", title: "Document Entry", desc: "Clerks manually re-key numbers into ERP ledger systems", color: "from-amber-500/10 to-orange-500/5", tagColor: "bg-amber-50 text-amber-700" },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#41a0c8]/60 relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1267a7] to-[#41a0c8] text-white flex items-center justify-center font-black text-xs shadow-2xs">
                        {step.num}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${step.tagColor}`}>
                        {step.channel}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#062039] mb-1 group-hover:text-[#1267a7] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Step 07 - The Bottleneck Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#062039] via-[#0b3158] to-[#1267a7] text-white shadow-xl relative overflow-hidden">
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-[radial-gradient(ellipse_at_center,rgba(65,160,200,0.3),transparent_70%)] pointer-events-none" />
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-[#f7c037] text-[#062039] flex items-center justify-center font-black text-sm shadow-md">
                      07
                    </span>
                    <h4 className="text-base sm:text-lg font-black text-white">
                      Physical Dossier Sent for CEO Approval
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-black text-[#f7c037] bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    Critical Bottleneck
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-sky-100 pl-12 leading-relaxed">
                  Physical paperwork from the 6 previous disconnected steps must be chased, compiled into a physical folder, and signed off before payment is made.
                </p>
              </div>
            </div>

            {/* Case Aside - Problem & Solution */}
            <div className="lg:col-span-5 bg-[#f8fafc] p-7 sm:p-8 rounded-3xl border border-slate-200 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-[#062039] mb-2">The Problem</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  An untracked and scattered workflow creates effort across the PO team, gate staff,
                  quality team, accounts and leadership.
                </p>
              </div>

              <blockquote className="p-4 rounded-xl bg-white border-l-4 border-[#41a0c8] text-xs sm:text-sm text-slate-700 italic shadow-2xs leading-relaxed">
                “During audits, many documents went missing. The process was too manual and scattered
                across PO team, gate staff, QC team, accounts and CEO.”
              </blockquote>

              <div>
                <h4 className="text-base font-bold text-[#062039] mb-3">AUGGIT Solution</h4>
                <div className="space-y-2 text-xs sm:text-sm font-bold text-[#062039]">
                  <div className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span> Document workflow defined
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span> Tagging for traceability
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span> Online CEO approvals
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span> Zero document loss
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. BUSINESS OUTCOMES - 4-CARD DESIGN MATCHING USER IMAGE
          ───────────────────────────────────────────────────────────── */}
      <section className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
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
              <span>Business Outcomes</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Move from scattered information to connected operations.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Give teams greater visibility into business activities and the documents that support them.
            </p>
          </motion.div>

          {/* 4 Cards matching the exact uploaded image UI style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Multiservice Radar Style (Connected Enterprise Operations) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              {/* Top Visual Box */}
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full border border-sky-200/50 pointer-events-none" />
                <div className="absolute w-60 h-60 rounded-full border border-sky-200/70 pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full border border-sky-300/60 pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 left-10 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-[#1267a7]"
                >
                  <FiUsers className="w-3.5 h-3.5 text-sky-500" />
                  <span>Vendors</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-5 right-10 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-emerald-600"
                >
                  <FiTruck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Gate & Weigh</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-6 left-8 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-amber-600"
                >
                  <FiPaperclip className="w-3.5 h-3.5 text-amber-500" />
                  <span>eDMS Vault</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute bottom-6 right-8 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-indigo-600"
                >
                  <SiSap className="w-3.5 h-3.5 text-indigo-500" />
                  <span>ERP Sync</span>
                </motion.div>

                <div className="relative z-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#062039] via-[#1267a7] to-[#41a0c8] text-white font-bold text-xs shadow-xl flex items-center gap-2.5 group-hover:scale-105 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="tracking-wide">AUGGIT Platform</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Structured Processes</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Bring activities, documents, and approvals into defined workflows across all departments.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Minimalist Metrics Line Chart Style (Track Actions) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Operations Automated
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <b className="text-2xl font-black text-[#062039]">99.8%</b>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Zero Leakage
                      </span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white text-[10px] font-bold text-slate-500 shadow-2xs border border-slate-100">
                    Live Metric
                  </div>
                </div>

                <div className="relative h-24 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80">
                    <defs>
                      <linearGradient id="suiteChartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#41a0c8" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#41a0c8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,65 Q 60,70 120,40 T 220,25 T 320,8 L 320,80 L 0,80 Z"
                      fill="url(#suiteChartGradient)"
                    />
                    <path
                      d="M 0,65 Q 60,70 120,40 T 220,25 T 320,8"
                      fill="none"
                      stroke="#41a0c8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="220" cy="25" r="5" fill="#1267a7" stroke="#ffffff" strokeWidth="2.5" />
                  </svg>

                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-6 top-0 bg-white rounded-xl p-3 shadow-lg border border-slate-100 text-xs"
                  >
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Processing Time</div>
                    <b className="text-[#062039] font-black text-sm block mt-0.5">-75% Turnaround</b>
                  </motion.div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Operational Visibility</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Make process status and supporting information effortless to access and monitor in real time.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Ranking Bar Chart Style (Document Completeness) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex items-end justify-center">
                <div className="flex items-end gap-3.5 pb-2">
                  <div className="w-9 h-16 rounded-t-xl bg-slate-200/80" />
                  <div className="w-9 h-24 rounded-t-xl bg-slate-300/80" />

                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="px-2.5 py-1 rounded-full bg-white shadow-md border border-slate-100 text-[10px] font-black text-[#1267a7] mb-2"
                    >
                      100% Tagged
                    </motion.div>
                    <div className="w-11 h-36 rounded-t-2xl bg-gradient-to-t from-[#1267a7] via-[#41a0c8] to-[#9eddf7] shadow-md" />
                  </div>

                  <div className="w-9 h-20 rounded-t-xl bg-slate-300/80" />
                  <div className="w-9 h-14 rounded-t-xl bg-slate-200/80" />
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Document Completeness</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Automatically identify missing records and monitor health of transactions with Patented Tag Reports.
                </p>
              </div>
            </motion.div>

            {/* Card 4: UI Connected Container Nodes (Audit Readiness) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full max-w-xs space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                    <span className="flex items-center gap-2">
                      <FiCheckCircle className="w-4 h-4 text-[#41a0c8]" />
                      Full Audit Trail
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold">Compliant</span>
                  </div>

                  <div className="w-0.5 h-3 bg-sky-300 mx-auto" />

                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#1267a7] to-[#062039] text-white shadow-lg flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-2">
                      <SiSap className="w-4 h-4 text-[#9eddf7]" />
                      Enterprise ERP Connected
                    </span>
                    <span className="text-[10px] text-[#f7c037]">Synced</span>
                  </div>

                  <div className="w-0.5 h-3 bg-sky-300 mx-auto" />

                  <div className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                    <span className="flex items-center gap-2">
                      <FiPaperclip className="w-4 h-4 text-[#10b981]" />
                      AUGGIT eDMS Vault
                    </span>
                    <span className="text-[10px] text-slate-400">Archived</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Audit Readiness</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Support comprehensive traceability and instant generation of audit-ready compliance reports.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Secondary 4 Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Less Manual Follow-up",
                desc: "Reduce time spent chasing information across departments and vendors.",
                icon: FiClock,
              },
              {
                title: "Connected Workflows",
                desc: "Link operational steps with related documents, POs and approvals.",
                icon: FiLayers,
              },
              {
                title: "Online & Mobile Enabled",
                desc: "Support approvals and status access through online and mobile interfaces.",
                icon: FiActivity,
              },
              {
                title: "Enterprise Connectivity",
                desc: "Connect seamlessly with SAP, Oracle, Tally, Zoho and custom ERPs.",
                icon: FiDatabase,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#1267a7] border border-sky-100 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-[#062039] mb-1.5">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. FAQS SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="faqs" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiHelpCircle className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Knowledge Base</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Automation Suite FAQs
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Common questions about deploying, integrating and scaling the AUGGIT Automation Suite.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="rounded-2xl border border-slate-200 bg-white shadow-2xs overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 rounded-lg bg-sky-50 text-[#1267a7] border border-sky-100 flex items-center justify-center font-black text-xs shrink-0">
                        {faq.num}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#062039]">
                        {faq.q}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center shrink-0"
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pl-16">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. BOTTOM CTA BANNER
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#062039] via-[#1267a7] to-[#41a0c8] text-white rounded-[36px] p-10 sm:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_55%)] pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm relative z-10">
              <span>BRING YOUR PROCESSES TOGETHER</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight relative z-10 leading-tight">
              Ready to transform your operations?
            </h2>

            <p className="text-[#9eddf7] text-base sm:text-lg max-w-2xl mx-auto relative z-10 leading-relaxed">
              Automate. Simplify. Analyze. Audit. Connect your vendors, materials, gates and documents
              on one unified platform.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3 relative z-10">
              <Link
                to="/product/automation-suite/book-poc"
                className="px-8 py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 hover:scale-105"
              >
                <span>Book a Free POC</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 hover:scale-105"
              >
                <span>Talk to our team</span>
                <FiArrowRight className="w-4 h-4 text-[#41a0c8]" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

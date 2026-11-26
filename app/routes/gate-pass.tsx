import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FiTruck,
  FiCheckCircle,
  FiArrowRight,
  FiFileText,
  FiLayers,
  FiZap,
  FiShield,
  FiPaperclip,
  FiDatabase,
  FiActivity,
  FiCheck,
  FiSliders,
  FiRefreshCw,
  FiChevronDown,
  FiMaximize2,
  FiX,
  FiLock,
  FiClock,
  FiEye,
  FiTrendingUp,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export function meta() {
  return [
    { title: "SAP Integrated Gate Pass Management | AUGGIT" },
    {
      name: "description",
      content:
        "AUGGIT SAP-integrated Gate Pass Management for material inward, outward, RGP, NRGP, sales dispatch and weighment.",
    },
  ];
}

export default function GatePassPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; desc: string } | null>(null);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  const toggleFlipCard = (index: number) => {
    setFlippedCard((prev) => (prev === index ? null : index));
  };

  const liveScreens = [
    {
      title: "Live Gate Entry Dashboard",
      desc: "View gate-entry records with PO / SO reference, type, status, vehicle and party details.",
      src: "/images/gate-pass/gate-pass-2.jpg",
    },
    {
      title: "Gate Entry Action Menu",
      desc: "Access Edit, Print, Weighment, Change Log, Cancel, All-Weighment and Force-Out.",
      src: "/images/gate-pass/gate-pass-3.jpg",
    },
    {
      title: "Gate Entry Details",
      desc: "Capture vendor, vehicle, driver, transporter, challan and weight information.",
      src: "/images/gate-pass/gate-pass-4.jpg",
    },
    {
      title: "Weighment Slip",
      desc: "Record first and second weight, net weight, vehicle, material and timestamps.",
      src: "/images/gate-pass/gate-pass-5.jpg",
    },
    {
      title: "RGP Report",
      desc: "Review pass number, date, vehicle, vendor and material information.",
      src: "/images/gate-pass/gate-pass-6.jpg",
    },
    {
      title: "User Roles & Permissions",
      desc: "Configure access to vehicle-out, weight capture, gate-entry actions and reports.",
      src: "/images/gate-pass/gate-pass-7.jpg",
    },
  ];

  const faqs = [
    {
      q: "What is a Gate Pass Management System?",
      a: "A Gate Pass Management System digitises and controls the movement of materials, goods and vehicles into and out of an organisation. It records pass details, approvals, vehicle and material information, weighment and supporting documents, giving security and operations teams a clear, traceable process.",
    },
    {
      q: "Is AUGGIT Gate Pass integrated with SAP?",
      a: "Yes. AUGGIT can connect gate-pass activity with relevant SAP references such as purchase orders, sales orders and outbound deliveries, and support the related goods-movement updates. The exact integration scope depends on the customer's SAP environment and configuration.",
    },
    {
      q: "What is the difference between RGP and NRGP?",
      a: "RGP (Returnable Gate Pass) is used when material is expected to return, such as items sent for repair or job work. NRGP (Non-Returnable Gate Pass) is used for material that will not return, such as permanent dispatch or transfer. AUGGIT helps track each movement according to its pass type.",
    },
    {
      q: "Does it support material inward and sales dispatch?",
      a: "Yes. The system supports inward material movements with purchase-order and invoice references, as well as outward sales dispatch using sales-order and delivery references. The relevant details can be recorded and checked during gate operations.",
    },
    {
      q: "Can the system capture vehicle and weighment details?",
      a: "Yes. Vehicle, driver and transporter details can be recorded along with weighment information such as first weight, second weight and net weight. Weighment records can be linked to the relevant gate entry.",
    },
    {
      q: "Can supporting documents be stored with the gate pass?",
      a: "Yes. Supporting records such as invoices, delivery challans, e-way bills and weighment slips can be associated with the gate-pass transaction and retained in AUGGIT eDMS for easier retrieval and traceability.",
    },
    {
      q: "Can user access be controlled?",
      a: "Yes. Role-based access can be configured so users see and perform the actions relevant to their responsibilities, such as gate entry, weighment, vehicle-out confirmation and reports.",
    },
  ];

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
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span>AUGGIT AUTOMATION SUITE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]">
                SAP-Integrated{" "}
                <span className="bg-gradient-to-r from-[#41a0c8] via-[#9eddf7] to-[#10b981] bg-clip-text text-transparent">
                  Gate Pass Management
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Digitise material inward, outward, sales dispatch and returnable movements with SAP
                connectivity, QR / barcode verification and a connected document trail.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("process");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/25 hover:border-white/40 transition-all flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Explore the Process</span>
                  <FiChevronDown className="w-4 h-4 text-[#9eddf7]" />
                </button>
                <Link
                  to="/product/automation-suite/edms-demo"
                  className="px-7 py-3.5 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Request a Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Hero Visual Banner (Extracted from HTML) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6"
            >
              <div className="relative group rounded-3xl p-2 sm:p-3 bg-gradient-to-br from-[#41a0c8]/30 via-white/10 to-[#1267a7]/30 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] backdrop-blur-sm overflow-hidden">
                <img
                  src="/images/gate-pass/gate-pass-1.png"
                  alt="AUGGIT Gate Pass infographic showing material inward, sales dispatch, RGP, NRGP, weighment and eDMS, with SAP integration"
                  className="w-full h-auto object-contain rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. OVERVIEW SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="overview" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-2">
                <FiTruck className="w-3.5 h-3.5 text-[#f7c037]" />
                <span>Gate Pass Management</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#062039] tracking-tight leading-tight">
                Control every material movement.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                A gate pass is an authorised record of material entering or leaving an organisation's
                premises. It helps security, stores and operations teams verify the material, quantity,
                purpose, destination, vehicle and approval status.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                AUGGIT digitises this process and connects gate-pass activity with SAP transactions and
                related records in AUGGIT eDMS.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Track inward and outward movements.",
                  "Reference SAP purchase and sales documents.",
                  "Verify movements using QR / barcode.",
                  "Keep supporting documents connected in eDMS.",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-[#062039]">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Connected Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="bg-gradient-to-br from-[#062039] via-[#0d2e50] to-[#062039] text-white rounded-3xl p-7 sm:p-9 shadow-2xl border border-slate-700 space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold">
                    One gate process. Connected information.
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Capture the key details needed for gate verification.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <b className="text-white text-[13px] block">Vehicle & Driver</b>
                    <span className="text-slate-300 text-[11px]">Vehicle, transporter, driver</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <b className="text-white text-[13px] block">Material</b>
                    <span className="text-slate-300 text-[11px]">Item, quantity and purpose</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <b className="text-[#f7c037] text-[13px] block">SAP Reference</b>
                    <span className="text-slate-300 text-[11px]">PO, sales order, delivery</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <b className="text-white text-[13px] block">Gate Pass</b>
                    <span className="text-slate-300 text-[11px]">Number and QR / barcode</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <b className="text-[#9eddf7] text-[13px] block">Weighment</b>
                    <span className="text-slate-300 text-[11px]">Gross, tare and net weight</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <b className="text-white text-[13px] block">Documents</b>
                    <span className="text-slate-300 text-[11px]">Invoice, challan, e-way bill</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#10b981] text-[#062039] font-black text-xs text-center uppercase tracking-widest shadow-md">
                  SAP CONNECTIVITY + AUGGIT eDMS
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. CORE WORKFLOWS (MATERIAL INWARD, SALES DISPATCH, OUTWARD)
          ───────────────────────────────────────────────────────────── */}
      <section id="process" className="scroll-mt-24 py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiLayers className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Core Workflows</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Three gate movement workflows.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Choose the workflow that matches the material movement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Workflow 1: Material Inward */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="[perspective:1000px] h-[450px] group cursor-pointer"
              onClick={() => toggleFlipCard(1)}
            >
              <div
                className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-[32px] ${
                  flippedCard === 1 ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Card Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[32px] p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] flex flex-col justify-between">
                  <div>
                    {/* Visual Graphic Banner */}
                    <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-sky-50 via-sky-100/50 to-blue-50 border border-sky-100/80 flex items-center justify-center relative overflow-hidden mb-6">
                      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-[#41a0c8]/10 blur-xl" />
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-sky-100 flex items-center justify-center text-[#1267a7]">
                          <FiTruck className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">Entry</span>
                          <div className="w-10 h-0.5 bg-sky-300 relative my-1">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#1267a7] rounded-full" />
                          </div>
                          <span className="text-[10px] font-bold text-emerald-600">Gate Verified</span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-emerald-100 flex items-center justify-center text-emerald-600">
                          <FiFileText className="w-7 h-7" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#062039] mb-3">Material Inward</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Vehicle arrives with PO and invoice. Scan PO QR, fetch SAP details, verify gate entry and tag documents.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#41a0c8]">
                    <span>PO scan & SAP 3-way check</span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#062039] to-[#0d2a4a] text-white rounded-[32px] p-7 shadow-2xl flex flex-col justify-between border border-white/10">
                  <div>
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                      <span className="px-3 py-1 rounded-lg bg-sky-400/20 text-[#9eddf7] font-black text-xs uppercase tracking-wider">
                        Material Inward
                      </span>
                      <span className="text-xs font-semibold text-[#41a0c8]">SAP Integrated</span>
                    </div>

                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          1
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Vehicle arrives at gate with PO and invoice copy
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          2
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Scan PO QR code or invoice to capture reference number
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          3
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Auto fetch and match PO item lines with SAP in real-time
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          4
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Create gate-entry record with weighment and vehicle validation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          5
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Tag documents into AUGGIT eDMS and approve vehicle inward entry
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#9eddf7]">
                    <span className="font-semibold">SAP 3-Way Matched</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workflow 2: Sales Dispatch */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="[perspective:1000px] h-[450px] group cursor-pointer"
              onClick={() => toggleFlipCard(2)}
            >
              <div
                className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-[32px] ${
                  flippedCard === 2 ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Card Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[32px] p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] flex flex-col justify-between">
                  <div>
                    {/* Visual Graphic Banner */}
                    <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-emerald-50 via-teal-100/50 to-emerald-100/40 border border-emerald-100/80 flex items-center justify-center relative overflow-hidden mb-6">
                      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-emerald-400/10 blur-xl" />
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-emerald-100 flex items-center justify-center text-emerald-600">
                          <FiLayers className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Dispatch</span>
                          <div className="w-10 h-0.5 bg-emerald-300 relative my-1">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                          </div>
                          <span className="text-[10px] font-bold text-teal-600">Barcode Pass</span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-teal-100 flex items-center justify-center text-teal-600">
                          <FiTruck className="w-7 h-7" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#062039] mb-3">Sales Dispatch</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Use SAP sales order and outbound delivery. Generate dispatch records and unique QR barcode pass for exit verification.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#41a0c8]">
                    <span>Outbound delivery & barcode pass</span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#062039] to-[#09352e] text-white rounded-[32px] p-7 shadow-2xl flex flex-col justify-between border border-white/10">
                  <div>
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                      <span className="px-3 py-1 rounded-lg bg-emerald-400/20 text-emerald-300 font-black text-xs uppercase tracking-wider">
                        Sales Dispatch
                      </span>
                      <span className="text-xs font-semibold text-[#41a0c8]">SAP Integrated</span>
                    </div>

                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          1
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Fetch SAP Sales Order and Outbound Delivery details
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          2
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Verify picking, packing and post Goods Issue (GI) in SAP
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          3
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Generate required dispatch documents and unique QR / barcode gate pass
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          4
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Perform security gate scan of vehicle and dispatch barcode
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          5
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Record gate exit timestamp and auto-archive e-way bill in eDMS
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-300">
                    <span className="font-semibold">SAP Outbound Synced</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Workflow 3: Material Outward */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="[perspective:1000px] h-[450px] group cursor-pointer"
              onClick={() => toggleFlipCard(3)}
            >
              <div
                className={`relative w-full h-full duration-700 [transform-style:preserve-3d] transition-transform rounded-[32px] ${
                  flippedCard === 3 ? "[transform:rotateY(180deg)]" : "group-hover:[transform:rotateY(180deg)]"
                }`}
              >
                {/* Card Front */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white rounded-[32px] p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] flex flex-col justify-between">
                  <div>
                    {/* Visual Graphic Banner */}
                    <div className="w-full h-48 rounded-2xl bg-gradient-to-br from-amber-50 via-amber-100/50 to-orange-50 border border-amber-100/80 flex items-center justify-center relative overflow-hidden mb-6">
                      <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-amber-400/10 blur-xl" />
                      <div className="flex items-center gap-3 relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-amber-100 flex items-center justify-center text-[#d97706]">
                          <FiRefreshCw className="w-7 h-7" />
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Outward</span>
                          <div className="w-10 h-0.5 bg-amber-300 relative my-1">
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#d97706] rounded-full" />
                          </div>
                          <span className="text-[10px] font-bold text-orange-600">RGP / NRGP</span>
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white shadow-md border border-orange-100 flex items-center justify-center text-orange-600">
                          <FiShield className="w-7 h-7" />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-[#062039] mb-3">Material Outward</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      Capture material, purpose, destination and vehicle. Approve request, update SAP goods-movement, generate RGP/NRGP and log exit.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#41a0c8]">
                    <span>RGP / NRGP material control</span>
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Card Back */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-[#062039] to-[#3a2007] text-white rounded-[32px] p-7 shadow-2xl flex flex-col justify-between border border-white/10">
                  <div>
                    <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                      <span className="px-3 py-1 rounded-lg bg-amber-400/20 text-[#f7c037] font-black text-xs uppercase tracking-wider">
                        Material Outward
                      </span>
                      <span className="text-xs font-semibold text-[#41a0c8]">SAP Integrated</span>
                    </div>

                    <ul className="space-y-3.5">
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          1
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Capture material, quantity, purpose, destination and vehicle details
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          2
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Department head or authorized manager approves outward request
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          3
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Update relevant SAP goods-movement transaction (e.g. 541 for Subcontracting)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          4
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Generate verified RGP (with return date) or NRGP pass with QR code
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#1267a7] text-white flex items-center justify-center shrink-0 text-xs font-black shadow-sm mt-0.5 border border-sky-400/30">
                          5
                        </span>
                        <span className="text-sm font-medium text-slate-200 leading-snug">
                          Gate officer scans pass, checks vehicle and logs gate exit confirmation
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#f7c037]">
                    <span className="font-semibold">RGP / NRGP Controlled</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PASS TYPES (RGP & NRGP CLEARLY MANAGED)
          ───────────────────────────────────────────────────────────── */}
      <section id="rgp" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiShield className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Pass Types</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              RGP and NRGP, clearly managed.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Track material according to whether it is expected to return.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* RGP Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-md space-y-5"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#1267a7] border border-blue-100 text-[11px] font-black uppercase tracking-wider">
                RGP · RETURNABLE
              </span>
              <h3 className="text-2xl font-bold text-[#062039]">Material expected to return</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For temporary outward movement such as repair, job work or testing. The pass remains
                open until the return is verified.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  "Request approval",
                  "RGP + due date",
                  "QR verification",
                  "Material exits",
                  "Return checked",
                  "SAP update & close",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center font-bold text-[11px] text-[#062039]"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* NRGP Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-md space-y-5"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-amber-50 text-[#d97706] border border-amber-100 text-[11px] font-black uppercase tracking-wider">
                NRGP · NON-RETURNABLE
              </span>
              <h3 className="text-2xl font-bold text-[#062039]">Material will not return</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For permanent outward movement. Record the movement purpose, destination and
                applicable supporting documents.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {[
                  "Request approval",
                  "NRGP generated",
                  "QR verification",
                  "Material exits",
                  "Exit confirmed",
                  "NRGP closed",
                ].map((step, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center font-bold text-[11px] text-[#062039]"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. LIVE APPLICATION SCREENS (FROM OWN PUBLIC FOLDER)
          ───────────────────────────────────────────────────────────── */}
      <section className="scroll-mt-24 py-20 sm:py-28 bg-white">
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
              <span>Live Application Screens</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              See the AUGGIT Gate Pass system.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Actual screens from the current application, showing day-to-day gate operations and
              controls.
            </p>
          </motion.div>

          {/* Screen Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {liveScreens.map((screen, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col group"
              >
                <div
                  className="relative h-60 bg-slate-50 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(screen)}
                >
                  <img
                    src={screen.src}
                    alt={screen.title}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#062039]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-xl bg-white text-[#062039] font-bold text-xs flex items-center gap-1.5 shadow-lg">
                      <FiMaximize2 className="w-3.5 h-3.5" />
                      View Screen
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-[#062039] mb-1.5">{screen.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{screen.desc}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#062039]/80 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-4xl w-full p-4 sm:p-6 space-y-4 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-[#062039]">{selectedImage.title}</h3>
                  <p className="text-xs text-slate-500">{selectedImage.desc}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <FiX className="w-4 h-4" />
                </button>
              </div>
              <div className="rounded-2xl overflow-hidden bg-slate-50 max-h-[70vh] flex items-center justify-center p-2">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="max-h-[65vh] w-auto object-contain"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────────────────────────────
          6. SAP INTEGRATION SECTION (RE-STYLED WITH CLEAN AUGGIT THEME & BRANDING)
          ───────────────────────────────────────────────────────────── */}
      <section id="sap" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#062039] via-[#0d2a4a] to-[#081e35] rounded-[36px] p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            {/* Background glowing rings */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#41a0c8]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#1267a7]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-5"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm">
                  <SiSap className="w-4 h-4 text-[#41a0c8]" />
                  <span>SAP INTEGRATION</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                  Gate operations connected to SAP.
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  AUGGIT connects gate-pass activity with the relevant SAP business references and
                  goods-movement updates. Related gate records, weighment slips and supporting
                  documents are retained in AUGGIT eDMS for immediate retrieval, audit compliance,
                  and zero duplicate manual entry.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200">
                    <img src="/images/sap-separated.png" alt="SAP Logo" className="h-6 w-auto object-contain brightness-0 invert" />
                    <span>Real-time BAPI & RFC Connectors</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Interactive Integration Points */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    { title: "PO Matching", desc: "PO details auto-fetched and validated against delivery items" },
                    { title: "Sales & Outbound", desc: "Syncs with SAP sales orders and outbound delivery orders" },
                    { title: "Goods Issue (GI)", desc: "Trigger Goods Issue directly upon gate exit verification" },
                    { title: "Goods Movement", desc: "Instant movement type updates (MIGO / MB1B / MB1C)" },
                    { title: "QR / Barcode", desc: "Security barcode scan checks live SAP pass authenticity" },
                    { title: "AUGGIT eDMS", desc: "Invoices, weighment slips and challans archived automatically" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xs transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-5 h-5 rounded-full bg-[#10b981] text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
                          ✓
                        </span>
                        <h4 className="font-bold text-sm text-white group-hover:text-[#9eddf7] transition-colors">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed pl-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. BUSINESS BENEFITS - 4-CARD DESIGN MATCHING USER IMAGE
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
              <span>Business Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Clearer control at every gate.
            </h2>
          </motion.div>

          {/* 4 Cards matching the exact uploaded image UI style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Multiservice Radar Style (Real-Time Gate Visibility) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              {/* Top Visual Box */}
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-4 relative overflow-hidden flex items-center justify-center">
                {/* Clean Radar Wave Rings */}
                <div className="absolute w-80 h-80 rounded-full border border-sky-200/50 pointer-events-none" />
                <div className="absolute w-60 h-60 rounded-full border border-sky-200/70 pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full border border-sky-300/60 pointer-events-none" />

                {/* Floating Node Badges with soft shadows */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 left-10 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-[#1267a7]"
                >
                  <FiTruck className="w-3.5 h-3.5 text-sky-500" />
                  <span>Inward PO</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-5 right-10 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-emerald-600"
                >
                  <FiLayers className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sales SO</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-6 left-8 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-amber-600"
                >
                  <FiRefreshCw className="w-3.5 h-3.5 text-amber-500" />
                  <span>RGP Loop</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute bottom-6 right-8 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-indigo-600"
                >
                  <FiShield className="w-3.5 h-3.5 text-indigo-500" />
                  <span>NRGP Exit</span>
                </motion.div>

                {/* Central Focus Badge */}
                <div className="relative z-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#062039] via-[#1267a7] to-[#41a0c8] text-white font-bold text-xs shadow-xl flex items-center gap-2.5 group-hover:scale-105 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="tracking-wide">AUGGIT Gate Engine</span>
                </div>
              </div>

              {/* Text */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Real-Time Gate Visibility</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Consolidated tracking across inward, outward, sales dispatch, and returnable records across all plant gates in one unified screen.
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
              {/* Top Visual Box */}
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Gate Passes Logged
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <b className="text-2xl font-black text-[#062039]">3,420</b>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        +40% efficiency
                      </span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white text-[10px] font-bold text-slate-500 shadow-2xs border border-slate-100">
                    Active Q2
                  </div>
                </div>

                {/* Smooth Curve Wave Vector */}
                <div className="relative h-24 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#41a0c8" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#41a0c8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,65 Q 60,70 120,40 T 220,25 T 320,8 L 320,80 L 0,80 Z"
                      fill="url(#chartGradient)"
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

                  {/* Floating Metric Card matching image */}
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-6 top-0 bg-white rounded-xl p-3 shadow-lg border border-slate-100 text-xs"
                  >
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Verification Speed</div>
                    <b className="text-[#062039] font-black text-sm block mt-0.5">&lt; 30 Seconds</b>
                  </motion.div>
                </div>
              </div>

              {/* Text */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Zero Document Leakage</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Real-time QR scanning and mandatory verification checks ensure no material passes the gate without approved SAP documents.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Ranking Bar Chart Style (Return Tracking) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              {/* Top Visual Box */}
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex items-end justify-center">
                <div className="flex items-end gap-3.5 pb-2">
                  <div className="w-9 h-16 rounded-t-xl bg-slate-200/80" />
                  <div className="w-9 h-24 rounded-t-xl bg-slate-300/80" />

                  {/* Highlighted Peak Bar */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="px-2.5 py-1 rounded-full bg-white shadow-md border border-slate-100 text-[10px] font-black text-[#1267a7] mb-2"
                    >
                      99.4% On-Time
                    </motion.div>
                    <div className="w-11 h-36 rounded-t-2xl bg-gradient-to-t from-[#1267a7] via-[#41a0c8] to-[#9eddf7] shadow-md" />
                  </div>

                  <div className="w-9 h-20 rounded-t-xl bg-slate-300/80" />
                  <div className="w-9 h-14 rounded-t-xl bg-slate-200/80" />
                </div>
              </div>

              {/* Text */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Faster Turnaround Time</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Eliminates physical logbooks and security phone calls, reducing vehicle gate wait times by over 65%.
                </p>
              </div>
            </motion.div>

            {/* Card 4: UI Connected Container Nodes (No Code / Workflow Style) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              {/* Top Visual Box */}
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full max-w-xs space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                    <span className="flex items-center gap-2">
                      <FiTruck className="w-4 h-4 text-[#41a0c8]" />
                      Gate Entry Validated
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold">Passed</span>
                  </div>

                  <div className="w-0.5 h-3 bg-sky-300 mx-auto" />

                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#1267a7] to-[#062039] text-white shadow-lg flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-2">
                      <SiSap className="w-4 h-4 text-[#9eddf7]" />
                      SAP Goods Issue Sync
                    </span>
                    <span className="text-[10px] text-[#f7c037]">Auto-Posted</span>
                  </div>

                  <div className="w-0.5 h-3 bg-sky-300 mx-auto" />

                  <div className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                    <span className="flex items-center gap-2">
                      <FiPaperclip className="w-4 h-4 text-[#10b981]" />
                      AUGGIT eDMS Vault
                    </span>
                    <span className="text-[10px] text-slate-400">Slip Attached</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Audit-Ready Compliance</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Complete immutable audit trails linking vehicle registration, driver KYC, weighment slips and SAP material documents.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional 4 Benefit Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Weighment Records",
                desc: "Capture and print vehicle gross, tare and net weight information directly at the gate.",
                icon: FiSliders,
              },
              {
                title: "Document Control",
                desc: "Keep supporting records tagged in AUGGIT eDMS for faster audits and instant lookups.",
                icon: FiPaperclip,
              },
              {
                title: "User Access",
                desc: "Configure role-based permissions for security, stores, weighment and plant managers.",
                icon: FiLock,
              },
              {
                title: "Audit Trail",
                desc: "Complete change history, timestamps and user logs for comprehensive regulatory reviews.",
                icon: FiClock,
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
          8. FAQS SECTION
          ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-24 py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiLayers className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Gate Pass Management FAQs
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Common questions about digital gate-pass operations and SAP connectivity.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-[#062039] hover:text-[#1267a7] flex items-center justify-between gap-4 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-[#1267a7] transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-sky-100" : ""
                      }`}
                    >
                      <FiChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. BOTTOM CTA SECTION
          ───────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="py-20 sm:py-28 bg-gradient-to-br from-[#062039] via-[#0d2a4a] to-[#062039] text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,160,200,0.18),transparent_50%)] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#f7c037]/20 text-[#f7c037] border border-[#f7c037]/30 text-xs font-bold uppercase tracking-widest">
            <span>AUGGIT AUTOMATION SUITE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Connect your gate operations with SAP.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            See how AUGGIT can support material inward, sales dispatch, RGP / NRGP and weighment
            processes with zero paperwork and complete traceability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/product/automation-suite/edms-demo"
              className="px-9 py-4 rounded-full bg-[#f7c037] hover:bg-[#eab308] text-[#062039] font-black text-sm uppercase tracking-wider shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Request a Demo</span>
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

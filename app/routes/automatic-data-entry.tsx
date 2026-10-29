import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiFileText,
  FiCpu,
  FiCheckCircle,
  FiArrowRight,
  FiDatabase,
  FiZap,
  FiShield,
  FiPercent,
  FiClock,
  FiLayers,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function AutomaticDataEntryPage() {
  const [selectedDoc, setSelectedDoc] = useState<"invoice" | "manifest" | "statement">("invoice");

  const industries = [
    { name: "Banking & Financial Services", desc: "Automate loan document processing, bank statement analysis, and KYC extraction." },
    { name: "Freight Forwarding & 3PL", desc: "Extract shipping bills, bill of lading, and multimodal manifests with zero manual keying." },
    { name: "Manufacturing & Heavy Industries", desc: "Auto-enter thousands of supplier bills into SAP FB60 and MIRO without data entry operators." },
    { name: "Retail & Consumer Goods", desc: "High-speed multi-store billing, store returns, and rebate reconciliation." },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffeda0]/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* 1. OVERVIEW HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
            <FiZap className="w-4 h-4 text-[#f7c037]" />
            AI & LLM Data Extraction Engine
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Automatic Data Entry{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              (ADE)
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Say goodbye to manual data entry teams and typing errors. Auggit ADE converts unstructured PDF scans, paper documents, and emails into structured data and posts directly into SAP & ERP transaction codes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/book-poc"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-bold text-sm shadow-xl shadow-[#41a0c8]/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Book Your Free POC</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/product/automation-suite/edms-demo"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-bold text-sm border border-slate-200 shadow-md hover:scale-105 transition-all"
            >
              Request a Live Demo
            </a>
          </div>
        </div>

        {/* 2. ADE EXTRACTION SHOWCASE */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
                Multimodal AI Processing
              </span>
              <h2 className="text-2xl font-extrabold text-[#062039] mt-0.5">
                From Unstructured Document to SAP Posting
              </h2>
            </div>
            <div className="flex gap-2">
              {[
                { id: "invoice", label: "Supplier Tax Invoice" },
                { id: "manifest", label: "Shipping Manifest" },
                { id: "statement", label: "Bank Statement" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedDoc(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedDoc === tab.id
                      ? "bg-[#062039] text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-[#062039]">
                {selectedDoc === "invoice" && "AI Extracts 30+ Header & Line Item Tax Fields"}
                {selectedDoc === "manifest" && "Multi-Container Logistics Manifest Extraction"}
                {selectedDoc === "statement" && "Bank Statement Transaction Reconciliation"}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unlike traditional rigid OCR that breaks when templates change, Auggit ADE uses neural language models and question-mapping algorithms to understand context, multi-line tables, tax breakdowns, and irregular fonts.
              </p>

              <div className="space-y-2.5 pt-2">
                {[
                  "Recognizes rotated scans, skewed mobile photos, and carbon copies",
                  "Auto-validates GSTIN, HSN codes, and CGST/SGST/IGST math",
                  "Direct RFC / BAPI execution of SAP FB60, MIRO, or VA01",
                  "Exception routing dashboard for human-in-the-loop review",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 rounded-2xl bg-[#062039] text-white border border-slate-700 shadow-xl space-y-4 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <span className="text-[#f7c037] font-bold uppercase tracking-wider text-[10px]">
                    Extracted JSON Payload
                  </span>
                  <span className="text-emerald-400 font-bold text-[10px]">99.8% Confidence</span>
                </div>

                <div className="space-y-1.5 text-slate-300 overflow-x-auto text-[11px] leading-relaxed">
                  <div>&#123;</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"document_type"</span>: "{selectedDoc.toUpperCase()}",</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"vendor_gstin"</span>: "27AABCA1234F1Z5",</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"invoice_number"</span>: "INV-2026/8941",</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"total_taxable_value"</span>: 450000.00,</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"cgst"</span>: 40500.00, <span className="text-[#9eddf7]">"sgst"</span>: 40500.00,</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"sap_posting_tcode"</span>: <span className="text-emerald-400 font-bold">"MIRO / FB60"</span>,</div>
                  <div className="pl-4"><span className="text-[#9eddf7]">"status"</span>: <span className="text-emerald-400 font-bold">"AUTOMATICALLY_POSTED"</span></div>
                  <div>&#125;</div>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Processing Time: 1.2 seconds</span>
                  <span className="text-[#41a0c8] font-bold">SAP Document #19000284 Generated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. KEY OPERATIONAL BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "99%+",
              label: "Field Accuracy",
              desc: "Eliminate costly keyboard errors, incorrect decimal points, and vendor duplicate billing.",
              icon: FiPercent,
            },
            {
              metric: "10X Faster",
              label: "Cycle Speed",
              desc: "What takes a human clerk 15 minutes to key in is completed and posted in under 3 seconds.",
              icon: FiClock,
            },
            {
              metric: "Zero Typos",
              label: "Mathematical Checks",
              desc: "Validates line items against header totals and statutory GST rates before SAP posting.",
              icon: FiShield,
            },
            {
              metric: "SAP Native",
              label: "BAPI & RFC Integration",
              desc: "Direct integration into standard SAP posting programs without modifying core SAP code.",
              icon: SiSap,
            },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#41a0c8]/10 text-[#41a0c8] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-3xl font-black text-[#062039] mb-1">{stat.metric}</div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#41a0c8] mb-2">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 4. INDUSTRY APPLICATIONS */}
        <div className="bg-gradient-to-br from-[#062039] to-[#1267a7] rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#f7c037]">
              Enterprise Scale
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Processing Millions of Enterprise Documents Annually
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 transition-all"
              >
                <h3 className="text-base font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. IN BOTTOM: BOOK YOUR FREE POC (EXPLICIT USER REQUIREMENT) */}
        <div className="relative rounded-3xl p-10 sm:p-16 bg-gradient-to-r from-[#062039] via-[#0d3b66] to-[#062039] text-white shadow-2xl overflow-hidden text-center space-y-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,160,200,0.15),transparent_50%)] pointer-events-none" />
          
          <span className="inline-block px-4 py-1 rounded-full bg-[#f7c037]/20 text-[#f7c037] border border-[#f7c037]/30 text-xs font-bold uppercase tracking-widest">
            Special Enterprise Offer
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Book Your Free Proof of Concept (POC)
          </h2>

          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Test Auggit's Automatic Data Entry on 100 of your actual supplier invoices or shipping manifests with zero financial commitment. We deploy a pilot environment connected to your SAP sandbox.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/book-poc"
              className="px-10 py-4 rounded-full bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-black text-sm uppercase tracking-wider shadow-xl hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Book Your Free POC Now</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/product/automation-suite/edms-demo"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
            >
              Request a Guided Demo
            </a>
          </div>

          <div className="pt-6 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-400" /> 14-Day Free Sandbox Pilot</span>
            <span className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-400" /> Enterprise NDA Guaranteed</span>
            <span className="flex items-center gap-1.5"><FiCheckCircle className="text-emerald-400" /> Dedicated SAP Architect Assigned</span>
          </div>
        </div>
      </div>
    </div>
  );
}

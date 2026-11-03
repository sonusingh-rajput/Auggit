import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCpu,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiDollarSign,
  FiPercent,
  FiClock,
  FiLayers,
  FiShield,
  FiUploadCloud,
  FiSend,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";
import ProcessFlow from "../components/ProcessFlow";

export default function ApAutomationPage() {
  const [invoiceForm, setInvoiceForm] = useState({
    name: "",
    email: "",
    number: "",
    remark: "",
    poNumber: "PO-2026-9042",
    company: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [matchingSimulation, setMatchingSimulation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMatchingSimulation(true);
    setTimeout(() => {
      setMatchingSimulation(false);
      setSubmitted(true);
    }, 1500);
  };

  const industries = [
    { name: "Manufacturing", desc: "Automate raw material 3-way matching across multi-plant goods receipts." },
    { name: "Automotive & OEM", desc: "Process thousands of JIT supplier invoices directly into SAP MIRO daily." },
    { name: "Retail & E-Commerce", desc: "Reconcile high-frequency supplier shipments and promotional debit notes." },
    { name: "Garments & Textiles", desc: "Match fabric meterage, shrinkage tolerances, and dye lot batch numbers." },
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
            <FiCpu className="w-4 h-4 text-[#f7c037]" />
            Accounts Payable Automation (MIRO – MIGO)
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            AI-Powered AP Automation &{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              MIRO – MIGO Matching
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Eliminate manual invoice processing. Ingest supplier invoices, extract line items with AI/LLM OCR, perform automated 3-way matching against SAP Purchase Orders and MIGO Goods Receipts, and book MIRO in seconds.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="#supplier-form"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-bold text-sm shadow-xl shadow-[#41a0c8]/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Submit Test Supplier Invoice</span>
              <FiArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/book-poc"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-bold text-sm border border-slate-200 shadow-md hover:scale-105 transition-all"
            >
              Book Your Free POC
            </a>
          </div>
        </div>

        {/* PROCESS FLOW (per Supplier Invoice Processing workflow) */}
        <ProcessFlow
          heading="Supplier Invoice Processing Workflow"
          tracks={[
            {
              label: "Invoice Capture and Matching",
              steps: [
                { title: "Supplier invoice received" },
                { title: "Invoice details extracted through AI-enabled data capture", detail: "Vendor, invoice number, date, tax and amount details." },
                { title: "Invoice linked with the relevant PO and GRN in Auggit eDMS", detail: "GRN linked where applicable." },
                { title: "Corresponding PO and supporting documents fetched" },
                { title: "Two-way or three-way matching performed", detail: "Two-way: PO and supplier invoice. Three-way: PO, GRN and supplier invoice." },
              ],
            },
            {
              label: "Matching Outcome",
              steps: [
                { title: "Discrepancy raised", detail: "Invoice parked, corrected, and the matching process repeated." },
                { title: "Invoice verified", detail: "Matching completed successfully; invoice proceeds to approval." },
              ],
            },
            {
              label: "Approval and Payment",
              steps: [
                { title: "Invoice approval workflow" },
                { title: "Invoice tagged and stored in Auggit eDMS" },
                { title: "Approved invoice posted in SAP" },
              ],
            },
          ]}
          outcome="Payment processed as per payment terms"
        />

        {/* 2. THE MIRO - MIGO 3-WAY MATCHING ARCHITECTURE */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
              Automated Reconciliations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-1">
              Zero-Touch 3-Way Matching Flow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              How Auggit connects Purchase Orders, MIGO Goods Receipts, and Supplier Invoices seamlessly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-8 h-8 rounded-full bg-[#41a0c8] text-white font-black text-xs flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-extrabold text-base text-[#062039] mb-1">
                Purchase Order (PO)
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Extracted directly from SAP ME23N / Purchase Register.
              </p>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-[11px] font-mono space-y-1 text-slate-600">
                <div className="flex justify-between"><span>PO No:</span> <span className="font-bold text-[#062039]">4500018920</span></div>
                <div className="flex justify-between"><span>Material:</span> <span>ST-PLATE-40MM</span></div>
                <div className="flex justify-between"><span>Qty / Price:</span> <span>100 TN @ ₹54,000</span></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-8 h-8 rounded-full bg-[#1267a7] text-white font-black text-xs flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-extrabold text-base text-[#062039] mb-1">
                Goods Receipt (MIGO)
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                Validated at plant gatepass & weighbridge checkpoints.
              </p>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-[11px] font-mono space-y-1 text-slate-600">
                <div className="flex justify-between"><span>MIGO Doc:</span> <span className="font-bold text-[#062039]">5000034102</span></div>
                <div className="flex justify-between"><span>Gross Weight:</span> <span>100.15 TN</span></div>
                <div className="flex justify-between"><span>Tolerance:</span> <span className="text-emerald-600 font-bold">Within 0.2% OK</span></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-8 h-8 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-extrabold text-base text-[#062039] mb-1">
                Automated SAP MIRO Booking
              </h3>
              <p className="text-xs text-slate-500 mb-3">
                AI extracts supplier invoice and auto-posts into SAP.
              </p>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-[11px] font-mono space-y-1 text-slate-600">
                <div className="flex justify-between"><span>Status:</span> <span className="text-emerald-600 font-bold">Matched 100%</span></div>
                <div className="flex justify-between"><span>Tax (GST):</span> <span>₹9,72,000 (2B Validated)</span></div>
                <div className="flex justify-between"><span>SAP MIRO:</span> <span className="font-bold text-[#062039]">Posted Automatically</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. SUPPLIER INVOICE FORM (EXPLICIT USER REQUIREMENT: name, email, number, remark) */}
        <div id="supplier-form" className="scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                  Interactive Test Portal
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039]">
                  Supplier Invoice Submission & AP Simulation
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Experience how your suppliers upload invoices and how our engine validates them in real time against PO and MIGO records.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Instant AI/LLM Line-Item Extraction</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Real-time GSTIN & TDS Rule Verification</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Simulated Parking / Posting in SAP MIRO</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <FiCheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900">
                      Supplier Invoice Processed Successfully!
                    </h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto">
                      Invoice for <span className="font-bold">{invoiceForm.name}</span> ({invoiceForm.number}) matched against SAP PO #{invoiceForm.poNumber}. Simulation status: Ready for MIRO Posting.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-6 py-2 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                    >
                      Test Another Invoice
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Supplier / Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={invoiceForm.name}
                          onChange={(e) => setInvoiceForm({ ...invoiceForm, name: e.target.value })}
                          placeholder="e.g. Anil Verma"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Supplier Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={invoiceForm.email}
                          onChange={(e) => setInvoiceForm({ ...invoiceForm, email: e.target.value })}
                          placeholder="vendor@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Supplier Phone / Contact Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={invoiceForm.number}
                          onChange={(e) => setInvoiceForm({ ...invoiceForm, number: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Target SAP PO Number
                        </label>
                        <input
                          type="text"
                          value={invoiceForm.poNumber}
                          onChange={(e) => setInvoiceForm({ ...invoiceForm, poNumber: e.target.value })}
                          placeholder="PO-2026-9042"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Remark / Invoice Notes *
                      </label>
                      <textarea
                        rows={2}
                        required
                        value={invoiceForm.remark}
                        onChange={(e) => setInvoiceForm({ ...invoiceForm, remark: e.target.value })}
                        placeholder="Add delivery note numbers, batch details, or tax remarks..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={matchingSimulation}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-extrabold text-sm shadow-xl shadow-[#41a0c8]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {matchingSimulation ? (
                        <span>Simulating MIRO - MIGO 3-Way Match...</span>
                      ) : (
                        <>
                          <span>Submit Supplier Invoice & Run 3-Way Match</span>
                          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 4. KEY OPERATIONAL BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "-70%",
              label: "Processing Cost",
              desc: "Slash per-invoice manual handling costs from ₹250 to less than ₹20 per invoice.",
              icon: FiDollarSign,
            },
            {
              metric: "99.4%",
              label: "AI OCR Accuracy",
              desc: "Handles tilted scans, multi-page tables, and variable tax tables without error.",
              icon: FiPercent,
            },
            {
              metric: "Near Zero",
              label: "Invoice Turnaround Time",
              desc: "Invoices processed and posted within minutes of delivery instead of days.",
              icon: FiClock,
            },
            {
              metric: "Direct SAP",
              label: "Native MIRO Integration",
              desc: "Direct RFC / BAPI integration into SAP ECC and SAP S/4HANA environments.",
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

        {/* 5. INDUSTRY APPLICATIONS */}
        <div className="bg-gradient-to-br from-[#062039] to-[#1267a7] rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#f7c037]">
              Enterprise Vertical Proven
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Engineered for High-Volume AP Departments
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

        {/* 6. BOTTOM CTA */}
        <div className="text-center bg-white rounded-3xl p-10 sm:p-14 border border-slate-200 shadow-xl space-y-5">
          <h2 className="text-3xl font-extrabold text-[#062039]">
            Ready to Automate Your SAP Accounts Payable?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Book a 14-day zero-risk Proof of Concept tailored to your SAP ECC or SAP S/4HANA landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="/book-poc"
              className="px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#348db2] text-white font-bold text-sm shadow-md transition-all"
            >
              Book Your Free POC →
            </a>
            <a
              href="/product/automation-suite/gate-pass"
              className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062039] font-bold text-sm transition-all"
            >
              Explore Gate Pass Management Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

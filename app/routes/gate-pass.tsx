import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiTruck,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiGrid,
  FiMapPin,
  FiClock,
  FiFileText,
  FiLayers,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";
import ProcessFlow from "../components/ProcessFlow";

export default function GatePassPage() {
  const [passType, setPassType] = useState<"inward" | "outward" | "returnable">("inward");

  const industries = [
    { name: "Heavy Manufacturing", desc: "Manage multi-gate inward steel, coal, and heavy machinery consignments." },
    { name: "Automotive Plants", desc: "Control thousands of daily component deliveries with synchronized dock bays." },
    { name: "Chemicals & Refineries", desc: "Hazardous material safety checks, driver PPE verification, and gate permits." },
    { name: "Pharmaceuticals", desc: "Cold-chain temperature logs and sealed container verification at factory gates." },
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
            <FiTruck className="w-4 h-4 text-[#f7c037]" />
            Plant Logistics & Security
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Digital Gate Pass{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Management
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Digitize every material entry and exit. Connect factory security gates with SAP Purchase Orders, Outbound Deliveries, and Weighbridges for 100% paperless logistics and zero leakage.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/product/automation-suite/edms-demo"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-bold text-sm shadow-xl shadow-[#41a0c8]/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Schedule Gate Pass Demo</span>
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

        {/* PROCESS FLOW (per Gate Pass Management workflow) */}
        <ProcessFlow
          heading="Gate Pass Management Workflow"
          subheading="Direction of movement decides the flow: material inward, sales movement, returnable (RGP) or non-returnable (NRGP) gate pass."
          tracks={[
            {
              label: "Material Inward",
              note: "Vehicle arrives at the gate carrying PO and invoice, or invoice only.",
              steps: [
                { title: "PO reference captured at the gate", detail: "PO available: embedded QR code scanned. Only invoice available: invoice scanned and PO number captured." },
                { title: "PO details fetched and matched in SAP", detail: "Vendor details, PO number, material, quantity." },
                { title: "Automated gate-entry document created" },
                { title: "Gate-entry document and invoice stored in Auggit eDMS", detail: "Tagged against the respective PO." },
                { title: "Gate entry approved", detail: "Vehicle permitted to enter." },
              ],
            },
            {
              label: "Sales Movement (Material Outward)",
              note: "Customer dispatch.",
              steps: [
                { title: "Sales order and outbound delivery created in SAP" },
                { title: "Material picked and packed for dispatch" },
                { title: "Goods issue posted in SAP" },
                { title: "Invoice, delivery challan and e-way bill generated", detail: "As applicable." },
                { title: "Sales gate pass generated", detail: "With unique QR/barcode." },
                { title: "Gate pass and dispatch documents stored in Auggit eDMS", detail: "Against the respective sales order / outbound delivery." },
                { title: "QR/barcode scanned and verified at the gate", detail: "Customer, material, quantity, vehicle, dispatch documents." },
                { title: "Material exit recorded and sales movement closed" },
              ],
            },
            {
              label: "RGP - Returnable Gate Pass",
              note: "Material is expected to return.",
              steps: [
                { title: "Outward movement initiated", detail: "Material, quantity, purpose, destination, vehicle details." },
                { title: "Request approved and SAP transaction updated", detail: "Relevant goods-movement transaction recorded." },
                { title: "RGP generated", detail: "QR/barcode, expected return date." },
                { title: "Stored in Auggit eDMS and verified at gate", detail: "Documents tagged; outbound weight captured, if applicable." },
                { title: "Material exits, RGP remains open", detail: "Return due date monitored." },
                { title: "Material returns to the gate", detail: "QR/RGP number scanned; quantity and condition verified." },
                { title: "Return updated in SAP and RGP closed" },
              ],
            },
            {
              label: "NRGP - Non-Returnable Gate Pass",
              note: "Material will not return.",
              steps: [
                { title: "Outward movement initiated", detail: "Material, quantity, purpose, destination, vehicle details." },
                { title: "Request approved and SAP transaction updated", detail: "Relevant goods-movement transaction recorded." },
                { title: "NRGP generated", detail: "QR/barcode, e-way bill if applicable." },
                { title: "Stored in Auggit eDMS and verified at gate", detail: "Documents tagged; outbound weight captured, if applicable." },
                { title: "Material exit recorded", detail: "QR/barcode scanned and exit confirmed." },
                { title: "NRGP closed" },
              ],
            },
          ]}
        />

        {/* 2. INTERACTIVE GATE PASS SIMULATOR */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
                Interactive Simulation
              </span>
              <h2 className="text-2xl font-extrabold text-[#062039] mt-0.5">
                Multi-Type Gate Movement Control
              </h2>
            </div>
            <div className="flex gap-2">
              {[
                { id: "inward", label: "Inward Material" },
                { id: "outward", label: "Outward Dispatch" },
                { id: "returnable", label: "Returnable Assets" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setPassType(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    passType === tab.id
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
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-[#062039]">
                {passType === "inward" && "Inward Raw Material & Goods Receipt Gate Pass"}
                {passType === "outward" && "Outward Finished Goods & Customer Dispatch Pass"}
                {passType === "returnable" && "Returnable Capital Asset & Tooling Movement"}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {passType === "inward" &&
                  "Drivers present electronic QR passes generated from vendor dispatch advices. Security scans the QR code via mobile tablet, verifying vehicle registration, driver KYC, and valid SAP PO line items before opening boom barriers."}
                {passType === "outward" &&
                  "Integrates directly with SAP Outbound Delivery (VL02N) and E-Way bill APIs. Gate barriers only open when gross weight matches the digital weighbridge and tax invoice is validated."}
                {passType === "returnable" &&
                  "Tracks equipment, repairable tooling, and returnable packaging sent to external contractors. Alerts managers when return deadlines approach and prevents unbilled material write-offs."}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#062039] flex items-center gap-1.5">
                    <FiGrid className="w-4 h-4 text-[#41a0c8]" />
                    QR-Code Validation
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Sub-second gate security scans</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-[#062039] flex items-center gap-1.5">
                    <SiSap className="w-4 h-4 text-[#062039]" />
                    Direct SAP Sync
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Real-time MIGO / Delivery updates</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-xl space-y-4">
                <div className="flex justify-between items-center border-b border-white/15 pb-3">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#f7c037]">
                      Digital Gate Pass
                    </div>
                    <div className="font-mono text-sm font-bold">GP-2026-88392</div>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active & Validated
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Vehicle No:</span> <span className="font-bold text-white">MH 12 RN 8920</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Driver Name:</span> <span className="font-bold text-white">Sunil Yadav</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>SAP PO / Delivery:</span> <span className="font-bold text-white">4500019283</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Entry Checkpoint:</span> <span className="font-bold text-white">Plant Gate #2 North</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Timestamp: 11:42 AM</span>
                  <span className="text-[#f7c037] font-bold">Weight Synced OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOMER STORY (per Auggit Solution - Partners deck, Use Case 5) */}
        <ProcessFlow
          eyebrow="Customer Story"
          heading="The 7-Step Manual Process Maze"
          subheading="A French fries manufacturer for McDonald's and PepsiCo ran an incredibly manual, un-tracked and scattered workflow. During audits, many documents went missing, because the process was spread across the PO team, gate staff, QC team, accounts and the CEO."
          tracks={[
            {
              label: "Before Auggit",
              note: "The final step was the bottleneck, delayed by manual compilation of all physical documents scattered across the 6 prior steps.",
              steps: [
                { title: "PO received on WhatsApp" },
                { title: "Truck arrives with e-way bill and invoice" },
                { title: "Gate team makes manual entries" },
                { title: "Quality team checks random potatoes" },
                { title: "If passed, truck goes to weighing and unload" },
                { title: "Accounts department enters documents" },
                { title: "Sent for CEO approval" },
              ],
            },
            {
              label: "With Auggit",
              steps: [
                { title: "Document workflow defined" },
                { title: "Tagging for traceability" },
                { title: "Online CEO approvals" },
                { title: "Zero document loss" },
              ],
            },
          ]}
        />

        {/* 3. KEY OPERATIONAL BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "80% Faster",
              label: "Gate Turnaround Time",
              desc: "Truck gate dwell times reduced from 45 minutes to under 8 minutes.",
              icon: FiClock,
            },
            {
              metric: "Zero Leakage",
              label: "100% Material Reconciled",
              desc: "No material exits the factory without an approved SAP invoice or returnable gate pass.",
              icon: FiShield,
            },
            {
              metric: "Digital Trail",
              label: "Camera & Boom Barrier Sync",
              desc: "Automated snapshot capture of vehicle license plates synced to every gate entry.",
              icon: FiTruck,
            },
            {
              metric: "SAP Integrated",
              label: "Auto-MIGO & Delivery Updates",
              desc: "Instant status reflection in SAP ERP modules without paper handoffs.",
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
              Enterprise Vertical Proven
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Securing High-Security Plant Gates Across India
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

        {/* 5. BOTTOM CTA */}
        <div className="text-center bg-white rounded-3xl p-10 sm:p-14 border border-slate-200 shadow-xl space-y-5">
          <h2 className="text-3xl font-extrabold text-[#062039]">
            Ready to Digitize Your Plant Logistics Gates?
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
              href="/product/automation-suite/weighbridge"
              className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062039] font-bold text-sm transition-all"
            >
              Explore Weighbridge Integration Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

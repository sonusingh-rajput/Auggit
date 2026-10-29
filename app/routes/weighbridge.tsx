import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiSliders,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiCamera,
  FiCpu,
  FiAlertTriangle,
  FiLayers,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

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

  const industries = [
    { name: "Steel & Mining", desc: "Heavy bulk ore, scrap metal, and finished coil weighment with tamper-proof IP indicators." },
    { name: "Cement & Aggregates", desc: "Automate continuous tipper truck gross and tare cycles with automated gate barrier release." },
    { name: "Agri & Sugar Mills", desc: "Sugarcane and grain truck weighment with seasonal multi-weighbridge synchronizations." },
    { name: "Chemicals & Petrochemicals", desc: "Liquid tanker density-compensated weight capture synced directly to SAP goods receipts." },
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
            <FiSliders className="w-4 h-4 text-[#f7c037]" />
            Hardware & SAP Integration
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Automated Weighbridge{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Integration
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Connect digital weighbridges directly to SAP ECC and SAP S/4HANA. Capture gross and tare weights automatically, take synchronized CCTV snapshots, and eliminate human operator tampering.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/product/automation-suite/edms-demo"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-bold text-sm shadow-xl shadow-[#41a0c8]/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Schedule Weighbridge Demo</span>
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

        {/* 2. LIVE INTERACTIVE WEIGHBRIDGE CAPTURE SIMULATOR */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
              Anti-Tamper Technology
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-1">
              Zero-Manual-Entry Weight Capture Flow
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Weight values read directly from the indicator hardware via RS232 / Ethernet socket.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="text-xl font-bold text-[#062039]">
                How Auggit Prevents Operator Weight Tampering
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Traditional weighbridge software allows operators to manually override numbers in case of discrepancy. Auggit removes all manual textboxes. The system continuously polls the indicator (Mettler Toledo, Avery, Essae, Cardinal), locks when weight stabilizes, and immediately grabs 3 camera snapshots (vehicle front, load bed, driver).
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Direct RS-232, Modbus & IP socket indicator connectivity",
                  "Synchronized 3-camera CCTV snapshot embedded on slip",
                  "SAP PO Tolerance check (Blocks MIGO if deviation > ±0.5%)",
                  "Automated boom barrier and traffic light interlock",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-xl space-y-4 text-center">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#f7c037]">
                  Digital Weight Indicator Readout
                </div>

                <div className="bg-[#031322] p-6 rounded-xl border border-white/10 font-mono">
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-wider">
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
                  className="w-full py-3 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  {simulationActive ? "Capturing Serial Feed..." : "Simulate Truck Scale Weight Capture"}
                </button>

                {weightCaptured && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left text-xs bg-white/10 p-3 rounded-lg border border-white/15 space-y-1 text-slate-200"
                  >
                    <div className="flex justify-between"><span>PO Target:</span> <span className="font-bold">42,000 KG</span></div>
                    <div className="flex justify-between"><span>Deviation:</span> <span className="text-emerald-300 font-bold">+180 KG (+0.42% OK)</span></div>
                    <div className="flex justify-between"><span>SAP MIGO Status:</span> <span className="text-emerald-300 font-bold">Approved for Posting</span></div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 3. KEY OPERATIONAL BENEFITS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              metric: "100%",
              label: "Tamper Proof",
              desc: "Zero manual edit boxes. Numbers originate straight from load cell hardware.",
              icon: FiShield,
            },
            {
              metric: "3-Camera",
              label: "Visual Proof",
              desc: "Synchronized license plate, load bed, and weighbridge platform photographic evidence.",
              icon: FiCamera,
            },
            {
              metric: "Auto-Tolerances",
              label: "SAP PO Validation",
              desc: "Automatically checks supplier bills against actual weighbridge receipts before MIGO.",
              icon: FiCpu,
            },
            {
              metric: "-85%",
              label: "Dispute Reductions",
              desc: "Eliminates claims between raw material suppliers, transporters, and plant billing.",
              icon: FiCheckCircle,
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
              Industrial Environments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Field Tested in India's Toughest Industrial Plants
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
            Ready to Automate Your Factory Weighbridges?
          </h2>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            Book a 14-day zero-risk Proof of Concept tailored to your weighbridge hardware and SAP landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <a
              href="/book-poc"
              className="px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#348db2] text-white font-bold text-sm shadow-md transition-all"
            >
              Book Your Free POC →
            </a>
            <a
              href="/product/automation-suite/automatic-data-entry"
              className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062039] font-bold text-sm transition-all"
            >
              Explore Automatic Data Entry (ADE) Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

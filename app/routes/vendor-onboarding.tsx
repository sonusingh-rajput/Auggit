import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiUserCheck,
  FiShield,
  FiCheckCircle,
  FiArrowRight,
  FiFileText,
  FiDollarSign,
  FiClock,
  FiSearch,
  FiAward,
  FiLayers,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function VendorOnboardingPage() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Supplier Self-Service Registration",
      desc: "Suppliers receive a secure digital invitation link and upload company details, banking information, and statutory certificates directly via mobile or desktop portal.",
      badge: "Zero Manual Paperwork",
    },
    {
      step: "02",
      title: "Real-Time Govt API Validations",
      desc: "Instant automated validation of GSTIN status, PAN-Aadhaar linking, MSME registration category, and bank account active status via automated penny-drop verification.",
      badge: "Instant API Verification",
    },
    {
      step: "03",
      title: "Automated Multi-Tier Approvals",
      desc: "Digital approval matrix routes profiles through procurement, finance, and legal teams with conditional SLA escalations and immutable audit trails.",
      badge: "Custom Routing",
    },
    {
      step: "04",
      title: "Auto-Creation of SAP Vendor Master (BP)",
      desc: "Approved vendor data automatically syncs into SAP ECC or SAP S/4HANA (XK01 / Business Partner) with zero manual re-keying or typing errors.",
      badge: "Live SAP Integration",
    },
  ];

  const industries = [
    { name: "Manufacturing", desc: "Automate onboarding for 5,000+ raw material & spare part vendors." },
    { name: "Retail & FMCG", desc: "Fast-track FMCG supplier cataloging and vendor compliance." },
    { name: "Pharmaceuticals", desc: "Strict GMP and US-FDA vendor qualification document validation." },
    { name: "Automotive", desc: "Tier-1 & Tier-2 parts vendor KYC, ISO audit tracking, and NDA signing." },
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
            <FiUserCheck className="w-4 h-4 text-[#f7c037]" />
            Enterprise Automation Suite
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Vendor Onboarding{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Platform
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Transform supplier onboarding from a 3-week manual nightmare into an automated 24-hour self-service workflow with real-time statutory verification and direct SAP master integration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="/product/automation-suite/edms-demo"
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-bold text-sm shadow-xl shadow-[#41a0c8]/25 hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>Schedule Vendor Demo</span>
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

        {/* 2. INTERACTIVE PROCESS TIMELINE */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
              Automated 4-Step Lifecycle
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-1">
              From Invitation to Active SAP Business Partner in Hours
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  activeStep === idx
                    ? "bg-[#062039] text-white border-[#062039] shadow-xl scale-[1.02]"
                    : "bg-slate-50 hover:bg-white text-slate-700 border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-2xl font-black ${
                      activeStep === idx ? "text-[#f7c037]" : "text-[#41a0c8]"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                      activeStep === idx
                        ? "bg-white/10 text-white"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p
                  className={`text-xs leading-relaxed ${
                    activeStep === idx ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. KEY OPERATIONAL BENEFITS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
              Proven Business Value
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-1">
              Measurable Impact on Procurement & Finance
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                metric: "90% Faster",
                label: "Onboarding Cycle Time",
                desc: "Reduce turnaround from 18 days to under 24 hours with zero manual back-and-forth.",
                icon: FiClock,
              },
              {
                metric: "100% Validated",
                label: "GSTIN & PAN Accuracy",
                desc: "Eliminate vendor master typos and 2B tax reconciliation mismatches at source.",
                icon: FiShield,
              },
              {
                metric: "Zero Fraud",
                label: "Bank Account Penny Drop",
                desc: "Instant automated confirmation of vendor bank account holder name matching invoice records.",
                icon: FiDollarSign,
              },
              {
                metric: "Direct SAP",
                label: "Automated Master Creation",
                desc: "Synchronizes directly into SAP ECC (XK01) or SAP S/4HANA Business Partner (BP).",
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
        </div>

        {/* 4. INDUSTRY APPLICATIONS */}
        <div className="bg-gradient-to-br from-[#062039] to-[#1267a7] rounded-3xl p-8 sm:p-12 text-white">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#f7c037]">
              Tailored for Enterprise Verticals
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold mt-1">
              Trusted Across High-Volume Supply Chains
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
            Ready to Automate Your Supplier Onboarding?
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
              href="/product/automation-suite/ap-automation"
              className="px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#062039] font-bold text-sm transition-all"
            >
              Explore AP Automation Next
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

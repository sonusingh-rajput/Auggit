import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiBriefcase,
  FiArrowRight,
  FiCheckCircle,
  FiTrendingUp,
  FiShield,
  FiLayers,
  FiBox,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function SolutionsPage() {
  const industries = [
    {
      id: "real-estate",
      title: "Real Estate & Infrastructure",
      badge: "Asset & Lease Governance",
      desc: "Manage thousands of lease agreements, tenant billing records, joint development deeds, and contractor invoices with sub-second metadata retrieval and automated SAP/ERP reconciliation.",
      features: [
        "Digital Vault for Project Approvals, NOCs & Title Deeds",
        "Automated Contractor Invoice 3-Way Matching",
        "Tenant Billing & Section 128 Audit Trails",
      ],
      caseStudySlug: "real-estate-document-vault",
      metric: "75% Faster Lease Audits",
    },
    {
      id: "manufacturing",
      title: "Heavy Manufacturing & Plants",
      badge: "Inward-to-Outward Control",
      desc: "From factory gatepass inwarding and digital weighbridge capture to raw material PO matching and automated SAP MIRO posting with zero human operator leakage.",
      features: [
        "Automated Weighbridge & CCTV Plate Snapshot Sync",
        "Digital Gate Passes for Trucks & Inward Consignments",
        "Automated MIRO – MIGO 3-Way Reconciliation",
      ],
      caseStudySlug: "apex-manufacturing-data-sovereignty",
      metric: "Zero Weight Leakage",
    },
    {
      id: "retails",
      title: "Retail & Multi-Store FMCG",
      badge: "High-Volume AP & Billing",
      desc: "Process multi-store vendor invoices, promotional debit notes, supplier price variance checks, and GST 2B reconciliation across hundreds of retail outlets seamlessly.",
      features: [
        "AI/LLM OCR Extraction for High-Volume Vendor Bills",
        "Automated Dispute & Shortage Note Generation",
        "Instant Point-of-Sale (POS) ERP Document Synchronization",
      ],
      caseStudySlug: "fmcg-supplier-invoice-automation",
      metric: "-80% Invoice Processing Cost",
    },
    {
      id: "garments",
      title: "Garments & Textiles (Version Control)",
      badge: "Design Pack & BOM Revisions",
      desc: "Maintain strict version control over garment tech packs, fabric lot lab reports, shrinkage test certificates, and export documentation across international buyers.",
      features: [
        "Tech Pack & BOM Revision Control (Zero Confusion)",
        "Dye Lot & Fabric Inspection Certificate Vault",
        "Automated Export Packing List & E-Way Generation",
      ],
      caseStudySlug: "garment-version-control-traceability",
      metric: "100% BOM Traceability",
    },
    {
      id: "airport",
      title: "Airports & Aviation Hubs",
      badge: "High-Security Logistics",
      desc: "Manage ground handling concessions, vendor airside entry permits, fueling receipts, and retail tenant revenue documentation in high-security aviation environments.",
      features: [
        "Airside Vendor Onboarding & Statutory Background Checks",
        "Ground Handling Equipment Gate Movement Tracking",
        "Aviation Fueling Slip & SAP MIRO Direct Verification",
      ],
      caseStudySlug: "airport-ground-handling-logistics",
      metric: "100% Airside Pass Compliance",
    },
    {
      id: "auto-manufacturer",
      title: "Auto Manufacturers & Tier-1 OEMs",
      badge: "JIT Assembly & Carve-Out",
      desc: "Power Just-In-Time (JIT) supplier parts delivery, 3-way PO-GRN verification, and selective data carving for legacy closed vehicle model systems without stopping production.",
      features: [
        "Automated S/4HANA Migration for 20+ Year Legacy Records",
        "Zero-Downtime Just-In-Time Supplier Invoicing",
        "Selective Legacy Data Carving (Thin Migration)",
      ],
      caseStudySlug: "german-luxury-carmaker-carveout",
      metric: "8 Months Faster S/4HANA Go-Live",
    },
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

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <FiBriefcase className="w-4 h-4 text-[#f7c037]" />
            Enterprise Industry Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Tailored Solutions for{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Discover how Auggit solves specific compliance, data carving, and automation bottlenecks across India's leading industrial sectors.
          </p>
        </div>

        {/* 6 Industry Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#41a0c8] to-[#1267a7] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#41a0c8]/10 text-[#41a0c8]">
                    {item.badge}
                  </span>
                  <span className="text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-[#062039] group-hover:text-[#41a0c8] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <div className="space-y-2 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <FiCheckCircle className="w-3.5 h-3.5 text-[#41a0c8] flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href="/casestudy"
                  className="text-xs font-bold text-[#41a0c8] group-hover:text-[#1267a7] transition-colors flex items-center gap-1.5"
                >
                  <span>Explore Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/book-poc"
                  className="text-xs font-bold text-slate-600 hover:text-[#062039]"
                >
                  Free POC
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-10 bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have a Custom Industry Requirement?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Our architects configure custom data slicing rules and workflow parameters tailored to your exact industry ERP schema.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="px-6 py-3 rounded-full bg-[#f7c037] text-[#062039] font-bold text-xs hover:bg-[#e5b02a] transition-all whitespace-nowrap"
            >
              Talk to Our Experts →
            </a>
            <a
              href="/book-poc"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all whitespace-nowrap"
            >
              Book Free POC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

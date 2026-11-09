import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FiBriefcase,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";

export default function SolutionsPage() {
  const industries = [
    {
      id: "vendor-management",
      title: "Manufacturing & Vendor AP",
      badge: "Mobile One-Click Approvals",
      desc: "Eliminate vendor payment bottlenecks and delivery delays with mobile one-click approvals, automated multi-stage routing, and real-time payment tracking.",
      features: [
        "Instant mobile approval workflows",
        "Tracked status changes across every voucher",
        "Prompt vendor payouts protecting market trust",
      ],
      caseStudySlug: "manufacturing-vendor-payment-delays",
      metric: "Instant Approvals",
    },
    {
      id: "procurement-finance",
      title: "Procurement & Finance Document Control",
      badge: "5-Document Verification",
      desc: "Centralize and track all five purchase documents—PO, Invoice, GRN, Quality Certificate, and Delivery Challan—to uncover missing bills and unfulfilled advance payments.",
      features: [
        "Full purchase cycle document tracking",
        "Detection of pending final invoices on advances",
        "Centralized cross-department repository",
      ],
      caseStudySlug: "cfo-centralized-purchase-document-tracking",
      metric: "Real-Time Visibility",
    },
    {
      id: "enterprise-license-free",
      title: "Enterprise Cross-Department Access",
      badge: "License-Free Archiving",
      desc: "Empower non-ERP personnel across legal, HR, and stores with immediate, secure document search and viewing—without purchasing costly named ERP licenses.",
      features: [
        "Zero ERP named license fees for viewers",
        "AI-powered OCR and metadata indexing",
        "Tamper-proof digital document vault",
      ],
      caseStudySlug: "enterprise-license-free-document-access",
      metric: "Zero License Costs",
    },
    {
      id: "steel-manufacturing",
      title: "Steel & Heavy Process Manufacturing",
      badge: "Tag-Based Audit Access",
      desc: "Replace endless physical store runs and lost files with tag-based digital filing. Pull every dispatch slip, test certificate, and excise record instantly during audits.",
      features: [
        "Instant tag-based multi-criteria retrieval",
        "Permanent digital preservation preventing lost files",
        "Complete paperless audit readiness",
      ],
      caseStudySlug: "steel-manufacturer-digital-documents",
      metric: "Zero Paper Runs",
    },
    {
      id: "food-processing",
      title: "Food Manufacturing & Processing",
      badge: "7-Step Process Control",
      desc: "Track critical workflow records across all seven operational steps—from purchase order to gate inward, quality testing, and accounts payable—preventing batch loss.",
      features: [
        "End-to-end 7-step process record tracking",
        "Lab test & quality certificate binding",
        "Complete physical & digital audit protection",
      ],
      caseStudySlug: "french-fries-manufacturer-workflow",
      metric: "Zero Document Loss",
    },
    {
      id: "airport-aviation",
      title: "Airports & Aviation Infrastructure",
      badge: "Lean SAP S/4HANA Migration",
      desc: "Keep live airport production systems lean and unburdened during SAP S/4HANA transitions using SLaiCE to carve and migrate only active data slices.",
      features: [
        "Selective data carving with SLaiCE",
        "Zero disruption to daily flight operations",
        "Controlled historical data offloading",
      ],
      caseStudySlug: "global-airport-sap-s4hana-migration",
      metric: "100% Core Focus",
    },
    {
      id: "auto-manufacturer",
      title: "Automotive Engineering & QA",
      badge: "On-Demand Test Provisioning",
      desc: "Provision precise, targeted test datasets from massive enterprise SAP databases on demand—accelerating development cycles and cutting storage overhead.",
      features: [
        "Exact business scenario data slicing",
        "Elimination of full system test copies",
        "Rapid QA provisioning with zero production risk",
      ],
      caseStudySlug: "automaker-ondemand-test-provisioning",
      metric: "Targeted Data Slices",
    },
    {
      id: "exim-compliance",
      title: "EXIM & International Trade Compliance",
      badge: "Customs & DGFT Governance",
      desc: "Digitize and index 30,000+ cross-border trade documents—Bills of Entry, shipping bills, customs declarations, and bank realizations—for statutory compliance.",
      features: [
        "AI/OCR extraction for multi-format trade records",
        "Centralized digital repository for DGFT/Customs audits",
        "Instant retrieval under Indian EXIM regulations",
      ],
      caseStudySlug: "exim-customs-compliance-digitization",
      metric: "100% Compliant",
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

        {/* 8 Industry Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
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
                <Link
                  to={`/casestudy/${item.caseStudySlug}`}
                  className="text-xs font-bold text-[#41a0c8] group-hover:text-[#1267a7] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/book-poc"
                  className="text-xs font-bold text-slate-600 hover:text-[#062039] cursor-pointer"
                >
                  Request Demo
                </Link>
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
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#f7c037] text-[#062039] font-bold text-xs hover:bg-[#e5b02a] transition-all whitespace-nowrap cursor-pointer"
            >
              Talk to Our Experts →
            </Link>
            <Link
              to="/book-poc"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all whitespace-nowrap cursor-pointer"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

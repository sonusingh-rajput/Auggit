import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const caseStudiesData = [
  {
    slug: "manufacturing-vendor-payment-delays",
    title: "How a Well-Known Manufacturing Company Ended Vendor Payment Delays with Mobile, One-Click Approvals",
    client: "A well-known Manufacturing company",
    industry: "Manufacturing",
    metric: "Instant Approvals",
    image: "https://plus.unsplash.com/premium_photo-1682144832625-6a9d99ec0244?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnVmYWN0dXJpbmclMjBmYWN0b3J5fGVufDB8fDB8fHww?auto=format&fit=crop&w=800&q=80",
    summary: "How a manufacturing company eliminated vendor payment delays and late deliveries using mobile, one-click approvals.",
    challenge: "The company faced late vendor payments because bills sat unapproved while waiting for physical signatures and manual paperwork chasing, which caused delayed deliveries and market reputation damage .",
    solution: "Auggit introduced mobile document access and one-click approvals through custom or built-in multi-stage approval workflows, along with tracked status changes on every voucher .",
    results: "Approvals happen instantly from anywhere, vendors are paid on time, and the company's market image has strengthened ."
  },
  {
    slug: "cfo-centralized-purchase-document-tracking",
    title: "How a CFO Found Every Missing Invoice with Centralized Purchase Document Tracking",
    client: "A company’s CFO",
    industry: "Procurement and Finance",
    metric: "Real-Time Visibility",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    summary: "How a CFO gained real-time visibility over the entire purchase cycle and eliminated missing final invoices .",
    challenge: "Purchase documents across the five-step cycle were scattered across departments, and advance payments made against proforma invoices had missing final bills that nobody could count .",
    solution: "Auggit centralized all purchase documents into a single searchable system with instant search, tracking, and patented Tag functionality and Tag Report .",
    results: "Achieved one single source of truth for every transaction, instant document search, and immediate visibility over missing invoices ."
  },
  {
    slug: "enterprise-license-free-document-access",
    title: "How a Large Enterprise Gave Employees Document Access Without Extra ERP Licenses",
    client: "A large enterprise running Reknown ERP",
    industry: "Enterprise Software",
    metric: "License-Free Access",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    summary: "How a large enterprise provided cross-departmental document access and stored external vendor documents without buying expensive additional ERP licenses .",
    challenge: "Documents were locked inside individual departments within the ERP, requiring expensive full ERP licenses for non-ERP users, while external vendor documents had no home at all .",
    solution: "Auggit provided license-free document viewing with role-based access, a proper home for non-ERP vendor documents, and API integrations connecting all locations and departments .",
    results: "Non-ERP users gained document access without extra license costs, vendor documents were managed effortlessly, and all departments were connected via API ."
  },
  {
    slug: "steel-manufacturer-digital-documents",
    title: "A leading Steel manufacturer Replaced an 80 km Daily Paper Run and Audit Panic with Real-Time Digital Documents",
    client: "SuryaDev Steel",
    industry: "Steel and Alloys",
    metric: "Zero Document Travel",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    summary: "How SuryaDev Steel stopped physical document transport over 80 km and eliminated pre-audit panic using real-time digital access .",
    challenge: "Sales bills created at a factory 80 km away required two staff members paid ₹15,000 per month to transport them physically, yet documents still went missing during audits amidst pre-audit scanning chaos .",
    solution: "Implemented Auggit's patented Tag functionality for real-time digital access, automatic document naming, Tally integration, and remote audit access .",
    results: "Eliminated daily physical document transport and manual renaming, enabled auditors to self-serve remotely and securely, and achieved full audit readiness with no manual effort ."
  },
  {
    slug: "french-fries-manufacturer-workflow",
    title: "How a French Fries Manufacturer Replaced a Seven-Step Manual Process with One Traceable Digital Workflow",
    client: "A French fries manufacturer supplying McDonald’s and PepsiCo",
    industry: "Food Processing",
    metric: "Zero Document Loss",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?auto=format&fit=crop&w=800&q=80",
    summary: "How a major food processor digitized a manual seven-step potato supply workflow to streamline CEO approvals and eliminate audit document losses .",
    challenge: "Incoming potato shipments moved through seven manual, untracked steps across five teams, resulting in scattered documents, delayed CEO approvals, and missing files during audits .",
    solution: "Auggit defined a complete document workflow from PO to approval, added smart tagging for transaction traceability, and enabled online CEO approvals with workflow automation .",
    results: "Achieved a clearly defined document workflow, real-time traceability at every step, online CEO approvals, and zero document loss ."
  },
  {
    slug: "global-airport-sap-s4hana-migration",
    title: "How a Top 50 Global Airport Achieved a Lean SAP S/4HANA Migration in 28 Weeks Using Data Slicing",
    client: "A top 50 global airport",
    industry: "Aviation and Transport",
    metric: "40-50% Cost & Time Savings",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    summary: "How a top 50 global airport accelerated its SAP ECC to S/4HANA migration using SLaiCE for targeted data carve-outs .",
    challenge: "Migrating a 20-year-old SAP ECC system with intertwined datasets spanning 2005 to 2026 required separating active operational data from historical records while maintaining strict security and audit compliance .",
    solution: "Deployed SLaiCE to carve out current financial year data for a lean production system and 9 years of historical data into a dedicated read-only archive system entirely within the SAP landscape .",
    results: "Achieved 40-50% savings in total migration cost and time, completed migration in exactly 28 weeks with zero functionality breaks, and ensured data never left the SAP landscape ."
  },
  {
    slug: "automaker-ondemand-test-provisioning",
    title: "How a Fortune Global 100 Automaker Eliminated 5-Day SAP Test Refreshes with On-Demand Data Provisioning",
    client: "A Fortune Global 100 Automaker",
    industry: "Automotive",
    metric: "~80% Test Footprint Reduction",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    summary: "How a Fortune Global 100 automaker replaced slow 5-day full-system production copies with surgical, on-demand test data provisioning .",
    challenge: "Constant 6TB full-data system refreshes took five full days every month, capping development sprints and delaying testing cycles without precise data filtering options .",
    solution: "Utilized SLaiCE for surgical, on-demand data provisioning filtering by company code, date range, and partner solution, while safely resuming mid-run after target downtime .",
    results: "Reduced provisioning wait from 5 days to on-demand, achieved an ~80% reduction in test data footprint, eliminated restart risks, and successfully completed a 4-run POC ."
  },
  {
    slug: "exim-customs-compliance-digitization",
    title: "How a Leading Organization Automated EXIM Customs Compliance by Digitizing 30,000 Documents",
    client: "A leading organization handling high-volume import/export transactions",
    industry: "Import-Export and Logistics",
    metric: "30,000 Documents Digitized",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary: "How an organization digitized 30,000 physical customs documents and automated export timeline verification using Auggit eDMS .",
    challenge: "Maintaining over 30,000 physical import-export documents led to manual transcription errors, severe data mismatches, and months-long delays in customs verification .",
    solution: "Deployed Auggit eDMS centralized repository powered by OCR, ML, and LLM data extraction to capture required consignment fields and generate structured Excel reports automatically .",
    results: "Digitized 30,000+ physical documents, eliminated manual reviews, generated structured Excel reports for regulatory reporting, and significantly optimized EXIM workflows ."
  }
];

export default function CaseStudiesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 case studies per page

  // Calculate pagination bounds
  const totalPages = Math.ceil(caseStudiesData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = caseStudiesData.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] py-12 sm:py-20 px-4 sm:px-6 lg:px-16 space-y-16 sm:space-y-20">

      {/* Header Banner */}
      <div className="max-w-4xl mx-auto text-center space-y-6 pt-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-white rounded-full border border-[#9eddf7] shadow-sm">
          📚 Enterprise Case Studies
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#062039] leading-tight">
          Proven Impact Across <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">Global Industries</span>
        </h1>
        <p className="text-[#353535] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Explore how leading organizations leverage Auggit’s SLaiCE compliance engines and eDMS platforms to transform operations.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map((study, index) => (
          <motion.div
            key={study.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="bg-white/95 backdrop-blur-2xl rounded-3xl overflow-hidden border border-[#e3e3e3] hover:border-[#9eddf7] shadow-[0_15px_40px_rgba(65,160,200,0.08)] flex flex-col justify-between group transition-all"
          >
            <div className="relative aspect-video overflow-hidden bg-slate-100">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#062039]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                {study.industry}
              </div>
              <div className="absolute bottom-4 right-4 bg-[#41a0c8] text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg">
                {study.metric}
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#979797] uppercase tracking-widest">{study.client}</span>
                <h3 className="text-xl font-bold text-[#062039] group-hover:text-[#41a0c8] transition-colors line-clamp-2">
                  {study.title}
                </h3>
                <p className="text-[#353535] text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {study.summary}
                </p>
              </div>

              <Link
                to={`/casestudy/${study.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#41a0c8] group-hover:text-[#1267a7] group-hover:translate-x-1 transition-all cursor-pointer"
              >
                <span>Read Full Case Study</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls Bar */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-3 rounded-xl bg-white border border-[#e3e3e3] text-[#353535] hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer shadow-sm"
            aria-label="Previous Page"
          >
            <FiChevronLeft className="w-4 h-4" />
          </button>

          {/* Numbered Page Buttons */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${currentPage === number
                ? "bg-[#41a0c8] text-white shadow-md shadow-[#41a0c8]/30"
                : "bg-white border border-[#e3e3e3] text-[#353535] hover:bg-slate-50"
                }`}
            >
              {number}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-3 rounded-xl bg-white border border-[#e3e3e3] text-[#353535] hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-white transition-all cursor-pointer shadow-sm"
            aria-label="Next Page"
          >
            <FiChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

    </div>
  );
}
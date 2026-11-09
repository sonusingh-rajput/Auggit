import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface HowSolvedItem {
  problem: string;
  capability: string;
  result: string;
}

export interface CaseStudyItem {
  slug: string;
  aliases?: string[];
  title: string;
  client: string;
  businessFunction: string;
  industry: string;
  metric: string;
  image: string;
  summary: string;
  challengeHeadline: string;
  challenge: string;
  challengeBullets?: string[];
  purchaseChainTable?: { doc: string; confirms: string }[];
  sevenStepsTable?: { step: number; what: string; record: string }[];
  quote?: string;
  quoteAuthor?: string;
  solution: string;
  capabilitiesUsed?: string[];
  howSolvedTable: HowSolvedItem[];
  results: string[];
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: "manufacturing-vendor-payment-delays",
    aliases: ["manufacturing-vendor-payment-mobile-approvals"],
    title: "How a Well-Known Manufacturing Company Ended Vendor Payment Delays with Mobile, One-Click Approvals",
    client: "A well-known Manufacturing company (name withheld)",
    businessFunction: "Accounts payable and vendor management",
    industry: "Manufacturing",
    metric: "Instant Approvals",
    image: "https://plus.unsplash.com/premium_photo-1682144832625-6a9d99ec0244?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnVmYWN0dXJpbmclMjBmYWN0b3J5fGVufDB8fDB8fHww?auto=format&fit=crop&w=800&q=80",
    summary: "Auggit gave approvers instant access to every payment document, including on mobile, so bills no longer waited in queues for signatures. Approvals now happen instantly, vendors are paid on time, and the company’s market image has strengthened.",
    challengeHeadline: "Bills stuck waiting for a signature",
    challenge: "The company was constantly late in releasing vendor payments. Each bill had to wait in a queue for someone to physically sign and approve it, and the paperwork had to be chased by hand. The delays carried real business costs:",
    challengeBullets: [
      "Late payments: bills sat unapproved while vendors waited to be paid.",
      "Delayed deliveries: unpaid vendors slowed the goods the business depended on.",
      "Reputation damage: manual chasing and late payments eroded trust in the market."
    ],
    quote: "Approvals took forever, and goods got delayed.",
    quoteAuthor: "Client story",
    solution: "Auggit introduced mobile document access and one-click approvals through custom or built-in multi-stage approval workflows, along with tracked status changes on every voucher.",
    howSolvedTable: [
      {
        problem: "Bills waiting for a physical signature",
        capability: "One-click approvals through custom or built-in multi-stage approval workflows",
        result: "Approvals happen instantly"
      },
      {
        problem: "Paper documents and manual chasing",
        capability: "Every document available at the click of a button, including on a mobile screen",
        result: "Approvers can act from anywhere"
      },
      {
        problem: "No visibility into where a bill is stuck",
        capability: "Tracked status changes on every voucher",
        result: "Clear view of what is approved and what is pending"
      },
      {
        problem: "Vendors unpaid and trust affected",
        capability: "Faster approvals feeding faster payments",
        result: "Vendors paid on time; stronger market image"
      }
    ],
    results: [
      "Mobile access to all payment documents",
      "One-click approvals instead of queues and manual chasing",
      "Faster vendor payments and a stronger market image"
    ]
  },
  {
    slug: "cfo-centralized-purchase-document-tracking",
    title: "How a CFO Found Every Missing Invoice with Centralized Purchase Document Tracking",
    client: "A company’s CFO (company name withheld)",
    businessFunction: "Procurement and finance",
    industry: "Procurement and Finance",
    metric: "Real-Time Visibility",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    summary: "Auggit centralized the documents from the full purchase cycle (purchase order, invoice, GRN, quality certificate and delivery challan) in one searchable system. The CFO can now track every transaction in real time and see exactly which advance payments are still waiting for a final invoice.",
    challengeHeadline: "Advances paid, invoices never received",
    challenge: "The CFO needed to track documents across the entire purchase process, which creates a chain of five documents for each transaction. These documents were scattered across departments. The CFO then realized that advance payments had been made against Proforma Invoices, but the final invoices had never arrived, and no one knew how many were still pending.",
    purchaseChainTable: [
      { doc: "Purchase Order (PO)", confirms: "The buyer's order placed with the vendor" },
      { doc: "Invoice", confirms: "The vendor's bill for the goods or services" },
      { doc: "GRN (Goods Received Note)", confirms: "That the ordered goods were received" },
      { doc: "Quality Certificate", confirms: "That the goods met the required quality standard" },
      { doc: "Delivery Challan", confirms: "The delivery record that accompanies the goods" }
    ],
    quote: "Advance paid, invoice never came — no idea how many missing.",
    quoteAuthor: "Client story",
    solution: "Auggit centralized all purchase documents into a single searchable system with instant search, tracking, and patented Tag functionality and Tag Report.",
    howSolvedTable: [
      {
        problem: "Documents scattered across departments",
        capability: "All purchase documents stored in one centralized system",
        result: "One source of truth for every transaction"
      },
      {
        problem: "No way to count pending final invoices",
        capability: "Patented Tag functionality and Tag Report show which required documents are attached or missing for each transaction",
        result: "Missing invoices are visible immediately"
      },
      {
        problem: "Time lost looking for papers",
        capability: "Instant search and tracking",
        result: "Any document found in moments"
      }
    ],
    results: [
      "All purchase documents centralized in one easy-to-search system",
      "Instant search and real-time tracking for the CFO",
      "No more missing bills and no more guesswork"
    ]
  },
  {
    slug: "enterprise-license-free-document-access",
    aliases: ["enterprise-document-access-without-erp-licenses"],
    title: "How a Large Enterprise Gave Employees Document Access Without Extra ERP Licenses",
    client: "A large enterprise running Reknown ERP (name withheld)",
    businessFunction: "Enterprise document management",
    industry: "Enterprise Software",
    metric: "License-Free Access",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    summary: "Auggit let employees across departments view documents without a full ERP license, stored vendor documents that ERP could not hold, and connected all locations through API integrations. The result was broader access at a lower cost.",
    challengeHeadline: "Access that required a full ERP license",
    challenge: "The company kept its documents inside ERP, but they were locked away in individual departments. Giving an employee access meant buying an expensive ERP license, even for people who only needed to view a document and not use the full system. A second gap sat alongside it: vendor documents that ERP could not store had no home at all.",
    challengeBullets: [
      "Costly access: full ERP licenses for employees who needed only to view documents.",
      "Siloed documents: files locked inside individual departments.",
      "No place for external documents: vendor documents that ERP could not store."
    ],
    quote: "Non-ERP users had no access. External docs had no place.",
    quoteAuthor: "Client story",
    solution: "Auggit provided license-free document viewing with role-based access, a proper home for non-ERP vendor documents, and API integrations connecting all locations and departments.",
    howSolvedTable: [
      {
        problem: "Viewing documents required a full ERP license",
        capability: "Employees view documents from all departments in Auggit, with role-based access",
        result: "Access without extra ERP licenses"
      },
      {
        problem: "Vendor documents ERP could not store",
        capability: "Auggit stores vendor and other non-ERP documents alongside ERP documents",
        result: "A proper home for external documents"
      },
      {
        problem: "Documents locked in separate departments and locations",
        capability: "API integrations connect locations and departments",
        result: "Cross-department document sync"
      }
    ],
    results: [
      "Access to documents for non-ERP users without buying additional ERP licenses",
      "Vendor documents stored and managed effortlessly",
      "All departments and locations connected through API integrations"
    ]
  },
  {
    slug: "steel-manufacturer-digital-documents",
    aliases: ["steel-manufacturer-paper-run-realtime-audit"],
    title: "A leading Steel manufacturer Replaced an 80 km Daily Paper Run and Audit Panic with Real-Time Digital Documents",
    client: "Leading Steel Manufacturer (SuryaDev Steel)",
    businessFunction: "Factory-to-HO Logistics & Audits",
    industry: "Steel and Alloys",
    metric: "Zero Document Travel",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    summary: "Company headquartered in Chennai, stopped physically transporting sales bills from its factory 80 km away by using Auggit’s tagging feature for real-time digital access. Documents are now named automatically, Tally is integrated, and auditors access required files remotely, so records are audit-ready at any time.",
    challengeHeadline: "Three problems, one root cause",
    challenge: "SuryaDev Steel’s sales bills were created at a factory 80 km away from the Chennai head office. Everything that followed depended on moving paper, and three separate problems resulted:",
    howSolvedTable: [
      {
        problem: "1. Document transport hassle: Two staff members were assigned to carry documents to head office, paid ₹15,000 per month. Documents still went missing during audits.",
        capability: "Real-time digital documents are available instantly through the tagging feature. No more travel, no more chaos.",
        result: "Zero document transport"
      },
      {
        problem: "2. Audit panic: Before audits, teams scanned every file, renamed each one manually and saved everything to hard drives, and still ended up with missing files.",
        capability: "Documents are named automatically and Tally is integrated. All records are audit-ready instantly.",
        result: "No audit panic"
      },
      {
        problem: "3. Missing files during audits: Auditors asked for documents such as POs and invoices, and the team scrambled to find them.",
        capability: "Auditors log in to Auggit and access all required files remotely.",
        result: "Full remote auditor access"
      }
    ],
    quote: "Two staff paid ₹15,000/month just to carry bills 80 km to HO — yet documents still went missing.",
    quoteAuthor: "SuryaDev Steel, client story",
    solution: "Implemented Auggit's patented Tag functionality for real-time digital access, automatic document naming, Tally integration, and remote audit access.",
    capabilitiesUsed: [
      "Patented Tag functionality: every document is tagged to its transaction, so it is searchable and traceable the moment it is created.",
      "Automatic document naming: removes the manual renaming that preceded every audit.",
      "Tally integration: keeps accounting records and supporting documents connected.",
      "Remote audit access: internal and external auditors review documents from anywhere, without visiting the premises."
    ],
    results: [
      "No daily transport of documents between the factory and head office",
      "No pre-audit scanning, renaming and hard-drive backups",
      "Auditors self-serve the files they need, remotely and securely",
      "Full audit readiness with no manual effort"
    ]
  },
  {
    slug: "french-fries-manufacturer-workflow",
    aliases: ["french-fries-manufacturer-traceable-workflow"],
    title: "How a French Fries Manufacturer Replaced a Seven-Step Manual Process with One Traceable Digital Workflow",
    client: "A French fries manufacturer supplying brands such as McDonald’s and PepsiCo (company name withheld)",
    businessFunction: "Supply Chain & Plant Operations",
    industry: "Food Processing",
    metric: "Zero Document Loss",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D?auto=format&fit=crop&w=800&q=80",
    summary: "A French fries manufacturer supplying brands such as McDonald’s and PepsiCo used Auggit to define its complete document workflow, tag every document for traceability and move CEO approvals online. The outcome was zero document loss and no more approval delays.",
    challengeHeadline: "A seven-step process held together by paper",
    challenge: "Every incoming potato shipment moved through seven manual steps, and each step produced or depended on a document. The process was too manual and scattered across users: the PO team, gate staff, QC team, accounts and the CEO. Step 7 became the final bottleneck, because someone had to compile physical documents spread across the six earlier steps before the CEO could approve. During audits, many documents were missing.",
    sevenStepsTable: [
      { step: 1, what: "Purchase order received on WhatsApp", record: "Purchase order" },
      { step: 2, what: "Truck arrives", record: "E-way bill and invoice" },
      { step: 3, what: "Gate team makes manual entries", record: "Gate entry records" },
      { step: 4, what: "Quality team checks random potatoes", record: "Quality check" },
      { step: 5, what: "If passed, truck goes to weighing and unloading", record: "Weighing and unloading records" },
      { step: 6, what: "Accounts team enters the documents", record: "Accounts entries" },
      { step: 7, what: "Sent for CEO approval", record: "Complete document set" }
    ],
    quote: "From gate pass to invoice to QC to accounts — documents everywhere!",
    quoteAuthor: "Client story",
    solution: "Auggit defined a complete document workflow from PO to approval, added smart tagging for transaction traceability, and enabled online CEO approvals with workflow automation.",
    howSolvedTable: [
      {
        problem: "PO on WhatsApp and too many hands in one process",
        capability: "Complete document workflow defined in Auggit",
        result: "Every team works within one defined process"
      },
      {
        problem: "Documents scattered across five teams",
        capability: "Smart tagging for traceability",
        result: "Every document linked to its transaction and findable in real time"
      },
      {
        problem: "CEO approval delayed by manual compilation",
        capability: "Online approvals with workflow automation",
        result: "Approvals happen online, without gathering paper"
      },
      {
        problem: "Documents missing during audits",
        capability: "Real-time access and audit reporting",
        result: "Zero document loss"
      }
    ],
    results: [
      "A clearly defined document workflow from purchase order to approval",
      "Tagging for traceability at every step",
      "Online CEO approvals",
      "Zero document loss and no more delays"
    ]
  },
  {
    slug: "global-airport-sap-s4hana-migration",
    aliases: ["airport-lean-sap-s4hana-migration"],
    title: "How a Top 50 Global Airport Achieved a Lean SAP S/4HANA Migration in 28 Weeks Using Data Slicing",
    client: "A top 50 global airport",
    businessFunction: "Enterprise IT and Finance Operations",
    industry: "Aviation and Transport",
    metric: "40-50% Cost & Time Savings",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    summary: "A top 50 global airport accelerated its massive SAP transformation from ECC to S/4HANA by utilizing SLaiCE for targeted enterprise data carve-outs. SLaiCE enabled the airport to isolate current financial year data for a lean production system and carve out specific historical data for legal retention, directly resulting in a 40-50% reduction in total migration cost and time.",
    challengeHeadline: "Decades of data complicating SAP S/4HANA migration",
    challenge: "The top 50 global airport relied on an SAP ECC system installed 20 years prior, accumulating massive historical datasets spanning from 2005 to 2026. To migrate successfully to SAP S/4HANA, the airport needed to separate active operational data from historical records without exposing the organization to compliance risks or extended system downtime. The specific migration complexities included:",
    challengeBullets: [
      "Mixed data volumes: Historical enterprise data from FI, Logistics, Projects, custom tables, and add-ons were heavily intertwined within the 20-year-old system.",
      "Strict audit requirements: All data carve-outs required rigorous review and explicit approval by both internal and external auditors before execution.",
      "Security mandates: Enterprise data needed to remain strictly within the highly secure SAP landscape throughout the entire migration process."
    ],
    quote: "Our airport selected SLaiCE solution for our migration from SAP ECC to SAP S/4HANA. Two factors were decisive: the data stays within the SAP landscape throughout the migration, and the approach supports completion within seven to eight months.",
    quoteAuthor: "Customer Feedback",
    solution: "Deployed SLaiCE in-landscape SAP data slicing to carve out current financial year (2026) data for a lean production system and 9 years of historical data into a dedicated, compliant read-only archive system.",
    howSolvedTable: [
      {
        problem: "Need for a lean S/4HANA production system",
        capability: "SLaiCE carved out only the current financial year (2026) data directly from FI, Logistics, and custom tables",
        result: "The airport achieved a fully operational lean production system containing only necessary active data"
      },
      {
        problem: "Mandatory historical data retention requirements",
        capability: "SLaiCE carved out 9 years of complete business data (2017 to 2025) from 700+ tables",
        result: "The airport successfully created a dedicated, compliant read-only archive system covering 2005 to 2016"
      },
      {
        problem: "Lengthy and disruptive enterprise migration timelines",
        capability: "In-landscape SAP data slicing natively supporting completion within a heavily condensed seven to eight month window",
        result: "The complete SAP S/4HANA migration finalized in exactly 28 weeks with zero functionality breaks"
      }
    ],
    results: [
      "Achieved a 40-50% savings in total migration cost and time.",
      "Completed the SAP S/4HANA migration in exactly 28 weeks experiencing zero functionality breaks.",
      "Carved historical data to a strictly defined scope fully aligned with corporate retention requirements.",
      "Ensured enterprise data never left the SAP landscape, explicitly maintaining strict security compliance."
    ]
  },
  {
    slug: "automaker-ondemand-test-provisioning",
    title: "How a Fortune Global 100 Automaker Eliminated 5-Day SAP Test Refreshes with On-Demand Data Provisioning",
    client: "A Fortune Global 100 Automaker",
    businessFunction: "IT Development and SAP System Testing",
    industry: "Automotive",
    metric: "~80% Test Footprint Reduction",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    summary: "A Fortune Global 100 Automaker utilized SLaiCE to replace slow, full-system production dataset copies with surgical, on-demand test data provisioning. SLaiCE reduced the test environment footprint by approximately 80%, immediately shrinking a 5-day provisioning bottleneck into an on-demand capability that permanently accelerated development velocity.",
    challengeHeadline: "6TB full-system copies slowing development velocity",
    challenge: "The automaker's monthly development sprints were permanently capped by a severe test system provisioning bottleneck. Every system refresh required moving the entire 6TB production dataset into the test environment, a process that consumed five full days every single month. The specific development challenges included:",
    challengeBullets: [
      "Wasted developer time: Critical testing cycles frequently slipped because operational teams waited five days for system environments to refresh.",
      "Lack of precise data filtering: No existing tool could slice the complex IS-Auto landscape selectively by specific company code, date range, or partner solution without initiating a full system copy.",
      "Hidden database issues: Legacy custom tables contained incorrect delivery class settings that silently blocked enterprise data replication workflows."
    ],
    solution: "Surgical, on-demand enterprise data provisioning designed specifically for sprint-specific test environments, filtering SAP data by company code, date range, and partner solution.",
    howSolvedTable: [
      {
        problem: "5-day provisioning bottleneck for moving entire 6TB production datasets",
        capability: "Surgical, on-demand data provisioning actively filtering SAP data by company code, date range, and partner solution",
        result: "The grueling 5-day system wait was successfully reduced to immediate, on-demand test environment access"
      },
      {
        problem: "Massive, expensive enterprise test environments",
        capability: "SLaiCE accurately isolates and moves only the highly specific data footprint required for the active development sprint",
        result: "The automaker successfully achieved an ~80% reduction in the overarching test data sprint footprint"
      },
      {
        problem: "Target system crashes forcing total process restarts",
        capability: "Advanced intelligence enabled SLaiCE to safely resume mid-run seamlessly after target system downtime",
        result: "SLaiCE required no restart and experienced zero data loss during unplanned system outages"
      },
      {
        problem: "Silent operational errors blocking data replication",
        capability: "Deep SAP data inspection and system validation executed natively during the slicing process",
        result: "SLaiCE successfully surfaced hidden data integrity issues which were entirely fixed before impacting production"
      }
    ],
    results: [
      "Reduced enterprise test environment provisioning from a 5-day process directly to an on-demand capability.",
      "Achieved an approximately 80% total reduction in the required test data footprint per development sprint.",
      "Safely resumed data migration operations directly mid-run requiring no restart after unplanned target system downtime.",
      "Successfully approved a 4-run Proof of Concept (POC), immediately triggering the official production data move."
    ]
  },
  {
    slug: "exim-customs-compliance-digitization",
    aliases: ["exim-customs-compliance-digitizing-30000-documents"],
    title: "How a Leading Organization Automated EXIM Customs Compliance by Digitizing 30,000 Documents",
    client: "A leading organization handling high-volume import/export transactions (name withheld)",
    businessFunction: "EXIM (Export-Import) Department and Compliance",
    industry: "Import-Export and Logistics",
    metric: "30,000 Documents Digitized",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary: "A leading import-export organization utilized Auggit eDMS to successfully digitize 30,000 physical customs documents and fundamentally automate critical export timeline verification. Auggit proactively deployed advanced OCR, Machine Learning, and Large Language Models to extract specific consignment data, significantly accelerating mandatory compliance reporting for the EXIM department and government customs officials.",
    challengeHeadline: "30,000 physical documents threatening customs compliance",
    challenge: "The organization’s EXIM team needed to rigorously verify that specific imported consignments were subsequently exported within legally stipulated timeframes. The manual verification process was fundamentally failing under extreme document volume:",
    challengeBullets: [
      "Massive physical inventory: The organization maintained over 30,000 physical import-export documents manually stored inside physical files.",
      "Manual data entry: Staff physically reviewed thousands of documents, manually identified relevant consignment details, and transcribed extracted information into Excel spreadsheets.",
      "Compliance risks: Heavy reliance on manual transcription caused significant data mismatches, creating severe challenges when responding to formal customs department inquiries and government officials."
    ],
    quote: "We had thousands of physical import-export documents, and verifying whether consignments were exported within the required timeframe was becoming a months-long manual exercise.",
    quoteAuthor: "Client story",
    solution: "Deployed Auggit eDMS centralized repository powered by OCR, ML, and LLM data extraction to capture required consignment fields and generate structured Excel reports automatically.",
    howSolvedTable: [
      {
        problem: "30,000 physical documents stored in manual files",
        capability: "Auggit eDMS securely created a centralized, fully searchable digital document repository",
        result: "The EXIM team gained instant, faster access to relevant historical import-export information"
      },
      {
        problem: "Manual data entry causing severe data mismatches",
        capability: "Auggit utilized OCR, ML, and LLM-powered document processing to extract required fields",
        result: "The solution generated structured output automatically without requiring slow human transcription"
      },
      {
        problem: "Months-long reporting delays for customs officials",
        capability: "Auggit presented extracted consignment data explicitly in the required Excel format",
        result: "The EXIM team achieved highly structured data availability for immediate verification and regulatory reporting"
      }
    ],
    results: [
      "Successfully digitized 30,000+ physical import-export documents directly into a centralized, highly searchable Auggit eDMS repository.",
      "Eliminated slow manual document reviews by utilizing ML and LLM-powered extraction to automatically capture relevant consignment fields.",
      "Generated structured data natively in required Excel formats, significantly optimizing complex EXIM reporting workflows.",
      "Improved organizational visibility into mandatory export timelines, achieving a highly cost-effective alternative to prolonged manual verification exercises."
    ]
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
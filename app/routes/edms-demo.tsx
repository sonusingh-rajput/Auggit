import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import {
  FiCheckCircle,
  FiFileText,
  FiLayers,
  FiSearch,
  FiClock,
  FiShield,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiAlertTriangle,
  FiRefreshCw,
  FiLock,
  FiSmartphone,
  FiCloud,
  FiServer,
  FiTrendingUp,
  FiAward,
  FiMail,
  FiChevronDown,
  FiX,
  FiZoomIn,
  FiLinkedin,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

// 12 Key Functionalities
const FUNCTIONALITIES = [
  {
    icon: <FiLayers className="w-6 h-6 text-[#1267a7]" />,
    title: "Patented tagging",
    desc: "Maps each document to a specific business process or transaction automatically.",
  },
  {
    icon: <FiSearch className="w-6 h-6 text-[#1267a7]" />,
    title: "OCR-driven search",
    desc: "Search inside document content through structured metadata and full-text OCR.",
  },
  {
    icon: <FiClock className="w-6 h-6 text-[#1267a7]" />,
    title: "Version control",
    desc: "Maintains document versions with immutable timestamped audit history.",
  },
  {
    icon: <FiTrendingUp className="w-6 h-6 text-[#1267a7]" />,
    title: "Automatic data entry",
    desc: "Cut manual keying and eliminate human data entry errors in ERP reporting.",
  },
  {
    icon: <FiAward className="w-6 h-6 text-[#1267a7]" />,
    title: "Remote audit",
    desc: "Internal and statutory external auditors review documents in real time securely.",
  },
  {
    icon: <FiCheckCircle className="w-6 h-6 text-[#1267a7]" />,
    title: "Approval workflow",
    desc: "Configurable multi-level approval workflows with role-based governance.",
  },
  {
    icon: <FiFileText className="w-6 h-6 text-[#1267a7]" />,
    title: "Tag report",
    desc: "Complete visibility into mapped documents through the patented tagging framework.",
  },
  {
    icon: <FiUsers className="w-6 h-6 text-[#1267a7]" />,
    title: "Role-based access",
    desc: "Granular visibility and permission tiers based on organizational responsibilities.",
  },
  {
    icon: <FiMail className="w-6 h-6 text-[#1267a7]" />,
    title: "Email data sync",
    desc: "Seamlessly ingest business emails and vendor attachments into the central repository.",
  },
  {
    icon: <FiSmartphone className="w-6 h-6 text-[#1267a7]" />,
    title: "Mobile DMS",
    desc: "Review documents, track reports, and grant approvals directly on Android and iOS.",
  },
  {
    icon: <SiSap className="w-6 h-6 text-[#1267a7]" />,
    title: "SAP integrated DMS",
    desc: "Bi-directional linking connecting supporting documents to live SAP transactions.",
  },
  {
    icon: <FiShield className="w-6 h-6 text-[#1267a7]" />,
    title: "Security & compliance",
    desc: "Enterprise-grade encryption, statutory data compliance, and strict access controls.",
  },
];

// 12 Cross-Department Use Cases
const USE_CASES = [
  {
    dept: "Procurement (P2P)",
    family: "Procurement and Finance",
    refTx: "Purchase Order (PO)",
    internalDocs: ["Purchase Order", "Goods receipt (GRN/MIGO)", "Invoice document (MIRO)", "Gate entry"],
    externalDocs: ["Supplier invoice", "Delivery challan", "E-Way bill", "Weighbridge slip, quality certificate"],
    outcome: "Open a PO, see its documents and spot gaps against defined requirements in seconds.",
    stakeholders: "Procurement Head, Finance Head, Plant Head, CIO",
  },
  {
    dept: "Accounts payable",
    family: "Procurement and Finance",
    refTx: "Supplier invoice number",
    internalDocs: ["Purchase Order", "GRN", "Invoice posting", "Payment and approval records"],
    externalDocs: ["Supplier invoice", "Credit / debit note", "Service completion certificate", "Supporting expense documents"],
    outcome: "Faster invoice verification, fewer payment delays, and seamless audit traceability.",
    stakeholders: "CFO, AP Head, Finance Controller",
  },
  {
    dept: "Vendor onboarding",
    family: "Procurement and Finance",
    refTx: "Vendor ID / vendor master",
    internalDocs: ["Vendor creation request", "Approval records", "Vendor master record", "Verification checklist"],
    externalDocs: ["PAN, GST certificate", "MSME / Udyam, TAN", "Bank proof or cancelled cheque", "Incorporation documents"],
    outcome: "Complete vendor dossiers, zero chasing, and simplified statutory compliance checks.",
    stakeholders: "Procurement Head, Compliance Head",
  },
  {
    dept: "Import / export",
    family: "Supply Chain and Logistics",
    refTx: "Shipment / import file / PO",
    internalDocs: ["Purchase Order", "Goods receipt", "Customs cost postings", "Freight invoice postings"],
    externalDocs: ["Commercial invoice, packing list", "Bill of lading / air waybill", "Bill of entry, shipping bill", "C&F and port bills"],
    outcome: "End-to-end shipment visibility and instant retrieval of critical customs clearance records.",
    stakeholders: "Supply Chain Head, Logistics Head",
  },
  {
    dept: "Gate & material movement",
    family: "Supply Chain and Logistics",
    refTx: "Gate pass / vehicle entry",
    internalDocs: ["Gate entry record", "Returnable gate pass", "Non-returnable gate pass", "Goods movement record"],
    externalDocs: ["Delivery challan", "E-Way bill", "Transporter documents", "Weighbridge slip"],
    outcome: "Complete chain of custody and traceability for incoming and outgoing material.",
    stakeholders: "Plant Head, Stores Head, Security/Admin",
  },
  {
    dept: "Sales and dispatch",
    family: "Supply Chain and Logistics",
    refTx: "Sales order / delivery number",
    internalDocs: ["Sales order", "Delivery document", "Goods issue record", "Sales invoice"],
    externalDocs: ["Customer purchase order", "Proof of delivery", "Customer acknowledgement", "Freight invoice"],
    outcome: "Rapid customer query resolution and instant proof-of-delivery retrieval for receivables.",
    stakeholders: "Sales Ops, Logistics, AR Head",
  },
  {
    dept: "Production",
    family: "Manufacturing and Quality",
    refTx: "Production order / batch",
    internalDocs: ["Production order", "Material issue records", "Production confirmation", "Finished goods receipt"],
    externalDocs: ["Supplier material certificate", "Raw material test certificate", "Third-party inspection report", "Job-work challan"],
    outcome: "Unbroken production batch traceability and unified retrieval of batch-specific certifications.",
    stakeholders: "Plant Head, Production Head",
  },
  {
    dept: "Quality (QA/QC)",
    family: "Manufacturing and Quality",
    refTx: "Inspection lot / batch",
    internalDocs: ["Inspection lot and results", "Usage decision", "Non-conformance report", "Corrective action report"],
    externalDocs: ["Certificate of analysis", "Material test certificate", "Calibration certificate", "Third-party inspection report"],
    outcome: "Faster quality investigations, ISO conformity, and audit-ready inspection evidence.",
    stakeholders: "Quality Head, QA/QC Manager",
  },
  {
    dept: "Contracts and legal",
    family: "Records and Compliance",
    refTx: "Contract ID / agreement number",
    internalDocs: ["Contract request", "Internal approvals", "Review comments", "Renewal tracker"],
    externalDocs: ["Signed contract, amendments", "NDA", "Licences and certificates", "External audit evidence"],
    outcome: "Centralized contract lifecycle retrieval, proactive renewal alerts, and structured compliance.",
    stakeholders: "Legal Head, Company Secretary, Internal Audit",
  },
  {
    dept: "Maintenance",
    family: "Assets and Employees",
    refTx: "Maintenance order / equipment ID",
    internalDocs: ["Maintenance notification", "Work order", "Confirmation", "Equipment history"],
    externalDocs: ["Service report", "Vendor quotation", "Repair report", "Service invoice"],
    outcome: "Instant access to machinery maintenance history, preventive service logs, and warranty records.",
    stakeholders: "Plant Head, Maintenance Head",
  },
  {
    dept: "Capex and projects",
    family: "Assets and Employees",
    refTx: "Project ID / asset ID",
    internalDocs: ["Capex request", "Budget approval", "Purchase Order, goods receipt", "Asset capitalization"],
    externalDocs: ["Vendor quotation", "Engineering drawings", "Installation and commissioning", "Warranty, contractor invoice"],
    outcome: "Complete capital project dossier with instant asset capitalization and warranty tracking.",
    stakeholders: "CFO, Project Head, Fixed Assets Controller",
  },
  {
    dept: "HR records",
    family: "Assets and Employees",
    refTx: "Employee ID / onboarding case",
    internalDocs: ["Offer approval", "Appointment record", "Onboarding checklist", "Training records"],
    externalDocs: ["Signed offer / agreement", "Identity and qualifications", "Bank details", "Previous employment records"],
    outcome: "Secure, compliant employee dossiers with streamlined onboarding verification checks.",
    stakeholders: "HR Head, HR Operations",
  },
];

// Role-Based Value Stack
const ROLE_TABS = [
  {
    role: "Accountants",
    headline: "Locate any record instantly without switching tabs.",
    benefits: [
      {
        title: "Instant document retrieval",
        desc: "Every supporting invoice, challan, and PO is indexed and searchable in one central hub.",
      },
      {
        title: "Automated ERP linking",
        desc: "SAP transactions connect to their corresponding documents automatically via background sync.",
      },
    ],
  },
  {
    role: "IT and Systems",
    headline: "Integrate once. Connect everywhere with zero disruption.",
    benefits: [
      {
        title: "APIs & configurable integration",
        desc: "Connect SAP ECC, S/4HANA, and third-party accounting systems without core architectural redesign.",
      },
      {
        title: "Secure by enterprise design",
        desc: "Dedicated AWS cloud, AES-256 encryption in transit and at rest, and strict role-based access.",
      },
    ],
  },
  {
    role: "Auditors",
    headline: "Evidence, already mapped and verified.",
    benefits: [
      {
        title: "Real-time remote audit",
        desc: "External and internal audit teams inspect complete document trails without requesting paper files.",
      },
      {
        title: "Cryptographic timestamped history",
        desc: "Single source of truth with immutable change logs and multi-version tracking.",
      },
    ],
  },
  {
    role: "Ops Managers",
    headline: "Less time chasing records. More time getting things done.",
    benefits: [
      {
        title: "Fewer follow-up requests",
        desc: "Patented metadata tagging eliminates repetitive phone calls and email requests across plants.",
      },
      {
        title: "Approvals on the move",
        desc: "Inspect transactions, review documents, and authorize approvals directly from mobile devices.",
      },
    ],
  },
  {
    role: "Risk & Legal",
    headline: "See the gap before it becomes an audit finding.",
    benefits: [
      {
        title: "Proactive gap detection",
        desc: "Identify unlinked, unverified transactions and missing statutory certificates before external review.",
      },
      {
        title: "Demonstrable internal controls",
        desc: "Automated audit logs, role-restricted views, and Section 128 compliance out of the box.",
      },
    ],
  },
];

// 12 FAQs
const FAQS = [
  {
    q: "What is Auggit eDMS?",
    a: "Auggit eDMS is an enterprise electronic document management system that stores, classifies, reviews, and accesses corporate documents. Unlike generic file storage, it directly binds documents to your ERP transactions through patented automated tagging.",
  },
  {
    q: "Where is my data stored?",
    a: "All documents and metadata are securely hosted on high-availability AWS cloud infrastructure, with AES-256 encryption in transit (TLS 1.3) and at rest.",
  },
  {
    q: "Who owns the data?",
    a: "Your organization maintains 100% data ownership. Auggit provides the enterprise software and processing infrastructure only.",
  },
  {
    q: "Does it support multiple entities and company codes?",
    a: "Yes. Auggit eDMS natively accommodates multi-company group architectures, distinct legal entities, business units, and individual plant locations with partitioned access.",
  },
  {
    q: "Can it integrate with our enterprise systems?",
    a: "Yes. Auggit offers certified, non-invasive connectors for SAP ECC, SAP S/4HANA, QuickBooks, and robust REST APIs for legacy ERP and accounting software.",
  },
  {
    q: "Will it scale as our document volume grows?",
    a: "Yes. The architecture is engineered to scale seamlessly across millions of monthly documents and thousands of concurrent users with sub-second retrieval performance.",
  },
  {
    q: "How long does implementation take?",
    a: "Standard deployments are typically operational within 5 to 14 business days, depending on your ERP configuration and document workflow customization.",
  },
  {
    q: "Can we customize workflows and tagging rules?",
    a: "Yes. Multi-level approval matrices, tagging schemas, metadata fields, and department access hierarchies are fully configurable through an intuitive admin console.",
  },
  {
    q: "How are backups and business continuity handled?",
    a: "Client data is continuously backed up across redundant multi-region AWS availability zones with instant disaster recovery and 99.9% uptime SLA.",
  },
  {
    q: "What support is available after go-live?",
    a: "We offer dedicated account management, 24/7 technical support ticketing, enterprise SLA guarantees, and regular feature updates.",
  },
  {
    q: "Is access strictly role-based?",
    a: "Yes. Access control is granular down to specific document categories, plant codes, company entities, and transaction authorization thresholds.",
  },
  {
    q: "Is it compliant with statutory tax & audit standards?",
    a: "Yes. Auggit eDMS is built to satisfy Section 128 statutory record retention, GST audit compliance, CARO reporting, and ISO document governance standards.",
  },
];

export default function EdmsDemoPage() {
  // Missing Document Simulator States
  const [dotsState, setDotsState] = useState<Array<"pending" | "ok" | "missing">>(
    Array(100).fill("pending")
  );
  const [isScanningDots, setIsScanningDots] = useState(false);
  const [completeCount, setCompleteCount] = useState<number | null>(null);
  const [missingCount, setMissingCount] = useState<number | null>(null);

  // PO 12345 Checklist State
  const [poChecks, setPoChecks] = useState<Array<"pending" | "ok" | "missing">>([
    "pending",
    "pending",
    "pending",
    "pending",
    "pending",
  ]);
  const [isCheckingPo, setIsCheckingPo] = useState(false);
  const [poAlert, setPoAlert] = useState(false);

  // Active Role Tab
  const [activeRole, setActiveRole] = useState(0);

  // Active Use Case Tab
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Lightbox State
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Run 100-dot completeness test
  const runCompletenessTest = () => {
    if (isScanningDots) return;
    setIsScanningDots(true);
    setCompleteCount(0);
    setMissingCount(0);

    const missingIndices = new Set([
      3, 8, 14, 21, 27, 33, 39, 44, 49, 53, 58, 62, 67, 71, 75, 80, 84, 88, 91, 95, 97, 99,
    ]);

    let okTally = 0;
    let missTally = 0;
    const newDots = Array(100).fill("pending");
    setDotsState([...newDots]);

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const isMiss = missingIndices.has(i);
        if (isMiss) {
          missTally++;
          newDots[i] = "missing";
        } else {
          okTally++;
          newDots[i] = "ok";
        }
        setDotsState([...newDots]);
        setCompleteCount(okTally);
        setMissingCount(missTally);

        if (i === 99) {
          setIsScanningDots(false);
        }
      }, i * 20);
    }
  };

  // Run PO 12345 check
  const runPoCheck = () => {
    if (isCheckingPo) return;
    setIsCheckingPo(true);
    setPoAlert(false);

    const targetStatus: Array<"ok" | "missing"> = ["ok", "ok", "ok", "missing", "ok"];
    const current = ["pending", "pending", "pending", "pending", "pending"];
    setPoChecks([...current]);

    targetStatus.forEach((st, idx) => {
      setTimeout(() => {
        current[idx] = st;
        setPoChecks([...current]);
        if (idx === targetStatus.length - 1) {
          setIsCheckingPo(false);
          setPoAlert(true);
        }
      }, (idx + 1) * 350);
    });
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] text-[#334155] font-sans antialiased overflow-x-hidden selection:bg-[#41a0c8]/20 selection:text-[#062039]">
      {/* =========================================================================
          HERO SECTION (Header Styled Like Homepage, Proof Badges Removed)
          ========================================================================= */}
      <section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 bg-gradient-to-b from-[#06172f] via-[#062039] to-[#0b2b4d] text-white overflow-hidden">
        {/* Ambient Decorative Glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#1267a7]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#41a0c8]/15 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-6 space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Homepage Pill Header - AUGGIT AUTOMATION SUITE & Icon Removed */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#9eddf7] text-xs font-semibold tracking-wider uppercase backdrop-blur-md shadow-sm">
                ENTERPRISE DOCUMENT MANAGEMENT
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                Documents, Data and More… <br />
                <span className="bg-gradient-to-r from-[#9eddf7] via-[#41a0c8] to-[#f7c037] bg-clip-text text-transparent">
                  All Connected.
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                What if every document knew exactly which transaction it belonged to? Auggit eDMS links
                supporting documents to transactions, operational processes, and accountability so you see
                the complete audit picture in a single click.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-xl bg-[#f7c037] hover:bg-[#eab308] text-gray-950 font-bold text-base shadow-lg shadow-[#f7c037]/20 hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Request a Demo
                  <FiArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#missing"
                  className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-base backdrop-blur-md transition-all duration-200"
                >
                  See what most teams miss
                </a>
              </div>
            </motion.div>

            {/* Right: High-Fidelity Interactive Hero Vector Visual */}
            <motion.div
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
                {/* SVG Visual Canvas */}
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 540 380" fill="none">
                    {/* Concentric Glow Circles */}
                    <circle cx="270" cy="190" r="160" stroke="#41a0c8" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="6 6" />
                    <circle cx="270" cy="190" r="115" stroke="#1267a7" strokeOpacity="0.25" strokeWidth="1.5" />
                    <circle cx="270" cy="190" r="65" fill="#1267a7" fillOpacity="0.18" />

                    {/* Animated Connection Lines into Center Hub */}
                    <path d="M 110 85 C 180 85, 210 160, 270 190" stroke="url(#lineGrad1)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-pulse" />
                    <path d="M 110 295 C 180 295, 210 220, 270 190" stroke="url(#lineGrad1)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-pulse" />
                    <path d="M 430 85 C 360 85, 330 160, 270 190" stroke="url(#lineGrad2)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-pulse" />
                    <path d="M 430 295 C 360 295, 330 220, 270 190" stroke="url(#lineGrad2)" strokeWidth="2.5" strokeDasharray="5 5" className="animate-pulse" />

                    <defs>
                      <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#41a0c8" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#f7c037" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#41a0c8" stopOpacity="0.9" />
                      </linearGradient>
                      <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#41a0c8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#062039" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    <circle cx="270" cy="190" r="75" fill="url(#centerGlow)" />
                  </svg>

                  {/* Top-Left Floating Badge: Vendor Invoices */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 left-3 sm:top-6 sm:left-6 bg-[#06172f]/90 border border-[#41a0c8]/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#41a0c8]/20 text-[#9eddf7] flex items-center justify-center font-bold">
                      <FiFileText className="w-5 h-5" />
                    </div>
                    <div className="text-left pr-2">
                      <div className="text-xs font-bold text-white">Vendor Invoices</div>
                      <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                        <FiCheck className="w-3 h-3 stroke-[3]" /> OCR Verified
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom-Left Floating Badge: Gate & Weighbridge */}
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute bottom-4 left-3 sm:bottom-6 sm:left-6 bg-[#06172f]/90 border border-[#41a0c8]/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
                  >
                    <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-[#f7c037] flex items-center justify-center font-bold">
                      <FiLayers className="w-5 h-5" />
                    </div>
                    <div className="text-left pr-2">
                      <div className="text-xs font-bold text-white">Gate Pass & Weighbridge</div>
                      <div className="text-[10px] text-slate-300 font-medium">Auto Slip Ingestion</div>
                    </div>
                  </motion.div>

                  {/* Top-Right Floating Badge: SAP S/4HANA */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                    className="absolute top-4 right-3 sm:top-6 sm:right-6 bg-[#06172f]/90 border border-emerald-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold">
                      <SiSap className="w-6 h-6" />
                    </div>
                    <div className="text-left pr-2">
                      <div className="text-xs font-bold text-white">SAP S/4HANA & ECC</div>
                      <div className="text-[10px] text-emerald-300 font-semibold">Live MIGO/MIRO Link</div>
                    </div>
                  </motion.div>

                  {/* Bottom-Right Floating Badge: Audit Trail */}
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="absolute bottom-4 right-3 sm:bottom-6 sm:right-6 bg-[#06172f]/90 border border-indigo-500/40 rounded-2xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3 z-10"
                  >
                    <div className="w-9 h-9 rounded-xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold">
                      <FiShield className="w-5 h-5" />
                    </div>
                    <div className="text-left pr-2">
                      <div className="text-xs font-bold text-white">Statutory Audit Trail</div>
                      <div className="text-[10px] text-[#9eddf7] font-semibold">Section 128 Compliant</div>
                    </div>
                  </motion.div>

                  {/* Center Core Engine */}
                  <div className="relative z-20 text-center">
                    <motion.div
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-[#1267a7] via-[#062039] to-[#41a0c8] border-2 border-[#f7c037] shadow-[0_0_40px_rgba(247,192,55,0.35)] flex flex-col items-center justify-center p-2 mx-auto"
                    >
                      <FiLock className="w-6 h-6 text-[#f7c037] mb-1" />
                      <div className="text-[11px] font-black uppercase tracking-wider text-white">
                        Auggit
                      </div>
                      <div className="text-[9px] font-bold text-[#9eddf7] uppercase tracking-widest">
                        eDMS Hub
                      </div>
                    </motion.div>
                    <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/10 text-[10px] text-slate-200 font-semibold backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f7c037] animate-ping" />
                      Patented ERP Auto-Tagging
                    </div>
                  </div>
                </div>

                {/* Micro Steps Indicator Strip */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-white/10 text-center">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[#9eddf7] font-black text-xs">01. UPLOAD</div>
                    <div className="text-[11px] text-slate-300 truncate">Scans & Emails</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-[#f7c037] font-black text-xs">02. AUTO-TAG</div>
                    <div className="text-[11px] text-slate-300 truncate">PO & Voucher Binding</div>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-emerald-400 font-black text-xs">03. TRACK</div>
                    <div className="text-[11px] text-slate-300 truncate">1-Click Remote Audit</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PILLS STRIP
          ========================================================================= */}
      <div className="relative -mt-6 z-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-4 shadow-xl border border-slate-200/80 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-semibold text-[#062039]">
          {[
            "Patented tagging",
            "OCR-driven search",
            "SAP integrated",
            "Remote audit",
            "Mobile DMS",
            "Role-based access",
          ].map((pill, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 hover:text-[#1267a7] hover:border-[#41a0c8] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#41a0c8]" />
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* =========================================================================
          THE CHALLENGE (White Card Layout with subtle border and elevation)
          ========================================================================= */}
      <section id="problem" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
            The Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
            Your documents exist. But can you find them together?
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Documents sit scattered across SAP, email inboxes, network drives, and paper files. Every department
            keeps its own records, and every audit becomes a weeks-long manual hunt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FiLayers className="w-6 h-6 text-rose-500" />,
              badge: "Dispersed Repositories",
              title: "Scattered everywhere",
              desc: "Files spread haphazardly across SAP attachments, custom ERPs, emails, personal folders, and off-site paper archives.",
            },
            {
              icon: <FiSearch className="w-6 h-6 text-amber-500" />,
              badge: "Wasted Hours",
              title: "Search after search",
              desc: "Finance and store teams perform 5 to 8 disjointed lookups just to compile the supporting documentation for a single transaction.",
            },
            {
              icon: <FiAlertTriangle className="w-6 h-6 text-orange-500" />,
              badge: "Hidden Vulnerabilities",
              title: "Missing records, unseen",
              desc: "No automated verification mechanism to know whether a weighment slip, E-Way bill, or QA certificate is absent until an auditor flags it.",
            },
            {
              icon: <FiRefreshCw className="w-6 h-6 text-sky-500" />,
              badge: "Operational Drag",
              title: "Manual data entry",
              desc: "Tedious manual indexing and repetitive keying lead directly to typing errors, reconciliation mismatches, and compliance delays.",
            },
            {
              icon: <FiShield className="w-6 h-6 text-indigo-500" />,
              badge: "Statutory Liability",
              title: "Non-compliance risk",
              desc: "Difficulty fulfilling Section 128 books of accounts requirements, GST reconciliation rules, and maintaining traceable corporate governance.",
            },
            {
              icon: <FiClock className="w-6 h-6 text-purple-500" />,
              badge: "Audit Panic",
              title: "Audit scramble",
              desc: "Weeks of chaotic preparation before every internal and statutory review, with teams working overtime to locate missing paper trails.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#062039] mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          THE MISSING DOCUMENT PROBLEM (Shortened Heading & Interactive Simulator)
          ========================================================================= */}
      <section id="missing" className="py-20 bg-gradient-to-b from-[#06172f] via-[#062039] to-[#0b2b4d] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#9eddf7] text-xs font-bold uppercase tracking-wider mb-3">
              The Missing Document Problem
            </div>
            {/* Shortened Heading as Requested */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              SAP Knows Where. <br />
              <span className="text-[#f7c037]">Auggit Knows How.</span>
            </h2>
            <p className="mt-4 text-slate-300 text-base sm:text-lg">
              SAP tracks transactions. Auggit automatically connects every supporting invoice, challan, weighment,
              and test certificate into an unbroken digital chain.
            </p>
          </div>

          {/* 4-Step Flow Representation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-[#9eddf7] font-bold block mb-1">
                Step 1
              </span>
              <h4 className="font-bold text-white text-base">100 Purchase Transactions</h4>
              <p className="text-xs text-slate-300 mt-1">Every transaction requires its own supporting set.</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-[#9eddf7] font-bold block mb-1">
                Step 2
              </span>
              <h4 className="font-bold text-white text-base">6 Documents per PO</h4>
              <div className="flex flex-wrap gap-1 mt-2">
                {["PO", "Invoice", "GRN", "E-Way", "QC", "Weighment"].map((d, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-[10px] text-slate-200">
                    {d}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-widest text-[#9eddf7] font-bold block mb-1">
                Step 3
              </span>
              <h4 className="font-bold text-white text-base">Hundreds of Dispersed Files</h4>
              <p className="text-xs text-slate-300 mt-1">Stored across systems, mailboxes, and folders.</p>
            </div>

            <div className="bg-gradient-to-br from-[#1267a7]/30 to-[#41a0c8]/20 border border-[#41a0c8]/30 rounded-2xl p-5">
              <span className="text-xs uppercase tracking-widest text-[#f7c037] font-bold block mb-1">
                The Question
              </span>
              <h4 className="font-bold text-white text-base">Are all documents there?</h4>
              <p className="text-xs text-slate-300 mt-1">Can you prove completeness for every single transaction?</p>
            </div>
          </div>

          {/* Interactive Comparison Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Left Panel: Without Auggit (100 Dots) */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">Without Auggit: Blind Spot</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                    Manual Scramble
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  100 transactions in SAP. Which ones have missing attachments? Run the completeness check.
                </p>

                {/* 100 Dots Grid */}
                <div className="grid grid-cols-10 gap-2 p-4 rounded-2xl bg-black/30 border border-white/5 mb-6">
                  {dotsState.map((st, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded-full mx-auto transition-all duration-300 ${st === "pending"
                        ? "bg-slate-600/60"
                        : st === "ok"
                          ? "bg-emerald-400 shadow-sm shadow-emerald-400/50"
                          : "bg-rose-500 animate-pulse shadow-sm shadow-rose-500/50"
                        }`}
                      title={`Transaction #${i + 1}: ${st}`}
                    />
                  ))}
                </div>

                {/* Status Tally */}
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                  {completeCount === null ? (
                    <span className="text-slate-400">Status unknown for all 100 transactions</span>
                  ) : (
                    <>
                      <span className="text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <b>{completeCount}</b> Complete
                      </span>
                      <span className="text-rose-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <b>{missingCount}</b> With Missing Documents
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div>
                <button
                  onClick={runCompletenessTest}
                  disabled={isScanningDots}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#41a0c8] hover:bg-[#348db3] disabled:opacity-50 text-white font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FiRefreshCw className={`w-4 h-4 ${isScanningDots ? "animate-spin" : ""}`} />
                  {isScanningDots ? "Scanning ERP Records..." : "Run Completeness Check"}
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  * Illustrative diagnostic simulation based on average enterprise audit findings.
                </p>
              </div>
            </div>

            {/* Right Panel: With Auggit (PO 12345 Inspection) */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">With Auggit: 1-Click Traceability</h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Proactive Governance
                  </span>
                </div>
                <p className="text-sm text-slate-300 mb-6">
                  Open PO 12345 and see the full document chain automatically stitched together.
                </p>

                {/* PO Header Badge */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#1267a7]/30 border border-[#1267a7]/50 mb-4">
                  <span className="font-mono font-bold text-sm text-[#9eddf7]">TRANSACTION: PO #12345</span>
                  <span className="text-xs text-slate-300">Vendor: Tata Steel Tubes Ltd.</span>
                </div>

                {/* Document Chain Checklist */}
                <div className="space-y-2.5 mb-6">
                  {[
                    { name: "Vendor Tax Invoice", idx: 0 },
                    { name: "Goods Receipt Note (GRN / MIGO)", idx: 1 },
                    { name: "NIC E-Way Bill Record", idx: 2 },
                    { name: "Quality Test Certificate (QC)", idx: 3 },
                    { name: "Automated Weighbridge Slip", idx: 4 },
                  ].map((doc) => {
                    const st = poChecks[doc.idx];
                    return (
                      <div
                        key={doc.idx}
                        className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors ${st === "pending"
                          ? "bg-white/5 border-white/10 text-slate-400"
                          : st === "ok"
                            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                            : "bg-rose-500/15 border-rose-500/40 text-rose-300 font-bold"
                          }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {st === "pending" && <span className="w-4 h-4 rounded-full border border-slate-500 inline-block" />}
                          {st === "ok" && <FiCheck className="w-4 h-4 text-emerald-400" />}
                          {st === "missing" && <FiX className="w-4 h-4 text-rose-400 stroke-[3]" />}
                          <span>{doc.name}</span>
                        </div>
                        <span className="uppercase text-[11px] tracking-wider">
                          {st === "pending" ? "Pending Check" : st === "ok" ? "Available & Linked" : "MISSING"}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Alert Box */}
                <AnimatePresence>
                  {poAlert && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-200 text-xs sm:text-sm font-semibold flex items-start gap-3 mb-6"
                    >
                      <FiAlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-bold text-white">Missing: Quality Test Certificate (QC)</div>
                        <div className="text-amber-200/90 text-xs mt-0.5">
                          Automatically flagged in the daily health report. Identified and resolved 3 weeks before the
                          external auditor arrives.
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  onClick={runPoCheck}
                  disabled={isCheckingPo}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#f7c037] hover:bg-[#eab308] disabled:opacity-50 text-gray-950 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <FiSearch className="w-4 h-4" />
                  {isCheckingPo ? "Inspecting Transaction Chain..." : "Check This PO Chain"}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Banner Tag */}
          <div className="mt-12 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm sm:text-base font-medium">
              Find the missing document <span className="text-[#f7c037] font-bold">before the auditor does.</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOR YOUR TEAM: ROLE-BASED BENEFITS (Interactive Switcher)
          ========================================================================= */}
      <section id="roles" className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
            For Your Team
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
            Connect your documents to your data.
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Select your organizational role to see how Auggit transforms your daily operating routine.
          </p>
        </div>

        {/* Role Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {ROLE_TABS.map((r, idx) => (
            <button
              key={idx}
              onClick={() => setActiveRole(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${activeRole === idx
                ? "bg-[#062039] text-white shadow-md shadow-[#062039]/20"
                : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
            >
              {r.role}
            </button>
          ))}
        </div>

        {/* Selected Role Card Display */}
        <motion.div
          key={activeRole}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/40 max-w-4xl mx-auto"
        >
          <div className="text-xs uppercase tracking-widest font-bold text-[#1267a7] mb-2">
            {ROLE_TABS[activeRole].role} Perspective
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mb-8">
            {ROLE_TABS[activeRole].headline}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ROLE_TABS[activeRole].benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#41a0c8]/10 text-[#1267a7] font-bold flex items-center justify-center mb-4">
                    <FiCheck className="w-5 h-5 stroke-[3]" />
                  </div>
                  <h4 className="font-bold text-lg text-[#062039] mb-2">{b.title}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================================================================
          ONE TRANSACTION, EVERY DOCUMENT (Connected Document Hub Visual)
          ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              One Transaction, Every Document
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Documents arrive from many sources. Auggit connects them all.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Internally generated and externally received documents, from different enterprise systems and channels,
              tagged to one reference such as a Purchase Order.
            </p>
          </div>

          {/* Hub Visual Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Left: Internally Generated */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1267a7] bg-[#41a0c8]/10 px-3 py-1 rounded-full">
                Internal Sources
              </span>
              <h3 className="text-xl font-bold text-[#062039] mt-3 mb-1">Internally Generated</h3>
              <p className="text-xs text-slate-500 mb-4">From enterprise back-office applications</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["SAP", "Gate System", "Shared Folders", "Other ERP"].map((chip, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                    {chip}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-[#062039] font-medium">
                {[
                  "MIGO (Material Document)",
                  "Gate Entry & Pass",
                  "Goods Receipt Note (GRN)",
                  "MIRO (Invoice Document)",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#1267a7]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Center: The Core Tag Hub */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-b from-[#06172f] to-[#062039] text-white rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-[#f7c037]/20 border border-[#f7c037]/40 text-[#f7c037] flex items-center justify-center mx-auto mb-4">
                  <FiLayers className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#9eddf7]">
                  Unified Anchor
                </span>
                <h3 className="text-2xl font-black text-white mt-1 mb-2">Purchase Order</h3>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">
                  One patented tag binds every internal posting and external receipt into a single audit-ready dossier.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-semibold text-[#9eddf7] border border-white/10">
                  <FiCheckCircle className="w-3.5 h-3.5 text-[#f7c037]" />
                  Zero Discrepancies
                </div>
              </div>
            </div>

            {/* Right: Externally Received */}
            <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#1267a7] bg-[#41a0c8]/10 px-3 py-1 rounded-full">
                Outside Sources
              </span>
              <h3 className="text-xl font-bold text-[#062039] mt-3 mb-1">Externally Received</h3>
              <p className="text-xs text-slate-500 mb-4">From suppliers, transporters & portals</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {["Vendor Email", "Supplier Portal", "Mobile Upload", "NIC Portal"].map((chip, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700">
                    {chip}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-[#062039] font-medium">
                {[
                  "Supplier Tax Invoice",
                  "Delivery Challan & E-Way Bill",
                  "Transporter Consignment Note",
                  "Weighbridge Slip & Quality Cert",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-slate-100 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-[#41a0c8]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BEYOND STORAGE: CONNECTED INTELLIGENCE
          ========================================================================= */}
      <section id="intel" className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              Beyond Storage
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Connected Intelligence
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Documents, transactions, and automated workflows in one unified system, so the exact answer is already
              there when someone asks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Instant document access",
                desc: "Find supporting records quickly, straight from your ERP transaction screen without opening separate folders.",
              },
              {
                title: "Accelerated audit readiness",
                desc: "Pre-mapped evidence trails put the statutory proof exactly where internal and external auditors look for it.",
              },
              {
                title: "Total documentation visibility",
                desc: "Real-time health reports proactively flag missing bills, unverified challans, and pending approvals.",
              },
              {
                title: "Frictionless internal workflows",
                desc: "Automated tagging cuts back-and-forth email requests and phone calls between plant and head office teams.",
              },
              {
                title: "Strengthened internal controls",
                desc: "Automated tamper-evident audit trails, dual approval rules, and role-specific viewing permissions.",
              },
              {
                title: "Mitigated compliance risk",
                desc: "Real-time gap detection for unlinked or unverified transactions, preventing penalties and tax disallowed credits.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#41a0c8]/10 text-[#1267a7] font-bold flex items-center justify-center mb-4">
                  <FiCheckCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#062039] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 70% Metric Callout Banner */}
          <div className="bg-gradient-to-r from-[#06172f] via-[#062039] to-[#1267a7] rounded-3xl p-8 sm:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#f7c037] font-bold">
                Proven Audit Efficiency
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Less audit preparation time with pre-mapped evidence trails.
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Eliminate manual file retrieval across paper boxes, shared folders, and ERP attachments before statutory audits.
              </p>
            </div>

            <div className="flex-shrink-0 text-center">
              <div className="text-6xl sm:text-7xl font-black text-[#f7c037] tracking-tight">
                70%
              </div>
              <span className="text-xs uppercase tracking-wider text-slate-300 font-semibold block mt-1">
                Average Time Saved
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY FUNCTIONALITIES (12 Cards Grid)
          ========================================================================= */}
      <section id="features" className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              Key Functionalities
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Supporting the way enterprises handle documentation
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Less time chasing records, more time getting core business done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FUNCTIONALITIES.map((f, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-2xs">
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-base text-[#062039] mb-2">{f.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CROSS-DEPARTMENT USE CASES (All Points Shown Without Scrollbar)
          ========================================================================= */}
      <section id="usecases" className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              Cross-Department Document Management
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              One approach. Many business applications.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Pick a department to see the reference transaction and the exact documents Auggit connects.
            </p>
          </div>

          {/* All 12 Department Points Shown Without Scrollbar */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 max-w-5xl mx-auto">
            {USE_CASES.map((uc, i) => (
              <button
                key={i}
                onClick={() => setActiveUseCase(i)}
                className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 ${activeUseCase === i
                  ? "bg-[#062039] text-white shadow-lg shadow-[#062039]/25 scale-[1.02]"
                  : "bg-white text-slate-700 border border-slate-200/90 hover:border-[#41a0c8] hover:bg-slate-50"
                  }`}
              >
                {uc.dept}
              </button>
            ))}
          </div>

          {/* Active Use Case Dossier Card */}
          <motion.div
            key={activeUseCase}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl shadow-slate-200/40 mb-16"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-slate-100">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#1267a7] bg-[#41a0c8]/10 px-3 py-1 rounded-full">
                  {USE_CASES[activeUseCase].family}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-2">
                  {USE_CASES[activeUseCase].dept}
                </h3>
              </div>

              <div className="text-right">
                <span className="text-xs uppercase font-semibold text-slate-400 block">
                  Reference Transaction Anchor
                </span>
                <span className="font-mono font-bold text-sm sm:text-base text-[#1267a7]">
                  {USE_CASES[activeUseCase].refTx}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Internal Docs */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                  Internally Generated Documents
                </h4>
                <ul className="space-y-2">
                  {USE_CASES[activeUseCase].internalDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#062039] font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#1267a7] flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* External Docs */}
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                  Externally Received Documents
                </h4>
                <ul className="space-y-2">
                  {USE_CASES[activeUseCase].externalDocs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#062039] font-medium">
                      <FiCheckCircle className="w-4 h-4 text-[#41a0c8] flex-shrink-0" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome & Stakeholders Footer */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 rounded-2xl bg-[#062039] text-white">
              <div className="lg:col-span-8">
                <span className="text-xs uppercase tracking-wider text-[#f7c037] font-bold block mb-1">
                  Business Value Impact
                </span>
                <p className="text-sm sm:text-base text-slate-200">
                  {USE_CASES[activeUseCase].outcome}
                </p>
              </div>

              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6">
                <span className="text-xs uppercase tracking-wider text-[#9eddf7] font-bold block mb-1">
                  Primary Stakeholders
                </span>
                <p className="text-xs sm:text-sm text-slate-300">
                  {USE_CASES[activeUseCase].stakeholders}
                </p>
              </div>
            </div>
          </motion.div>

          {/* 5 Enterprise Family Categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              {
                title: "Procurement & Finance",
                desc: "PO, AP, invoice verification, vendor onboarding",
              },
              {
                title: "Supply Chain & Logistics",
                desc: "Import/export, dispatch, gate pass, weighment",
              },
              {
                title: "Manufacturing & Quality",
                desc: "Production orders, batches, certificates",
              },
              {
                title: "Records & Compliance",
                desc: "Audit, legal, contracts, statutory records",
              },
              {
                title: "Assets & Employees",
                desc: "Maintenance, capex, warranties, HR dossiers",
              },
            ].map((fam, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                <h4 className="font-bold text-sm text-[#062039] mb-1">{fam.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{fam.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          REPORTING AND VISIBILITY (Real Platform Screenshots with Zoom Lightbox)
          ========================================================================= */}
      <section id="reports" className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              Reporting and Visibility
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Know what you have. Identify what’s missing.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Real reports generated directly from the Auggit platform. Click any report to enlarge and inspect.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/images/edms-demo/report-1.jpg",
                title: "Document Missing Report",
                desc: "See which documents are missing across transactions before internal or statutory auditors arrive.",
              },
              {
                img: "/images/edms-demo/report-2.jpg",
                title: "Document Health Report",
                desc: "Track documentation health, completeness rates, and turnaround status across all operational units.",
              },
              {
                img: "/images/edms-demo/report-3.jpg",
                title: "SAP Processing Report",
                desc: "Track every document posted to SAP, including items SAP rejected and exact reconciliation errors.",
              },
            ].map((rep, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div
                  className="relative aspect-4/3 bg-slate-200 cursor-zoom-in overflow-hidden"
                  onClick={() => setActiveImage(rep.img)}
                >
                  <img
                    src={rep.img}
                    alt={rep.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-1.5 backdrop-blur-sm">
                      <FiZoomIn className="w-4 h-4" />
                      Click to Enlarge
                    </span>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <h3 className="font-bold text-lg text-[#062039] mb-1.5">{rep.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{rep.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              >
                <FiX className="w-5 h-5" />
              </button>
              <img
                src={activeImage}
                alt="Enlarged Report"
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================================
          INTEGRATION AND SECURITY
          ========================================================================= */}
      <section id="integration" className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              Integration and Security
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Works alongside the systems you already run
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Out-of-the-box integration with SAP, QuickBooks, and enterprise ERPs, plus REST APIs for custom platforms.
              Auggit complements your systems without changing user processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#1267a7]/10 text-[#1267a7] flex items-center justify-center mb-6">
                <SiSap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062039] mb-2">SAP Integrated DMS</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect supporting documents directly to SAP business records without complex server modifications.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#41a0c8]/10 text-[#1267a7] flex items-center justify-center mb-6">
                <FiLock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062039] mb-2">End-to-End Security</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                AES-256 cloud encryption, statutory data sovereignty compliance, and granular role-based permissions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                <FiSmartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#062039] mb-2">Enterprise Mobile DMS</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Upload scans, inspect reports, and approve document workflows from anywhere on Android and iOS devices.
              </p>
            </div>
          </div>

          {/* 4 Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div>
              <div className="flex items-center gap-2 font-bold text-[#062039] text-base mb-1">
                <FiCloud className="w-4 h-4 text-[#1267a7]" />
                Hosted on AWS
              </div>
              <p className="text-xs text-slate-600">Enterprise data encrypted in transit and at rest with 99.9% uptime.</p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-bold text-[#062039] text-base mb-1">
                <FiShield className="w-4 h-4 text-[#1267a7]" />
                You Own Your Data
              </div>
              <p className="text-xs text-slate-600">Auggit provides processing infrastructure only. You maintain full data rights.</p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-bold text-[#062039] text-base mb-1">
                <FiServer className="w-4 h-4 text-[#1267a7]" />
                Multi-Entity Ready
              </div>
              <p className="text-xs text-slate-600">Native partitioning across group entities, departments, and multiple plants.</p>
            </div>

            <div>
              <div className="flex items-center gap-2 font-bold text-[#062039] text-base mb-1">
                <FiRefreshCw className="w-4 h-4 text-[#1267a7]" />
                Automated Backups
              </div>
              <p className="text-xs text-slate-600">Continuous automated backups across redundant availability zones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE PEOPLE BEHIND IT (Real Leadership Photos with Upgraded Card Design)
          ========================================================================= */}
      <section id="team" className="py-20 lg:py-28 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              The People Behind It
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Built by people who have lived the audit.
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Decades of real-world leadership in corporate financial governance, statutory compliance, and enterprise SAP product engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Govind Gagoria */}
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(6,32,57,0.06)] hover:shadow-xl hover:border-[#41a0c8]/60 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 bg-[#f1f2f2] shadow-md group-hover:border-[#41a0c8] transition-colors relative">
                <img
                  src="/images/leaders/ceo_founder.webp"
                  alt="Govind Gagoria"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if needed
                    (e.target as HTMLImageElement).src = "/ceo_founder.png";
                  }}
                />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-black text-[#062039]">Govind Gagoria</h3>
                    <p className="text-xs font-bold text-[#1267a7] uppercase tracking-wider mt-0.5">
                      Founder & Chief Executive Officer
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/govindgagoria/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#1267a7] text-slate-700 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Over 20 years in corporate finance leadership and financial compliance. Founded Auggit in 2017 to eliminate
                  audit scrambles, eradicate paper chaos, and automate document linkage into core ERP accounting records.
                </p>
              </div>
            </motion.div>

            {/* Sudeesh Kuttykrishnan */}
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(6,32,57,0.06)] hover:shadow-xl hover:border-[#41a0c8]/60 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
            >
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 bg-[#f1f2f2] shadow-md group-hover:border-[#41a0c8] transition-colors relative">
                <img
                  src="/images/leaders/cto.webp"
                  alt="Sudeesh Kuttykrishnan"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 text-center sm:text-left space-y-3">
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-2xl font-black text-[#062039]">Sudeesh Kuttykrishnan</h3>
                    <p className="text-xs font-bold text-[#1267a7] uppercase tracking-wider mt-0.5">
                      Chief Solutions Officer
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/sudeeshk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-[#1267a7] text-slate-700 hover:text-white text-xs font-semibold transition-colors"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  About 30 years in enterprise software product management and technical architecture, including 23 years
                  directly leading product solutions at SAP, architecting enterprise-grade compliance for global conglomerates.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
          ========================================================================= */}
      <section id="faq" className="py-20 lg:py-28 bg-[#f8fafc]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#1267a7] text-xs font-bold uppercase tracking-wider mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#062039] tracking-tight">
              Questions we hear most
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-2xs open:shadow-md transition-all duration-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-base text-[#062039] select-none hover:text-[#1267a7] transition-colors">
                  <span>{faq.q}</span>
                  <FiChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

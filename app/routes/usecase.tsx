import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router"; 
import {
  FiArrowRight,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

// Local data – can also be imported from a separate file
export const useCasesData = [
  {
    slug: "sap-data-slicing-section-128",
    title: "SAP Data Slicing for Indian Companies Act Section 128 Compliance",
    category: "Compliance & Governance",
    impact: "100% Statutory Alignment",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    summary: "Execute parameter-driven data slicing directly on live SAP ECC or S/4HANA environments to satisfy stringent statutory storage mandates — without the crippling overhead, security risks, or downtime of full database replication. Transform compliance from an infrastructure nightmare into a automated, auditable, and surgical extraction process.",
    overview: "Enterprises operating in India are bound by the Companies Act Section 128, which mandates the preservation of inspectable financial and operational records for statutory auditors — often stretching back 8 to 10 years. Historically, satisfying these requirements meant spinning up full clones of massive SAP databases, consuming terabytes of expensive storage, throttling production performance during extraction windows, and leaving security teams anxious about data exposure. Auggit's SLaiCE (Selective Legacy and Compliance Extraction) use case completely redefines this paradigm. By leveraging native SAP SLT (SAP Landscape Transformation) parameters and intelligent filtering logic, the platform performs surgical data carving — pulling only the precise transactional records, material movement documents, and financial postings that auditors actually need, based on fiscal year, plant code, document type, or custom rules. The extraction executes silently in the background, with zero production locks, zero performance degradation, and zero cross-border data leakage risks. Compliance teams receive fully structured, read-only data packages within hours, ready for inspector review, while the underlying SAP system continues serving business operations at peak efficiency. This use case not only addresses legal compliance but also turns statutory audits into a predictable, low-friction, and entirely defensible process — all while keeping 100% of data sovereign within domestic infrastructure.",
    benefits: [
      "Eliminate expensive and risky full-system database clones, slashing storage infrastructure costs by up to 70% while completely removing the operational headaches of managing duplicate environments.",
      "Enable live, real-time queries against sliced datasets for active statutory inspectors, allowing them to validate records on the spot without waiting for weeks of preparatory data dumps.",
      "Enforce strict data sovereignty by ensuring all extraction and archiving execution stays contained within regional on-premise or private cloud servers — never touching offshore infrastructure.",
      "Configure fully automated extraction schedules that trigger based on audit calendars, fiscal year-ends, or ad-hoc regulatory requests, reducing manual IT intervention to near zero.",
    ],
  },
  {
    slug: "automated-invoice-processing-edms",
    title: "Automated Invoice Processing & Financial Vault Synchronization",
    category: "Financial Automation",
    impact: "40% Faster Month-End Close",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    summary: "Streamline high-volume accounts payable operations by connecting every incoming vendor invoice directly to its corresponding ERP transaction line items through automated OCR indexing, intelligent classification, and seamless webhook-driven synchronization — eliminating manual data entry and lost document disputes forever.",
    overview: "For mid-to-large enterprises processing tens of thousands of invoices monthly, the accounts payable department often operates as a bottleneck — drowning in a sea of PDF attachments, scanned paper receipts, emails, and legacy network folders with inconsistent naming conventions. The result? Delayed vendor payments, missed early-payment discounts, strained supplier relationships, and finance teams spending the first week of every month just hunting for missing documentation to close the books. Auggit's automated invoice processing use case revolutionizes this workflow. The Cloud eDMS platform ingests every incoming invoice — regardless of source (email, scanner, EDI, or manual upload) — and instantly runs it through advanced OCR engines that extract key fields like vendor name, invoice number, total amount, tax details, and purchase order references. Intelligent classification algorithms then route each document to the correct project cost center or general ledger account, while webhook connectors establish a permanent, verifiable link between the digital invoice and its corresponding ERP journal entry in real-time. The result is an unbreakable audit trail from receipt to reconciliation, with every document indexed, searchable, and accessible within milliseconds. CFOs gain instant visibility into outstanding payables, cash flow positions, and accrual requirements — all without reliance on manual data entry or endless email chases.",
    benefits: [
      "Achieve sub-300 millisecond record retrieval speeds, reducing the average document lookup from 15 minutes of frantic searching to a simple 2-second keyword query, dramatically improving finance team productivity.",
      "Automate invoice ingestion with intelligent OCR that extracts, validates, and indexes 95%+ of data fields with zero human intervention, slashing data entry errors and duplicate payment risks.",
      "Establish direct, immutable ERP ledger linking that automatically attaches every digital invoice to its corresponding journal voucher, creating a fully synchronized, auditor-friendly financial vault.",
      "Eliminate lost invoice disputes entirely — every vendor claim can now be verified instantly, preventing costly duplicate payments, late fees, and preserving hard-earned supplier trust.",
    ],
  },
  {
    slug: "cross-departmental-digital-audits",
    title: "Cross-Departmental Digital Audit Trail & Repository Management",
    category: "Digital Auditing",
    impact: "90% Prep Time Reduction",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    summary: "Transform the chaos of statutory and regulatory audit seasons into a calm, automated, and fully transparent process — leveraging secure read-only auditor portals, cryptographic version-locking, and pre-packaged compliance exports that eliminate last-minute scrambling, missing files, and cross-departmental coordination breakdowns.",
    overview: "For most enterprises, the arrival of a statutory or FDA/ISO auditor triggers a organizational fire drill — department heads scramble to gather files from local drives, shared mailboxes, and dusty filing cabinets; coordinators work around the clock to cross-reference documents; and stress levels peak as missing files inevitably surface, threatening compliance findings and reputational damage. Auggit's digital audit use case completely eliminates this dysfunctional cycle. The platform creates a unified, cross-departmental document repository where every compliance-relevant file — financial statements, quality reports, batch records, HR logs, environmental permits — lives in a centrally governed, searchable, and version-controlled environment. Crucially, the system generates secure, read-only guest portals for external auditors, allowing them to independently browse, search, and download only the documents they need, exactly when they need them, without requiring endless internal meetings. Cryptographic version-locking ensures that every document has a tamper-proof timestamp and digital fingerprint — any attempt at unauthorized modification is immediately flagged. When auditors request specific datasets, the platform generates instant, structured export packages complete with verifiable audit trails, slashing preparation time from weeks to mere hours.",
    benefits: [
      "Provide secure, read-only guest portals for external auditors, giving them 24/7 self-service access to verifiable documents while completely eliminating the need for internal staff to chaperone every review session.",
      "Enforce cryptographic version-locking on every file, ensuring absolute tamper-proof integrity — auditors can independently verify that documents haven't been altered since their creation, building unshakeable trust.",
      "Generate instant compliance export packages with a single click, aggregating documents by year, category, or audit scope, and delivering them in fully structured, inspector-ready formats within minutes.",
      "Erase lost document liability entirely — with a centralized, immutable, and fully indexed repository, missing files become a thing of the past, and audit findings related to documentation drop to zero.",
    ],
  },
  {
    slug: "s4hana-migration-data-carving",
    title: "Selective Data Carving for Accelerated S/4HANA Transitions",
    category: "ERP Migration",
    impact: "Months of Downtime Saved",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    summary: "Bypass the traditional 'copy-everything' trap that plagues S/4HANA migrations — using intelligent, selective data carving to separate cold, rarely-accessed historical records from high-velocity active streams, dramatically shrinking cutover windows, lowering cloud costs, and accelerating go-live dates by months.",
    overview: "S/4HANA migration projects are notorious for overrunning budgets, timelines, and internal resources — and the primary culprit is almost always the sheer weight of decades of unpartitioned, unstructured historical ERP data. Companies running SAP ECC for 15+ years often accumulate 20 to 30 terabytes of transactional baggage — purchase orders from 2008, delivery confirmations from 2012, and financial postings from long-closed fiscal years — that legally must remain queryable but hold zero operational relevance for the new system. Traditional migration strategies treat all data equally, forcing IT teams to lift-and-shift massive, inactive tables, leading to multi-week production downtimes, astronomical cloud provisioning costs, and project timelines stretching into years. Auggit's selective data carving use case offers a radically different approach. SLaiCE intelligently profiles the entire legacy database, identifying historical records older than a defined threshold (e.g., 5 years) and surgically carving them into a separate, fully compliant, but near-line archive that remains accessible for audits and legal discovery. Only the active core streams — open orders, active vendors, recent financials, and current master data — are migrated to the new S/4HANA environment. This 'thin migration' strategy moves less than 30% of the total volume, reducing cutover complexity by 70% and shrinking the actual downtime window from months to just a few days.",
    benefits: [
      "Drastically shorten critical cutover windows from projected months down to just days or even a single long weekend, eliminating the business disruption and revenue loss associated with prolonged ERP downtime.",
      "Slash cloud storage provisioning costs by over 60% — since only active, high-value data needs to reside in the premium S/4HANA environment, while historical archives are stored on cost-effective, compliance-grade cold storage.",
      "Ensure a clean and lean operational cutover, where the new system starts with only verified, relevant active data — avoiding the performance drag and indexing headaches of bloated legacy baggage.",
      "Preserve full historical query access — auditors and legal teams can still retrieve archived records instantly via the platform's secure portal, maintaining 100% compliance without compromising new system agility.",
    ],
  },
  {
    slug: "multi-site-construction-blueprint-sync",
    title: "Multi-Site Construction Document & Blueprint Synchronization",
    category: "Field Operations",
    impact: "Real-Time Site Visibility",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    summary: "Empower remote engineering and construction teams with offline-capable mobile document vaults, instant blueprint verification, and real-time synchronization — putting the latest approved schematics, safety sign-offs, and inspection reports directly into the hands of field workers, wherever the job takes them.",
    overview: "Construction and engineering firms managing multiple active sites often face a hazardous disconnect: headquarters releases updated architectural blueprints, structural calculations, or safety protocols, but field engineers working in remote locations with spotty connectivity continue building from outdated plans — resulting in costly rework, project delays, material waste, and even safety violations. One major infrastructure firm reported that misalignment between headquarters revisions and on-site execution accounted for 12% of total project overruns — a staggering financial and operational liability. Auggit's multi-site construction use case solves this critical challenge. The platform's mobile-first eDMS application allows engineers to download verified blueprints and compliance documents to tablets before heading to site, with robust offline sync capabilities that automatically update files and notification statuses the moment connectivity is restored. Whenever a blueprint is revised, all site leads receive automated alerts, and the app prominently flags any engineer working on a now-superseded version. Field teams can also upload inspection sign-offs, safety checklists, daily progress photos, and deviation reports directly from their tablets — complete with GPS-stamped metadata and time-stamped digital signatures. Site managers gain a unified dashboard providing real-time visibility across all projects, enabling faster decision-making, proactive risk mitigation, and flawless collaboration between HQ and the front line.",
    benefits: [
      "Enable offline-first mobile document synchronization that guarantees field engineers always have access to the latest approved blueprints and compliance specs, even in the most remote, low-connectivity construction zones.",
      "Streamline on-site safety sign-offs and quality inspections by allowing engineers to upload completed checklists, photo evidence, and digital signatures instantly — reducing administrative backlogs and accelerating project milestones.",
      "Prevent costly build errors and rework by automatically flagging outdated document versions and pushing real-time revision notifications directly to field devices, ensuring everyone builds from the correct source of truth.",
      "Create a centralized project revision history that captures every document change, approval, and field upload — providing complete forensic visibility for internal reviews, client audits, and liability protection.",
    ],
  },
  {
    slug: "retail-store-lease-and-vendor-governance",
    title: "Retail Store Lease Portfolio & Vendor Contract Governance",
    category: "Enterprise Governance",
    impact: "Zero Missed Renewals",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    summary: "Centralize fragmented multi-branch lease agreements, supplier contracts, and compliance filings into a structured, role-restricted corporate vault — with intelligent automated alerts that prevent costly missed renewals, late penalties, and contractual blind spots across your entire real estate portfolio.",
    overview: "Retail chains, hospitality groups, and franchise operators typically manage hundreds or thousands of location-specific contracts — store leases, equipment rentals, local vendor supply agreements, maintenance service contracts, and municipal compliance permits. These critical documents are often stored haphazardly across regional office computers, spreadsheets, and even physical filing cabinets, creating a governance nightmare. The result is inevitable: missed renewal deadlines, sudden rent escalations caught too late, lost competitive bidding opportunities, and penalties that quietly erode profitability. One prominent retail group discovered 14 missed lease renewals in a single year — costing over $1.8M in avoidable penalties and renegotiation fees. Auggit's retail governance use case eliminates this risk. The platform aggregates every contract across all 50+ (or 500+) locations into a single, cloud-based repository with strict role-based access controls. Store managers can access their own operational agreements, regional heads gain cross-store oversight, and the corporate legal team has full write and audit visibility. The system automatically extracts key dates (renewal options, rent review periods, termination windows) and triggers automated, escalation-based alerts 90, 60, and 30 days before critical deadlines. The result is absolute visibility over every contractual obligation, empowering procurement and legal teams to proactively negotiate favorable terms, consolidate supplier spend, and eliminate surprise financial shocks.",
    benefits: [
      "Receive automated, multi-stage deadline alerts for lease renewals, supplier contract expirations, and compliance permit updates — eliminating the human error and oversight that leads to costly late penalties and lost opportunities.",
      "Enforce granular role-based departmental access controls, ensuring that only authorized personnel can view or edit sensitive financial terms, while store managers retain operational visibility over their specific location agreements.",
      "Standardize regional supplier filings and documentation formats across the entire portfolio, enabling instant benchmarking of contract terms, pricing, and service levels across different branches and geographies.",
      "Achieve complete audit visibility over operational spend and contractual liabilities, empowering the finance team to forecast accurately and identify cost-saving consolidation opportunities across the supplier base.",
    ],
  },
  {
    slug: "secure-healthcare-administrative-vault",
    title: "Secure Healthcare Administrative & Regulatory Record Vault",
    category: "Healthcare & Security",
    impact: "ISO 27001 Aligned Security",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    summary: "Safeguard sensitive hospital administrative logs, billing records, and regulatory compliance documentation with immutable versioning, real-time anomaly detection shields, and cryptographic tamper-proof trails — achieving enterprise-grade security that effortlessly aligns with ISO 27001, HIPAA, and national healthcare privacy mandates.",
    overview: "Healthcare networks process some of the most sensitive and highly regulated data on the planet — patient billing records, employee credentials, safety incident reports, quality assurance logs, and compliance audit trails. These documents are prime targets for both external cybercriminals and insider threats. Worse, traditional document systems offer basic access controls but zero cryptographic integrity verification — meaning if a malicious actor quietly alters a regulatory log after the fact, there is often no way to prove it happened. This vulnerability can lead to multi-million dollar regulatory fines, devastating litigation, and catastrophic loss of patient and public trust. Auggit's secure healthcare vault use case addresses these threats head-on. The platform leverages a feature called Integrity Shield, which assigns a unique cryptographic hash (SHA-256) to every uploaded document and maintains an immutable version history — every change creates a new, timestamped version while preserving the original. The system continuously monitors for anomalies, such as a file that exists in metadata but has no physical counterpart (missing-document detection) or unexpected access patterns, triggering real-time security alerts. Role-based access is enforced via multi-factor authentication with granular permissions extending down to individual folder and document-type levels. Automated integrity reports are generated for compliance officers, providing clear evidence for ISO 27001 auditors without manual effort. The result is a document environment that is not just secure, but provably secure.",
    benefits: [
      "Maintain fully tamper-proof audit logs, where every document version, access, and modification is cryptographically sealed and timestamped — providing absolute non-repudiation for regulators and legal counsel.",
      "Receive automated missing-document anomaly alerts the moment the system detects a file pointer without a physical counterpart or any irregularity in the document chain, enabling rapid investigation and remediation.",
      "Enforce strict privacy boundary enforcement with fine-grained, attribute-based access controls that ensure only explicitly authorized clinical and administrative personnel can view or modify sensitive records.",
      "Enable rapid regulatory reporting access by generating structured, verifiable document packages for ISO, HIPAA, or internal quality auditors in seconds — eliminating manual compilation effort and reducing audit fatigue.",
    ],
  },
  {
    slug: "supply-chain-bill-of-lading-automation",
    title: "Supply Chain Bill of Lading & Waybill Digital Automation",
    category: "Logistics & Freight",
    impact: "65% Faster Customs Clearance",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary: "Replace chaotic, paper-intensive container waybills, customs declarations, and delivery receipts with instant digital scanning, automated indexing, and mobile-verified sign-offs — drastically accelerating freight movement across international borders while slashing administrative overhead and environmental waste.",
    overview: "Global logistics hubs and freight forwarding companies are buried under a mountain of paper. Each container shipment requires an average of 10-15 separate documents — bills of lading, commercial invoices, packing lists, certificates of origin, hazardous material declarations, and customs clearance forms — often in triplicate. At busy port terminals, freight handlers spend up to 25% of their shift just shuffling, filing, and hunting for paperwork. This analogue bottleneck creates severe congestion, with containers sitting idle at customs for hours while clerks manually verify multi-page printouts. For one global logistics provider, this translated to an average of 4 hours of delay per container at the border, burning fuel, tying up assets, and frustrating clients. Auggit's supply chain automation use case digitizes this entire workflow. The mobile-responsive eDMS app allows dock workers to scan container barcodes using ruggedized tablets, instantly pulling up pre-populated digital waybills and customs forms. The platform automatically indexes every document by container ID, vessel number, port of entry, and consignee, while electronic signature capture replaces wet-ink sign-offs for delivery confirmations. The system generates complete, verifiable digital packets that can be shared with customs brokers in real-time via secure link. For teams operating in ports with poor connectivity, the app supports robust offline sync — capturing all data on-site and synchronizing automatically once a connection is restored. The result is a frictionless, paperless freight ecosystem that moves goods faster, cheaper, and more sustainably.",
    benefits: [
      "Enable instant loading dock digital indexing — simply scan a container barcode and the entire corresponding documentation packet is instantly retrieved, verified, and shared with relevant stakeholders without manual searching.",
      "Reduce border clearance friction by up to 65%, slashing average customs wait times from hours to under 60 minutes, directly improving asset utilization and customer delivery performance.",
      "Achieve complete paperless freight workflows, eliminating over 4 million sheets of paper annually for large providers, saving storage costs, reducing environmental footprint, and removing document misplacement risks entirely.",
      "Provide live tracking of shipping receipts and proof-of-delivery signatures, giving shippers and consignees instant, auditable confirmation of cargo status from loading dock to final destination.",
    ],
  },
];

// Type definition for the data items (optional but helpful)
export interface UseCase {
  slug: string;
  title: string;
  category: string;
  impact: string;
  image: string;
  summary: string;
  overview: string;
  benefits: string[];
}

interface UseCasesPageProps {
  useCasesData?: UseCase[]; // optional, defaults to local data
}

export default function UseCasesPage({ useCasesData: propData }: UseCasesPageProps) {
  // Use local data as default if no prop is passed
  const data = propData || useCasesData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] overflow-x-hidden">
      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pt-28 sm:pb-16 max-w-7xl mx-auto">
        {/* Animated background glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#9eddf7]/30 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 right-20 w-[300px] h-[300px] bg-[#ffeda0]/30 rounded-full blur-[80px]"
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#9eddf7] text-[#41a0c8] text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
            </span>
            Strategic Use Cases
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#062039] leading-[1.1]">
            Tailored Solutions for{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
              Complex Enterprise Needs
            </span>
          </h1>

          <p className="text-[#353535] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Discover how organizations deploy Auggit's intelligent document platforms and SAP integration engines to solve targeted operational friction.
          </p>
        </motion.div>
      </section>

      {/* ========== USE CASES GRID ========== */}
      <section className="px-4 sm:px-6 lg:px-8 pb-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {currentItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e3e3e3] hover:border-[#9eddf7] shadow-sm hover:shadow-xl hover:shadow-[#41a0c8]/10 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#062039]/90 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/10">
                  {item.category}
                </div>
                <div className="absolute bottom-4 right-4 bg-[#41a0c8] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-lg">
                  {item.impact}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-grow space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#062039] group-hover:text-[#41a0c8] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[#353535] text-sm leading-relaxed">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e3e3e3] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#979797]">Enterprise Blueprint</span>
                  <Link
                    to={`/usecase/${item.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#41a0c8] group-hover:text-[#1267a7] group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Explore Use Case</span>
                    <FiArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== PAGINATION ========== */}
      {totalPages > 1 && (
        <section className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-3 rounded-xl bg-white border border-[#e3e3e3] text-[#353535] hover:bg-slate-50 disabled:opacity-40 transition-all shadow-sm cursor-pointer"
              aria-label="Previous Page"
            >
              <FiChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                type="button"
                onClick={() => handlePageChange(number)}
                className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                  currentPage === number
                    ? "bg-[#41a0c8] text-white shadow-md shadow-[#41a0c8]/30"
                    : "bg-white border border-[#e3e3e3] text-[#353535] hover:bg-slate-50"
                }`}
                aria-label={`Go to page ${number}`}
              >
                {number}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl bg-white border border-[#e3e3e3] text-[#353535] hover:bg-slate-50 disabled:opacity-40 transition-all shadow-sm cursor-pointer"
              aria-label="Next Page"
            >
              <FiChevronRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      )}

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#062039] via-[#062039] to-[#1267a7] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden border border-[#1267a7]/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,160,200,0.2),transparent_50%)] pointer-events-none" />
          <motion.div
            className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#41a0c8]/20 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#9eddf7]/15 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Have a Unique Enterprise Challenge?
          </h3>
          <p className="text-[#9eddf7] text-sm sm:text-base max-w-xl mx-auto relative z-10">
            Let's architect a tailored solution that fits your specific operational landscape.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer hover:scale-105"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
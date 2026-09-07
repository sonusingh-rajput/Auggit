import { motion } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const caseStudiesData = [
  {
    slug: "global-manufacturing-sap-slicing",
    title: "Global Manufacturing Giant Cuts SAP Footprint by 65% with SLaiCE",
    client: "Apex Industrial Corp",
    industry: "Heavy Manufacturing",
    metric: "65% Data Reduction",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    summary: "How a multi-billion dollar manufacturer met Indian Section 128 compliance mandates without full system replication.",
    challenge: "Apex Industrial Corp had accumulated over 15 terabytes of legacy SAP ECC transactional logs across 12 geographically dispersed manufacturing plants. Under the Indian Companies Act Section 128, the company was legally obligated to maintain inspectable financial and operational records for statutory auditors—stretching back nearly a decade. The traditional approach of full database cloning not only threatened production server uptime during extraction but also ballooned infrastructure costs as storage demands grew exponentially. With audit notices arriving unpredictably, the IT team found itself stuck between compliance liability and operational risk, spending weeks just preparing environments for external reviewers.",
    solution: "Apex deployed Auggit's patented SLaiCE (Selective Legacy and Compliance Extraction) engine directly into their SAP landscape. By leveraging native SAP SLT (SAP Landscape Transformation) parameters, the system performed surgical data carving—extracting only the precise transactional records, financial postings, and material movements required for statutory audits. Instead of copying entire database tables, SLaiCE intelligently filtered by fiscal year, plant code, and document type, creating lightweight, audit-ready datasets. The extraction ran in the background without locking production tables, ensuring business operations continued uninterrupted while compliance teams received their structured data packages within hours.",
    results: "The outcome was transformative: Apex achieved a 65% reduction in total database footprint, slashing annual storage licensing costs by over $400,000. Audit preparation time collapsed from 3 weeks of frantic manual coordination to just 4 hours of automated execution. Crucially, the company maintained 99.9% production uptime during all extraction windows, completely eliminating the downtime anxiety that plagued previous audit cycles. Statutory inspectors now receive read-only, verifiable data snapshots within the same day—turning a former compliance nightmare into a competitive governance advantage."
  },
  {
    slug: "fintech-cloud-edms-migration",
    title: "Leading Fintech Firm Automates 100k+ Monthly Invoices with eDMS",
    client: "Vanguard Financials",
    industry: "Financial Services",
    metric: "300ms Retrieval Speed",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    summary: "Transitioning physical bookkeeping and messy local folders into an instant, searchable cloud document vault.",
    challenge: "Vanguard Financials processed over 100,000 corporate invoices every single month—each requiring verification, approval, and reconciliation against core financial ledgers. But their document management was stuck in the early 2000s: fragmented local network shares, manual folder structures named inconsistently across departments, and a mountain of physical paperwork that delayed reconciliation by days. The finance team routinely spent the first week of every month hunting for missing invoices, often re-requesting duplicates from vendors. This not only strained client relationships but also pushed month-end closing cycles past regulatory deadlines, triggering compliance warnings from the board.",
    solution: "Vanguard integrated Auggit’s Cloud eDMS platform directly into their existing ERP system via webhooks. Every incoming invoice—whether emailed, scanned, or uploaded—was automatically ingested by the platform. OCR engines instantly extracted key fields (vendor name, amount, date, PO number) while intelligent classification algorithms routed each document to the correct project ledger. The system automatically attached digital invoices to their corresponding journal entries in real time, creating an unbreakable audit trail from receipt to reconciliation. Finance teams accessed everything through a unified search portal, with role-based views for AP, AR, and external auditors.",
    results: "Document retrieval times plummeted from an average of 15 minutes per search to under 300 milliseconds—a 99.97% improvement. The lost document dispute rate dropped to near zero, as every invoice now lived in a single, indexed, searchable repository. Month-end close cycles accelerated by 40%, allowing Vanguard to publish financial reports a full week earlier than industry peers. The platform also reduced manual data entry errors by 85%, giving CFOs real-time visibility into cash flow positions without waiting for reconciliation delays."
  },
  {
    slug: "pharma-compliance-audit-automation",
    title: "Pharmaceutical Leader Streamlines FDA & Statutory Audits in Days",
    client: "BioHealth Labs",
    industry: "Life Sciences & Pharma",
    metric: "90% Audit Prep Time Saved",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80",
    summary: "Connecting ERP batch records directly with structured compliance documentation for seamless verification.",
    challenge: "BioHealth Labs operated in one of the most heavily regulated environments on the planet—life sciences. Every physical laboratory batch produced required instantaneous correlation with ERP quality assurance entries, stability test results, and release certificates. During statutory and FDA audits, inspectors demanded immediate access to these linked records, often requesting samples across multiple years. But BioHealth's documentation existed in silos: lab notebooks, standalone spreadsheets, and ERP printouts. Audit preparation meant pulling dozens of staff off production to manually trace batch numbers through disparate systems—a process that consumed weeks and frequently resulted in missing-document findings that damaged the company's compliance rating.",
    solution: "BioHealth deployed Auggit's Digital Audit module, which acted as a centralized bridge between their laboratory information management system (LIMS) and SAP ERP. The solution automatically ingested batch release data and attached every supporting document—QC reports, raw material certificates, environmental monitoring logs—into version-locked, timestamped digital dossiers. External auditors received secure, read-only portal access with granular search capabilities, allowing them to pull complete batch histories by product, date, or lot number in seconds. The platform also generated automated audit trail reports, showing every access, modification, and verification action for full transparency.",
    results: "Audit preparation time dropped by 90%, shrinking from 6 weeks of frantic cross-functional scrambling to just 3 days of automated dossier assembly. During the next FDA inspection, BioHealth delivered requested records within minutes—impressing inspectors and eliminating all prior findings related to missing or untraceable documentation. The company achieved a perfect audit score for the first time in its history, while internal quality teams reallocated over 2,000 hours annually from prep work to actual process improvement initiatives."
  },
  {
    slug: "automotive-sap-hana-migration",
    title: "Automotive Supplier Accelerates S/4HANA Migration by 8 Months",
    client: "Zenith Auto Components",
    industry: "Automotive",
    metric: "8 Months Faster Migration",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    summary: "Using precision data carving instead of full legacy database migration to drastically lower downtime.",
    challenge: "Zenith Auto Components had run its core ERP on legacy SAP ECC for over two decades, accumulating massive volumes of unpartitioned historical transactional data—purchase orders, production schedules, delivery confirmations, and financial postings stretching back to 2003. The company knew it had to migrate to S/4HANA to stay competitive, but consultants projected a multi-year timeline and a staggering $4.2M budget. The core bottleneck: migrating 20+ terabytes of 'cold' historical data that was rarely accessed but legally required to remain queryable. Full migration would force weeks of production downtime, threatening just-in-time supply chain commitments to major automakers like Toyota and Ford.",
    solution: "Zenith leveraged SLaiCE's selective data slicing capability to completely reimagine the migration strategy. Instead of lifting and shifting the entire legacy database, they used SLaiCE to intelligently partition data by age and business relevance. Historical records older than 5 years were carved out and archived into an active, fully compliant query state—accessible for audits and reporting but stored on cost-effective, near-line storage. Only the active core streams (current open orders, active vendor contracts, recent financials) were migrated to the new S/4HANA environment. This 'thin migration' approach meant moving less than 30% of the total data volume while preserving 100% of regulatory compliance.",
    results: "The total migration downtime window shortened by 8 months, with the entire cutover completed in just 14 days instead of the planned 10 months. Cloud provisioning costs dropped by over $1.2M because storage requirements for the new environment were drastically reduced. Zenith also saw performance improvements of 300% on key transaction codes post-migration, as the new system wasn't bogged down by irrelevant historical bloat. The company went live ahead of schedule, avoiding contractual penalties and earning accolades from its automotive OEM partners for seamless supply chain continuity."
  },
  {
    slug: "logistics-paperless-workflow",
    title: "Global Supply Chain Eliminates 4 Million Sheets of Paper Annually",
    client: "TransitRoute Global",
    industry: "Logistics & Supply Chain",
    metric: "4M+ Paper Sheets Saved",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    summary: "Deploying automated document indexing and mobile e-signing for container freight documentation.",
    challenge: "TransitRoute Global managed container freight across 45 regional terminals spanning 12 countries. Every shipment required a paper trail: bills of lading, customs declarations, delivery receipts, insurance certificates, and hazardous material manifests—often in triplicate. The company was producing over 4 million sheets of paper annually, creating massive physical storage costs, frequent document misplacement, and customs clearance delays that averaged 4 hours per container. Freight handlers spent 25% of their shift just shuffling paperwork, while drivers waited at docks, burning fuel and missing delivery windows. The environmental impact alone was becoming a PR liability for the brand.",
    solution: "TransitRoute rolled out Auggit's mobile-responsive eDMS app across all terminals, equipped with offline sync capabilities for dock areas with poor connectivity. Freight handlers used ruggedized tablets to scan container barcodes, instantly pulling up digital waybills and customs forms. The app automatically indexed documents by container ID, vessel number, and destination, while electronic signature capture replaced physical sign-offs. Completed packets were synced to the cloud in real-time once connectivity restored, with automated notifications sent to customs brokers and consignees. The platform also generated digital audit trails for every document touchpoint, from loading dock to final delivery.",
    results: "TransitRoute eliminated over 4 million sheets of paper annually—saving $280,000 in printing and storage costs while reducing the company's carbon footprint by an estimated 120 metric tons. Cross-border customs clearance delays dropped by 65%, slashing average wait times from 4 hours to under 90 minutes. Driver turnaround times improved by 40%, enabling the company to handle 18% more shipments without adding trucks to its fleet. The system also reduced lost-document claims by 92%, improving customer satisfaction scores and renewing key logistics contracts with major retailers."
  },
  {
    slug: "retail-chain-document-governance",
    title: "Retail Enterprise Secures 50+ Regional Store Archives Instantly",
    client: "MetroRetail Group",
    industry: "Retail & E-Commerce",
    metric: "100% Granular Visibility",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
    summary: "Enforcing role-based access controls across store-level supplier agreements and financial filings.",
    challenge: "MetroRetail Group operated over 50 regional stores across 3 countries, but each store managed its own documentation chaos. Lease agreements, local vendor contracts, compliance filings, and employee records were stored on disparate computers in regional offices—often with no backups, inconsistent naming conventions, and zero version control. The corporate legal team had no centralized visibility into store-level obligations, resulting in 14 missed lease renewals in the previous year, costing the company over $1.8M in penalties and renegotiation fees. Store managers struggled to find critical contracts during surprise inspections, while auditors complained about the complete lack of standardized document governance across the portfolio.",
    solution: "MetroRetail centralized all 50+ store portfolios into Auggit Enterprise eDMS with a multi-tenant architecture that respected store autonomy while enforcing corporate standards. Each store received its own secure workspace, but corporate administrators could view aggregated dashboards and run compliance reports across all locations. The system enforced strict role-based access permissions—store managers could only view their own leases, regional heads had cross-store visibility, and only legal had write access to contract amendments. Automated lease-renewal alerts were configured to trigger 90 days before expiry, with escalation workflows to prevent future misses. The platform also supported bulk upload of historical documents via OCR, instantly making decades of unstructured data searchable.",
    results: "MetroRetail achieved 100% granular visibility over regional operational spend and contractual obligations, with every document indexed, versioned, and accessible within 2 seconds. The system prevented 14 costly missed lease renewals in its first year of operation, directly saving the company over $1.8M. Store-level compliance inspection scores improved from an average of 67% to 98%, while legal team efficiency doubled as they could now pull any contract in under a minute. The corporate board praised the initiative as 'foundational to scalable growth' and mandated the system for all future acquisitions."
  },
  {
    slug: "energy-corp-data-sovereignty",
    title: "Energy Conglomerate Meets Strict Domestic Data Residency Laws",
    client: "PowerGrid Solutions",
    industry: "Energy & Utilities",
    metric: "Zero Cross-Border Risk",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
    summary: "Deploying localized SAP-native data slicing to keep operational records strictly within jurisdictional boundaries.",
    challenge: "PowerGrid Solutions operated sensitive national power infrastructure, making it subject to stringent data sovereignty laws that explicitly prohibited routing any production data, backups, or audit logs through offshore cloud servers or foreign third-party data centers. The company's legacy SAP environment, however, was difficult to manage without external support, and traditional backup solutions often required cross-border data transfers for cost optimization. This created a legal minefield: one accidental data export could trigger massive government fines, executive prosecution, and potential revocation of operating licenses. Internal compliance teams spent 40% of their time manually auditing data flows to ensure no bytes crossed geographical borders—a costly, error-prone, and unsustainable effort.",
    solution: "PowerGrid implemented SLaiCE in a fully on-premise private cloud setup, purpose-built within the nation's domestic data center borders. All data slicing, extraction, archiving, and audit log generation executed entirely within this localized environment, with no external network dependencies. The platform was configured with geo-fencing rules that blocked any outbound replication attempts, automatically quarantining and alerting on any suspicious transfer requests. SLaiCE's native SAP integration meant that all compliance extractions happened directly against the production database—without ever staging data to intermediate external storage. Government regulators were given read-only, auditable access to verify data residency through the platform's built-in compliance dashboard.",
    results: "PowerGrid achieved absolute regulatory compliance with zero cross-border data exposure incidents reported in 3 consecutive annual government audits. The internal compliance team's manual auditing effort dropped by 85%, freeing up 4,500 staff hours annually for core infrastructure improvement. Independent government security audits passed with 'exemplary' ratings, earning the company preferential treatment in future government tenders. The solution also reduced backup and storage costs by 40%, as SLaiCE's selective approach eliminated unnecessary duplication of low-value historical data while maintaining full legal defensibility."
  },
  {
    slug: "telecom-audit-trail-optimization",
    title: "Telecom Provider Cuts Document Retrieval Bottlenecks by 95%",
    client: "OmniTel Networks",
    industry: "Telecommunications",
    metric: "95% Faster Retrieval",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    summary: "Automated ERP linking connecting customer billing logs with verifiable tax and compliance receipts.",
    challenge: "OmniTel Networks served over 8 million subscribers, generating massive volumes of billing data, dispute logs, and tax compliance receipts. During quarterly regulatory reviews, the billing compliance team spent hundreds of hours manually matching customer dispute logs with corresponding ERP journal vouchers, tax invoices, and service delivery records. The process was entirely manual: staff would search through email archives, shared drives, and printed reports, often spending 45 minutes to find a single document chain. With each review requiring thousands of sample checks, the team was perpetually behind, facing regulatory fines for late submissions and suffering from low morale due to the tedious, repetitive work.",
    solution: "OmniTel integrated Auggit's ERP-linked eDMS connector, which automatically captured transaction reference hashes from their billing system and tied them directly to corresponding supporting documents—customer sign-up forms, usage logs, payment receipts, and tax calculations—the moment each transaction was posted. The system created a permanent, immutable link between every billing event and its documentary evidence, stored in a unified, searchable repository. Compliance reviewers could now simply enter a transaction ID or customer account number and instantly retrieve the complete document trail across multiple years, with all records displayed in a chronological, audit-ready view. The platform also automated the generation of quarterly regulatory submission packages, complete with verifiable cross-references.",
    results: "Document retrieval bottlenecks dropped by 95%, with average lookup time shrinking from 45 minutes to under 2 minutes. The compliance team reallocated over 3,000 staff hours annually—equivalent to 1.5 full-time employees—from manual reconciliation to core network expansion and customer experience initiatives. Regulatory fine exposure was eliminated entirely, as submissions were now delivered weeks ahead of deadlines with 100% accuracy. OmniTel's regulatory audit score improved from 'satisfactory' to 'outstanding,' positioning the company as a model for compliance excellence within the national telecom sector."
  },
  {
    slug: "construction-multi-site-dms",
    title: "Engineering Firm Unifies 25 Active Construction Site Records",
    client: "TerraBuild Infra",
    industry: "Construction & Engineering",
    metric: "25 Sites Synchronized",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    summary: "Enabling field engineers to upload and verify compliance blueprints on the mobile eDMS application.",
    challenge: "TerraBuild Infra managed 25 active construction sites simultaneously, each with its own set of architectural blueprints, structural calculations, safety sign-offs, and regulatory inspection reports. Field engineers at remote sites had no real-time access to revised blueprints—when updates were issued from headquarters, they were printed and physically couriered, causing delays of 2–3 days. Meanwhile, safety inspectors frequently arrived to find outdated plans pinned to site offices, leading to work stoppages, rework orders, and significant compliance fines. One major project incurred $340,000 in penalties due to a misalignment between site execution and the latest approved structural drawings—a completely avoidable loss that highlighted the urgent need for mobile-first document synchronization.",
    solution: "TerraBuild deployed Auggit Mobile eDMS with robust offline sync capabilities, recognizing that many construction sites had intermittent or no internet connectivity. The mobile app allowed field engineers to download verified blueprints and safety documents to their tablets before heading to site, with all changes automatically synced once connectivity returned. The platform enforced version control: every blueprint update triggered automatic notifications to all site leads, and the app would flag any engineer working on an outdated revision with a prominent warning. Engineers could also upload inspection sign-offs, safety checklists, and daily progress photos directly from the site, complete with GPS-stamped metadata for verifiable records.",
    results: "All 25 active construction sites were synchronized in real-time, eliminating the 2–3 day document delivery lag entirely. Project miscommunication errors dropped by 78%, and rework orders—previously accounting for 12% of project budgets—fell to under 3%. On-site compliance fines were eliminated completely in the 18 months following deployment, saving the company over $1.2M in penalties. Site managers reported 40% faster inspection sign-offs, as inspectors could now verify plan versions on the spot via tablet. The mobile solution also improved safety incident reporting, enabling faster corrective actions and earning TerraBuild a 'Best in Safety' industry award for the first time."
  },
  {
    slug: "healthcare-secure-patient-records",
    title: "Healthcare Network Achieves ISO-Certified Document Security",
    client: "CareFirst Medical",
    industry: "Healthcare",
    metric: "ISO 27001 Compliant",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    summary: "Protecting sensitive administrative logs with tamper-proof version auditing and automated integrity shields.",
    challenge: "CareFirst Medical operated a network of 14 hospitals and 60+ outpatient clinics, managing millions of patient records, billing documents, regulatory compliance logs, and employee administrative files. The organization faced a dual threat: external cyberattacks targeting healthcare data and internal risks of unauthorized alteration or accidental deletion. With stringent HIPAA and local privacy mandates, any breach or tampering incident could result in fines exceeding $10M and catastrophic reputational damage. Their legacy document system offered basic access controls but no cryptographic integrity verification—meaning nobody could prove that a document hadn't been quietly altered after the fact. Internal audits regularly flagged anomalies that took weeks to investigate, consuming valuable IT security resources.",
    solution: "CareFirst leveraged Auggit's Integrity Shield feature, a comprehensive document security suite built into the enterprise eDMS platform. Every uploaded document received a cryptographic hash (SHA-256) and was stored with immutable versioning—any modification created a new version while preserving the original, timestamped audit trail. The system automatically flagged missing-document anomalies (e.g., a file that existed in metadata but had no physical counterpart) and alerted security teams in real-time. Role-based access was enforced with multi-factor authentication and granular permissions down to the folder and document type level. The platform also generated automated integrity reports for ISO 27001 auditors, demonstrating compliance with minimal manual effort.",
    results: "CareFirst secured full ISO 27001 certification alignment for all document management workflows within 4 months of deployment. Administrative audit discrepancies were eliminated entirely—from an average of 15 findings per quarter to zero over 3 consecutive quarters. The system prevented 4 attempted unauthorized access attempts in its first year, with automated lockdowns and alerts enabling security teams to respond within minutes. Staff productivity improved, as the automated integrity checks reduced manual validation effort by 90%, freeing up IT security resources for proactive threat hunting. The hospital network's board cited the solution as 'critical infrastructure' and extended it to all affiliated clinics within the group."
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
              className={`w-10 h-10 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-sm ${
                currentPage === number
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
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiDatabase, FiBox } from "react-icons/fi";
import { SiSap } from "react-icons/si";

// ========== SLaiCE COMPANY MANDATE FAQ DATA ==========
const companyMandateFaqs = [
  {
    "id": "01",
    "question": "How does SLaiCE help meet the Company Mandate for daily backups?",
    "answer": "SLaiCE is an SAP approved solution, available directly on the SAP Store, that operates entirely within your SAP landscape to move Indian company data to servers located in India. This satisfies the daily backup requirement without moving data outside your existing SAP environment or building anything custom."
  },
  {
    "id": "02",
    "question": "We already download our data to servers in India, do we still need SLaiCE?",
    "answer": "Downloading data as XLS, PDF, or another file type does not meet the requirement. The MCA 4th Mandate requires data to be available in the same form it was entered, with audit logs included. SLaiCE meets this by moving data in its original SAP format, with logs intact."
  },
  {
    "id": "03",
    "question": "We have not been audited or received a non-compliance notice, does this still apply to us?",
    "answer": "Yes, it still applies. Based on our experience working with officials, audits and notices are typically issued from the third year onward, and we expect organizations to start receiving intimations around September/October. Waiting until you receive a notice means you are already behind on compliance."
  },
  {
    "id": "04",
    "question": "We already use SAP DART to meet this mandate, do we still need SLaiCE?",
    "answer": "You will need SLaiCE once you migrate to SAP S/4HANA. SAP DART meets this requirement while you are on SAP ECC, but it is not available after you move to SAP S/4HANA. SLaiCE covers the same requirement across both ECC and S/4HANA, so compliance continues through and after migration."
  },
  {
    "id": "05",
    "question": "We have an in-house team and a custom-built tool for this, is that enough?",
    "answer": "It usually is not enough. In-house tools tend to miss correction entries and add load to your production system. They also need rework after an SAP S/4HANA migration and can create GDPR exposure for EU based organizations. SLaiCE avoids these issues and masks or scrambles data in transit."
  },
  {
    "id": "06",
    "question": "Can an in-house team just handle backups, audit logs, and data privacy compliance manually?",
    "answer": "It is possible, but it carries real tradeoffs. You need to account for team size, cost, and the risk of giving a small team direct access to financial data. Auditors also reject formats like PDF or Excel, since the mandate requires the original system format. SLaiCE runs in the background and avoids these tradeoffs entirely."
  },
  {
    "id": "07",
    "question": "How does SLaiCE operate, and will it add load to our production servers?",
    "answer": "SLaiCE will not meaningfully load your production servers. It is SAP approved, built entirely on SAP tools, and keeps your data inside your own network at all times. SLaiCE sits on top of SAP's SLT server, which is purpose built to extract data without affecting production performance."
  },
  {
    "id": "08",
    "question": "We have our own coding standards for custom objects, will SLaiCE meet them?",
    "answer": "Yes. SLaiCE is approved for SAP ECC, SAP S/4HANA on-premises, and SAP S/4HANA private cloud. Our team works directly with your technical team so SLaiCE passes your SAP ATC checks. The core patented logic itself cannot be altered, but we will work through any limitations with your team."
  },
  {
    "id": "09",
    "question": "Do we need to buy a separate SAP SLT license or extra infrastructure to run SLaiCE?",
    "answer": "No separate license is needed. SAP SLT is a free runtime license provided by SAP, and it can be installed standalone or on either the source or target system, so no additional hardware is required. We recommend installing it on the target system and review the full options with you during discovery."
  },
  {
    "id": "10",
    "question": "Do we need to pay for additional SAP licenses for a system based in India?",
    "answer": "It depends on your SAP version. On SAP ECC, no additional license is needed since it runs as a non-productive instance. On SAP S/4HANA RISE, it depends on your existing SAP contract, though some customers use a read-only system in an Indian SAP data center as a disaster recovery target instead."
  },
  {
    "id": "11",
    "question": "How would SLaiCE help us recover the India-hosted system if requested by the Ministry of Corporate Affairs or the Income Tax Department?",
    "answer": "Daily backups are stored in a secured location, with an automated email alert sent on successful completion, capturing the backup start time, completion time, and status. Audit logs, audit trails, and database redo logs are included in every backup, and our technical team can walk through restoring to a specific date."
  },
  {
    "id": "12",
    "question": "We are migrating from SAP ECC to SAP S/4HANA next year, do we need a new SLaiCE license?",
    "answer": "No, the same license carries forward. SLaiCE is built to work across SAP ECC, SAP S/4HANA on-premises, and SAP S/4HANA RISE private cloud. It also supports SAP's Selective Data Transition approach for both Brownfield and Bluefield migrations, so nothing needs to be repurchased when you move."
  },
  {
    "id": "13",
    "question": "We will be on SAP ECC for a few more years before migrating, will SLaiCE still work?",
    "answer": "Yes, SLaiCE is built for both SAP ECC and SAP S/4HANA from the start. When you do migrate, SLaiCE can support the move through SAP's Selective Data Transition approach, and you will not need to buy a new license, though resource costs for that work would be discussed separately."
  },
  {
    "id": "14",
    "question": "We have many custom tables and India-specific add-ons, how does SLaiCE handle these?",
    "answer": "SLaiCE operates at the table level and is built directly on SAP tools, so custom tables and add-ons are fully supported. During initial setup, we review and sign off on all custom tables and add-ons with your team before anything moves into production."
  },
  {
    "id": "15",
    "question": "If we also use SLaiCE for test system setup, will that interfere with the compliance mandate use case?",
    "answer": "No, the two use cases run independently. SLaiCE uses a separate profile for each purpose, so a test system setup, whether it uses only master data, a specific date range, or region specific data, does not interfere with the compliance backup process running in parallel."
  },
  {
    "id": "16",
    "question": "What type of control and data validation reports do you provide?",
    "answer": "We provide standard control and validation reports, including record counts between the source and target systems, as a baseline for every setup. If your auditors require additional or more specific reports, we work directly with them to build those as well."
  },
  {
    "id": "17",
    "question": "What is the support structure, and how is it provided?",
    "answer": "SLaiCE for company mandate use runs on an annual maintenance subscription. SAP releases updates quarterly, and you choose when to implement them. If an update ever affects SLaiCE, we get advance notice from SAP and release a fix, the same way any other SAP approved add-on would be maintained."
  },
  {
    "id": "18",
    "question": "What kind of monitoring and alerting is provided?",
    "answer": "SLaiCE is built using SAP tools and runs on SAP SLT, so standard SAP alerting and monitoring capabilities apply directly to it. There is no separate monitoring system to learn or maintain outside of what your SAP team already uses."
  },
  {
    "id": "19",
    "question": "What happens if the source and target systems fall out of sync due to an infrastructure or network failure? Do we have to restart from the beginning?",
    "answer": "Usually not. Depending on the type of failure, SLaiCE resumes from where it stopped rather than restarting from scratch, similar to resuming an interrupted download. This is possible because of how SLaiCE is built directly on top of SAP SLT."
  },
  {
    "id": "20",
    "question": "Would you manage the full infrastructure until we move to SAP S/4HANA?",
    "answer": "We can, through a small set of mid-tier infrastructure providers we already work with. This can be included in our scope as a managed service, or we can connect you directly with them, and they offer special pricing for SLaiCE customers either way."
  },
  {
    "id": "21",
    "question": "Our Indian subsidiary runs its own SAP S/4HANA Public Cloud (GROW), do we still need SLaiCE for daily backup compliance?",
    "answer": "No, as long as your SAP S/4HANA Public Cloud instance is hosted in an India data center, though early adopters should confirm this directly with SAP. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default."
  },
  {
    "id": "22",
    "question": "Our Indian subsidiary runs its own SAP S/4HANA Private Cloud (RISE), do we still need SLaiCE for daily backup compliance?",
    "answer": "No, as long as your SAP S/4HANA Private Cloud instance is hosted in an India data center, though early adopters should confirm this directly with SAP. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default."
  },
  {
    "id": "23",
    "question": "Our Indian subsidiary runs SAP S/4HANA on-premises or SAP ECC hosted in India, do we still need SLaiCE for daily backup compliance?",
    "answer": "No, you do not need SLaiCE in this case. Daily backups, audit trails, and database logs still need to be explicitly configured, since none of these are enabled by default, and our team can help set these up so your organization meets its regulatory and statutory requirements."
  }
];

// ========== SLaiCE SAP S/4HANA MIGRATION FAQ DATA ==========
const sapHanaMigrationFaqs = [
  {
    "id": "01",
    "question": "How does SLaiCE help with SAP S/4HANA Private Cloud migration?",
    "answer": "SLaiCE is an SAP approved solution, available on the SAP Store, that uses its patented feature to migrate only the data you actually want to move to S/4HANA, such as a specific time period. This reduces typical migration timelines from 16 to 18 months down to 6 to 8 months."
  },
  {
    "id": "02",
    "question": "What approach does SLaiCE recommend for S/4HANA migration?",
    "answer": "SLaiCE follows SAP's Selective Data Transfer (SDT) approach, moving only selected historical data while you adopt new SAP S/4HANA business processes. Because SLaiCE controls exactly what gets replicated, only the data you actually need moves across, cutting migration timelines from 16 to 18 months down to 6 to 8 months."
  },
  {
    "id": "03",
    "question": "How does SLaiCE manage the SDT migration approach in practice?",
    "answer": "SLaiCE continuously replicates data from your live SAP ECC production system to an intermediate shell system. On an agreed date, replication stops and that shell system is upgraded to S/4HANA using SAP's own migration tools. If the schedule changes due to an unexpected business event, it can be replanned without restarting."
  },
  {
    "id": "04",
    "question": "We have multiple companies and other org elements that need to migrate to S/4HANA, can SLaiCE handle this?",
    "answer": "Yes, SLaiCE lets you apply filters across multiple fields and SAP applications at once. It also identifies parent-child relationships between tables, so business and document consistency is preserved as data replicates across systems, all without moving any data outside your SAP landscape."
  },
  {
    "id": "05",
    "question": "How does SLaiCE operate, and will it load our production servers?",
    "answer": "SLaiCE will not meaningfully load your production servers. It is SAP approved, built entirely on SAP tools, and keeps data inside your own network at all times. SLaiCE sits on top of SAP's SLT server, which extracts data from ECC or S/4HANA without affecting production performance."
  },
  {
    "id": "06",
    "question": "Do we need to buy a separate SAP SLT license or extra infrastructure to run SLaiCE?",
    "answer": "No separate license is needed. SAP SLT is a free runtime license from SAP that can be installed standalone or on either the source or target system, so no additional hardware is required. We recommend installing it on the target system and review the full options during discovery."
  },
  {
    "id": "07",
    "question": "We want to keep our legacy data in a read-only SAP ECC system for legal and audit purposes, can SLaiCE help?",
    "answer": "Yes. Since SLaiCE is already installed for your migration, it can also build a lean, read-only SAP ECC system for that purpose. You can also use SLaiCE to create an SAP S/4HANA Dev or Quality environment loaded with selective test data, useful for custom code migration and user training."
  },
  {
    "id": "08",
    "question": "We have many custom tables and SAP approved add-ons, how does SLaiCE handle these?",
    "answer": "SLaiCE operates at the table level and is built directly on SAP tools, so custom tables and add-ons are fully supported. During initial setup, we review and sign off on all of these with your team before anything moves into production."
  },
  {
    "id": "09",
    "question": "If we also use SLaiCE for test system setup, will that interfere with the migration project?",
    "answer": "No, the two use cases run independently. SLaiCE uses a separate profile for each purpose, so a test system setup, whether it uses only master data, a specific date range, or region specific data, runs without interfering with the migration workstream in progress."
  },
  {
    "id": "10",
    "question": "What type of control and data validation reports do you provide?",
    "answer": "We provide standard control and validation reports, including record counts between the source and target systems, as a baseline for every setup. If your auditors require additional or more specific reports, we work directly with them to build those as well."
  },
  {
    "id": "11",
    "question": "What is the support structure during an SAP S/4HANA migration project?",
    "answer": "Our SLaiCE team works directly with your SAP team throughout the Selective Data Transition migration approach. Once migration is complete, SLaiCE is removed from your landscape, unless you identify another ongoing use case for it, such as test system refreshes or legacy data access."
  },
  {
    "id": "12",
    "question": "What kind of monitoring and alerting is provided?",
    "answer": "SLaiCE is built using SAP tools and runs on SAP SLT, so standard SAP alerting and monitoring capabilities apply directly to it. There is no separate monitoring system to learn or maintain outside of what your SAP team already uses."
  },
  {
    "id": "13",
    "question": "What happens if the source and target systems fall out of sync due to an infrastructure or network failure?",
    "answer": "Usually nothing drastic. Depending on the type of failure, SLaiCE resumes from where it stopped rather than restarting from scratch, similar to resuming an interrupted download. This is possible because of how SLaiCE is built directly on top of SAP SLT."
  }
];

// ========== eDMS FAQ DATA ==========
const edmsFaqData = [
  {
    id: "01",
    question: "What is Auggit eDMS?",
    answer:
      "Auggit eDMS is a platform for managing organizational documents with structure and control. It helps teams store, classify, review and access documents reliably on one common platform.",
  },
  {
    id: "02",
    question: "Where is the data stored?",
    answer:
      "Auggit eDMS is hosted on AWS cloud infrastructure, providing enterprise-grade security, reliability and availability. All documents and data stored in the platform are encrypted both in transit and at rest.",
  },
  {
    id: "03",
    question: "Who owns the data stored in Auggit eDMS?",
    answer:
      "All documents and data stored within Auggit eDMS remain the property of the customer organization. Auggit eDMS only provides the platform infrastructure for storing and managing these records.",
  },
  {
    id: "04",
    question: "Can Auggit eDMS support multi-entity or multi-department organizations?",
    answer:
      "Yes. Auggit eDMS is designed to support organizations operating across multiple entities, departments or business units, while maintaining controlled access and structured documentation across the organization.",
  },
  {
    id: "05",
    question: "Can Auggit eDMS integrate with other enterprise systems?",
    answer:
      "Yes. Auggit eDMS supports integration with enterprise systems such as ERP platforms, accounting software and other business applications through APIs and configurable integration layers.",
  },
  {
    id: "06",
    question: "How scalable is the platform?",
    answer:
      "Auggit eDMS is designed to support organizations of different sizes and can scale as document volumes and users increase. The platform architecture allows businesses to expand usage without restructuring their document systems.",
  },
  {
    id: "07",
    question: "How long does it typically take to implement Auggit eDMS?",
    answer:
      "For standard deployments, the platform can typically be activated within a few business days, depending on the organization's structure and integration requirements.",
  },
  {
    id: "08",
    question: "Can the platform be customised for specific business processes?",
    answer:
      "Yes. Auggit eDMS provides configurable workflows, tagging structures and integration options that allow organizations to align the platform with their internal processes and documentation requirements.",
  },
  {
    id: "09",
    question: "How does Auggit eDMS ensure data reliability and backup?",
    answer:
      "Auggit eDMS performs regular backups of client data to ensure business continuity and prevent data loss in case of unexpected events.",
  },
  {
    id: "10",
    question: "What kind of support is available after implementation?",
    answer:
      "Auggit eDMS provides ongoing technical support after deployment. Users can raise support tickets directly through the platform or contact the support team for assistance.",
  },
  {
    id: "11",
    question: "Does Auggit eDMS support access controls for different user roles?",
    answer:
      "Yes. The platform uses role-based access control to ensure that users can only access documents relevant to their responsibilities.",
  },
  {
    id: "12",
    question: "Can Auggit eDMS support organizations operating in regulated environments?",
    answer:
      "Yes. Auggit eDMS is designed to help organizations maintain structured documentation and operational records, supporting compliance, audit processes and regulatory requirements.",
  },
];

// ========== REUSABLE FAQ ITEM COMPONENT ==========
interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  toggle: () => void;
  product: string;
}

const FaqItem = ({ item, isOpen, toggle, product }: FaqItemProps) => {
  const isSlaice = product === "slaice";
  const accentColor = isSlaice ? "from-[#41a0c8] to-[#1267a7]" : "from-[#062039] to-[#1267a7]";

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-white/95 shadow-xl shadow-[#41a0c8]/10 border border-[#9eddf7]"
          : "bg-white/80 hover:bg-white shadow-md shadow-slate-200/50 border border-[#e3e3e3] hover:border-[#9eddf7]"
      }`}
      initial={false}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Accent bar indicator */}
      <motion.div
        className={`absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b ${accentColor}`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <button
        onClick={toggle}
        className="flex items-center justify-between w-full py-5 px-6 text-left group cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="flex items-start gap-5 text-sm sm:text-base">
          <span className={`text-xl font-extrabold bg-gradient-to-r ${accentColor} bg-clip-text text-transparent min-w-[3rem]`}>
            {item.id}
          </span>
          <span className="font-semibold text-[#062039] group-hover:text-[#41a0c8] transition-colors pt-0.5">
            {item.question}
          </span>
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
            isOpen
              ? `bg-gradient-to-r ${accentColor} text-white shadow-md shadow-[#41a0c8]/30`
              : "bg-slate-100 text-slate-500 group-hover:bg-[#9eddf7]/40 group-hover:text-[#41a0c8]"
          }`}
        >
          <FiChevronDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pl-6 pr-6 sm:pl-[5.2rem] text-[#353535] text-sm leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ========== MAIN FAQ ALL COMPONENT ==========
export default function FaqAll() {
  const [activeTab, setActiveTab] = useState<"slaice" | "edms">("slaice");
  const [slaiceSubTab, setSlaiceSubTab] = useState<"mandate" | "migration">("mandate");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentData =
    activeTab === "slaice"
      ? slaiceSubTab === "mandate"
        ? companyMandateFaqs
        : sapHanaMigrationFaqs
      : edmsFaqData;

  const productLabel =
    activeTab === "slaice"
      ? slaiceSubTab === "mandate"
        ? "SLaiCE (Company Mandate)"
        : "SLaiCE (SAP S/4HANA Migration)"
      : "eDMS";

  // Dynamic JSON-LD Schema for rich snippet indexing
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: currentData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 overflow-hidden">
      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Animated Floating Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#ffeda0]/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9eddf7]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm">
            <FiDatabase className="w-4 h-4 text-[#f7c037]" />
            Knowledge & Support
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-[#062039] tracking-tight">
            Frequently Asked <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="mt-3 text-[#353535] text-sm sm:text-base max-w-2xl mx-auto">
            Explore detailed architectural and functional answers about our enterprise data and document solutions.
          </p>
        </div>

        {/* Primary Tabs (SLaiCE vs eDMS) */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e3e3e3] shadow-lg shadow-slate-200/50">
            <button
              onClick={() => {
                setActiveTab("slaice");
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "slaice"
                  ? "bg-[#41a0c8] text-white shadow-md shadow-[#41a0c8]/30"
                  : "text-[#353535] hover:text-[#062039] hover:bg-slate-100"
              }`}
            >
              <SiSap className="w-4 h-4" />
              SLaiCE
            </button>
            <button
              onClick={() => {
                setActiveTab("edms");
                setOpenIndex(null);
              }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "edms"
                  ? "bg-[#062039] text-white shadow-md shadow-[#062039]/30"
                  : "text-[#353535] hover:text-[#062039] hover:bg-slate-100"
              }`}
            >
              <FiBox className="w-4 h-4" />
              eDMS
            </button>
          </div>
        </div>

        {/* Secondary Sub-Buttons for SLaiCE (Company Mandate vs SAP HANA Migration) */}
        {activeTab === "slaice" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <button
              onClick={() => {
                setSlaiceSubTab("mandate");
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                slaiceSubTab === "mandate"
                  ? "bg-[#41a0c8] text-white border-[#41a0c8] shadow-md shadow-[#41a0c8]/25"
                  : "bg-white text-[#062039] border-[#e3e3e3] hover:border-[#41a0c8] hover:bg-[#f1f2f2]/60"
              }`}
            >
              Company Mandate
            </button>
            <button
              onClick={() => {
                setSlaiceSubTab("migration");
                setOpenIndex(null);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border ${
                slaiceSubTab === "migration"
                  ? "bg-[#41a0c8] text-white border-[#41a0c8] shadow-md shadow-[#41a0c8]/25"
                  : "bg-white text-[#062039] border-[#e3e3e3] hover:border-[#41a0c8] hover:bg-[#f1f2f2]/60"
              }`}
            >
              SAP HANA Migration
            </button>
          </motion.div>
        )}

        {/* Sub-Header Context for SLaiCE view */}
        {/* {activeTab === "slaice" && (
          <div className="mb-6 px-1 flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold text-[#062039]">
              {slaiceSubTab === "mandate"
                ? "SLaiCE Q&A - Company Mandate & Daily Backup Compliance"
                : "SLaiCE Q&A - SAP S/4HANA Migration"}
            </h2>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#9eddf7]/40 text-[#1267a7]">
              {currentData.length} Questions
            </span>
          </div>
        )} */}

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {currentData.map((item, index) => (
            <FaqItem
              key={`${activeTab}-${slaiceSubTab}-${item.id}`}
              item={item}
              isOpen={openIndex === index}
              toggle={() => toggleItem(index)}
              product={activeTab}
            />
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-14 text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-[#e3e3e3] shadow-lg shadow-slate-200/50"
        >
          <p className="text-[#353535] text-sm font-medium">
            Still have questions about <span className="font-bold text-[#062039]">{productLabel}</span>?{" "}
            <a href="/contact" className="text-[#41a0c8] font-bold hover:underline hover:text-[#1267a7] transition-colors">
              Contact our engineering team →
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

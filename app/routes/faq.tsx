// import FaqEdms from "./faq-edms";
// import FaqSlaice from "./faq-slaice";

// export default function FaqAll() {
//   return (
//     <div>
//       <FaqSlaice />
//       <div className="border-t border-blue-200/50 my-16" />
//       <FaqEdms />
//     </div>
//   );
// }


import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiDatabase, FiBox } from "react-icons/fi";
import { SiSap } from "react-icons/si";

// ========== SLaiCE FAQ DATA ==========
const slaiceFaqData = [
  {
    id: "01",
    question: "What is SLaiCE?",
    answer:
      "SLaiCE is Auggit's SAP-native data subsetting tool that extracts a defined slice of SAP production data instead of replicating an entire system. It is used to build lean test environments, support ECC to S/4HANA migration, and meet Indian Companies Act data residency requirements without copying unnecessary data.",
  },
  {
    id: "02",
    question: "What is SAP data subsetting?",
    answer:
      "SAP data subsetting is the process of extracting a defined portion of SAP data, such as a specific company code or time period, instead of copying an entire system. It is used to build smaller, targeted environments for testing, migration, or compliance without the cost of a full replication.",
  },
  {
    id: "03",
    question: "How does SLaiCE work?",
    answer:
      "SLaiCE connects to SAP through its native framework and extracts data based on parameters an organization defines, such as company code or date range, rather than copying the full database. Extraction runs close to real time, so production systems stay fully available while the selected data moves into the target environment.",
  },
  {
    id: "04",
    question: "What platforms does SLaiCE work on?",
    answer:
      "SLaiCE is built to work with SAP ECC and SAP S/4HANA, and is commonly used to support ECC to S/4HANA migrations by extracting only the data subsets needed for the new system. This makes it relevant for SAP customers on either version who need a smaller, targeted data environment.",
  },
  {
    id: "05",
    question: "Does SLaiCE support data masking or scrambling?",
    answer:
      "SLaiCE supports optional data masking during extraction, so sensitive fields can be obscured before data reaches a test or development environment. This allows organizations to build realistic, structurally accurate test systems without exposing live production values such as customer or financial details.",
  },
  {
    id: "06",
    question: "How does SLaiCE ensure data security during replication?",
    answer:
      "SLaiCE keeps extraction inside SAP's native framework rather than moving data through external systems, which limits exposure during replication. Combined with optional data masking and parameter based extraction, only the defined subset of data leaves production, reducing the surface area for risk compared to a full system copy.",
  },
  {
    id: "07",
    question: "Where does SLaiCE store the extracted data?",
    answer:
      "Extracted data is hosted in a live, SAP-native environment located in India, which supports compliance with the Indian Companies Act's data residency requirements. This avoids the need for a full system replication just to keep regulated financial data stored within the country.",
  },
  {
    id: "08",
    question: "Can SLaiCE process unstructured data?",
    answer:
      "SLaiCE is built to extract structured SAP data, such as transactional and master data tied to defined parameters like company code or table. Handling of unstructured data, such as scanned documents or attachments, has not been confirmed for SLaiCE and should be verified with the product team before being stated publicly.",
  },
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
  const accentColor = isSlaice ? "from-[#41a0c8] to-[#1267a7]" : "from-[#5e8b22] to-[#93cb3a]";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentData = activeTab === "slaice" ? slaiceFaqData : edmsFaqData;
  const productLabel = activeTab === "slaice" ? "SLaiCE" : "Automation Suite";

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 overflow-hidden">
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
        <div className="text-center mb-12">
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

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-sm rounded-2xl border border-[#e3e3e3] shadow-lg shadow-slate-200/50">
            <button
              onClick={() => { setActiveTab("slaice"); setOpenIndex(null); }}
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
              onClick={() => { setActiveTab("edms"); setOpenIndex(null); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === "edms"
                  ? "bg-[#062039] text-white shadow-md shadow-[#062039]/30"
                  : "text-[#353535] hover:text-[#062039] hover:bg-slate-100"
              }`}
            >
              <FiBox className="w-4 h-4" />
              Automation Suite
            </button>
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {currentData.map((item, index) => (
            <FaqItem
              key={`${activeTab}-${item.id}`}
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
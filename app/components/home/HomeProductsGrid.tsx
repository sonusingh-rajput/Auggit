import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FiUserCheck,
  FiCpu,
  FiTruck,
  FiSliders,
  FiZap,
  FiEdit3,
  FiMaximize2,
  FiArrowRight,
} from "react-icons/fi";

export default function HomeProductsGrid() {
  const products = [
    {
      title: "Vendor Onboarding",
      category: "Supplier Management",
      desc: "Self-service supplier onboarding with automated GSTIN, PAN, and MSME verification.",
      href: "/product/automation-suite/vendor-onboarding",
      icon: FiUserCheck,
      badge: "Self-Service",
    },
    {
      title: "AP Automation (MIRO – MIGO)",
      category: "Accounts Payable",
      desc: "AI 3-way matching between Purchase Orders, Goods Receipts, and Supplier Invoices.",
      href: "/product/automation-suite/ap-automation",
      icon: FiCpu,
      badge: "3-Way Match",
    },
    {
      title: "Gate Pass Management",
      category: "Plant Logistics",
      desc: "Inward and outward material pass tracking with QR code boom barrier integration.",
      href: "/product/automation-suite/gate-pass",
      icon: FiTruck,
      badge: "QR Checkpoint",
    },
    {
      title: "Weighbridge Integration",
      category: "Hardware Sync",
      desc: "Direct digital weight indicator polling with synchronized CCTV vehicle snapshots.",
      href: "/product/automation-suite/weighbridge",
      icon: FiSliders,
      badge: "Anti-Tamper",
    },
    {
      title: "Automatic Data Entry (ADE)",
      category: "AI Auto-Posting",
      desc: "Extracts unstructured tables and automatically posts transactions into SAP FB60/MIRO.",
      href: "/product/automation-suite/automatic-data-entry",
      icon: FiZap,
      badge: "Zero Re-keying",
    },
    {
      title: "Digital Signatures",
      category: "Legal Compliance",
      desc: "Automated Class-3 DSC and Aadhaar eSign embedding for invoices and PO documents.",
      href: "/product/edms",
      icon: FiEdit3,
      badge: "IT Act 2000",
    },
    {
      title: "AI/LLM Powered OCR",
      category: "Intelligent Capture",
      desc: "Context-aware neural vision model parsing tilted, complex, multi-page enterprise scans.",
      href: "/product/automation-suite/ap-automation",
      icon: FiMaximize2,
      badge: "99.4% Accuracy",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 text-[#353535] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header (OpenText Products Style per PDF Page 7) */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41a0c8]">
            Auggit Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062039] tracking-tight">
            Explore Data &amp; Workflow Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Vendor Onboarding | AP | GatePass | Weighbridge | ADE | Digital Signature | OCR
          </p>
        </div>

        {/* 7 Products Grid */}
        <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  to={item.href}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between h-full group hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#41a0c8] to-[#1267a7] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-[#062039] group-hover:bg-[#41a0c8] group-hover:text-white transition-colors flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.badge}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold text-[#062039] group-hover:text-[#41a0c8] transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                        <FiArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#41a0c8] group-hover:translate-x-1 transition-all" />
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between text-xs font-semibold text-[#41a0c8]">
                    <span>Learn More</span>
                    <span>→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

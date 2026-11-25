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
      desc: "Automated GSTIN, PAN & MSME verification with self-service supplier portal.",
      href: "/product/automation-suite/vendor-onboarding",
      icon: FiUserCheck,
      badge: "Self-Service",
    },
    {
      title: "AP Automation",
      category: "Accounts Payable",
      desc: "AI 3-way matching between Purchase Orders, Goods Receipts, and Invoices.",
      href: "/product/automation-suite/ap-automation",
      icon: FiCpu,
      badge: "3-Way Match",
    },
    {
      title: "Gate Pass Management",
      category: "Plant Logistics",
      desc: "Inward and outward material tracking with QR code boom barrier integration.",
      href: "/product/automation-suite/gate-pass",
      icon: FiTruck,
      badge: "QR Checkpoint",
    },
    {
      title: "Weighbridge Integration",
      category: "Hardware Sync",
      desc: "Direct digital weight indicator sync with automated CCTV vehicle snapshots.",
      href: "/product/automation-suite/weighbridge",
      icon: FiSliders,
      badge: "Anti-Tamper",
    },
    {
      title: "Automatic Data Entry",
      category: "AI Auto-Posting",
      desc: "Extracts unstructured data and auto-posts transactions into SAP FB60/MIRO.",
      href: "/product/automation-suite/automatic-data-entry",
      icon: FiZap,
      badge: "Zero Re-keying",
    },
    {
      title: "Digital Signatures",
      category: "Legal Compliance",
      desc: "Automated Class-3 DSC and Aadhaar eSign embedding for invoices and POs.",
      href: "/product/edms",
      icon: FiEdit3,
      badge: "IT Act 2000",
    },
    {
      title: "AI/LLM Powered OCR",
      category: "Intelligent Capture",
      desc: "Context-aware neural vision model parsing tilted, multi-page enterprise scans.",
      href: "/product/automation-suite/ap-automation",
      icon: FiMaximize2,
      badge: "99.4% Accuracy",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#f8fbfe] text-[#353535] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#1267a7] bg-[#e1f3fc] px-4 py-1.5 rounded-full border border-[#bce3f7]">
            Auggit Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062039] tracking-tight mt-3">
            Explore Data &amp; Workflow Solutions
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Vendor Onboarding | AP | GatePass | Weighbridge | ADE | Digital Signature | OCR
          </p>
        </div>

        {/* 7 Products Flex/Grid (Row 1: 4 cards, Row 2: 3 cards centered) */}
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] flex"
              >
                <Link
                  to={item.href}
                  className="relative w-full rounded-[20px] bg-white hover:bg-[#f2f8fd] border border-[#e2edf6] shadow-[0_4px_18px_rgba(6,32,57,0.04)] hover:shadow-[0_6px_22px_rgba(65,160,200,0.12)] p-6 sm:p-7 flex flex-col justify-between overflow-hidden transition-colors duration-300 group"
                >
                  {/* Top curved gradient stripe matching Auggit brand colors */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

                  {/* Top Row: Icon Container + Category Badge */}
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Auggit Brand Color Gradient Icon Squircle */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#41a0c8] via-[#2a87ba] to-[#1267a7] flex items-center justify-center text-white shadow-md shadow-[#41a0c8]/25 group-hover:shadow-lg group-hover:shadow-[#41a0c8]/40 transition-all duration-300">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>

                      {/* Pill Badge */}
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e8f4fc] text-[#062039] border border-[#d2ecfb]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="mt-5">
                      <h3 className="text-lg sm:text-xl font-bold text-[#062039] tracking-tight group-hover:text-[#1267a7] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-normal mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Divider & Action Link */}
                  <div className="pt-4 border-t border-slate-100/90 mt-5 flex items-center justify-between text-xs sm:text-sm font-bold text-[#1267a7]">
                    <span>Learn More</span>
                    <FiArrowRight className="w-4 h-4 text-[#1267a7] transition-transform duration-200 group-hover:translate-x-1" />
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

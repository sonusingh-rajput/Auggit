import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { Link } from "react-router";
import {
  FiUserCheck,
  FiClock,
  FiTruck,
  FiLayers,
  FiGrid,
  FiEyeOff,
  FiMaximize2,
  FiMail,
  FiEdit3,
  FiShare2,
  FiTag,
  FiActivity,
  FiList,
  FiShield,
  FiArrowRight,
  FiEye,
  FiCheckCircle,
  FiCpu,
  FiZap,
} from "react-icons/fi";

const challenges = [
  { icon: FiUserCheck, text: "Lengthy vendor onboarding and document validation" },
  { icon: FiClock, text: "Delays in procurement, Material receipt, and invoice processing" },
  { icon: FiTruck, text: "Manual gate pass and untracked material movement management" },
  { icon: FiLayers, text: "Disconnected documents, approvals, and communication" },
  { icon: FiGrid, text: "Manual data entry across multiple business processes" },
  { icon: FiEyeOff, text: "Limited operational visibility and audit readiness" },
];

const offerings = [
  {
    title: "Vendor Management",
    icon: FiUserCheck,
    desc: "Digitize vendor onboarding through centralized document submission, Automated verification of documents, approvals, and communication.",
  },
  {
    title: "Supplier Invoicing and Material Movement",
    icon: FiLayers,
    desc: "Simplify supply chain operations by connecting material movement, supplier invoice verification, supporting documents, approvals, and automated matching on a single platform.",
  },
  {
    title: "Gate Pass Management",
    icon: FiTruck,
    desc: "Digitize and monitor inward and outward material movement through structured approvals, real time tracking, and complete traceability.",
  },
  {
    title: "Weighbridge Integration",
    icon: FiActivity,
    desc: "Integrate weighbridge operations with business processes to automatically capture weight data, eliminate manual entry, and improve the accuracy and traceability of material movement.",
  },
];

const capabilities = [
  {
    title: "AI/LLM powered OCR and Intelligent Data Capture",
    icon: FiMaximize2,
    desc: "Extracts metadata from documents for faster, structured information processing. Using OCR and Agentic AI LLMs",
  },
  {
    title: "Email Ingestion",
    icon: FiMail,
    desc: "Captures emails and attachments, linking them to the relevant business records.",
  },
  { title: "Digital Signatures", icon: FiEdit3, desc: "Digitally signs documents for secure approvals." },
  { title: "ERP Integration", icon: FiShare2, desc: "Integrates seamlessly with ERP and enterprise systems." },
  {
    title: "Patented Tag Functionality",
    icon: FiTag,
    desc: "Integrates and links documents to transactions for instant retrieval",
  },
  {
    title: "Document Health Report",
    icon: FiActivity,
    desc: "Real-time monitoring of missing, incomplete and pending documentation",
  },
  {
    title: "TAG Report",
    icon: FiList,
    desc: "Identifies missing or unlinked documents and transactions to ensure complete process traceability.",
  },
  {
    title: "Audit Report",
    icon: FiShield,
    desc: "Generates audit ready reports with complete document traceability and process history.",
  },
];

const pillars = [
  {
    title: "Improve Productivity",
    icon: FiClock,
    bullets: ["Reduce manual effort", "Faster process execution", "Improved productivity"],
  },
  {
    title: "Increase Visibility",
    icon: FiEye,
    bullets: ["Connected documents", "Real time tracking", "Complete traceability"],
  },
  {
    title: "Strengthen Compliance",
    icon: FiShield,
    bullets: ["Audit readiness", "Better document control", "Improved governance"],
  },
];

const manualSteps = [
  "PO received on WhatsApp",
  "Truck arrives with e-way bill & invoice",
  "Gate team makes manual entries",
  "Quality team checks random potatoes",
  "If passed, truck goes to weighing & unload",
  "Accounts department enters documents",
  "Sent for CEO approval",
];

const cardClass =
  "group relative bg-white rounded-2xl border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/15 hover:border-[#41a0c8] transition-all duration-300";

const IconBadge = ({ icon: Icon }: { icon: any }) => (
  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#41a0c8] to-[#1267a7] text-white shadow-lg shadow-[#41a0c8]/25 shrink-0 group-hover:scale-110 transition-transform">
    <Icon className="w-5 h-5" />
  </div>
);

const SectionHeader = ({
  pill,
  title,
  highlight,
  desc,
}: {
  pill: string;
  title: string;
  highlight: string;
  desc?: ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center max-w-3xl mx-auto mb-16"
  >
    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
      {pill}
    </span>
    <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
      {title}{" "}
      <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">{highlight}</span>
    </h2>
    {desc && <p className="mt-3 text-[#353535] text-base">{desc}</p>}
  </motion.div>
);

export default function AutomationSuite() {
  return (
    <div className="min-h-screen bg-[#f1f2f2]/40 text-[#353535] overflow-x-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative px-6 pt-10 pb-10 sm:pt-14 sm:pb-12 max-w-7xl mx-auto">
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-[2.5rem]">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#9eddf7]/40 rounded-full blur-[100px] opacity-60"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#41a0c8]/20 rounded-full blur-[80px] opacity-40"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9eddf7]/30 border border-[#41a0c8]/30 text-[#1267a7] text-xs font-bold uppercase tracking-[0.15em]">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
              </span>
              Intelligent enterprise operations
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#062039] leading-[1.1]">
              Automation{" "}
              <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
                Suite
              </span>
            </h1>

            <p className="text-[#353535] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Automate. Simplify. Analyze. Audit. A unified platform that enables organizations to simplify, automate,
              and manage business operations across the enterprise.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg shadow-[#41a0c8]/25 hover:shadow-[#41a0c8]/40 hover:scale-105"
              >
                Schedule a Demo
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#offerings"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-semibold text-sm border border-[#e3e3e3] transition-all hover:scale-105 shadow-sm"
              >
                View Modules
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs pt-2">
              {["AI/LLM Powered OCR", "ERP Integration", "Audit Ready"].map((label) => (
                <span key={label} className="flex items-center gap-2 font-medium text-[#353535]">
                  <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========== OPERATIONAL CHALLENGES ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <SectionHeader
          pill="Operational Challenges"
          title="As businesses grow,"
          highlight="complexity grows with them"
          desc="Organizations often face challenges such as:"
        />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((item, idx) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`${cardClass} p-6 flex items-start gap-4`}
              >
                <IconBadge icon={item.icon} />
                <div>
                  <span className="text-xs font-bold text-[#41a0c8]">{String(idx + 1).padStart(2, "0")}</span>
                  <p className="text-sm font-semibold text-[#062039] leading-snug">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 bg-white rounded-2xl py-5 px-6 border border-[#e3e3e3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#1267a7]">The Result</span>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-sm font-semibold text-[#062039]">
            <span>Operational Delays</span>
            <span className="text-[#41a0c8]">•</span>
            <span>Increased Manual Effort</span>
            <span className="text-[#41a0c8]">•</span>
            <span>Limited Visibility</span>
            <span className="text-[#41a0c8]">•</span>
            <span className="text-[#c0392b]">Higher Compliance Risk</span>
          </div>
        </div>
      </section>

      {/* ========== INTRODUCING AUTOMATION SUITE ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
              The Platform
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062039]">
              Introducing{" "}
              <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
                Automation Suite
              </span>
            </h2>
            <p className="text-[#353535] text-base sm:text-lg leading-relaxed">
              A unified platform that enables organizations to simplify, automate, and manage business operations
              across the enterprise.
            </p>
            <div className={`${cardClass} p-6 border-l-4 border-l-[#41a0c8] text-left`}>
              <p className="text-sm sm:text-base text-[#062039] font-semibold leading-relaxed">
                Built to replace fragmented, manual operations with a connected and structured approach to managing
                everyday business processes.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg shadow-[#41a0c8]/25 hover:scale-105"
            >
              Request a Demo
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ========== WHAT AUTOMATION SUITE OFFERS ========== */}
      <section id="offerings" className="px-6 py-16 max-w-7xl mx-auto">
        <SectionHeader
          pill="What Automation Suite Offers"
          title="Four modules,"
          highlight="one connected platform"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {offerings.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className={`${cardClass} p-6 flex flex-col`}
            >
              <div className="mb-4">
                <IconBadge icon={item.icon} />
              </div>
              <h3 className="text-lg font-bold text-[#062039] mb-2 leading-snug">{item.title}</h3>
              <p className="text-sm text-[#353535] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`${cardClass} mt-6 p-8 flex items-start gap-5`}
        >
          <IconBadge icon={FiCpu} />
          <div>
            <h3 className="text-lg font-bold text-[#062039] mb-1">AI Enabled Intelligent Document Repository</h3>
            <p className="text-sm text-[#353535] leading-relaxed">
              A centralized, AI enabled repository that stores, classifies, and links documents across all modules for
              instant search, retrieval, and complete traceability.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========== INTELLIGENT PLATFORM CAPABILITIES ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <SectionHeader
          pill="Platform Capabilities"
          title="Intelligent"
          highlight="platform capabilities"
          desc="Powering each solution with intelligent document management, enterprise integration, and secure digital processes."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 4) * 0.1 }}
              whileHover={{ y: -6 }}
              className={`${cardClass} p-6 text-center`}
            >
              <div className="mb-4">
                <IconBadge icon={item.icon} />
              </div>
              <h3 className="text-base font-bold text-[#062039] mb-1">{item.title}</h3>
              <p className="text-xs text-[#353535] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== WHY AUTOMATION SUITE ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <SectionHeader
          pill="Why Automation Suite"
          title="Deliver measurable value"
          highlight="across business operations"
        />

        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className={`${cardClass} p-6 flex items-start gap-5`}
              >
                <IconBadge icon={pillar.icon} />
                <div>
                  <h3 className="text-lg font-bold text-[#062039] mb-2">{pillar.title}</h3>
                  <ul className="space-y-1.5">
                    {pillar.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-sm text-[#353535]">
                        <FiCheckCircle className="w-4 h-4 text-[#5e8b22] shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========== USE CASE: THE 7-STEP MANUAL PROCESS MAZE ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <SectionHeader
          pill="Case Study"
          title="The 7-Step"
          highlight="Manual Process Maze"
          desc="French fries manufacturer for McDonald's & PepsiCo."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <ol className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {manualSteps.map((step, i) => {
              const isLast = i === manualSteps.length - 1;
              return (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={
                    isLast
                      ? "sm:col-span-2 flex items-start gap-3 p-5 rounded-2xl bg-gradient-to-r from-[#062039] via-[#1267a7] to-[#41a0c8] text-white shadow-lg"
                      : `${cardClass} flex items-start gap-3 p-5`
                  }
                >
                  <span className={`text-lg font-extrabold ${isLast ? "text-[#f7c037]" : "text-[#41a0c8]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm font-semibold ${isLast ? "" : "text-[#062039]"}`}>
                    {step}
                    {isLast && (
                      <span className="block mt-1 text-xs font-normal text-[#9eddf7]">
                        The final bottleneck. Highly delayed due to manual compilation of physical documents scattered
                        across 6 prior steps.
                      </span>
                    )}
                  </span>
                </motion.li>
              );
            })}
          </ol>

          <div className="lg:col-span-5 space-y-6">
            <div className={`${cardClass} p-6`}>
              <h3 className="text-lg font-bold text-[#062039]">The Problem</h3>
              <p className="mt-1 text-sm text-[#353535]">An incredibly manual, un-tracked and scattered workflow.</p>
              <blockquote className="mt-3 pl-3 border-l-2 border-[#f7c037] text-sm italic text-[#353535]">
                "During audits, many documents went missing. The process was too manual and scattered across PO team,
                gate staff, QC team, accounts and CEO."
              </blockquote>
            </div>
            <div className={`${cardClass} p-6 border-[#41a0c8]/40`}>
              <h3 className="text-lg font-bold text-[#062039]">Auggit Solution</h3>
              <ul className="mt-3 space-y-2">
                {["Document workflow defined", "Tagging for traceability", "Online CEO approvals", "Zero document loss"].map(
                  (point) => (
                    <li key={point} className="flex items-center gap-2 text-sm font-medium text-[#062039]">
                      <FiCheckCircle className="w-4 h-4 text-[#5e8b22] shrink-0" />
                      {point}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#062039] via-[#1267a7] to-[#41a0c8] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl shadow-[#062039]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Ready to Transform Your Operations?
          </h3>
          <p className="text-[#9eddf7] text-sm sm:text-base max-w-xl mx-auto relative z-10">
            Automate. Simplify. Analyze. Audit. Connect your vendors, materials, gates and documents on one platform.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <Link
              to="/product/automation-suite/book-poc"
              className="px-8 py-3.5 rounded-full bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 group hover:scale-105"
            >
              <span>Book a Free POC</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 group hover:scale-105"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#41a0c8]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

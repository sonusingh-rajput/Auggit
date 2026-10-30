import { motion } from "framer-motion";
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
} from "react-icons/fi";

export default function AutomationSuite() {
  return (
    <div className="bg-[#ffffff] text-[#353535] selection:bg-[#41a0c8] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (Page 1) */}
      {/* ========================================================================= */}
      <section className="bg-[#062039] text-white py-16 sm:py-24 border-b border-[#1267a7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 space-y-6 text-left"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
                Automation <br />
                <span>Suite</span>
              </h1>

              {/* Gold Accent Bar */}
              <div className="w-20 h-1.5 bg-[#f7c037] rounded-full" />

              <div className="space-y-2">
                <p className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Automate. Simplify. Analyze. Audit.
                </p>
                <p className="text-base sm:text-lg text-[#9eddf7] font-medium">
                  Intelligent enterprise operations
                </p>
              </div>

              {/* Only Demo Button */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#41a0c8] hover:bg-[#1267a7] text-white font-bold text-sm transition-colors shadow-md"
                >
                  <span>Schedule a Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <div className="w-full max-w-lg">
                <img
                  src="/Automation_Suite_image/Automation_Suite_Heroimage.webp"
                  alt="Automation Suite Intelligent Operations"
                  width={600}
                  height={450}
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. OPERATIONAL CHALLENGES (Page 2) */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062039] tracking-tight">
              Operational Challenges
            </h2>
            <div className="w-16 h-1 bg-[#f7c037] rounded-full mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Context & Illustration */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-[#1267a7] leading-snug">
                  As businesses grow, operational complexity grows with them.
                </h3>
                <p className="text-sm sm:text-base text-[#353535]/80">
                  Organizations often face challenges such as:
                </p>
              </div>

              <div className="rounded-2xl border border-[#e3e3e3] p-4 bg-[#f1f2f2]/30 flex justify-center">
                <img
                  src="/Automation_Suite_image/Automation_Suite_Operational_Challenges.webp"
                  alt="Operational Complexity and Paperwork Challenges"
                  width={500}
                  height={350}
                  loading="lazy"
                  decoding="async"
                  className="w-full max-h-72 object-contain"
                />
              </div>
            </div>

            {/* Right 6 Challenge Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  num: "01",
                  icon: FiUserCheck,
                  text: "Lengthy vendor onboarding and document validation",
                },
                {
                  num: "02",
                  icon: FiClock,
                  text: "Delays in procurement, Material receipt, and invoice processing",
                },
                {
                  num: "03",
                  icon: FiTruck,
                  text: "Manual gate pass and untracked material movement management",
                },
                {
                  num: "04",
                  icon: FiLayers,
                  text: "Disconnected documents, approvals, and communication",
                },
                {
                  num: "05",
                  icon: FiGrid,
                  text: "Manual data entry across multiple business processes",
                },
                {
                  num: "06",
                  icon: FiEyeOff,
                  text: "Limited operational visibility and audit readiness",
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-white rounded-xl p-5 border border-[#e3e3e3] hover:border-[#41a0c8] transition-colors shadow-sm flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between pb-3 border-b border-[#e3e3e3]/70 mb-3">
                      <span className="text-lg font-extrabold text-[#1267a7]">
                        {item.num}
                      </span>
                      <div className="p-2 rounded-lg bg-[#9eddf7]/30 text-[#41a0c8]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-[#062039] leading-snug">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Result Bar */}
          <div className="bg-[#062039] text-white rounded-xl py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#f7c037]">
                Result
              </span>
              <span className="hidden md:inline-block w-px h-5 bg-[#41a0c8]" />
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-4 text-xs sm:text-sm font-semibold text-[#f1f2f2]">
              <span>Operational Delays</span>
              <span className="text-[#41a0c8]">•</span>
              <span>Increased Manual Effort</span>
              <span className="text-[#41a0c8]">•</span>
              <span>Limited Visibility</span>
              <span className="text-[#41a0c8]">•</span>
              <span className="text-[#ffeda0]">Higher Compliance Risk</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTRODUCING AUTOMATION SUITE (Page 3) */}
      {/* ========================================================================= */}
      <section className="bg-[#f1f2f2]/40 py-16 sm:py-24 border-b border-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062039] tracking-tight">
                  Introducing Automation Suite
                </h2>
                <div className="w-16 h-1 bg-[#f7c037] rounded-full mt-3" />
              </div>

              <p className="text-base sm:text-xl font-medium text-[#353535] leading-relaxed">
                A unified platform that enables organizations to simplify, automate, and manage business operations across the enterprise
              </p>

              <div className="p-6 rounded-2xl bg-white border border-[#e3e3e3] border-l-4 border-l-[#41a0c8] shadow-sm">
                <p className="text-sm sm:text-base text-[#062039] font-semibold leading-relaxed">
                  Built to replace fragmented, manual operations with a connected and structured approach to managing everyday business processes
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <span>Request a Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Right Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <div className="w-full max-w-xl">
                <img
                  src="/Automation_Suite_image/Automation_Suite_Introducing.webp"
                  alt="Introducing Automation Suite Architecture"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. WHAT AUTOMATION SUITE OFFERS (Page 4) */}
      {/* ========================================================================= */}
      <section className="bg-[#062039] text-white py-16 sm:py-24 border-b border-[#1267a7]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              What Automation Suite Offers
            </h2>
            <div className="w-16 h-1 bg-[#f7c037] rounded-full mt-3" />
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Vendor Management",
                img: "/Automation_Suite_image/Automation_Suite_Vendor_Management.webp",
                desc: "Digitize vendor onboarding through centralized document submission, Automated verification of documents, approvals, and communication.",
              },
              {
                title: "Supplier Invoicing and Material Movement",
                img: "/Automation_Suite_image/Automation_Suite_Supplier_Invoicing_and_Material_Movement.webp",
                desc: "Simplify supply chain operations by connecting material movement, supplier invoice verification, supporting documents, approvals, and automated matching on a single platform.",
              },
              {
                title: "Gate Pass Management",
                img: "/Automation_Suite_image/Automation_Suite_Gate_Pass_Management.png",
                desc: "Digitize and monitor inward and outward material movement through structured approvals, real time tracking, and complete traceability.",
              },
              {
                title: "Weighbridge Integration",
                img: "/Automation_Suite_image/Automation_Suite_Weighbridge_Integration.webp",
                desc: "Integrate weighbridge operations with business processes to automatically capture weight data, eliminate manual entry, and improve the accuracy and traceability of material movement.",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#41a0c8] transition-colors flex flex-col justify-start"
              >
                {/* Visual */}
                <div className="h-40 mb-4 flex items-center justify-center rounded-xl bg-[#062039]/50 border border-white/5">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="max-h-32 w-auto object-contain drop-shadow-md"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug lg:min-h-[4.5rem]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#f1f2f2]/80 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI-enabled Intelligent Document Repository */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-white/5 rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#41a0c8] transition-colors"
          >
            <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
              AI Enabled Intelligent Document Repository
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-[#f1f2f2]/80 leading-relaxed">
              A centralized, AI enabled repository that stores, classifies, and links documents across all modules for instant search, retrieval, and complete traceability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTELLIGENT PLATFORM CAPABILITIES (Page 5) */}
      {/* ========================================================================= */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062039] tracking-tight">
              Intelligent Platform Capabilities
            </h2>
            <div className="w-16 h-1 bg-[#f7c037] rounded-full mt-3" />
            <p className="mt-3 text-sm sm:text-base text-[#353535]/80 max-w-3xl">
              Powering each solution with intelligent document management, enterprise integration, and secure digital processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 8 Capability Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "AI/LLM powered OCR & Intelligent Data Capture",
                  icon: FiMaximize2,
                  desc: "Extracts metadata from documents for faster, structured information processing. Using OCR and Agentic AI LLMs",
                },
                {
                  title: "Email Ingestion",
                  icon: FiMail,
                  desc: "captures emails and attachments, linking them to the relevant business records.",
                },
                {
                  title: "Digital Signatures",
                  icon: FiEdit3,
                  desc: "Digitally signs documents for secure approvals.",
                },
                {
                  title: "ERP Integration",
                  icon: FiShare2,
                  desc: "Integrates seamlessly with ERP and enterprise systems.",
                },
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
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.04 }}
                    className="bg-white rounded-xl p-4 sm:p-5 border border-[#e3e3e3] hover:border-[#41a0c8] transition-colors shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-[#9eddf7]/30 text-[#41a0c8] shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-[#062039]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#353535]/80 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="w-full max-w-md">
                <img
                  src="/Automation_Suite_image/Automation_Suite_Intelligent_Platform_Capabilities.webp"
                  alt="Platform Capabilities Network"
                  width={500}
                  height={380}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. WHY AUTOMATION SUITE (Page 6) */}
      {/* ========================================================================= */}
      <section className="bg-[#f1f2f2]/40 py-16 sm:py-24 border-b border-[#e3e3e3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062039] tracking-tight">
              Why Automation Suite
            </h2>
            <div className="w-16 h-1 bg-[#f7c037] rounded-full mt-3" />
            <p className="mt-2 text-base sm:text-lg font-medium text-[#1267a7]">
              Deliver measurable value across business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 3 Pillars */}
            <div className="lg:col-span-6 space-y-5">
              {[
                {
                  title: "Improve Productivity",
                  icon: FiClock,
                  bullets: [
                    "Reduce manual effort",
                    "Faster process execution",
                    "Improved productivity",
                  ],
                },
                {
                  title: "Increase Visibility",
                  icon: FiEye,
                  bullets: [
                    "Connected documents",
                    "Real time tracking",
                    "Complete traceability",
                  ],
                },
                {
                  title: "Strengthen Compliance",
                  icon: FiShield,
                  bullets: [
                    "Audit readiness",
                    "Better document control",
                    "Improved governance",
                  ],
                },
              ].map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="bg-white rounded-xl p-6 border border-[#e3e3e3] shadow-sm space-y-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[#41a0c8] text-white">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-[#062039]">
                        {pillar.title}
                      </h3>
                    </div>
                    <ul className="space-y-1.5 pl-9 text-sm font-medium text-[#353535]">
                      {pillar.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#41a0c8]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Graphic */}
            <div className="lg:col-span-6 flex justify-center items-center">
              <div className="w-full max-w-lg">
                <img
                  src="/Automation_Suite_image/Automation_Suite_Why_Automation_Suite.webp"
                  alt="Measurable Value with Productivity, Visibility and Compliance"
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. THANK YOU / CTA (Page 7) */}
      {/* ========================================================================= */}
      {/* <section className="bg-[#062039] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"> */}
      {/* Left Content */}
      {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 space-y-6"
            >
              <div>
                <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
                  Thank You
                </h2>
                <div className="w-20 h-1.5 bg-[#f7c037] rounded-full mt-4" />
              </div>

              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-[#9eddf7]">
                  Automation Suite
                </p>
                <p className="text-sm sm:text-base text-white/80">
                  Automate. Simplify. Analyze. Audit.
                </p>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                  Ready to transform your <br />
                  <span>business operations?</span>
                </h3>
              </div> */}

      {/* Demo button */}
      {/* <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#41a0c8] hover:bg-[#1267a7] text-white font-bold text-sm transition-colors shadow-md"
                >
                  <span>Schedule a Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div> */}

      {/* <div className="pt-4 text-xs sm:text-sm font-semibold text-[#9eddf7] flex items-center gap-4">
                <a
                  href="https://www.auggit.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  www.auggit.com
                </a>
                <span>•</span>
                <span>contact@auggit.in</span>
              </div>
            </motion.div> */}

      {/* Right Graphic */}
      {/* <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-6 flex justify-center items-center"
            >
              <div className="w-full max-w-xl">
                <img
                  src="/Automation_Suite_image/Automation_Suite_Thank_You.png"
                  alt="Ready to Transform Operations"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

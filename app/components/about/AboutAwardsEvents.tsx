import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiMapPin, FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

export default function AboutAwardsEvents() {
  const awards = [
    {
      title: "Innovation in Enterprise SCM Automation",
      forum: "14th CFO & Finance Transformation Summit – Mumbai",
      location: "Mumbai",
      badge: "Industry Winner",
      desc: "Recognized for AI-driven 3-way invoice matching (MIRO-MIGO) and hardware-integrated gate pass traceability.",
    },
    {
      title: "Excellence in Financial Digital Transformation",
      forum: "Chartered Accountants Conference – Bangalore",
      location: "Bangalore",
      badge: "Pioneer Award",
      desc: "Awarded for enabling paperless compliance, automated audit trails, and Section 128(1) Indian data residency readiness.",
    },
    {
      title: "Enterprise Document Governance Recognition",
      forum: "ICAI National Conclave – New Delhi",
      location: "New Delhi",
      badge: "Governance Leader",
      desc: "Honored for sub-second indexed search, AES-256 cloud vaults, and enterprise ERP document linking.",
    },
    {
      title: "Enterprise Accounting Technology Award",
      forum: "Regional CA Summit – Pune",
      location: "Pune",
      badge: "Special Recognition",
      desc: "Acknowledged for frictionless integration with SAP ECC, S/4HANA, Tally Prime, and Zoho Books.",
    },
  ];

  const events = [
    {
      title: "14th Annual Finance Transformation Summit",
      edition: "Flagship Keynote & Exhibition",
      date: "Mumbai, India",
      link: "https://financetransformationindia.com/Home.aspx",
      linkText: "Summit Portal",
      highlight: "Keynote on Autonomous ERP Workflows",
    },
    {
      title: "National CA & CFO Conclave – Bangalore",
      edition: "Executive Panel & Masterclass",
      date: "Bangalore, India",
      highlight: "Session on Audit Trails & MCA Compliance",
    },
    {
      title: "ICAI Digital Governance Summit – New Delhi",
      edition: "Enterprise Technology Showcase",
      date: "New Delhi, India",
      highlight: "Demonstrating SLaiCE Real-time SAP Slicing",
    },
    {
      title: "Corporate Accounting & Tech Conclave – Pune",
      edition: "Roundtable & Product Live Demos",
      date: "Pune, India",
      highlight: "Showcasing Vendor Onboarding Automation",
    },
  ];

  return (
    <section className="relative py-12 sm:py-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider">
            <FaTrophy className="w-3.5 h-3.5 text-[#f7c037]" />
            <span>Honors & Industry Presence</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-[#062039] tracking-tight">
            Awards & Industry Events
          </h3>
          <p className="text-sm sm:text-base text-slate-600">
            Showcased at premier enterprise finance summits, recognized by chartered accountant forums across India.
          </p>
        </div>

        {/* 2-Column Grid: Awards on Left, Events on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Awards & Recognitions */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <FiAward className="w-5 h-5 text-[#41a0c8]" />
              <h4 className="text-lg font-bold text-[#062039]">Awards & Recognitions</h4>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 hover:border-[#41a0c8] hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#41a0c8]/10 text-[#1267a7]">
                      {award.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <FiMapPin className="w-3 h-3 text-[#f7c037]" />
                      <span>{award.location}</span>
                    </span>
                  </div>

                  <h5 className="text-base font-bold text-[#062039]">
                    {award.title}
                  </h5>
                  <p className="text-xs font-semibold text-[#1267a7] mt-0.5">
                    {award.forum}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {award.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Events & Summits */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
              <FiCalendar className="w-5 h-5 text-[#1267a7]" />
              <h4 className="text-lg font-bold text-[#062039]">Events & Key Summits</h4>
            </div>

            <div className="space-y-4">
              {events.map((evt, index) => (
                <motion.div
                  key={evt.title}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-5 hover:border-[#1267a7] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#062039] uppercase tracking-wider">
                        {evt.edition}
                      </span>
                      <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                        <FiMapPin className="w-3 h-3 text-[#41a0c8]" />
                        <span>{evt.date}</span>
                      </span>
                    </div>

                    <h5 className="text-base font-bold text-[#062039]">
                      {evt.title}
                    </h5>

                    <p className="text-xs text-slate-600 mt-2 flex items-center gap-2">
                      <FiCheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{evt.highlight}</span>
                    </p>
                  </div>

                  {evt.link && (
                    <div className="pt-3 mt-3 border-t border-slate-200/60">
                      <a
                        href={evt.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] transition-colors"
                      >
                        <span>Visit {evt.linkText || "Official Website"}</span>
                        <FiExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

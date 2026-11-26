import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiMapPin,
  FiExternalLink,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle
} from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

export default function HomeAwardsEvents() {
  const awards = [
    {
      title: "Innovation in Enterprise SCM Automation",
      forum: "14th CFO & Finance Transformation Summit – Mumbai",
      location: "Mumbai",
      badge: "Industry Winner",
      desc: "Recognized for AI-driven 3-way invoice matching (MIRO-MIGO) and hardware-integrated gate pass traceability.",
      image: "/images/awards/award1.jpeg",
    },
    {
      title: "Excellence in Financial Digital Transformation",
      forum: "Chartered Accountants Conference – Bangalore",
      location: "Bangalore",
      badge: "Pioneer Award",
      desc: "Awarded for enabling paperless compliance, automated audit trails, and Section 128 Indian data residency readiness.",
      image: "/images/awards/award2.jpeg",
    },
    {
      title: "Enterprise Document Governance Recognition",
      forum: "ICAI National Conclave – New Delhi",
      location: "New Delhi",
      badge: "Governance Leader",
      desc: "Honored for sub-second indexed search, AES-256 cloud vaults, and enterprise ERP document linking.",
      image: "/images/awards/award3.jpeg",
    },
    {
      title: "Innovation in Enterprise SCM Automation",
      forum: "14th CFO & Finance Transformation Summit – Mumbai",
      location: "Mumbai",
      badge: "Industry Winner",
      desc: "Recognized for AI-driven 3-way invoice matching (MIRO-MIGO) and hardware-integrated gate pass traceability.",
      image: "/images/awards/award4.jpeg",
    }
  ];

  const events = [
    {
      title: "14th Annual Finance Transformation Summit",
      edition: "Flagship Keynote & Exhibition",
      date: "Bangalore, India",
      //link: "https://financetransformationindia.com/Home.aspx",
      linkText: "Summit Portal",
      highlight: "Keynote on Autonomous ERP Workflows",
      image: "/images/events/event1.jpeg",
    },
    {
      title: "27 National Conference of Chartered Accountants",
      edition: "Executive Panel & Masterclass",
      date: "Bangalore, India",
      highlight: "Session on Audit Trails & MCA Compliance",
      image: "/images/events/event5.jpeg",
    },
    {
      title: "AIS",
      edition: "Enterprise Technology Showcase",
      date: "New Delhi, India",
      highlight: "Explaining the importance of complainces and audit trails",
      image: "/images/events/event32.jpeg",
    },
    {
      title: "Samvada",
      edition: "Enterprise Technology Showcase",
      date: "New Delhi, India",
      highlight: "Demonstrating SLaiCE Real-time SAP Slicing",
      image: "/images/events/event3.jpeg",
    },
  ];

  const [activeTab, setActiveTab] = useState<"awards" | "events">("awards");
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItems = activeTab === "awards" ? awards : events;
  const visibleItems = [0, 1, 2].map(
    (offset) => activeItems[(activeIndex + offset) % activeItems.length]
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % activeItems.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [activeItems.length, activeTab]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + activeItems.length) % activeItems.length);
  };
  const showNext = () => {
    setActiveIndex((current) => (current + 1) % activeItems.length);
  };
  const selectTab = (tab: "awards" | "events") => {
    setActiveTab(tab);
    setActiveIndex(0);
  };

  return (
    <section className="relative py-10 sm:py-14 bg-white border-b border-slate-200 text-[#353535] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">

        {/* Seamless Enterprise Ecosystem Banner */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#41a0c8]/20 via-[#1267a7]/10 to-[#9eddf7]/20 rounded-2xl sm:rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500 pointer-events-none" />
          <div className="relative bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f7fd] border border-slate-200/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden flex flex-col items-center justify-center">

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#062039] text-center mb-6 sm:mb-8">
              Seamlessly Connected Enterprise Systems
            </h2>

            {/* Logos Only (Separated, no text, no extra design) */}
            <div className="flex flex-wrap items-center justify-center gap-12 sm:gap-20 py-2 sm:py-4">
              <img
                src="/images/sap-logo-clean.png"
                alt="SAP"
                className="h-14 sm:h-20 w-auto object-contain"
                loading="lazy"
              />
              <img
                src="/images/tally-logo-clean.png"
                alt="Tally"
                className="h-12 sm:h-18 w-auto object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </div>

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

        <div className="max-w-5xl mx-auto space-y-6">
          <div
            role="tablist"
            aria-label="Awards and events"
            className="flex justify-center gap-2 border-b border-slate-200"
          >
            <button
              id="awards-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === "awards"}
              aria-controls="awards-events-panel"
              onClick={() => selectTab("awards")}
              className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === "awards"
                  ? "border-[#41a0c8] text-[#062039]"
                  : "border-transparent text-slate-500 hover:text-[#41a0c8]"
                }`}
            >
              <FiAward className="w-4 h-4" />
              Awards & Recognitions
            </button>
            <button
              id="events-tab"
              type="button"
              role="tab"
              aria-selected={activeTab === "events"}
              aria-controls="awards-events-panel"
              onClick={() => selectTab("events")}
              className={`inline-flex items-center gap-2 px-5 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === "events"
                  ? "border-[#41a0c8] text-[#062039]"
                  : "border-transparent text-slate-500 hover:text-[#41a0c8]"
                }`}
            >
              <FiCalendar className="w-4 h-4" />
              Events & Key Summits
            </button>
          </div>

          <div
            id="awards-events-panel"
            role="tabpanel"
            aria-labelledby={activeTab === "awards" ? "awards-tab" : "events-tab"}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                key={`${activeTab}-${activeIndex}`}
                initial={{ opacity: 0.75, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {visibleItems.map((item) => (
                  <article
                    key={item.title}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
                  >
                    <div className="h-48 overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5 flex flex-1 flex-col">
                      {activeTab === "awards" ? (
                        <>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#41a0c8]/10 text-[#1267a7]">
                              {"badge" in item ? item.badge : ""}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <FiMapPin className="w-3 h-3 text-[#f7c037]" />
                              {"location" in item ? item.location : ""}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-[#062039]">
                            {item.title}
                          </h4>
                          <p className="text-xs font-semibold text-[#1267a7] mt-2">
                            {"forum" in item ? item.forum : ""}
                          </p>
                          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                            {"desc" in item ? item.desc : ""}
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#1267a7]">
                              {"edition" in item ? item.edition : ""}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1">
                              <FiMapPin className="w-3 h-3 text-[#41a0c8]" />
                              {"date" in item ? item.date : ""}
                            </span>
                          </div>
                          <h4 className="text-base font-bold text-[#062039]">
                            {item.title}
                          </h4>
                          <p className="text-sm text-slate-600 mt-3 flex items-start gap-2">
                            <FiCheckCircle className="w-4 h-4 mt-0.5 text-emerald-600 flex-shrink-0" />
                            <span>{"highlight" in item ? item.highlight : ""}</span>
                          </p>
                          {"link" in item && Boolean(item.link) && (
                            <a
                              href={String(item.link)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 mt-auto pt-4 text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] transition-colors"
                            >
                              Visit {("linkText" in item && String(item.linkText)) || "Official Website"}
                              <FiExternalLink className="w-3.5 h-3.5" />
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>

            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Previous ${activeTab === "awards" ? "award" : "event"}`}
              className="absolute left-2 sm:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#062039] shadow-md flex items-center justify-center"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={`Next ${activeTab === "awards" ? "award" : "event"}`}
              className="absolute right-2 sm:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-slate-200 text-[#062039] shadow-md flex items-center justify-center"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-2 mt-5">
              {activeItems.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.title}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-[#41a0c8]" : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

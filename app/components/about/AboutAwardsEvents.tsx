import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FiAward,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiMapPin,
  FiHash,
} from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

const awards = [
  {
    title: "Innovation in Enterprise SCM Automation",
    forum: "14th CFO & Finance Transformation Summit",
    location: "Mumbai",
    badge: "Industry Winner",
    description:
      "Recognized for AI-driven 3-way invoice matching and hardware-integrated gate pass traceability.",
    image: "/images/awards/award1.jpeg",
  },
  {
    title: "Excellence in Financial Digital Transformation",
    forum: "Chartered Accountants Conference",
    location: "Bangalore",
    badge: "Pioneer Award",
    description:
      "Awarded for enabling paperless compliance, automated audit trails, and Indian data residency readiness.",
    image: "/images/awards/award2.jpeg",
  },
  {
    title: "Enterprise Document Governance Recognition",
    forum: "ICAI National Conclave",
    location: "New Delhi",
    badge: "Governance Leader",
    description:
      "Honored for indexed search, secure cloud document vaults, and enterprise ERP document linking.",
    image: "/images/awards/award3.jpeg",
  },
  {
    title: "Enterprise Document Governance Recognition",
    forum: "ICAI National Conclave",
    location: "New Delhi",
    badge: "Governance Leader",
    description:
      "Honored for indexed search, secure cloud document vaults, and enterprise ERP document linking.",
    image: "/images/awards/award4.jpeg",
  }
];

const events = [
  {
    title: "SAMVAADA 2006",
    edition: "Flagship Keynote & Exhibition",
    date: "21-22 Aug 26",
    location: "White petals, Palace Ground Bangalore ",
    booth: "15",
    highlight: "Keynote on Autonomous ERP Workflows",
    image: "/images/events/event3.jpeg",
  },
  {
    title: "14th Finance Transformation & Analytics India Summit & Awards 2026",
    edition: "Executive Panel & Masterclass",
    date: "21 July 26",
    location: "Radisson Blu Mumbai International Airport",
    booth: "",
    highlight: "Session on Audit Trails & MCA Compliance",
    image: "/images/events/event1.jpeg",
  },
  {
    title: "AIS -ICAI AI Innovation Summit 2026 (AIS 2026)",
    edition: "Enterprise Technology Showcase",
    date: "26th–27th June 26",
    location: "Bharat Mandapam, New Delhi",
    booth: "",
    highlight: "Demonstrating SLaiCE real-time SAP data slicing",
    image: "/images/events/event32.jpeg",
  },
  {
    title: "27th national conference of practicing company secretary",
    edition: "Enterprise Technology Showcase",
    date: "13th-14th  June 26",
    location: "Pune, Maharashtra",
    booth: "",
    highlight: "Demonstrating SLaiCE real-time SAP data slicing",
    image: "/images/events/event7.jpeg",
  }
];

export default function AboutAwardsEvents() {
  const [awardIndex, setAwardIndex] = useState(0);
  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setAwardIndex((current) => (current + 1) % awards.length);
      setEventIndex((current) => (current + 1) % events.length);
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  const visibleAwards = [0, 1, 2].map(
    (offset) => awards[(awardIndex + offset) % awards.length]
  );
  const visibleEvents = [0, 1, 2].map(
    (offset) => events[(eventIndex + offset) % events.length]
  );

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 py-12 shadow-sm sm:p-10 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-14">
        <header className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e3e3] bg-[#f1f2f2] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
            <FaTrophy className="h-3.5 w-3.5 text-[#f7c037]" />
            <span>Honors & Industry Presence</span>
          </div>
          <h3 className="text-2xl font-extrabold tracking-tight text-[#062039] sm:text-4xl">
            Awards & Recognitions
          </h3>
          <p className="text-sm text-slate-600 sm:text-base">
            Recognition for innovation and enterprise transformation.
          </p>
        </header>

        <section aria-label="Awards and recognitions carousel" className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleAwards.map((award, index) => (
              <motion.article
                key={`${award.title}-${awardIndex}-${index}`}
                initial={{ opacity: 0.6, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={award.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded-md bg-[#41a0c8]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1267a7]">
                      {award.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <FiMapPin className="h-3.5 w-3.5 text-[#f7c037]" />
                      {award.location}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#062039]">
                    {award.title}
                  </h4>
                  <p className="mt-2 text-xs font-semibold text-[#1267a7]">
                    {award.forum}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {award.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setAwardIndex((current) => (current - 1 + awards.length) % awards.length)
              }
              aria-label="Previous awards"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#062039] shadow-sm hover:border-[#41a0c8]"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {awards.map((award, index) => (
                <button
                  key={award.title}
                  type="button"
                  onClick={() => setAwardIndex(index)}
                  aria-label={`Show awards starting with ${award.title}`}
                  aria-current={index === awardIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    index === awardIndex ? "w-7 bg-[#41a0c8]" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setAwardIndex((current) => (current + 1) % awards.length)}
              aria-label="Next awards"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#062039] shadow-sm hover:border-[#41a0c8]"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>

        <section aria-labelledby="about-events-heading" className="space-y-6">
          <header className="mx-auto max-w-3xl space-y-3 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e3e3e3] bg-[#f1f2f2] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
              <FiCalendar className="h-3.5 w-3.5 text-[#1267a7]" />
              <span>Meet Auggit</span>
            </div>
            <h3
              id="about-events-heading"
              className="text-2xl font-extrabold tracking-tight text-[#062039] sm:text-4xl"
            >
              Events & Conferences
            </h3>
            <p className="text-sm text-slate-600 sm:text-base">
              Explore our participation in enterprise finance and technology events.
            </p>
          </header>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleEvents.map((event, index) => (
              <motion.article
                key={`${event.title}-${eventIndex}-${index}`}
                initial={{ opacity: 0.6, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={event.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#1267a7]">
                    {event.edition}
                  </p>
                  <h4 className="mt-2 text-base font-bold text-[#062039]">
                    {event.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {event.highlight}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-500">
                    <li className="flex items-center gap-2">
                      <FiCalendar className="h-4 w-4 shrink-0 text-[#41a0c8]" />
                      <span>{event.date}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiMapPin className="h-4 w-4 shrink-0 text-[#41a0c8]" />
                      <span>{event.location}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FiHash className="h-4 w-4 shrink-0 text-[#41a0c8]" />
                      <span>Booth: {event.booth}</span>
                    </li>
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setEventIndex((current) => (current - 1 + events.length) % events.length)
              }
              aria-label="Previous events"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#062039] shadow-sm hover:border-[#41a0c8]"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {events.map((event, index) => (
                <button
                  key={event.title}
                  type="button"
                  onClick={() => setEventIndex(index)}
                  aria-label={`Show events starting with ${event.title}`}
                  aria-current={index === eventIndex ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    index === eventIndex ? "w-7 bg-[#41a0c8]" : "w-2 bg-slate-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setEventIndex((current) => (current + 1) % events.length)}
              aria-label="Next events"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-[#062039] shadow-sm hover:border-[#41a0c8]"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

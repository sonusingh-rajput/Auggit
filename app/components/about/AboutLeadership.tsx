import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiLinkedin, FiMail } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

interface LeaderCardProps {
  leader: Leader;
  index: number;
}

const leaders: Leader[] = [
  {
    name: "Govind Gagoria",
    role: "CEO & Founder",
    bio: "Auggit enables customers to convert their paper documents into digital documents, automating financial processes and reducing the need for tedious bookkeeping. Under Govind Gagoria's leadership, Auggit has expanded its footprint from basic document management to sophisticated ERP-integrated environments and compliance-driven enterprise architectures.",
    image: "/ceo_founder.png",
    linkedin: "https://www.linkedin.com/in/govindgagoria/",
  },
  {
    name: "Sudeesh Kuttykrishnan",
    role: "CTO",
    bio: "A seasoned Technology Business Leader with 30 years of experience in software product management and enterprise leadership. Over 23 years at SAP, he led development teams, managed products across SAP’s portfolio, and drove adoption of SAP technologies across 40 countries, orchestrating innovations like the SAP Co-Innovation Lab in Qatar.",
    image: "/cto.png",
    linkedin: "https://www.linkedin.com/in/sudeeshk/",
  },
];

const LeaderCard = ({ leader, index }: LeaderCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      whileHover={{ y: -4 }}
      className="group relative bg-white rounded-3xl shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-[#41a0c8]/10 transition-shadow duration-500 border border-[#e3e3e3] overflow-hidden"
    >
      {/* Decorative gradient bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 p-6 sm:p-8 lg:p-10">
        {/* Left column - Avatar & info */}
        <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4 lg:border-r border-[#e3e3e3] lg:pr-8">
          <div className="relative">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-4 border-white shadow-lg shadow-[#41a0c8]/10 bg-[#f1f2f2] group-hover:shadow-xl group-hover:shadow-[#41a0c8]/20 transition-shadow duration-300">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500 -z-10" />
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-[#062039] tracking-tight">
              {leader.name}
            </h3>
            <p className="text-sm font-bold text-[#41a0c8] tracking-wide">
              {leader.role}
            </p>
          </div>

          {/* Social & contact */}
          <div className="flex items-center gap-2 pt-2">
            {leader.linkedin && leader.linkedin !== "#" && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[#f1f2f2] text-[#41a0c8] hover:bg-[#41a0c8] hover:text-white transition-colors duration-300 border border-[#e3e3e3]"
              >
                <FiLinkedin className="w-4 h-4" />
              </a>
            )}
            <a
              href="#"
              className="p-2 rounded-full bg-[#f1f2f2] text-[#979797] hover:bg-[#e3e3e3] hover:text-[#062039] transition-colors duration-300 border border-[#e3e3e3]"
            >
              <FiMail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right column - Bio */}
        <div className="lg:col-span-8 flex flex-col justify-center space-y-4 lg:pl-8 pt-6 lg:pt-0">
          <div className="flex items-start gap-3">
            <FaQuoteLeft className="w-5 h-5 text-[#41a0c8]/40 flex-shrink-0 mt-1" />
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#979797]">
              Professional Background
            </h4>
          </div>
          <p className="text-[#353535] text-sm sm:text-base leading-relaxed">
            {leader.bio}
          </p>
          <div className="pt-3 border-t border-[#e3e3e3]">
            <span className="text-xs font-semibold text-[#979797] uppercase tracking-wider">
              Enterprise Vision
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutLeadership() {
  return (
    <section className="relative py-8 sm:py-12 bg-[#ffffff] border-b border-[#e3e3e3] rounded-3xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#9eddf7] text-[#41a0c8] text-xs font-bold uppercase tracking-[0.15em]">
            <span className="relative flex w-2 h-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
            </span>
            Executive Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#062039] leading-tight">
            Guided by{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
              Expertise & Vision
            </span>
          </h2>
          <p className="text-[#353535] text-base max-w-2xl mx-auto">
            Meet the leaders driving Auggit’s product strategy, enterprise intelligence, and global digital transformations.
          </p>
        </motion.div>

        {/* Leadership cards */}
        <div className="space-y-8 max-w-5xl mx-auto">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>

        {/* Additional callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center text-sm text-[#979797]"
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#41a0c8]" />
            Committed to building a future‑ready enterprise
          </span>
        </motion.div>
      </div>
    </section>
  );
}
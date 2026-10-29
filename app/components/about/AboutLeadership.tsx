import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const ceoData: Leader = {
  name: "Govind Gagoria",
  role: "Chief Executive Officer & Founder",
  bio: "Govind Gagoria is a visionary enterprise technology leader with deep expertise in digital transformation, ERP automation, and financial compliance. Under his leadership, Auggit has expanded its footprint from basic document management to sophisticated ERP-integrated environments and compliance-driven enterprise architectures across India and global markets.",
  image: "/images/leaders/ceo_founder.webp?v=2",
  linkedin: "https://www.linkedin.com/in/govindgagoria/",
};

const leadersList: Leader[] = [
  {
    name: "Sudeesh Kuttykrishnan",
    role: "Chief Technology Officer (CTO)",
    bio: "30+ years in software product management and technology leadership, including 23 years at SAP driving innovations across 40 countries.",
    image: "/images/leaders/cto.webp?v=2",
    linkedin: "https://www.linkedin.com/in/sudeeshk/",
  },
  {
    name: "Somprav Pareek",
    role: "Chief Solutions Officer",
    bio: "Enterprise solutions architect with deep specialization in SAP transformation, ABAP data engineering, and agentic enterprise AI systems.",
    image: "/images/leaders/somprav_pareek.webp?v=2",
    linkedin: "https://www.linkedin.com/in/somprav-pareek-73212a1/",
  },
  {
    name: "Aditya Vikram Sonee",
    role: "Director & Strategic Growth",
    bio: "Corporate leader driving strategic enterprise partnerships, corporate governance, and multi-market scale for Auggit's compliance ecosystem.",
    image: "/images/leaders/aditya_sonee.webp?v=2",
    linkedin: "https://www.linkedin.com/in/aditya-vikram-sonee-ba866011/",
  },
  {
    name: "Divesh Sharma",
    role: "Director & Finance Transformation",
    bio: "Enterprise finance specialist pioneering autonomous 3-way invoice matching (MIRO-MIGO), audit-readiness, and frictionless ERP integration.",
    image: "/images/leaders/divesh_sharma.webp?v=2",
    linkedin: "https://www.linkedin.com/in/diveshgsharma/",
  },
  {
    name: "Vivek Katheriya",
    role: "Director & Enterprise Enablement",
    bio: "Enterprise document strategist and systems consultant empowering large organizations to eliminate paper and automate complex supply chains.",
    image: "/images/leaders/vivek_katheriya.webp?v=2",
    linkedin: "https://www.linkedin.com/in/vivekkatheriya/",
  },
];

export default function AboutLeadership() {
  const scrollToTeam = () => {
    document.getElementById("leadership-team-grid")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-12 sm:py-16 bg-white border border-[#e3e3e3] rounded-3xl shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* ========================================================================= */}
        {/* TOP ROW: 'Our executive team' on Left + CEO Card on Right (Reference Design) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading + Narrative + Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-4 space-y-5"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#41a0c8]" />
              Leadership
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062039] tracking-tight leading-tight">
              Our executive team
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our leadership includes experts with decades of experience in the enterprise software, SAP architecture, data compliance, and building mission-critical platforms for global enterprises.
            </p>

            <div>
              <button
                type="button"
                onClick={scrollToTeam}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#062039] hover:bg-[#41a0c8] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-300 shadow-md cursor-pointer transform active:scale-95"
              >
                <span>Our Team</span>
                <FiArrowDown className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Featured CEO Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="gsap-card lg:col-span-8 bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* CEO Portrait */}
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white shadow-md bg-white">
                  <img
                    src={ceoData.image}
                    alt={ceoData.name}
                    width={300}
                    height={300}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* CEO Bio */}
              <div className="md:col-span-7 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-[#062039] tracking-tight">
                    {ceoData.name}
                  </h3>
                  <p className="text-xs font-bold text-[#41a0c8] uppercase tracking-wider">
                    {ceoData.role}
                  </p>
                </div>

                <div className="flex items-start gap-2 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  <FaQuoteLeft className="w-4 h-4 text-[#41a0c8]/40 flex-shrink-0 mt-0.5" />
                  <p>{ceoData.bio}</p>
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <a
                    href={ceoData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ceoData.name} LinkedIn`}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-[#0a66c2] text-xs font-semibold hover:border-[#0a66c2] transition-colors"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ========================================================================= */}
        {/* BOTTOM ROW: Key Leaders in a Line (CTO, Som, AV, Divesh, Vivek) */}
        {/* ========================================================================= */}
        <div id="leadership-team-grid" className="pt-6 border-t border-slate-100">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-[#062039]">
              Senior Leadership & Directors
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Driving technology architecture, corporate strategy, solutions, and enterprise growth.
            </p>
          </div>

          <div className="gsap-stagger-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {leadersList.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
                className="group bg-[#f8fafc] border border-slate-200 rounded-2xl p-4 flex flex-col justify-between hover:border-[#41a0c8] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div>
                  {/* Portrait */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-white mb-4 border border-slate-100 shadow-inner">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      width={300}
                      height={300}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Title & Name */}
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-[#062039] group-hover:text-[#41a0c8] transition-colors leading-snug">
                      {leader.name}
                    </h4>
                    <p className="text-[11px] font-bold text-[#1267a7] uppercase tracking-wider line-clamp-1">
                      {leader.role}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed pt-2 line-clamp-3">
                      {leader.bio}
                    </p>
                  </div>
                </div>

                {/* Footer LinkedIn */}
                <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center justify-between">
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0a66c2] hover:text-[#004182] transition-colors"
                  >
                    <FiLinkedin className="w-3.5 h-3.5" />
                    <span>View Profile</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
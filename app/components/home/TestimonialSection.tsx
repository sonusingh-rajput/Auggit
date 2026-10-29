import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi";
import { FiArrowRight, FiPlayCircle, FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router";

export default function TestimonialSection() {
  const caseStudiesShared = [
    { name: "Steel Manufacturer", metric: "Zero Weight Leakage", slug: "apex-manufacturing-data-sovereignty" },
    { name: "Airport Client", metric: "100% Airside Pass Compliance", slug: "airport-ground-handling-logistics" },
    { name: "German Luxury Car Manufacturer", metric: "8 Months Faster Cutover", slug: "german-luxury-carmaker-carveout" },
    { name: "MRF Tyres Ecosystem", metric: "Automated AP Matching", slug: "fmcg-supplier-invoice-automation" },
    { name: "Garment Export Company", metric: "100% BOM Traceability", slug: "garment-version-control-traceability" },
  ];

  const primaryQuotes = [
    {
      quote: "By choosing Auggit, we've dramatically slashed our record room expenses. This strategic decision not only brings cost savings but also elevates efficiency, underscoring the effectiveness of Auggit's solutions.",
      author: "Chief Financial Officer",
      role: "Executive Finance",
      company: "RATHNA PHARMACEUTICALS",
      badge: "Cost Reduction",
    },
    {
      quote: "Auggit played a crucial role in recovering digital copies of our documents when the originals suffered damage, showcasing its effectiveness in safeguarding and preserving vital information.",
      author: "Founder & CEO",
      role: "Executive Leadership",
      company: "SHREE SATI PIPE FITTINGS",
      badge: "Disaster Recovery",
    },
    {
      quote: "SLaiCE allowed us to extract and secure precisely the financial data we needed from our SAP architecture without full system replication or production downtime.",
      author: "David Vance",
      role: "Head of IT Infrastructure",
      company: "Enterprise Systems Ltd",
      badge: "SAP Architecture",
    },
    {
      quote: "Auggit's automation platform completely transformed how we handle invoice verification and vendor onboarding. Operations are effortless and audit-ready across our business plants.",
      author: "Sarah Jenkins",
      role: "Chief Operations Officer",
      company: "Global Logistics UK",
      badge: "Operations",
    },
    {
      quote: "Exceptional document management tools combined with 100% regulatory compliance with Indian Data Residency rules. It gives our entire board ultimate peace of mind.",
      author: "Priya Sharma",
      role: "Compliance Director",
      company: "Fintech Innovations",
      badge: "Compliance",
    },
    {
      quote: "Implementation took days instead of months. Our vendor reconciliation errors dropped by nearly 85% within the very first quarter of deployment.",
      author: "Elena Rostova",
      role: "VP of Finance",
      company: "Nordic Commerce",
      badge: "Automation",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white text-[#353535] py-20 sm:py-24 px-6 lg:px-16 border-b border-[#e3e3e3]">

      {/* Background Accent Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-[#9eddf7]/20 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#ffeda0]/15 rounded-full blur-xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">

        {/* 1. Customer Case Studies Highlight Bar (PDF Page 8) */}
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#41a0c8]">
                Proven Client Results
              </span>
              <h3 className="text-xl font-extrabold text-[#062039]">
                Featured Enterprise Case Studies
              </h3>
            </div>
            <Link
              to="/casestudy"
              className="text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] flex items-center gap-1.5"
            >
              <span>View All Case Studies</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {caseStudiesShared.map((cs, i) => (
              <Link
                key={i}
                to={`/casestudy`}
                className="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-[#41a0c8] shadow-sm hover:shadow-md transition-all group"
              >
                <div className="text-xs font-extrabold text-[#062039] group-hover:text-[#41a0c8] transition-colors leading-snug line-clamp-1">
                  {cs.name}
                </div>
                <div className="text-[10px] text-emerald-600 font-bold mt-1 flex items-center gap-1">
                  <FiCheckCircle className="w-3 h-3 flex-shrink-0" />
                  <span>{cs.metric}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* 2. Testimonial Header & Video Link (PDF Page 8) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-100 pb-8">
          <div className="space-y-2">
            <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#41a0c8] bg-slate-100 rounded-full border border-slate-200">
              Enterprise Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062039]">
              Trusted by Industry{" "}
              <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
                Leaders
              </span>
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Read verified feedback from CFOs and IT directors scaling compliance and operations with Auggit.
            </p>
          </div>

          {/* LinkedIn Video Testimonial Link per PDF Page 8 */}
          <div>
            <a
              href="https://lnkd.in/p/g5PeYsBD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#062039] hover:bg-[#1267a7] text-white text-xs font-bold shadow-md transition-all"
            >
              <FiPlayCircle className="w-4 h-4 text-[#f7c037]" />
              <span>Watch Client Video Testimonial</span>
            </a>
          </div>
        </div>

        {/* 3. Real Verified Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryQuotes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#41a0c8] transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 bg-slate-100 text-[#062039] text-[10px] font-bold uppercase tracking-wider rounded-full border border-slate-200">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-0.5 text-[#f7c037]">
                    {[...Array(5)].map((_, i) => (
                      <HiStar key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-[#062039] text-xs sm:text-sm">{item.author}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold">{item.role}</p>
                </div>
                <span className="text-[10px] font-black text-[#41a0c8] tracking-wider uppercase text-right max-w-[120px] truncate">
                  {item.company}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
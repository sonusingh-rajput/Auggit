import { motion } from "framer-motion";
import { FiExternalLink, FiHeart, FiCamera, FiSmile } from "react-icons/fi";

interface CultureItem {
  title: string;
  category: string;
  image: string;
  caption: string;
  link: string;
}

const cultureMoments: CultureItem[] = [
  {
    title: "Annual Team Retreat & Outing",
    category: "Team Retreat",
    image: "/images/culture/team_outing.webp",
    caption: "Stepping away from screens to reconnect, brainstorm, and recharge amidst nature during our annual company getaway.",
    link: "https://lnkd.in/p/gMg87G6A",
  },
  {
    title: "Product Launch & Milestone Celebrations",
    category: "Office Celebrations",
    image: "/images/culture/team_celebration.webp",
    caption: "Celebrating breakthrough enterprise releases and customer wins with cake, applause, and shared gratitude across teams.",
    link: "https://lnkd.in/p/g5PeYsBD",
  },
];

export default function AboutLifeAtAuggit() {
  return (
    <section className="relative py-12 sm:py-16 bg-[#f8fafc] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[#41a0c8] text-xs font-bold uppercase tracking-wider">
              <FiSmile className="w-3.5 h-3.5" />
              <span>Culture & Community</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[#062039] tracking-tight">
              Life at Auggit
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Beyond enterprise software, we are a family of passionate builders who celebrate every milestone, team outing, and shared triumph.
            </p>
          </div>

          <a
            href="https://www.linkedin.com/company/auggit/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] transition-colors"
          >
            <span>Follow our journey on LinkedIn</span>
            <FiExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Culture Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cultureMoments.map((moment, index) => (
            <motion.div
              key={moment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <img
                    src={moment.image}
                    alt={moment.title}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#062039]/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                    <FiCamera className="w-3 h-3 text-[#f7c037]" />
                    <span>{moment.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <h4 className="text-lg font-bold text-[#062039] group-hover:text-[#41a0c8] transition-colors">
                    {moment.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {moment.caption}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  <FiHeart className="w-3.5 h-3.5 text-rose-500 fill-current" />
                  <span>Team Camaraderie</span>
                </span>
                <a
                  href={moment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0a66c2] hover:text-[#004182] transition-colors"
                >
                  <span>View Post on LinkedIn</span>
                  <FiExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

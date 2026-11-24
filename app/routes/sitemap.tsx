import { useState, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FiCompass,
  FiSearch,
  FiArrowRight,
  FiExternalLink,
  FiFileText,
  FiLayers,
  FiAward,
  FiBookOpen,
  FiHome,
  FiCheckCircle,
} from "react-icons/fi";
import { getSitemapCategories, getAllSitemapUrls } from "~/data/sitemapData";

export function meta() {
  return [
    { title: "Sitemap | Auggit Enterprise Platform Directory" },
    {
      name: "description",
      content:
        "Comprehensive directory of all Auggit pages: SAP compliance products, selective data slicing, automation tools, customer case studies, research articles, and blogs.",
    },
  ];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FiHome: FiHome,
  FiLayers: FiLayers,
  FiAward: FiAward,
  FiBookOpen: FiBookOpen,
  FiFileText: FiFileText,
  FiCompass: FiCompass,
};

export default function SitemapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const categories = useMemo(() => getSitemapCategories(), []);
  const allUrls = useMemo(() => getAllSitemapUrls(), []);

  // Filter pages according to search query
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;
    const query = searchQuery.toLowerCase().trim();

    return categories
      .map((cat) => ({
        ...cat,
        pages: cat.pages.filter(
          (p) =>
            p.title.toLowerCase().includes(query) ||
            p.path.toLowerCase().includes(query) ||
            (p.description && p.description.toLowerCase().includes(query)) ||
            (p.badge && p.badge.toLowerCase().includes(query))
        ),
      }))
      .filter((cat) => cat.pages.length > 0);
  }, [categories, searchQuery]);

  const totalFilteredCount = filteredCategories.reduce(
    (acc, cat) => acc + cat.pages.length,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f8fafc] to-white text-[#353535] py-16 px-4 sm:px-6 lg:px-12 space-y-16">
      {/* Hero Header */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs"
        >
          <FiCompass className="w-4 h-4 text-[#f7c037]" />
          <span>Full Directory & Architecture</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#062039] tracking-tight leading-tight"
        >
          Auggit Website{" "}
          <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
            Sitemap
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          Discover every page, software product, case study, technical research
          whitepaper, and knowledge base article across Auggit. Automatically
          synchronized in real time.
        </motion.p>

        {/* Dynamic Metric Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-2 text-xs font-bold text-[#062039]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Total Pages: {allUrls.length}</span>
          </div>

          <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-600">
            {categories.length} Categories
          </div>

          <a
            href="/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#062039] hover:bg-[#1267a7] text-white text-xs font-bold shadow-2xs transition-all"
          >
            <span>XML Sitemap (Search Engines)</span>
            <FiExternalLink className="w-3.5 h-3.5 text-[#f7c037]" />
          </a>
        </motion.div>

        {/* Real-time Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="max-w-xl mx-auto relative pt-4"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search sitemap by keyword (e.g. SAP, invoice, weighbridge, compliance)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 focus:border-[#41a0c8] focus:ring-4 focus:ring-[#41a0c8]/10 text-sm font-medium text-[#062039] placeholder:text-slate-400 shadow-sm transition-all outline-none"
            />
          </div>
          {searchQuery && (
            <div className="text-xs text-slate-500 mt-2 text-left px-2 flex items-center justify-between">
              <span>
                Found <strong>{totalFilteredCount}</strong> matching pages for "{searchQuery}"
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-[#41a0c8] hover:underline font-bold"
              >
                Clear filter
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Categories & Pages Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        {filteredCategories.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white border border-slate-200 shadow-sm max-w-md mx-auto space-y-3">
            <FiCompass className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-[#062039]">No matching pages found</h3>
            <p className="text-xs text-slate-500">
              Try searching for broader keywords like "SAP", "automation", or "documents".
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 rounded-xl bg-[#41a0c8] text-white text-xs font-bold hover:bg-[#1267a7] transition-all"
            >
              Reset Search
            </button>
          </div>
        ) : (
          filteredCategories.map((cat, catIdx) => {
            const IconComponent = iconMap[cat.iconName] || FiCompass;

            return (
              <motion.section
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow space-y-6"
              >
                {/* Category Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#41a0c8]/10 text-[#1267a7] flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#062039]">
                        {cat.title}
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5 max-w-xl">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  <span className="self-start sm:self-center px-3 py-1 rounded-full bg-slate-100 text-[#062039] text-xs font-extrabold uppercase tracking-wider border border-slate-200 shrink-0">
                    {cat.pages.length} Pages
                  </span>
                </div>

                {/* Pages Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.pages.map((page) => (
                    <Link
                      key={page.path}
                      to={page.path}
                      className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-[#41a0c8] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          {page.badge && (
                            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#41a0c8]/10 text-[#1267a7]">
                              {page.badge}
                            </span>
                          )}
                          <span className="text-[10px] font-mono text-slate-400 group-hover:text-[#41a0c8] transition-colors truncate max-w-[150px]">
                            {page.path}
                          </span>
                        </div>

                        <h3 className="text-sm font-bold text-[#062039] group-hover:text-[#41a0c8] transition-colors leading-snug line-clamp-2">
                          {page.title}
                        </h3>

                        {page.description && (
                          <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                            {page.description}
                          </p>
                        )}
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#41a0c8]">
                        <span className="group-hover:underline">Visit Page</span>
                        <FiArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.section>
            );
          })
        )}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#062039] via-[#062039] to-[#1267a7] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-xl sm:text-2xl font-bold">
            Looking for a specific enterprise custom solution?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
            Our solution architects configure tailored data slicing, regulatory archiving,
            and SCM workflows for your exact ERP landscape.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="px-6 py-3 rounded-full bg-[#f7c037] text-[#062039] font-bold text-xs hover:bg-[#e5b02a] transition-all whitespace-nowrap shadow-md cursor-pointer"
          >
            Talk to an Expert →
          </Link>
          <Link
            to="/book-poc"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all whitespace-nowrap cursor-pointer"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { Link } from "react-router";
import { FiArrowRight, FiClock } from "react-icons/fi";
import { blogs } from "../data/blogs";

export function meta() {
  return [
    { title: "Blog | Auggit" },
    {
      name: "description",
      content:
        "Guides and perspectives from Auggit on document management, audits, data governance and eDMS selection.",
    },
  ];
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 py-16 px-6 lg:px-16 space-y-14">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#2997D0] bg-white rounded-full border border-blue-200 shadow-sm">
          Blog
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
          Document management, <span className="bg-gradient-to-r from-[#2997D0] to-indigo-600 bg-clip-text text-transparent">audits &amp; governance</span>
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Practical guides on eDMS, audit readiness, compliance and data governance.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
            whileHover={{ y: -6 }}
            className="bg-white/90 backdrop-blur-2xl rounded-3xl border border-blue-100 shadow-[0_15px_40px_rgba(41,151,208,0.08)] flex flex-col justify-between group p-6 sm:p-8 space-y-6"
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2997D0] text-[11px] font-bold uppercase tracking-wider border border-blue-200">
                {blog.category}
              </span>
              <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#2997D0] transition-colors">
                {blog.title}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">{blog.summary}</p>
              <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5"><FiClock className="w-3.5 h-3.5" />{blog.readTime}</span>
              </div>
            </div>
            <Link
              to={`/blog/${blog.slug}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#2997D0] group-hover:translate-x-1 transition-transform"
            >
              <span>Read Article</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

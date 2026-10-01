import { motion } from "framer-motion";
import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";
import { researchArticles } from "../data/researchArticles";

export function loader({ params }: LoaderFunctionArgs) {
  return { article: researchArticles.find((a) => a.slug === params.slug) ?? null };
}

export function meta({ loaderData }: { loaderData?: ReturnType<typeof loader> }) {
  const article = loaderData?.article;
  if (!article) return [{ title: "Article Not Found | Auggit" }];
  return [
    { title: `${article.title} | Auggit` },
    { name: "description", content: article.summary },
  ];
}

export default function ResearchArticlePage() {
  const { article } = useLoaderData<typeof loader>();

  if (!article) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Article Not Found</h2>
        <p className="text-slate-500 text-sm">The article you are looking for does not exist or has been removed.</p>
        <Link to="/research" className="px-6 py-2.5 rounded-xl bg-[#2997D0] text-white text-xs font-semibold">
          Back to Research Articles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 py-16 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link to="/research" className="inline-flex items-center gap-2 text-xs font-bold text-[#2997D0] hover:underline">
          <FiArrowLeft className="w-4 h-4" /> Back to all research articles
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2997D0] text-xs font-bold uppercase tracking-wider border border-blue-200">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {article.title}
          </h1>
          <div className="flex items-center gap-5 text-sm text-slate-500 font-medium">
            <span className="flex items-center gap-1.5"><FiClock className="w-4 h-4" />{article.readTime}</span>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-10 text-slate-700 text-base sm:text-lg leading-relaxed"
        >
          {article.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading && (
                <h2 className="text-2xl font-bold text-slate-900">{section.heading}</h2>
              )}
              {section.blocks.map((block, j) => {
                if (block.type === "p") return <p key={j}>{block.text}</p>;
                if (block.type === "table") {
                  return (
                    <div key={j} className="overflow-x-auto rounded-2xl border border-blue-100 bg-white shadow-sm">
                      <table className="w-full text-left text-sm sm:text-base">
                        <thead className="bg-blue-50 text-slate-900">
                          <tr>
                            {block.headers.map((h) => (
                              <th key={h} className="px-5 py-3 font-bold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {block.rows.map((row, r) => (
                            <tr key={r} className="border-t border-blue-100 align-top">
                              {row.map((cell, c) => (
                                <td key={c} className={`px-5 py-3 ${c === 0 ? "font-semibold text-slate-900 whitespace-nowrap" : ""}`}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                }
                return (
                  <ul key={j} className="space-y-2.5 pl-1">
                    {block.items.map((item, k) => (
                      <li key={item} className="flex gap-3">
                        {block.ordered ? (
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2997D0] text-xs font-bold text-white">{k + 1}</span>
                        ) : (
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2997D0]" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );
              })}
            </section>
          ))}
        </motion.article>

        <div className="bg-gradient-to-r from-[#021024] to-[#052659] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl font-bold">Connect your operational journey with SAP</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2997D0] hover:bg-[#2585b7] text-white font-semibold text-sm transition-all shadow-lg"
          >
            <span>Talk to our experts</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

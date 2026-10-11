import { motion } from "framer-motion";
import { Fragment } from "react";
import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";
import { FiArrowLeft, FiArrowRight, FiClock } from "react-icons/fi";
import { blogs } from "../data/blogs";
import { blogFaqs } from "../data/blogFaqs";

const SITE = "https://www.auggit.com";

export function loader({ params }: LoaderFunctionArgs) {
  const blog = blogs.find((b) => b.slug === params.slug) ?? null;
  return { blog, faqs: blog ? blogFaqs[blog.slug] ?? [] : [] };
}

export function meta({ loaderData }: { loaderData?: ReturnType<typeof loader> }) {
  const blog = loaderData?.blog;
  if (!blog) return [{ title: "Article Not Found | Auggit" }];

  const article: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.summary,
    publisher: { "@type": "Organization", name: "Auggit" },
    mainEntityOfPage: `${SITE}/${blog.slug}/`,
  };
  if (blog.datePublished) article.datePublished = blog.datePublished;
  if (blog.dateModified) article.dateModified = blog.dateModified;
  if (blog.author) article.author = { "@type": "Person", name: blog.author };

  const tags: Record<string, unknown>[] = [
    { title: `${blog.title} | Auggit` },
    { name: "description", content: blog.summary },
    { "script:ld+json": article },
  ];
  if (loaderData.faqs.length) {
    tags.push({
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: loaderData.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    });
  }
  return tags;
}

/** Renders text with inline [label](/path) links. */
function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <Fragment key={i}>{part}</Fragment>;
        return (
          <Link key={i} to={m[2]} className="font-semibold text-[#2997D0] hover:underline">
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

export default function BlogArticlePage() {
  const { blog, faqs } = useLoaderData<typeof loader>();

  if (!blog) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h2 className="text-3xl font-bold text-slate-900">Article Not Found</h2>
        <p className="text-slate-500 text-sm">The article you are looking for does not exist or has been removed.</p>
        <Link to="/blog" className="px-6 py-2.5 rounded-xl bg-[#2997D0] text-white text-xs font-semibold">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50/40 to-white text-slate-900 py-16 px-6 lg:px-16">
      <div className="max-w-3xl mx-auto space-y-10">
        <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-[#2997D0] hover:underline">
          <FiArrowLeft className="w-4 h-4" /> Back to all articles
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#2997D0] text-xs font-bold uppercase tracking-wider border border-blue-200">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {blog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 font-medium">
            {blog.author && <span>By {blog.author}</span>}
            {blog.datePublished && <time dateTime={blog.datePublished}>{blog.datePublished}</time>}
            <span className="flex items-center gap-1.5"><FiClock className="w-4 h-4" />{blog.readTime}</span>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-10 text-slate-700 text-base sm:text-lg leading-relaxed"
        >
          {blog.sections.map((section, i) => (
            <section key={i} className="space-y-4">
              {section.heading &&
                (section.level === 3 ? (
                  <h3 className="text-xl font-bold text-slate-900">{section.heading}</h3>
                ) : (
                  <h2 className="text-2xl font-bold text-slate-900">{section.heading}</h2>
                ))}
              {section.blocks.map((block, j) =>
                block.type === "p" ? (
                  <p key={j}><RichText text={block.text} /></p>
                ) : (
                  <ul key={j} className="space-y-2.5 pl-1">
                    {block.items.map((item, k) => (
                      <li key={k} className="flex gap-3">
                        {block.ordered ? (
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2997D0] text-xs font-bold text-white">{k + 1}</span>
                        ) : (
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2997D0]" />
                        )}
                        <span><RichText text={item} /></span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}

          {faqs.length > 0 && (
            <section className="space-y-5 pt-4">
              <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {faqs.map((f) => (
                  <details key={f.q} className="group rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-sm">
                    <summary className="cursor-pointer list-none font-semibold text-slate-900 flex items-start justify-between gap-4">
                      <h3 className="text-base sm:text-lg font-semibold">{f.q}</h3>
                      <span className="text-[#2997D0] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
                    </summary>
                    <p className="mt-3 text-base text-slate-600">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </motion.article>

        <div className="bg-gradient-to-r from-[#021024] to-[#052659] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl font-bold">Talk to one of our experts today</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#2997D0] hover:bg-[#2585b7] text-white font-semibold text-sm transition-all shadow-lg"
          >
            <span>Contact us</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

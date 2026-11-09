import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiTrendingUp,
  FiArrowRight,
  FiFileText,
  FiTarget,
  FiLayers,
  FiMessageSquare,
} from "react-icons/fi";
import { caseStudiesData } from "./case-studies";

export default function SingleCaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudiesData.find(
    (s) => s.slug === slug || s.aliases?.includes(slug as string)
  );

  if (!study) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h2 className="text-3xl font-bold text-[#062039]">Case Study Not Found</h2>
        <p className="text-[#979797] text-sm">
          The case study you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/casestudy"
          className="px-6 py-2.5 rounded-xl bg-[#41a0c8] text-white text-xs font-semibold hover:bg-[#1267a7] transition-all cursor-pointer"
        >
          Back to Case Studies
        </Link>
      </div>
    );
  }

  const isSlaice =
    study.slug.includes("sap") ||
    study.slug.includes("automaker") ||
    study.title.includes("SAP") ||
    study.title.includes("Automaker");

  const brandName = isSlaice ? "SLaiCE" : "Auggit";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Back Link */}
        <Link
          to="/casestudy"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] hover:underline cursor-pointer transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" /> Back to all case studies
        </Link>

        {/* Hero Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full bg-[#9eddf7]/30 text-[#062039] text-xs font-bold uppercase tracking-wider border border-[#41a0c8]/30">
              {study.industry}
            </span>
            <span className="text-xs font-semibold text-slate-500">
              {study.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#062039] leading-tight">
            {study.title}
          </h1>

          {/* Outcome highlight banner */}
          <div className="flex items-center gap-4 bg-emerald-50 p-4 sm:p-5 rounded-2xl border border-emerald-200 text-emerald-900 shadow-sm">
            <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
              <FiTrendingUp className="w-5 h-5 shrink-0" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-700">
                Key Verified Outcome
              </h4>
              <p className="text-base font-bold text-[#062039]">
                {study.metric} achieved with {brandName}.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[16/9] sm:aspect-[21/9] bg-slate-100">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Case Snapshot Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-4 text-[#062039]">
            <FiFileText className="w-5 h-5 text-[#41a0c8]" />
            <h3 className="text-base font-extrabold uppercase tracking-wider">
              Case Snapshot
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Client
              </span>
              <span className="font-bold text-[#062039] mt-0.5 block">
                {study.client}
              </span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Business Function
              </span>
              <span className="font-bold text-[#062039] mt-0.5 block">
                {study.businessFunction}
              </span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Industry
              </span>
              <span className="font-bold text-[#062039] mt-0.5 block">
                {study.industry}
              </span>
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <span className="text-slate-400 font-semibold block uppercase text-[10px]">
                Core Outcome
              </span>
              <span className="font-bold text-emerald-600 mt-0.5 block">
                {study.metric}
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="space-y-10 text-[#353535] text-base leading-relaxed"
        >
          {/* Executive Summary */}
          <div className="space-y-3">
            <h2 className="text-2xl font-black text-[#062039] flex items-center gap-2">
              <FiTarget className="text-[#41a0c8]" />
              Executive Summary
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed bg-[#f1f2f2]/40 p-5 rounded-2xl border border-slate-200">
              {study.summary}
            </p>
          </div>

          {/* The Challenge */}
          <div className="space-y-4 pt-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                Background & Friction
              </span>
              <h2 className="text-2xl font-black text-[#062039] mt-1">
                The Challenge: {study.challengeHeadline}
              </h2>
            </div>
            <p className="text-slate-700">{study.challenge}</p>

            {/* Challenge Bullets */}
            {study.challengeBullets && study.challengeBullets.length > 0 && (
              <ul className="space-y-2.5 pt-2">
                {study.challengeBullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-sm text-slate-700 bg-red-50/50 border border-red-100 p-3.5 rounded-xl"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Purchase Chain Table (if present) */}
            {study.purchaseChainTable && study.purchaseChainTable.length > 0 && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="bg-[#062039] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider">
                  The Five Purchase Documents
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="px-5 py-3 w-1/3">Document</th>
                        <th className="px-5 py-3">What It Confirms</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {study.purchaseChainTable.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-3 font-bold text-[#062039]">
                            {row.doc}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row.confirms}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Seven Steps Table (if present) */}
            {study.sevenStepsTable && study.sevenStepsTable.length > 0 && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="bg-[#062039] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider">
                  The Seven Critical Workflow Steps
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="px-4 py-3 w-16 text-center">Step</th>
                        <th className="px-5 py-3">What Happens</th>
                        <th className="px-5 py-3">Record Created / Tracked</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {study.sevenStepsTable.map((row, sIdx) => (
                        <tr key={sIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-4 py-3 font-bold text-center text-[#41a0c8]">
                            #{row.step}
                          </td>
                          <td className="px-5 py-3 font-semibold text-[#062039]">
                            {row.what}
                          </td>
                          <td className="px-5 py-3 text-slate-600">{row.record}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Client Quote Callout */}
            {study.quote && (
              <div className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#9eddf7]/25 to-slate-50 border-l-4 border-[#41a0c8] flex items-start gap-4">
                <FiMessageSquare className="w-6 h-6 text-[#41a0c8] shrink-0 mt-1" />
                <div>
                  <blockquote className="text-base sm:text-lg italic font-semibold text-[#062039] leading-snug">
                    “{study.quote}”
                  </blockquote>
                  <cite className="block text-xs font-bold text-slate-500 mt-2 not-italic">
                    — {study.quoteAuthor || "Client story"}
                  </cite>
                </div>
              </div>
            )}
          </div>

          {/* The Solution */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                Architecture & Implementation
              </span>
              <h2 className="text-2xl font-black text-[#062039] mt-1">
                The {brandName} Solution
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">{study.solution}</p>

            {/* Capabilities Used */}
            {study.capabilitiesUsed && study.capabilitiesUsed.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#062039]">
                  Capabilities Deployed
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {study.capabilitiesUsed.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2 text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-100"
                    >
                      <FiCheckCircle className="w-4 h-4 text-[#41a0c8] shrink-0" />
                      <span className="font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* How Auggit / SLaiCE Solved It Table */}
            {study.howSolvedTable && study.howSolvedTable.length > 0 && (
              <div className="mt-6 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
                <div className="bg-[#062039] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-between">
                  <span>How {brandName} Solved It</span>
                  <span className="text-[10px] text-slate-300 font-normal">
                    Problem vs. Solution Mapping
                  </span>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 font-bold">
                        <th className="px-5 py-3 w-1/3">Problem</th>
                        <th className="px-5 py-3 w-1/3">{brandName} Capability</th>
                        <th className="px-5 py-3 w-1/3">Result</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {study.howSolvedTable.map((row, hIdx) => (
                        <tr key={hIdx} className="hover:bg-slate-50 transition-colors">
                          <td className="px-5 py-3.5 font-semibold text-slate-700 align-top">
                            {row.problem}
                          </td>
                          <td className="px-5 py-3.5 text-[#062039] font-medium align-top bg-sky-50/30">
                            {row.capability}
                          </td>
                          <td className="px-5 py-3.5 text-emerald-700 font-bold align-top">
                            {row.result}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Results & Long-Term Impact */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                Measurable Value
              </span>
              <h2 className="text-2xl font-black text-[#062039] mt-1">
                Results & Long-Term Impact
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {study.results.map((result, rIdx) => (
                <div
                  key={rIdx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <FiCheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-bold text-[#062039]">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#062039] via-[#062039] to-[#1267a7] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f7c037]">
            Empower Your Enterprise
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold max-w-xl mx-auto">
            Ready to achieve verified ROI and compliance for your operations?
          </h3>
          <p className="text-xs sm:text-sm text-slate-200 max-w-lg mx-auto">
            Schedule a walkthrough with our solution architects to see how {brandName} can eliminate process bottlenecks in your organization.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg cursor-pointer"
            >
              <span>Talk to our experts</span>
              <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/book-poc"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
            >
              <span>Request Demo</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

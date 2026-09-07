import { motion } from "framer-motion";
import { useParams, Link } from "react-router";
import { FiArrowLeft, FiCheckCircle, FiShield, FiTrendingUp, FiArrowRight } from "react-icons/fi";
import { caseStudiesData } from "./case-studies";

export default function SingleCaseStudyPage() {
  const { slug } = useParams();
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 space-y-4">
        <h2 className="text-3xl font-bold text-[#062039]">Case Study Not Found</h2>
        <p className="text-[#979797] text-sm">The case study you are looking for does not exist or has been removed.</p>
        <Link to="/casestudy" className="px-6 py-2.5 rounded-xl bg-[#41a0c8] text-white text-xs font-semibold cursor-pointer">
          Back to Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] py-12 sm:py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Back Link */}
        <Link to="/casestudy" className="inline-flex items-center gap-2 text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] hover:underline cursor-pointer">
          <FiArrowLeft className="w-4 h-4" /> Back to all case studies
        </Link>

        {/* Hero Title Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#9eddf7]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider border border-[#41a0c8]/30">
              {study.industry}
            </span>
            <span className="text-xs font-semibold text-[#979797]">Client: {study.client}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#062039] leading-tight">
            {study.title}
          </h1>

          <div className="flex items-center gap-4 bg-[#9eddf7]/20 p-4 rounded-2xl border border-[#9eddf7]/60 text-[#41a0c8]">
            <FiTrendingUp className="w-6 h-6 shrink-0 text-[#f7c037]" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#062039]">Key Verified Outcome</h4>
              <p className="text-sm font-semibold text-[#353535]">{study.metric} achieved by {study.client}.</p>
            </div>
          </div>
        </motion.div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#e3e3e3] aspect-video bg-slate-100">
          <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
        </div>

        {/* Main Content Body */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="space-y-8 text-[#353535] text-base leading-relaxed">
          
          {/* Executive Summary */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#062039]">Executive Summary</h2>
            <p className="text-lg font-medium text-[#062039]">{study.summary}</p>
          </div>

          {/* Dynamic Challenge */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-[#062039]">The Challenge</h2>
            <p>{study.challenge}</p>
          </div>

          {/* Dynamic Solution */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-[#062039]">The Auggit Solution</h2>
            <p>{study.solution}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#e3e3e3] shadow-sm space-y-2">
                <FiShield className="w-6 h-6 text-[#41a0c8]" />
                <h4 className="font-bold text-[#062039] text-sm">Enterprise Architecture</h4>
                <p className="text-xs text-[#979797]">Optimized specifically for {study.industry} regulatory and data demands.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#e3e3e3] shadow-sm space-y-2">
                <FiCheckCircle className="w-6 h-6 text-[#5e8b22]" />
                <h4 className="font-bold text-[#062039] text-sm">Seamless Deployment</h4>
                <p className="text-xs text-[#979797]">Zero interruption to live production environments during roll-out.</p>
              </div>
            </div>
          </div>

          {/* Dynamic Results */}
          <div className="space-y-4 pt-4">
            <h2 className="text-2xl font-bold text-[#062039]">Results & Long-Term Impact</h2>
            <p>{study.results}</p>
          </div>

        </motion.div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-[#062039] via-[#062039] to-[#1267a7] text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl">
          <h3 className="text-2xl font-bold">Ready to achieve similar results for your enterprise?</h3>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg cursor-pointer"
          >
            <span>Talk to our experts</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
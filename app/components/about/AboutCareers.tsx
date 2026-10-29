import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiMapPin, FiClock, FiArrowRight, FiCheckCircle, FiX, FiMail } from "react-icons/fi";

interface JobRole {
  title: string;
  department: string;
  type: string;
  location: string;
  desc: string;
}

const jobOpenings: JobRole[] = [
  {
    title: "SAP ABAP & Cloud Integration Architect",
    department: "Enterprise Engineering",
    type: "Full-Time",
    location: "Chennai / Bangalore / Hybrid",
    desc: "Build next-generation BAPI/RFC connectors, data slicing algorithms, and SAP RISE certified extensions.",
  },
  {
    title: "Senior Full-Stack Engineer (React + Node)",
    department: "Product Engineering",
    type: "Full-Time",
    location: "Bangalore / Remote",
    desc: "Develop hyper-responsive UI/UX workflows, real-time analytics dashboards, and eDMS search engines.",
  },
  {
    title: "Enterprise Solutions & SCM Consultant",
    department: "Customer Success",
    type: "Full-Time",
    location: "Mumbai / Delhi NCR",
    desc: "Deploy automated 3-way invoice matching and hardware-integrated weighbridge platforms with Fortune 500 clients.",
  },
  {
    title: "AI / LLM Document OCR Engineer",
    department: "Data Intelligence",
    type: "Full-Time",
    location: "Bangalore / Remote",
    desc: "Fine-tune vision-language models for multi-lingual Indian corporate invoices, tax documents, and e-way bills.",
  },
];

export default function AboutCareers() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [candidateEmail, setCandidateEmail] = useState("");
  const [candidateName, setCandidateName] = useState("");

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSelectedRole(null);
      setSubmitted(false);
      setCandidateEmail("");
      setCandidateName("");
    }, 2000);
  };

  return (
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-[#062039] to-[#041221] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#41a0c8]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[#9eddf7] text-xs font-bold uppercase tracking-wider">
              <FiBriefcase className="w-3.5 h-3.5" />
              <span>Jobs - Join @Auggit</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Build the Autonomous Enterprise With Us
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              We are on a mission to eliminate manual enterprise paperwork and modernize supply chain compliance for 10,000+ businesses.
            </p>
          </div>

          <a
            href="mailto:careers@auggit.in"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md whitespace-nowrap"
          >
            <FiMail className="w-4 h-4" />
            <span>careers@auggit.in</span>
          </a>
        </div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobOpenings.map((job, index) => (
            <motion.div
              key={job.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#41a0c8] hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#41a0c8]/20 text-[#9eddf7] font-semibold">
                    {job.department}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    <span>{job.type}</span>
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <FiMapPin className="w-3 h-3 text-[#f7c037]" />
                    <span>{job.location}</span>
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white leading-snug">
                  {job.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {job.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Competitive Package + ESOPs</span>
                <button
                  type="button"
                  onClick={() => setSelectedRole(job.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#41a0c8] hover:text-[#9eddf7] transition-colors cursor-pointer"
                >
                  <span>Apply Now</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Quick Application Modal */}
      <AnimatePresence>
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#062039] border border-slate-700 text-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                type="button"
                onClick={() => setSelectedRole(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white"
              >
                <FiX className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <FiCheckCircle className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="text-xl font-bold">Application Received!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you, {candidateName}. Our talent acquisition team will review your credentials and contact you at {candidateEmail}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                      Apply For Role
                    </span>
                    <h4 className="text-lg font-bold text-white">{selectedRole}</h4>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="block text-slate-300 mb-1 font-semibold">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={candidateName}
                        onChange={(e) => setCandidateName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#41a0c8]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-semibold">Email Address</label>
                      <input
                        type="email"
                        required
                        value={candidateEmail}
                        onChange={(e) => setCandidateEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#41a0c8]"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1 font-semibold">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-[#41a0c8]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#41a0c8] hover:bg-[#1267a7] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

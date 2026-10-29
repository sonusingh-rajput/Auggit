import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCpu,
  FiDatabase,
  FiLayers,
  FiCheckCircle,
  FiArrowRight,
  FiTrendingUp,
  FiShield,
  FiHelpCircle,
  FiSend,
  FiClock,
  FiDollarSign,
  FiPieChart,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<"integrations" | "consulting" | "migration">("integrations");
  const [consultationSubmitted, setConsultationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    topic: "SAP RISE Server Memory Control",
    message: "",
  });

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConsultationSubmitted(true);
  };

  const migrationTechniques = [
    {
      name: "Brownfield (System Conversion)",
      badge: "In-Place Upgrade",
      pros: "Retains existing configuration, historical master data, and custom developments with lower initial implementation disruption.",
      cons: "Carries over decades of technical debt, legacy tables, and bloated database volume into expensive HANA memory.",
      bestFor: "Organizations with highly stable ECC configurations and limited business process change requirements.",
      auggitRole: "Auggit carves out cold data prior to conversion, shrinking downtime by 60%.",
    },
    {
      name: "Greenfield (New Implementation)",
      badge: "Clean Slate",
      pros: "Enables complete redesign of chart of accounts, adoption of standard SAP S/4HANA best practices, and zero legacy baggage.",
      cons: "Requires rebuilding custom interfaces, retraining entire staff, and high change management cost.",
      bestFor: "Companies seeking total business transformation or merging radically different legacy landscapes.",
      auggitRole: "Auggit migrates opening balances and active open items selectively with relational integrity.",
    },
    {
      name: "Bluefield / Selective Data Transition",
      badge: "Recommended by Auggit",
      pros: "Combines the best of Brownfield and Greenfield. Move only relevant historical company codes and active transactional windows into a clean target.",
      cons: "Requires sophisticated data slicing and parent-child dependency mapping logic.",
      bestFor: "Complex enterprises running SAP ECC for 10+ years that want modern processes without losing statutory audit trails.",
      auggitRole: "Auggit SLaiCE is purpose-built for Selective Data Transition, reducing migration schedules by 8 to 10 months.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffeda0]/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16 sm:space-y-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-4">
            <SiSap className="w-4 h-4 text-[#062039]" />
            Enterprise SAP Advisory & Engineering
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            SAP Services &{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Advisory Solutions
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            From zero-impact SAP system integrations and RISE memory consumption control to Bluefield migration roadmaps, our certified architects guide your digital transformation.
          </p>

          {/* Service Pillar Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab("integrations")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "integrations"
                  ? "bg-[#062039] text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              SAP Integrations Service
            </button>
            <button
              onClick={() => setActiveTab("consulting")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "consulting"
                  ? "bg-[#062039] text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              SAP Consulting & RISE Memory Control
            </button>
            <button
              onClick={() => setActiveTab("migration")}
              className={`px-6 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "migration"
                  ? "bg-[#062039] text-white shadow-lg"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
              }`}
            >
              SAP ECC to SAP S/4HANA Migration Advisory
            </button>
          </div>
        </div>

        {/* 1. SAP INTEGRATIONS SERVICE */}
        {activeTab === "integrations" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                    Certified Connectivity
                  </span>
                  <h2 className="text-3xl font-extrabold text-[#062039]">
                    SAP Integrations Service
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Connect non-SAP systems, weighing bridges, mobile apps, OCR platforms, and digital signatures seamlessly into your core SAP ECC and SAP S/4HANA environments using native BAPIs, RFCs, and RESTful web services.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {[
                      { title: "Zero Core Modification", desc: "No alteration to standard SAP code; 100% compliant with SAP clean core principles." },
                      { title: "Native ABAP & RFC Connectors", desc: "Certified handshake protocols ensuring data consistency and sub-second responses." },
                      { title: "Multi-ERP Bridges", desc: "Bi-directional synchronization between SAP, Tally Prime, and Zoho Books." },
                      { title: "Hardware Interlocks", desc: "Direct connectivity to digital indicators, weighbridges, and security barriers." },
                    ].map((item, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-2 text-xs font-bold text-[#062039] mb-1">
                          <FiCheckCircle className="text-[#41a0c8]" />
                          <span>{item.title}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-[#062039] via-[#0d3b66] to-[#062039] text-white shadow-xl space-y-4">
                    <h3 className="text-lg font-bold text-[#f7c037]">Integration Capabilities:</h3>
                    <div className="space-y-2 text-xs text-slate-200">
                      <div className="flex justify-between py-1.5 border-b border-white/10">
                        <span>SAP S/4HANA OData & BAPIs</span> <span className="font-bold text-emerald-400">Supported</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/10">
                        <span>SAP ECC 6.0 RFC Handshakes</span> <span className="font-bold text-emerald-400">Supported</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/10">
                        <span>SAP RISE Private Cloud Security</span> <span className="font-bold text-emerald-400">Validated</span>
                      </div>
                      <div className="flex justify-between py-1.5 border-b border-white/10">
                        <span>GST E-Way Bill & E-Invoice APIs</span> <span className="font-bold text-emerald-400">Integrated</span>
                      </div>
                      <div className="flex justify-between py-1.5">
                        <span>Production Latency Impact</span> <span className="font-bold text-emerald-400">&lt; 0.5%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. SAP CONSULTING SERVICE & RISE MEMORY CONTROL */}
        {activeTab === "consulting" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Memory Control Special Feature */}
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                  Architectural Advisory
                </span>
                <h2 className="text-3xl font-extrabold text-[#062039] mt-1">
                  How to Control SAP RISE Server Memory Consumption
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  In SAP S/4HANA and RISE with SAP environments, database sizing is priced strictly by RAM gigabytes. Lifting and shifting 15+ years of unpartitioned legacy records leads to excessive memory tier subscription costs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200">
                  <div className="text-xs font-bold uppercase text-rose-700 tracking-wider mb-2">
                    Without Slicing (Full Lift & Shift)
                  </div>
                  <div className="text-2xl font-black text-rose-900 mb-1">~16 TB HANA RAM</div>
                  <p className="text-xs text-rose-700 leading-relaxed">
                    Cold purchase orders from 2008 and closed financial logs sit in in-memory RAM, costing millions in annual RISE infrastructure overhead.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                  <div className="text-xs font-bold uppercase text-emerald-700 tracking-wider mb-2">
                    With Auggit SLaiCE Selective Slicing
                  </div>
                  <div className="text-2xl font-black text-emerald-900 mb-1">~4.5 TB HANA RAM</div>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Carves inactive cold history into compliant near-line archive systems while retaining live queryability.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200">
                  <div className="text-xs font-bold uppercase text-blue-700 tracking-wider mb-2">
                    Net Enterprise Savings
                  </div>
                  <div className="text-2xl font-black text-[#1267a7] mb-1">~65% Cost Reduction</div>
                  <p className="text-xs text-blue-700 leading-relaxed">
                    Saves hundreds of thousands of dollars annually in recurring SAP RISE cloud memory subscription tiering.
                  </p>
                </div>
              </div>

              {/* Memory Control Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#41a0c8]/10 text-[#41a0c8] font-bold flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#062039]">Data Profiling & Slicing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Identify tables consuming RAM (BSEG, ACDOCA, MATDOC) older than threshold.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#41a0c8]/10 text-[#41a0c8] font-bold flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#062039]">Near-Line India Archiving</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Move carved records to lean storage satisfying Section 128 daily retention.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#41a0c8]/10 text-[#41a0c8] font-bold flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[#062039]">HANA RAM Downsizing</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Contract for significantly lower RISE Memory tiers with SAP.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. SAP ECC TO SAP S/4HANA MIGRATION ADVISORY */}
        {activeTab === "migration" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
              <div className="max-w-3xl mb-8">
                <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                  Migration Technique Evaluation
                </span>
                <h2 className="text-3xl font-extrabold text-[#062039] mt-1">
                  Which Migration Technique to Use: Brown, Green, or Blue?
                </h2>
                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  Every enterprise SAP landscape is unique. Our advisory team helps you objectively evaluate Brownfield, Greenfield, and Bluefield methodologies to determine the optimum path for your business continuity and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {migrationTechniques.map((tech, i) => (
                  <div
                    key={i}
                    className={`p-6 rounded-2xl border transition-all ${
                      i === 2
                        ? "bg-[#062039] text-white border-[#062039] shadow-xl"
                        : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        i === 2 ? "bg-[#f7c037] text-[#062039]" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {tech.badge}
                    </span>
                    <h3 className="text-lg font-bold mt-3 mb-2">{tech.name}</h3>
                    
                    <div className="space-y-3 text-xs">
                      <div>
                        <strong className={i === 2 ? "text-emerald-400" : "text-emerald-700"}>Pros: </strong>
                        <span className={i === 2 ? "text-slate-300" : "text-slate-600"}>{tech.pros}</span>
                      </div>
                      <div>
                        <strong className={i === 2 ? "text-rose-300" : "text-rose-700"}>Trade-offs: </strong>
                        <span className={i === 2 ? "text-slate-300" : "text-slate-600"}>{tech.cons}</span>
                      </div>
                      <div className="pt-2 border-t border-slate-200/20">
                        <strong className={i === 2 ? "text-[#f7c037]" : "text-[#41a0c8]"}>Auggit Role: </strong>
                        <span className={i === 2 ? "text-slate-200" : "text-slate-600"}>{tech.auggitRole}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* 4. EMBEDDED FORM: BOOK A FREE CONSULTATION */}
        <div id="book-consultation" className="scroll-mt-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                  Expert Advisory Session
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039]">
                  Book a Free Consultation with an SAP Architect
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Discuss your upcoming S/4HANA migration, review RISE memory footprint estimates, or design high-throughput ERP integrations with zero sales pressure.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Complimentary 45-Minute Technical Deep-Dive</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>HANA RAM Sizing & Cost Analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Section 128 & Statutory Compliance Review</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                {consultationSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                      <FiCheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-emerald-900">
                      Consultation Request Confirmed!
                    </h4>
                    <p className="text-xs text-emerald-700 max-w-md mx-auto">
                      Thank you, <span className="font-bold">{formData.name}</span>. An SAP Enterprise Architect will reach out to you at <span className="font-bold">{formData.email}</span> within 2 business hours to schedule your consultation.
                    </p>
                    <button
                      onClick={() => setConsultationSubmitted(false)}
                      className="mt-3 px-6 py-2 rounded-full bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-700 transition-colors"
                    >
                      Book Another Session
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleConsultationSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Anand Mahindra"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="anand@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Enterprises"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Primary Advisory Topic *
                      </label>
                      <select
                        value={formData.topic}
                        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                      >
                        <option value="SAP RISE Server Memory Control">SAP RISE Server Memory Control</option>
                        <option value="Migration Evaluation: Brownfield vs Greenfield vs Bluefield">Migration Evaluation: Brownfield vs Greenfield vs Bluefield</option>
                        <option value="SAP ECC to SAP S/4HANA Selective Data Transition">SAP ECC to SAP S/4HANA Selective Data Transition</option>
                        <option value="Custom SAP Integrations (BAPI / RFC)">Custom SAP Integrations (BAPI / RFC)</option>
                        <option value="Section 128(1) Daily Backup Compliance">Section 128(1) Daily Backup Compliance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Project Notes / Specific Questions
                      </label>
                      <textarea
                        rows={2}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your current SAP version, database size (TB), or planned migration timeline..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-extrabold text-sm shadow-xl shadow-[#41a0c8]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>Book Free Consultation Session</span>
                      <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCheckCircle,
  FiCalendar,
  FiClock,
  FiShield,
  FiFileText,
  FiUsers,
  FiDatabase,
  FiArrowRight,
  FiCheck,
  FiSend,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function EdmsDemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    erp: "SAP S/4HANA",
    volume: "10,000 - 50,000 / month",
    remarks: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Breadcrumb & Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <FiCalendar className="w-4 h-4 text-[#f7c037]" />
            Live Enterprise Demonstration
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#062039] tracking-tight">
            Experience Auggit eDMS{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              In Action
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            See how our enterprise Electronic Document Management System unifies paperless workflows, automates ERP linking, and guarantees 100% statutory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: What to Expect & Value Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
              <h3 className="text-xl font-extrabold text-[#062039] mb-4">
                What You Will See in the 30-Minute Live Demo:
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Instant ERP Transaction Linking",
                    desc: "See how invoices, purchase orders, and gate passes attach automatically to SAP & ERP transactions without manual tagging.",
                  },
                  {
                    title: "Sub-Second Metadata Search",
                    desc: "Retrieve any document among millions in <0.3s using GSTIN, PO number, vendor name, or line-item keywords.",
                  },
                  {
                    title: "Role-Based Multi-Entity Vaults",
                    desc: "Hierarchical permissions, department security, and granular access controls for sensitive corporate records.",
                  },
                  {
                    title: "Section 128 & Tax Audit Readiness",
                    desc: "Immutable change logs, cryptographic timestamping, and instant audit package exports for statutory inspectors.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#41a0c8]/10 text-[#41a0c8] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheck className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-[#062039]">{item.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-[#062039]">
                  <FiClock className="w-4 h-4 text-[#41a0c8]" /> 30-Minute Tailored Session
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-[#062039]">
                  <FiShield className="w-4 h-4 text-emerald-600" /> Enterprise NDA Protected
                </span>
              </div>
            </div>

            {/* Quick Metrics Badge */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-lg">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-2xl font-black text-[#f7c037]">2M+</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">Papers Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#41a0c8]">60+</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">Enterprise Clients</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white">10 Yrs</div>
                  <div className="text-[11px] text-slate-300 font-medium mt-0.5">Domain Mastery</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Demo Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <FiCheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#062039]">Demo Request Confirmed!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#062039]">{formData.name}</span>. Our enterprise eDMS solution architect will contact you within 2 business hours at <span className="font-bold text-[#062039]">{formData.email}</span> to confirm your session calendar.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#f1f2f2] text-xs font-bold text-[#062039] hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-extrabold text-[#062039]">
                      Schedule Your Personalized Demo
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below to configure a tailored demonstration on your specific ERP architecture.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Sharma"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Industries Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Current ERP Environment
                      </label>
                      <select
                        value={formData.erp}
                        onChange={(e) => setFormData({ ...formData, erp: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all"
                      >
                        <option value="SAP S/4HANA">SAP S/4HANA</option>
                        <option value="SAP ECC">SAP ECC</option>
                        <option value="SAP RISE Private Cloud">SAP RISE Private Cloud</option>
                        <option value="Tally Prime">Tally Prime</option>
                        <option value="Zoho Books">Zoho Books</option>
                        <option value="Other ERP">Other ERP / Custom</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Estimated Monthly Document Volume
                      </label>
                      <select
                        value={formData.volume}
                        onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all"
                      >
                        <option value="< 10,000 / month">&lt; 10,000 / month</option>
                        <option value="10,000 - 50,000 / month">10,000 - 50,000 / month</option>
                        <option value="50,000 - 200,000 / month">50,000 - 200,000 / month</option>
                        <option value="200,000+ / month">200,000+ / month</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Specific Requirements or Remarks
                    </label>
                    <textarea
                      rows={3}
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                      placeholder="Tell us about your current document bottlenecks, plants, or compliance requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-extrabold text-sm shadow-xl shadow-[#41a0c8]/25 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Request Your Live Demo Now</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Zero commitment required. Your business information is held strictly confidential under NDA.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

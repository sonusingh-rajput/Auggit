import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiCheckCircle,
  FiCalendar,
  FiShield,
  FiCpu,
  FiLayers,
  FiArrowRight,
  FiClock,
  FiUsers,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function BookPocPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    module: "AP Automation (MIRO - MIGO)",
    erp: "SAP S/4HANA",
    volume: "1,000 - 10,000 documents / mo",
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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <FiCpu className="w-4 h-4 text-[#f7c037]" />
            14-Day Zero-Risk Trial
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-[#062039] tracking-tight">
            Book Your Free{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Proof of Concept (POC)
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Experience the real accuracy and speed of Auggit on your own enterprise data. We deploy a zero-friction pilot instance connected to your SAP or ERP test system.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: What's included in POC */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
              <h3 className="text-xl font-extrabold text-[#062039] mb-4">
                What is Included in Your Free POC:
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    title: "Live Processing on 100 Actual Documents",
                    desc: "Test your actual supplier invoices, manifests, or gate passes to measure real-world OCR accuracy.",
                  },
                  {
                    title: "Dedicated SAP Solution Architect",
                    desc: "A certified SAP specialist is assigned to configure your BAPI/RFC connections and custom mapping rules.",
                  },
                  {
                    title: "Zero Production Interruption",
                    desc: "Runs completely in a sandbox or non-production environment. Zero changes to your core system.",
                  },
                  {
                    title: "ROI & Accuracy Executive Report",
                    desc: "Receive a formal benchmarking document demonstrating time saved, error reductions, and projected annual ROI.",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FiCheckCircle className="w-4 h-4" />
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
                  <FiClock className="w-4 h-4 text-[#41a0c8]" /> 14-Day Free Evaluation
                </span>
                <span className="flex items-center gap-1.5 font-semibold text-[#062039]">
                  <FiShield className="w-4 h-4 text-emerald-600" /> Mutual NDA Included
                </span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-lg space-y-3">
              <h4 className="text-base font-bold text-[#f7c037]">Enterprise SLA Guarantee</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Over 60+ enterprises have piloted and deployed Auggit with 99.4% satisfaction and average 40% first-year ROI.
              </p>
            </div>
          </div>

          {/* Right: POC Request Form */}
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
                  <h3 className="text-2xl font-extrabold text-[#062039]">POC Application Received!</h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <span className="font-bold text-[#062039]">{formData.name}</span>. An Auggit Solutions Engineer has been assigned to your account and will initiate your sandbox setup within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#f1f2f2] text-xs font-bold text-[#062039] hover:bg-slate-200 transition-colors"
                  >
                    Submit Another POC Request
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl font-extrabold text-[#062039]">
                      Register for Your 14-Day Free POC
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Zero software charges. Zero hardware requirement. Complete in 3 simple steps.
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
                        placeholder="e.g. Vikram Singhania"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
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
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Entity Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Manufacturing Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Primary Module for POC *
                      </label>
                      <select
                        value={formData.module}
                        onChange={(e) => setFormData({ ...formData, module: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                      >
                        <option value="AP Automation (MIRO - MIGO)">AP Automation (MIRO - MIGO)</option>
                        <option value="Automatic Data Entry (ADE)">Automatic Data Entry (ADE)</option>
                        <option value="Vendor Onboarding Tool">Vendor Onboarding Tool</option>
                        <option value="Gate Pass Management">Gate Pass Management</option>
                        <option value="Weighbridge Integration">Weighbridge Integration</option>
                        <option value="SLaiCE SAP Data Slicing">SLaiCE SAP Data Slicing</option>
                        <option value="Auggit eDMS">Auggit eDMS Platform</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Current ERP Environment *
                      </label>
                      <select
                        value={formData.erp}
                        onChange={(e) => setFormData({ ...formData, erp: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none"
                      >
                        <option value="SAP S/4HANA on-premise">SAP S/4HANA on-premise</option>
                        <option value="SAP S/4HANA RISE Private Cloud">SAP S/4HANA RISE Private Cloud</option>
                        <option value="SAP ECC 6.0">SAP ECC 6.0</option>
                        <option value="Tally Prime">Tally Prime</option>
                        <option value="Zoho Books">Zoho Books</option>
                        <option value="Other ERP">Other ERP</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      POC Goals or Questions
                    </label>
                    <textarea
                      rows={3}
                      value={formData.remarks}
                      onChange={(e) => setFormData({ ...formData, remarks: e.target.value })}
                      placeholder="Share details about your transaction volumes, target plant locations, or audit timelines..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] focus:ring-2 focus:ring-[#41a0c8]/20 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-extrabold text-sm shadow-xl shadow-[#41a0c8]/25 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Confirm & Schedule Free POC</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Zero credit card or payment info needed. Complete confidentiality guaranteed under mutual NDA.
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

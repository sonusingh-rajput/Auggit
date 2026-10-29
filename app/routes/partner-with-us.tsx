import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiUsers,
  FiAward,
  FiArrowRight,
  FiCheckCircle,
  FiDollarSign,
  FiGlobe,
  FiShield,
  FiSend,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function PartnerWithUsPage() {
  const [partnerForm, setPartnerForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    type: "ERP Consulting / Reseller",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const featuredPartners = [
    {
      name: "Novok Consulting (Nobak)",
      category: "Zoho Premium Partner",
      logoText: "NOVOK GLOBAL",
      tagline: "Specialists in Zoho ecosystem implementation & enterprise digital transformation.",
      website: "https://www.novokglobal.com/",
      badge: "Authorized Zoho Reseller",
    },
    {
      name: "Jilaba Software",
      category: "Jewellery ERP Technology",
      logoText: "JILABA SOFTWARE",
      tagline: "India's premier software platform for gems, bullion, and retail jewellery management.",
      website: "https://jilaba.com/",
      badge: "Jewellery Vertical Partner",
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
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <FiUsers className="w-4 h-4 text-[#f7c037]" />
            Global Partner Ecosystem
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Partner With{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Auggit
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Join our enterprise partner network. Deliver industry-leading SAP compliance, document governance, and AI automation solutions to your clients with generous recurring revenue sharing.
          </p>
        </div>

        {/* Featured Reseller Partners */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-widest uppercase text-[#41a0c8]">
              Authorized Partners
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062039] mt-1">
              Trusted by Leading Technology Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredPartners.map((partner, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#41a0c8]/10 text-[#41a0c8]">
                      {partner.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">{partner.category}</span>
                  </div>

                  <div className="h-14 flex items-center mb-4">
                    <div className="px-4 py-2 rounded-xl bg-slate-100 font-black text-slate-800 text-lg tracking-wider border border-slate-200">
                      {partner.logoText}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#062039] mb-2">{partner.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">{partner.tagline}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] flex items-center gap-1.5"
                  >
                    <span>Visit Partner Website</span>
                    <FiArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] font-semibold text-emerald-600">Verified Reseller</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Attractive Margins",
              desc: "Up to 30% recurring margin on software licenses and recurring maintenance subscriptions.",
              icon: FiDollarSign,
            },
            {
              title: "Co-Selling Support",
              desc: "Dedicated Auggit SAP solution architects assist you through customer demonstrations and technical discovery.",
              icon: FiUsers,
            },
            {
              title: "Certified Training",
              desc: "Full pre-sales enablement, implementation certifications, and architectural sales collateral.",
              icon: FiAward,
            },
            {
              title: "Fast-Track Deployment",
              desc: "Pre-built connectors for SAP, Zoho, and Tally Prime ensure high customer satisfaction and rapid go-lives.",
              icon: SiSap,
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#41a0c8]/10 text-[#41a0c8] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-[#062039] mb-1">{item.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Partner Application Form */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                Join the Network
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062039]">
                Apply for Reseller Partnership
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you are an SAP System Integrator, IT consultancy, or boutique advisory firm, let's unlock substantial value for your enterprise clients together.
              </p>
            </div>

            <div className="lg:col-span-7">
              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <FiCheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-xl font-bold text-emerald-900">Partner Application Received!</h4>
                  <p className="text-xs text-emerald-700">
                    Our Global Alliances Manager will review your details and reach out within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.name}
                        onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={partnerForm.email}
                        onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={partnerForm.company}
                        onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })}
                        placeholder="Enterprise Consultancy Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={partnerForm.phone}
                        onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:border-[#41a0c8] outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#41a0c8] to-[#1267a7] hover:from-[#3590b8] hover:to-[#0d5389] text-white font-extrabold text-sm shadow-xl shadow-[#41a0c8]/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Partner Application</span>
                    <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";
import { FiCheckCircle, FiArrowRight, FiShield, FiCpu, FiLayers } from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function IntegrationsSection() {
  const integrations = [
    {
      name: "SAP",
      logoLabel: "SAP Native Connect",
      type: "ECC 6.0 | S/4HANA | RISE",
      desc: "Certified, deep two-way integration with SAP ECC, SAP S/4HANA on-premise, and SAP RISE Private Cloud with zero third-party replication load.",
      tags: ["SAP ECC", "SAP S/4HANA", "SAP RISE", "BAPI / RFC"],
      highlight: "SAP Approved & Store Listed",
      accent: "border-[#41a0c8] bg-[#41a0c8]/5",
      badgeColor: "bg-[#41a0c8] text-white",
    },
    {
      name: "Tally Prime",
      logoLabel: "Tally Prime XML & ODBC",
      type: "Desktop & Connected Cloud",
      desc: "Seamless synchronization of Purchase Vouchers, Payment Advice, GST tax breakdowns, and automated document linking without manual data entry.",
      tags: ["Tally Prime 4.0+", "Auto Vouchers", "XML Direct", "GST E-Invoice"],
      highlight: "Plug & Play Connector",
      accent: "border-[#f7c037] bg-[#f7c037]/5",
      badgeColor: "bg-[#f7c037] text-[#062039]",
    },
    {
      name: "Zoho Books",
      logoLabel: "Zoho Enterprise Cloud",
      type: "RESTful Cloud API",
      desc: "Automated supplier bill creation, customer invoice dispatch, payment reconciliation, and 2B ITC mismatch detection via secure webhook events.",
      tags: ["Zoho Books", "Zoho Inventory", "REST APIs", "Automated Webhooks"],
      highlight: "Certified Zoho Reseller Partner",
      accent: "border-emerald-500 bg-emerald-500/5",
      badgeColor: "bg-emerald-600 text-white",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white text-[#353535] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#41a0c8] bg-slate-100 px-4 py-1.5 rounded-full border border-slate-200">
            Enterprise Ecosystem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062039] tracking-tight">
            Seamless ERP Integrations
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Zero-friction connectors engineered for SAP, Tally Prime, and Zoho Books environments.
          </p>
        </div>

        {/* 3 Major ERP Cards */}
        <div className="gsap-stagger-container grid grid-cols-1 md:grid-cols-3 gap-8">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border shadow-lg hover:shadow-2xl transition-all flex flex-col justify-between ${item.accent} bg-white group hover:-translate-y-1`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 px-4 py-1 rounded-xl bg-slate-900 text-white font-black text-sm tracking-wider flex items-center justify-center">
                    {item.name === "SAP" ? <span className="text-[#f7c037] flex items-center gap-1.5"><SiSap className="w-5 h-5" /> SAP</span> : item.name}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.badgeColor}`}>
                    {item.highlight}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-[#062039]">{item.logoLabel}</h3>
                  <div className="text-xs text-slate-400 font-semibold mb-2">{item.type}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-[#41a0c8]">
                <a href="/services" className="hover:underline flex items-center gap-1">
                  <span>Explore Integration Architecture</span>
                  <FiArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

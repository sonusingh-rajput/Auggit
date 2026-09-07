import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiDatabase,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiLock,
  FiCloud,
  FiCheckCircle,
  FiArrowRight,
  FiLayers,
  FiCpu,
  FiBarChart2,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

const features = [
  {
    icon: FiDatabase,
    title: "Precision Data Carving",
    description:
      "Instead of copying entire SAP systems, SLaiCE allows organizations to carve out precise subsets of data using defined parameters, eliminating terabytes of legacy data.",
  },
  {
    icon: FiShield,
    title: "Seamless Compliance",
    description:
      "Meet Indian Companies Act mandates without full system replication. Host regulated data in a live, SAP-native environment within India.",
  },
  {
    icon: FiZap,
    title: "Real-Time Performance",
    description:
      "Built on SAP's native SLT framework, SLaiCE performs in near real-time while production environments remain fully available.",
  },
  {
    icon: FiTrendingUp,
    title: "Accelerated Migrations",
    description:
      "Ditch the 'copy-everything' approach to S/4HANA transitions. Selectively migrate only critical data subsets and minimize downtime.",
  },
  {
    icon: FiCloud,
    title: "Low-Cost Test Environments",
    description:
      "Extract exact production data 'slices' to build high-performance test environments that accelerate releases while slashing infrastructure costs.",
  },
  {
    icon: FiLock,
    title: "Native SAP Integration",
    description:
      "Runs entirely within the existing SAP landscape without storing or processing data outside it, leveraging SLT, SAP Data Services, and other SAP-native technologies.",
  },
];

const benefits = [
  {
    icon: FiCpu,
    title: "Targeted Extraction",
    desc: "Extract precisely what you need instead of reprocessing entire databases.",
  },
  {
    icon: FiShield,
    title: "Data Sovereignty",
    desc: "Stay compliant without full database replication across borders.",
  },
  {
    icon: FiTrendingUp,
    title: "Cost Efficiency",
    desc: "Reduce infrastructure costs and accelerate time to production.",
  },
  {
    icon: FiLock,
    title: "Data Masking",
    desc: "Supports data scrambling for sensitive information in non-prod environments.",
  },
  {
    icon: FiDatabase,
    title: "Broad Compatibility",
    desc: "Works on SAP ECC, SAP S/4HANA on-premise, and private cloud.",
  },
  {
    icon: FiLayers,
    title: "Add-on Support",
    desc: "Supports custom and partner add-on tables seamlessly.",
  },
];

const steps = [
  {
    number: "01",
    title: "Connect to SAP",
    desc: "Securely connect SLaiCE to your existing SAP landscape (ECC or S/4HANA) with minimal configuration.",
  },
  {
    number: "02",
    title: "Configure Parameters",
    desc: "Define your data extraction parameters—company codes, document types, date ranges, and more.",
  },
  {
    number: "03",
    title: "Carve & Comply",
    desc: "SLaiCE extracts a precise subset of data, ensuring compliance and ready for reporting or migration.",
  },
];

interface SlaiceFeature {
  icon: any;
  title: string;
  description: string;
}

interface SlaiceBenefit {
  icon: any;
  title: string;
  desc: string;
}

const FeatureCard = ({ feature, index }: { feature: SlaiceFeature; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/15 hover:border-[#41a0c8] transition-all duration-300 text-center"
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#41a0c8] to-[#1267a7] text-white shadow-lg shadow-[#41a0c8]/25 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-[#062039] mb-2">
          {feature.title}
        </h3>
        <p className="text-[#353535] text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

const BenefitCard = ({ benefit, index }: { benefit: SlaiceBenefit; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = benefit.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#e3e3e3] shadow-sm hover:border-[#41a0c8] hover:shadow-md transition-all"
    >
      <div className="p-2 rounded-lg bg-[#f1f2f2] text-[#41a0c8] shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-sm font-bold text-[#062039]">{benefit.title}</h4>
        <p className="text-xs text-[#353535]">{benefit.desc}</p>
      </div>
    </motion.div>
  );
};

export default function ProductSlaice() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] overflow-x-hidden">

      {/* ========== HERO SECTION ========== */}
      <section
        ref={heroRef}
        className="relative px-6 pt-10 pb-10 sm:pt-14 sm:pb-12 max-w-7xl mx-auto"
      >
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-[2.5rem]">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#9eddf7]/30 rounded-full blur-[100px] opacity-60"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#ffeda0]/30 rounded-full blur-[80px] opacity-40"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#9eddf7]/20 rounded-full blur-[60px] opacity-50"
            animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#9eddf7] text-[#41a0c8] text-xs font-bold uppercase tracking-[0.15em] shadow-sm">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
              </span>
              SAP Integration Engine
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#062039] leading-[1.1]">
              SLaiCE <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
                Integration
              </span>
            </h1>

            <p className="text-[#353535] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Seamlessly connect your SAP landscape with real-time, parameter-driven
              data extraction—eliminating the need for full system replication while
              ensuring compliance and reducing infrastructure costs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg shadow-[#41a0c8]/25 hover:scale-105 cursor-pointer"
              >
                Explore Features
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://www.sap.com/products/erp/partners/vouch-application-private-limited-slaice-for-sap-hana.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#062039] font-semibold text-sm border border-[#e3e3e3] hover:border-[#41a0c8] transition-all hover:scale-105 shadow-sm cursor-pointer"
              >
                <SiSap className="w-4 h-4 text-[#41a0c8]" />
                View Partner Page
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#979797] pt-2">
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                SAP Certified
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                Patent Pending
              </span>
              <span className="flex items-center gap-2">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                Near-Zero Latency
              </span>
            </div>
          </motion.div>

          {/* Right Architecture Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#e3e3e3] shadow-xl shadow-[#41a0c8]/10">
              <div className="flex items-center justify-between pb-6 border-b border-[#e3e3e3]">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#9eddf7]/30 text-[#41a0c8]">
                    <FiDatabase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#062039] text-base">SAP ECC / S4HANA</h3>
                    <p className="text-xs text-[#979797]">Live Production Environment</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5e8b22]/10 text-[#5e8b22] text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#5e8b22] animate-pulse" />
                  Connected
                </span>
              </div>

              <div className="py-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#979797]">
                  <span>Carving Stream</span>
                  <span className="font-mono text-[#41a0c8]">SLT Direct Replication</span>
                </div>
                <div className="w-full bg-[#f1f2f2] h-2.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] h-full rounded-full"
                    animate={{ width: ["30%", "85%", "60%", "95%"] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-[#f1f2f2] text-center">
                    <p className="text-xs text-[#979797]">Data Reduced</p>
                    <p className="text-sm font-bold text-[#062039]">Up to 70%</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f1f2f2] text-center">
                    <p className="text-xs text-[#979797]">Downtime</p>
                    <p className="text-sm font-bold text-[#5e8b22]">0 Hours</p>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f1f2f2] text-center">
                    <p className="text-xs text-[#979797]">Latency</p>
                    <p className="text-sm font-bold text-[#41a0c8]">&lt; 100ms</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#e3e3e3] flex items-center justify-between text-xs text-[#353535]">
                <span className="flex items-center gap-2">
                  <SiSap className="w-5 h-5 text-[#41a0c8]" />
                  Section 128 Native Alignment
                </span>
                <span className="text-[#5e8b22] font-semibold">100% In-Country</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section id="features" className="px-6 py-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-[#f1f2f2] rounded-full border border-[#9eddf7]">
            Key Capabilities
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
           Precise. Audit Ready. Unaltered.<br/>{" "} 
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Data with audit trail.
            </span>
          </h2>
          {/* <p className="mt-3 text-[#353535] text-base">
            SLaiCE gives you the power to carve out exactly the data you need with
            full control and zero overhead.
          </p>  */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-[#f1f2f2] rounded-full border border-[#9eddf7]">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            From Connection to{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Compliance in 3 Steps
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#9eddf7] via-[#41a0c8] to-[#9eddf7] -translate-y-1/2" />
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="relative text-center bg-white rounded-2xl p-8 border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/10 hover:border-[#9eddf7] transition-all duration-300"
            >
              <div className="text-5xl font-black text-[#f1f2f2] mb-2">{step.number}</div>
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#41a0c8] to-[#1267a7] text-white shadow-lg shadow-[#41a0c8]/25 mb-4">
                {index === 0 && <FiDatabase className="w-5 h-5" />}
                {index === 1 && <FiLayers className="w-5 h-5" />}
                {index === 2 && <FiShield className="w-5 h-5" />}
              </div>
              <h3 className="text-xl font-bold text-[#062039] mb-2">{step.title}</h3>
              <p className="text-[#353535] text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== BENEFITS / WHY SLaiCE ========== */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-[#f1f2f2] rounded-full border border-[#9eddf7]">
              Why SLaiCE
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
              Leaner, Smarter Alternative to{" "}
              <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
                Traditional Replication
              </span>
            </h2>
            <p className="mt-3 text-[#353535] text-base leading-relaxed">
              Where others copy everything, SLaiCE helps enterprises extract only
              what is needed and achieve more.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: "Data Extraction", value: "Precision", icon: FiDatabase },
              { label: "Compliance", value: "Native", icon: FiShield },
              { label: "Infrastructure", value: "Reduced", icon: FiTrendingUp },
              { label: "Integration", value: "Seamless", icon: FiCloud },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-6 text-center border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/10 transition-all duration-300"
              >
                <stat.icon className="w-6 h-6 text-[#41a0c8] mx-auto mb-2" />
                <div className="text-2xl font-bold text-[#062039]">{stat.value}</div>
                <div className="text-xs text-[#979797] uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== TRUST & COMPLIANCE ========== */}
      <section className="px-6 py-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#41a0c8] bg-[#f1f2f2] rounded-full border border-[#9eddf7]">
            Trust & Compliance
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            Built for <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">Enterprise Security</span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#e3e3e3] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <SiSap className="w-8 h-8 text-[#41a0c8]" />
              <span className="text-xs font-semibold text-[#062039]">SAP Partner</span>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#e3e3e3] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <FiShield className="w-8 h-8 text-[#5e8b22]" />
              <span className="text-xs font-semibold text-[#062039]">ISO 27001</span>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#e3e3e3] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <FiLock className="w-8 h-8 text-[#f7c037]" />
              <span className="text-xs font-semibold text-[#062039]">Patent Pending</span>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center gap-2 p-4 bg-white rounded-xl border border-[#e3e3e3] shadow-sm min-w-[120px] hover:shadow-md transition-shadow cursor-default">
              <FiCloud className="w-8 h-8 text-[#41a0c8]" />
              <span className="text-xs font-semibold text-[#062039]">SAP Certified</span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#062039] via-[#062039] to-[#1267a7] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl relative overflow-hidden border border-[#1267a7]/30"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(65,160,200,0.25),transparent_50%)] pointer-events-none" />
          <motion.div
            className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-[#41a0c8]/20 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-[#9eddf7]/15 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Ready to Build the Enterprise of Tomorrow?
          </h3>
          <p className="text-[#9eddf7] text-sm sm:text-base max-w-xl mx-auto relative z-10">
            From documents to data. From data to intelligence. Auggit is your digital foundation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer hover:scale-105"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
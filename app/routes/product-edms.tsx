import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FiSearch,
  FiZap,
  FiClipboard,
  FiShield,
  FiLock,
  FiUsers,
  FiGitBranch,
  FiMail,
  FiSmartphone,
  FiEye,
  FiRefreshCw,
  FiAlertTriangle,
  FiArrowRight,
  FiCheckCircle,
  FiFileText,
} from "react-icons/fi";

const roles = [
  {
    icon: FiSearch,
    title: "Accountants",
    subtitle: "Locate any record Instantly",
    items: [
      {
        heading: "Instant Document Retrieval",
        desc: "Stop the manual hunt. Every supporting record is indexed and searchable in one central hub.",
      },
      {
        heading: "Automated Linking",
        desc: "Connect ERP transactions to physical docs automatically. No more broken trails.",
      },
    ],
  },
  {
    icon: FiZap,
    title: "IT & Systems",
    subtitle: "The bridge between Data and Docs",
    items: [
      {
        heading: "Seamless ERP Integration",
        desc: "Link documents seamlessly with your ERP records. Maintain a single source of truth.",
      },
      {
        heading: "Zero Data Silos",
        desc: "Eliminate the gap between your transactional data and your documents.",
      },
    ],
  },
  {
    icon: FiClipboard,
    title: "Auditors",
    subtitle: 'Turn Audit Season into "just another day"',
    items: [
      {
        heading: "Audit-Ready Dashboards",
        desc: "Shift from manual to instant exports. Provide auditors exactly what they need in a click.",
      },
      {
        heading: "Continuous Compliance",
        desc: "Real-time monitoring ensures you aren't scrambling the week before the audit.",
      },
    ],
  },
  {
    icon: FiShield,
    title: "Ops Managers",
    subtitle: "Total visibility across the workflow",
    items: [
      {
        heading: "Integrity Shield",
        desc: "Automatically flag missing or incomplete documents before they become a bottleneck.",
      },
      {
        heading: "Proactive Alerts",
        desc: "Get notified the moment a document is uploaded.",
      },
    ],
  },
  {
    icon: FiLock,
    title: "Risk & Legal",
    subtitle: "Bulletproof Governance & Control",
    items: [
      {
        heading: "Precision Version Control",
        desc: 'Eliminate "draft confusion." Ensure only the final, approved version is ever used for filing.',
      },
      {
        heading: "Gap Mitigation",
        desc: "Close approval loops with automated signatures and time-stamped audit trails.",
      },
    ],
  },
];

const supportingFeatures = [
  {
    icon: FiUsers,
    title: "Role-Based Access Control",
    desc: "Visibility where it's needed; protection where it's required. We ensure sensitive data is only accessible to authorized roles, mitigating risk at the entity level.",
  },
  {
    icon: FiGitBranch,
    title: "Version Control",
    desc: 'Eliminate "Final_v2_updated" confusion. Our system maintains a single source of truth with full timestamped history, ensuring your team always works on the right document.',
  },
  {
    icon: FiMail,
    title: "Automated Email Integration",
    desc: "Bridge the gap between your inbox and your archive. Secure domain-to-domain email connectivity ensures that no project document is ever lost in a personal email thread.",
  },
  {
    icon: FiSmartphone,
    title: "Mobile DMS",
    desc: "Operational continuity doesn't stop at the desk. Track approvals, view reports, and manage your documentation from anywhere in the world.",
  },
];

const connectedIntelligence = [
  {
    icon: FiSearch,
    title: "Instant Document Access",
    desc: "Locate any supporting record in seconds, directly from your transaction screen.",
  },
  {
    icon: FiZap,
    title: "Accelerated Audit Readiness",
    desc: "Slash prep time by 70% with pre-mapped, structured evidence trails.",
  },
  {
    icon: FiEye,
    title: "Total Documentation Visibility",
    desc: "Real-time health reports highlight exactly what's missing before it becomes a liability.",
  },
  {
    icon: FiRefreshCw,
    title: "Frictionless Internal Workflows",
    desc: 'Automated tagging stops the endless "did you get the file?" email chains between departments.',
  },
  {
    icon: FiShield,
    title: "Strengthened Internal Controls",
    desc: "Enforce rigorous standards through automated audit trails and role-specific permissions.",
  },
  {
    icon: FiAlertTriangle,
    title: "Mitigated Compliance Risk",
    desc: "Proactive gap detection prevents the danger of unlinked or unverified transactions.",
  },
];

interface RoleItem {
  heading: string;
  desc: string;
}

interface RoleData {
  icon: any;
  title: string;
  subtitle: string;
  items: RoleItem[];
}

interface FeatureData {
  icon: any;
  title: string;
  desc: string;
}

interface IntelData {
  icon: any;
  title: string;
  desc: string;
}

const RoleCard = ({ role, index }: { role: RoleData; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = role.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/15 hover:border-[#41a0c8] transition-all duration-300"
    >
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#41a0c8] to-[#1267a7] text-white shadow-lg shadow-[#41a0c8]/25 mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-bold text-[#062039] mb-1">{role.title}</h3>
      <p className="text-xs text-[#41a0c8] font-bold uppercase tracking-wider mb-3">
        {role.subtitle}
      </p>
      <div className="space-y-3">
        {role.items.map((item: RoleItem, i: number) => (
          <div key={i}>
            <h4 className="text-sm font-bold text-[#062039]">{item.heading}</h4>
            <p className="text-xs text-[#353535] leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ feature, index }: { feature: FeatureData; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-8 border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/15 hover:border-[#41a0c8] transition-all duration-300 flex items-start gap-5"
    >
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#41a0c8] to-[#1267a7] text-white shadow-lg shadow-[#41a0c8]/25 shrink-0 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-[#062039] mb-1">{feature.title}</h3>
        <p className="text-sm text-[#353535] leading-relaxed">{feature.desc}</p>
      </div>
    </motion.div>
  );
};

const IntelCard = ({ item, index }: { item: IntelData; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl p-6 border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:shadow-[#41a0c8]/15 hover:border-[#41a0c8] transition-all duration-300 text-center"
    >
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#41a0c8] to-[#1267a7] text-white shadow-lg shadow-[#41a0c8]/25 mb-4 group-hover:scale-110 transition-transform">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-base font-bold text-[#062039] mb-1">{item.title}</h3>
      <p className="text-xs text-[#353535] leading-relaxed">{item.desc}</p>
    </motion.div>
  );
};

export default function ProductEdms() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen bg-[#f1f2f2]/40 text-[#353535] overflow-x-hidden">

      {/* ========== HERO SECTION ========== */}
      <section ref={heroRef} className="relative  px-6 pt-10 pb-10 sm:pt-14 sm:pb-12 max-w-7xl mx-auto">
        {/* Subtle background glow orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-b-[2.5rem]">
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#9eddf7]/40 rounded-full blur-[100px] opacity-60"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#41a0c8]/20 rounded-full blur-[80px] opacity-40"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#9eddf7]/30 rounded-full blur-[60px] opacity-50"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9eddf7]/30 border border-[#41a0c8]/30 text-[#1267a7] text-xs font-bold uppercase tracking-[0.15em]">
              <span className="relative flex w-2 h-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#41a0c8] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#41a0c8]" />
              </span>
              Flagship Solution
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#062039] leading-[1.1]">
              Automation <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-[#41a0c8] via-[#1267a7] to-[#062039] bg-clip-text text-transparent">
                Platform
              </span>
            </h1>

            <p className="text-[#353535] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              A structured document management platform that connects documents to transactions, processes and accountability across the organization.
            </p>

            <p className="text-[#979797] text-sm max-w-xl mx-auto lg:mx-0">
              Centralize your corporate filing systems with instant secure retrieval, strict access logs, and complete version auditing.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#roles"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#41a0c8] hover:bg-[#1267a7] text-white font-semibold text-sm transition-all shadow-lg shadow-[#41a0c8]/25 hover:shadow-[#41a0c8]/40 hover:scale-105"
              >
                Explore Roles
                <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-semibold text-sm border border-[#e3e3e3] transition-all hover:scale-105 shadow-sm"
              >
                View Features
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#979797] pt-2">
              <span className="flex items-center gap-2 font-medium text-[#353535]">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                &lt;300ms Retrieval
              </span>
              <span className="flex items-center gap-2 font-medium text-[#353535]">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                70% Audit Prep Reduction
              </span>
              <span className="flex items-center gap-2 font-medium text-[#353535]">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                ERP Native
              </span>
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#062039]/10 border border-[#e3e3e3] bg-white">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
                alt="Document Management Dashboard"
                className="w-full h-auto object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#f1f2f2]/80 via-transparent to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-[#e3e3e3] shadow-lg flex items-center gap-2.5">
                <FiFileText className="w-5 h-5 text-[#41a0c8]" />
                <span className="text-xs font-bold text-[#062039]">EDMS Native</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md rounded-xl px-3.5 py-2 border border-[#e3e3e3] shadow-lg flex items-center gap-2.5">
                <FiCheckCircle className="w-4 h-4 text-[#5e8b22]" />
                <span className="text-xs font-bold text-[#062039]">Audit Ready</span>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="bg-white rounded-xl px-4 py-3 text-center border border-[#e3e3e3] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-[#979797]">Retrieval Speed</div>
                <div className="text-lg font-bold text-[#062039]">&lt;300ms</div>
              </div>
              <div className="bg-white rounded-xl px-4 py-3 text-center border border-[#e3e3e3] shadow-sm hover:shadow-md transition-shadow">
                <div className="text-xs text-[#979797]">Audit Prep Reduction</div>
                <div className="text-lg font-bold text-[#062039]">70%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== ROLES SECTION ========== */}
      <section id="roles" className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
            Select Your Seat
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            Connect your documents to your{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              data
            </span>
          </h2>
          <p className="mt-3 text-[#353535] text-base">
            See how manual work becomes effortless for every role in your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <RoleCard key={index} role={role} index={index} />
          ))}
        </div>
      </section>

      {/* ========== SUPPORTING FEATURES ========== */}
      <section id="features" className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
            Supporting the way enterprises handle documentation
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            Less time chasing records,{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              more time getting things done
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {supportingFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* ========== CONNECTED INTELLIGENCE ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
            Beyond Storage
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            Connected{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Intelligence
            </span>
          </h2>
          <p className="mt-3 text-[#353535] text-base">
            Connecting documents, transactions and workflows into one intelligent system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectedIntelligence.map((item, index) => (
            <IntelCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#062039] via-[#1267a7] to-[#41a0c8] text-white rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-2xl shadow-[#062039]/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
          <motion.div
            className="absolute -top-20 -right-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-[300px] h-[300px] bg-white/10 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight relative z-10">
            Ready to Transform Your Document Management?
          </h3>
          <p className="text-[#9eddf7] text-sm sm:text-base max-w-xl mx-auto relative z-10">
            From documents to data. From data to intelligence. Connect your enterprise documentation today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 relative z-10">
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer hover:scale-105"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#41a0c8]" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
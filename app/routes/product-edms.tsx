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
  FiTag,
  FiBarChart2,
  FiGlobe,
  FiPieChart,
  FiCheckSquare,
  FiClock,
  FiDatabase,
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

const editions = [
  {
    icon: FiFileText,
    title: "eDMS - Standard",
    desc: "Ensure a seamless, simplified and secure document management experience with auggit eDMS. With patented Tag functionality, audit and reporting features, the platform helps brands address modern document management challenges and drive business efficiency (Process, Time, Cost and Resource).",
  },
  {
    icon: FiDatabase,
    title: "eDMS - ERP",
    desc: "Unify all the documents from ERP and non-ERP solutions in auggit eDMS for seamless document management. Ensure role based access with effective workflow management to drive business ROI.",
  },
];

const impactStats = [
  { value: "40%", label: "Return on Investment" },
  { value: "45%", label: "Process Efficiency" },
  { value: "30%", label: "Finance Cost" },
  { value: "70%", label: "Auditing Time" },
  { value: "40%", label: "Resource Optimization" },
];

const keyFeatures = [
  {
    icon: FiTag,
    tag: "Unique in Market",
    title: "Patented Tag Functionality",
    desc: "Create custom document tags so you don't miss any document in your company. Organize voucher types and map tag fields dynamically per team or process, and link secondary documents to primary financial records for absolute traceability.",
  },
  {
    icon: FiBarChart2,
    tag: "Find the Missing Document",
    title: "Tag Report",
    desc: "Monitor documents by process, transaction or design level using comprehensive tag reports, e.g. \"6 invoices missing in 17 transactions\", for easy traceability.",
  },
  {
    icon: FiGlobe,
    tag: "100% Digital",
    title: "Remote Audit",
    desc: "Enable secure, real-time collaboration with internal and external auditors. Auditors can approve, comment and review documents from anywhere without visiting the premises.",
  },
  {
    icon: FiPieChart,
    tag: "Real-Time Audit Progress",
    title: "Audit Report",
    desc: "Track the exact percentage of work completion, pending reviews, approvals and disapprovals instantly as tagging happens.",
  },
  {
    icon: FiCheckSquare,
    tag: "Custom & In-Built",
    title: "Workflow Automation",
    desc: "Define multi-stage approval workflows or use in-built options. Instantly approve or disapprove vouchers, track status changes and manage team actions securely.",
  },
  {
    icon: FiClock,
    tag: "Built-In Version Tracking",
    title: "Document Version Management",
    desc: "Access, track and manage historical document revisions. Track history, view differences and ensure everyone works on the correct file.",
  },
];

const useCases = [
  {
    title: "The Vendor Payment Delay Problem",
    problem: "Bills delayed, vendors unpaid, market trust affected.",
    quote: "Approvals took forever, and goods got delayed.",
    story: "Bills sat in queues waiting for signatures, and manual chasing hurt the company's reputation. With Auggit, documents are available at the click of a button, even on mobile, and approvals happen instantly.",
    solution: ["Mobile document access", "One-click approvals", "Faster vendor payments"],
  },
  {
    title: "The CFO's Missing Invoice Puzzle",
    problem: "Couldn't track purchase-related documents.",
    quote: "Advance paid, invoice never came. No idea how many missing.",
    story: "PO, invoice, GRN, quality certificate and delivery challan were scattered across departments. Auggit centralized them into one searchable system so the CFO could track everything in real time.",
    solution: ["All documents centralized", "Instant search & tracking", "No more missing bills"],
  },
  {
    title: "The SAP License Burden",
    problem: "Costly SAP access, scattered internal documents.",
    quote: "Non-SAP users had no access. External docs had no place.",
    story: "Giving employees document access meant buying expensive SAP licenses. Auggit let staff view documents across departments without full SAP licenses, stored vendor documents SAP couldn't, and connected all locations via API.",
    solution: ["Access without extra SAP licenses", "Vendor doc storage", "Cross-department API sync"],
  },
  {
    title: "SuryaDev Steel: The Document Chaos Story",
    problem: "Bills traveled 80 km daily, and audit preparation caused panic.",
    quote: "Two staff paid ₹15,000/month just to carry bills 80 km to HO, yet docs went missing.",
    story: "Sales bills were created at a factory 80 km from the Chennai head office. With Auggit's tagging, documents are available digitally in real time, named automatically, integrated with Tally, and auditors log in remotely.",
    solution: ["Real-time digital access", "Tally integration & auto-naming", "Instant, secure remote audit access"],
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
            {item.heading && <h4 className="text-sm font-bold text-[#062039]">{item.heading}</h4>}
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
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=75&fm=webp"
                alt="Document Management Dashboard"
                width={800}
                height={500}
                loading="lazy"
                decoding="async"
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

      {/* ========== EDITIONS ========== */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
            Our Products
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            New-gen data & document management{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              delivering business efficiency
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {editions.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {impactStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl px-4 py-5 text-center border border-[#e3e3e3] shadow-sm"
            >
              <div className="text-3xl font-extrabold text-[#41a0c8]">{stat.value}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#062039]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== KEY FEATURES ========== */}
      <section id="key-features" className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
            Key Features
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            Define transactions with tags to{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              find missing docs
            </span>
          </h2>
          <p className="mt-3 text-[#353535] text-base">
            Define process transactions and set up tags as per business requirements for seamless document tracking, detailed audit reporting and operational efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyFeatures.map((f, index) => (
            <RoleCard
              key={index}
              role={{ icon: f.icon, title: f.title, subtitle: f.tag, items: [{ heading: "", desc: f.desc }] }}
              index={index}
            />
          ))}
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

      {/* ========== USE CASES ========== */}
      <section id="use-cases" className="px-6 py-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.25em] uppercase text-[#1267a7] bg-[#9eddf7]/30 rounded-full border border-[#41a0c8]/30">
            Case Studies
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#062039]">
            Real problems,{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              solved with eDMS
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc, index) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#e3e3e3] shadow-sm hover:shadow-lg hover:border-[#41a0c8] transition-all duration-300"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">Use Case {index + 1}</p>
              <h3 className="mt-1 text-lg font-bold text-[#062039]">{uc.title}</h3>
              <p className="mt-3 text-sm text-[#353535] leading-relaxed">
                <span className="font-bold text-[#062039]">Problem: </span>
                {uc.problem}
              </p>
              <blockquote className="mt-3 pl-3 border-l-2 border-[#f7c037] text-sm italic text-[#353535]">
                "{uc.quote}"
              </blockquote>
              <p className="mt-3 text-sm text-[#353535] leading-relaxed">{uc.story}</p>
              <ul className="mt-4 space-y-1.5">
                {uc.solution.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm font-medium text-[#062039]">
                    <FiCheckCircle className="w-4 h-4 text-[#5e8b22] shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
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
              href="/product/automation-suite/edms-demo"
              className="px-8 py-3.5 rounded-full bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer hover:scale-105"
            >
              <span>Request a Live Demo</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#062039]" />
            </a>
            <a
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white hover:bg-[#f1f2f2] text-[#062039] font-bold text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer hover:scale-105"
            >
              <span>Talk to our team</span>
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#41a0c8]" />
            </a>
            <a
              href="/faq"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all flex items-center gap-2"
            >
              <span>View eDMS FAQs</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
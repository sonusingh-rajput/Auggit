import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FiUsers,
  FiFileText,
  FiCheckCircle,
  FiArrowRight,
  FiShield,
  FiMail,
  FiSearch,
  FiSliders,
  FiLayers,
  FiActivity,
  FiDatabase,
  FiZap,
  FiLock,
  FiCheck,
  FiTrendingUp,
  FiChevronDown,
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export function meta() {
  return [
    { title: "Vendor Onboarding Platform | AUGGIT" },
    {
      name: "description",
      content:
        "AUGGIT Vendor Onboarding Platform streamlines supplier registration, document capture, statutory verification, approval and SAP vendor master creation.",
    },
  ];
}

/* ─────────────────────────────────────────────────────────────
    ANIMATED VENDOR ONBOARDING WORKFLOW COMPONENT
    Clean, smooth vector animation with generous icon spacing,
    decreased typography size, and continuous orbit motion.
   ───────────────────────────────────────────────────────────── */
function AnimatedVendorProcess() {
  return (
    <div className="w-full relative select-none">
      <svg
        viewBox="0 0 680 480"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="vpCardBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fbff" />
            <stop offset="100%" stopColor="#ebf4fc" />
          </linearGradient>
          <linearGradient id="vpCenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f0f7fd" />
          </linearGradient>
          <linearGradient id="vpSapGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#085493" />
            <stop offset="100%" stopColor="#0a7cb5" />
          </linearGradient>
          <filter id="vpGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#08264b" floodOpacity="0.08" />
          </filter>
          <filter id="vpSoftShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#08264b" floodOpacity="0.06" />
          </filter>
        </defs>

        {/* Outer Container Card */}
        <rect
          x="6"
          y="6"
          width="668"
          height="468"
          rx="28"
          fill="url(#vpCardBg)"
          stroke="#b8d5ee"
          strokeWidth="2"
        />

        {/* ── LEFT: 4 DOCUMENT STACK CARDS (PAN, GST, MSME, BANK) ── */}
        {[
          { label: "PAN", y: 110, icon: "file" },
          { label: "GST", y: 168, icon: "tax" },
          { label: "MSME", y: 226, icon: "building" },
          { label: "BANK", y: 284, icon: "bank" },
        ].map((doc, idx) => (
          <motion.g
            key={doc.label}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            {/* Card Background */}
            <rect
              x="28"
              y={doc.y}
              width="132"
              height="44"
              rx="12"
              fill="#ffffff"
              stroke="#dce8f5"
              strokeWidth="1.5"
              filter="url(#vpSoftShadow)"
            />

            {/* Icon Box */}
            <rect x="36" y={doc.y + 8} width="28" height="28" rx="7" fill="#f0f7fd" />
            {doc.icon === "file" && (
              <path
                d={`M46 ${doc.y + 16} h8 M46 ${doc.y + 21} h6 M46 ${doc.y + 26} h4`}
                stroke="#1267a7"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
            {doc.icon === "tax" && (
              <path
                d={`M45 ${doc.y + 16} h10 v12 h-10 Z M48 ${doc.y + 20} h4 M48 ${doc.y + 24} h4`}
                stroke="#1267a7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
            {doc.icon === "building" && (
              <path
                d={`M44 ${doc.y + 28} L44 ${doc.y + 21} L50 ${doc.y + 16} L56 ${doc.y + 21} L56 ${doc.y + 28} Z M48 ${doc.y + 28} v-5 h4 v5`}
                stroke="#1267a7"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
            )}
            {doc.icon === "bank" && (
              <path
                d={`M44 ${doc.y + 27} h12 M46 ${doc.y + 27} v-6 M50 ${doc.y + 27} v-6 M54 ${doc.y + 27} v-6 M43 ${doc.y + 20} L50 ${doc.y + 15} L57 ${doc.y + 20} Z`}
                stroke="#1267a7"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}

            {/* Label */}
            <text
              x="74"
              y={doc.y + 27}
              fontSize="13"
              fontWeight="800"
              fill="#062039"
              letterSpacing="0.5px"
            >
              {doc.label}
            </text>

            {/* Green Verified Circle Check */}
            <circle cx="144" cy={doc.y + 22} r="8" fill="#10b981" />
            <path
              d={`M141.5 ${doc.y + 22} L143.5 ${doc.y + 24} L147 ${doc.y + 19.5}`}
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        ))}

        {/* Animated Connector Arrow: Docs to Orbit */}
        <motion.g
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M172 248 L208 248 M201 241 L208 248 L201 255"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* ── CENTER ROTATING ORBIT ── */}
        <g transform="translate(356, 240)">
          {/* Dashed outer orbit ring with continuous smooth rotation */}
          <motion.circle
            cx="0"
            cy="0"
            r="140"
            fill="none"
            stroke="#41a0c8"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeOpacity="0.45"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
          />

          {/* Smooth directional curved flow arrows (Clockwise) */}
          <path
            d="M-40 -134 A140 140 0 0 1 80 -115"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M74 -124 L82 -114 L71 -110"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          <path
            d="M136 -30 A140 140 0 0 1 95 102"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M103 94 L94 103 L89 91"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          <path
            d="M-20 138 A140 140 0 0 1 -134 40"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M-127 49 L-135 39 L-138 52"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Animated flowing energy particle traveling along orbit */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          >
            <circle cx="0" cy="-140" r="4.5" fill="#f7c037" />
            <circle cx="0" cy="-140" r="8" fill="#f7c037" opacity="0.3" />
          </motion.g>

          {/* ── CORE CENTRAL CIRCLE ── */}
          <circle
            cx="0"
            cy="0"
            r="88"
            fill="url(#vpCenterGrad)"
            stroke="#bad7f2"
            strokeWidth="3"
            filter="url(#vpGlow)"
          />

          {/* Human Icon (Left) with clean separation */}
          <g transform="translate(-24, -34)">
            <circle cx="0" cy="-10" r="9" stroke="#1267a7" strokeWidth="2.5" fill="#f0f7fc" />
            <path
              d="M-14 14 C-14 4 -6 0 0 0 C6 0 14 4 14 14"
              stroke="#1267a7"
              strokeWidth="2.5"
              fill="#e4f1fb"
              strokeLinecap="round"
            />
          </g>

          {/* Product / 3D Package Box Icon (Right) - spacious breathing room */}
          <g transform="translate(24, -34)">
            <path
              d="M0 -14 L14 -6 L0 2 L-14 -6 Z"
              fill="#e6f4fc"
              stroke="#1267a7"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M-14 -6 L0 2 L0 16 L-14 8 Z"
              fill="#cde9f8"
              stroke="#1267a7"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M0 2 L14 -6 L14 8 L0 16 Z"
              fill="#9fd2f3"
              stroke="#1267a7"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M0 2 L0 16" stroke="#1267a7" strokeWidth="2" />
          </g>

          {/* Decreased font size for 'Vendor Onboarding Portal' */}
          <text
            x="0"
            y="18"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill="#062039"
            letterSpacing="-0.2px"
          >
            Vendor Onboarding
          </text>
          <text
            x="0"
            y="35"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#1267a7"
            letterSpacing="0.4px"
          >
            Portal
          </text>

          {/* ── 4 SATELLITE NODES ── */}
          {/* Node 1: Top (Invite & Register) */}
          <g transform="translate(0, -140)">
            <circle cx="0" cy="0" r="28" fill="#ffffff" stroke="#41a0c8" strokeWidth="2.5" filter="url(#vpSoftShadow)" />
            <path d="M-7 -8 h10 l4 4 v12 h-14 Z" stroke="#1267a7" strokeWidth="2" fill="#f0f8fd" />
            <circle cx="4" cy="5" r="5" fill="#41a0c8" />
            <path d="M2 5 h4 M4 3 v4" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
            <text x="0" y="44" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#062039">
              Invite & Register
            </text>
          </g>

          {/* Node 2: Right (Collect Documents) */}
          <g transform="translate(140, 0)">
            <circle cx="0" cy="0" r="28" fill="#ffffff" stroke="#41a0c8" strokeWidth="2.5" filter="url(#vpSoftShadow)" />
            <path d="M-8 -10 h12 l4 4 v16 h-16 Z" stroke="#1267a7" strokeWidth="2" fill="#f0f8fd" />
            <path d="M-4 -2 h8 M-4 3 h8 M-4 8 h5" stroke="#1267a7" strokeWidth="1.8" strokeLinecap="round" />
            <text x="0" y="44" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#062039">
              Collect Documents
            </text>
          </g>

          {/* Node 3: Bottom-Right (Verify & Approve) */}
          <g transform="translate(98, 100)">
            <circle cx="0" cy="0" r="28" fill="#ffffff" stroke="#1267a7" strokeWidth="2.5" filter="url(#vpSoftShadow)" />
            <path
              d="M0 -11 L10 -6 C10 4 5 11 0 13 C-5 11 -10 4 -10 -6 Z"
              stroke="#1267a7"
              strokeWidth="2"
              fill="#f0fdf4"
            />
            <path
              d="M-4 0 L-1 3 L5 -3"
              stroke="#10b981"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text x="8" y="44" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#062039">
              Verify & Approve
            </text>
          </g>

          {/* Node 4: Bottom (User Approved) */}
          <g transform="translate(0, 140)">
            <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#10b981" strokeWidth="2.5" filter="url(#vpSoftShadow)" />
            <circle cx="0" cy="-6" r="6" stroke="#1267a7" strokeWidth="2" fill="#f0f8fd" />
            <path d="M-9 9 C-9 3 -4 0 0 0 C4 0 9 3 9 9" stroke="#1267a7" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M4 3 L7 6 L12 0" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>

        {/* ── RIGHT: OUTPUT TO SAP MASTER ── */}
        <motion.g
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <path
            d="M528 240 L558 240 M551 233 L558 240 L551 247"
            stroke="#1267a7"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* SAP Master Card */}
        <g transform="translate(566, 204)">
          <rect
            x="0"
            y="0"
            width="88"
            height="72"
            rx="14"
            fill="#ffffff"
            stroke="#d8e7f5"
            strokeWidth="1.5"
            filter="url(#vpSoftShadow)"
          />
          <rect x="8" y="10" width="72" height="26" rx="5" fill="url(#vpSapGrad)" />
          <text x="44" y="28" textAnchor="middle" fontSize="13" fontWeight="900" fill="#ffffff" letterSpacing="1px">
            SAP
          </text>

          <circle cx="44" cy="50" r="8" fill="#10b981" />
          <path d="M41.5 50 L43.5 52 L47 47.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

          <text x="44" y="88" textAnchor="middle" fontSize="11" fontWeight="800" fill="#062039">
            SAP Master
          </text>
        </g>
      </svg>
    </div>
  );
}

export default function VendorOnboardingPage() {
  return (
    <div className="relative min-h-screen bg-white text-[#17233d] selection:bg-[#41a0c8] selection:text-white overflow-hidden">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
          ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-[#06172f] via-[#0a3159] to-[#087ca7] text-white pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
        {/* Subtle geometric circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5 bg-radial from-[#41a0c8]/25 via-transparent to-transparent blur-3xl" />
          <div className="absolute bottom-[-150px] left-[-100px] w-[500px] h-[500px] rounded-full border border-white/5 bg-radial from-[#1267a7]/25 via-transparent to-transparent blur-2xl" />
          <div className="absolute right-[-170px] bottom-[-340px] w-[560px] h-[560px] rounded-full border border-white/10 shadow-[0_0_0_45px_rgba(255,255,255,0.03),0_0_0_90px_rgba(255,255,255,0.02)] pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#9eddf7] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span>ENTERPRISE AUTOMATION SUITE</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.06]">
                Vendor Onboarding{" "}
                <span className="bg-gradient-to-r from-[#41a0c8] via-[#9eddf7] to-[#10b981] bg-clip-text text-transparent">
                  Platform
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl leading-relaxed">
                Transform supplier onboarding from a manual, document-heavy process into a guided
                self-service workflow with statutory verification, organized records and direct
                SAP vendor master integration.
              </p>

              {/* Actions: Primary Sapphire Blue for Explore + Yellow for Request Demo */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("workflow");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-7 py-3.5 rounded-xl bg-[#1267a7] hover:bg-[#0e5488] text-white font-bold text-sm border border-sky-400/30 transition-all flex items-center gap-2 cursor-pointer shadow-lg shadow-[#1267a7]/30 hover:scale-105 active:scale-95"
                >
                  <span>Explore the Process</span>
                  <FiChevronDown className="w-4 h-4 text-[#9eddf7]" />
                </button>
                <Link
                  to="/product/automation-suite/edms-demo"
                  className="px-7 py-3.5 rounded-xl bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-bold text-sm shadow-[0_8px_24px_rgba(247,192,55,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Request a Demo</span>
                  <FiArrowRight className="w-4 h-4 text-[#062039]" />
                </Link>
              </div>

              <div className="pt-2 text-xs font-semibold text-slate-300">
                From vendor invitation and document collection to verification, approval and SAP creation.
              </div>
            </motion.div>

            {/* Right Hero Visual Infographic Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-6 flex items-center justify-center"
            >
              <div className="relative group rounded-3xl p-1 sm:p-2 bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] overflow-hidden max-w-lg lg:max-w-xl w-full">
                <AnimatedVendorProcess />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. WORKFLOW (FROM INVITATION TO SAP VENDOR CREATION)
          ───────────────────────────────────────────────────────────── */}
      <section id="workflow" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiLayers className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>How It Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              From vendor invitation to SAP vendor creation
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              A guided process gives vendors a clear registration journey and gives internal teams
              a structured way to capture, organize, verify and approve vendor information.
            </p>
          </motion.div>

          {/* 5 Step Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {[
              {
                step: "01",
                title: "Invite the vendor",
                desc: "Send an email invitation with a secure link to access the vendor registration portal.",
                icon: FiMail,
              },
              {
                step: "02",
                title: "Register & submit",
                desc: "The vendor completes the registration form and submits company, legal, tax and banking information with supporting documents.",
                icon: FiFileText,
              },
              {
                step: "03",
                title: "Capture & organize",
                desc: "Capture documents through the portal or email ingestion and organize them in AUGGIT eDMS using tag-based storage.",
                icon: FiLayers,
              },
              {
                step: "04",
                title: "Verify & approve",
                desc: "Run applicable GST, PAN, Aadhaar and other checks. AI-enabled capture extracts details for internal review and approval.",
                icon: FiCheckCircle,
              },
              {
                step: "05",
                title: "Create vendor in SAP",
                desc: "After approval, create the vendor master in the connected SAP environment to complete onboarding.",
                icon: SiSap,
              },
            ].map((st, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#1267a7] to-[#41a0c8] text-white flex items-center justify-center font-black text-xs shadow-2xs">
                      {st.step}
                    </span>
                    <st.icon className="w-5 h-5 text-[#41a0c8] group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-[#062039] mb-2 leading-snug">
                    {st.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SAP Connected Strip */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 border border-emerald-200 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-10 rounded-xl bg-[#087db6] text-white flex items-center justify-center font-black text-sm shrink-0 shadow-sm">
              SAP
            </div>
            <div className="text-center sm:text-left">
              <b className="text-sm sm:text-base text-[#0c695e] block">
                Connected to your SAP vendor master process
              </b>
              <span className="text-xs sm:text-sm text-slate-600 block mt-0.5">
                Supports SAP ECC vendor creation and SAP S/4HANA Business Partner workflows, based on the configured integration.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. PORTAL CAPABILITIES (9 GRID ITEMS)
          ───────────────────────────────────────────────────────────── */}
      <section id="capabilities" className="scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiZap className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Portal Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Everything needed to manage vendor onboarding
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              A practical set of capabilities to simplify registration for vendors and make review
              more organized for procurement, finance and compliance teams.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Vendor invitation management",
                desc: "Invite vendors by email and guide them to the portal to begin registration. Track invitation and registration progress.",
                icon: FiMail,
              },
              {
                title: "Structured registration forms",
                desc: "Capture company profile, organization type, legal and tax identifiers, contact information and banking details in a consistent format.",
                icon: FiFileText,
              },
              {
                title: "Document upload & organization",
                desc: "Collect supporting documents through the portal or email ingestion and organize records in AUGGIT eDMS using tags.",
                icon: FiLayers,
              },
              {
                title: "Verification checkpoints",
                desc: "Support applicable GST, PAN, Aadhaar and other statutory checks as part of the verification and approval process.",
                icon: FiCheckCircle,
              },
              {
                title: "AI-enabled data capture",
                desc: "Extract required vendor details from submitted documents to support internal review and approval.",
                icon: FiSearch,
              },
              {
                title: "Review & decision controls",
                desc: "Authorized users can review vendor details and choose to reject, update or approve records.",
                icon: FiSliders,
              },
              {
                title: "Document and status visibility",
                desc: "View legal, tax and banking information with completion indicators to identify pending items.",
                icon: FiActivity,
              },
              {
                title: "Registration reference",
                desc: "Provide a registration-success message and reference number so vendors can identify their submission.",
                icon: FiLock,
              },
              {
                title: "SAP vendor master creation",
                desc: "Connect approved vendor information with SAP to reduce duplicate data handling between onboarding and ERP.",
                icon: SiSap,
              },
            ].map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#1267a7] border border-sky-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#062039] mb-2">{cap.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. VENDOR DOCUMENT CHECKLIST (4 CATEGORIES)
          ───────────────────────────────────────────────────────────── */}
      <section id="documents" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiFileText className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Vendor Document Checklist</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Collect the right information from the beginning
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Configure the onboarding checklist around your organization’s vendor policy,
              business type and applicable statutory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Tax & Statutory",
                items: ["PAN Card", "GST Registration", "Udyam / MSME Certificate", "CIN (Where Applicable)", "Aadhaar (Where Applicable)"],
              },
              {
                title: "Banking Documents",
                items: ["Bank Account Details", "IFSC Code", "Account Holder Name", "Cancelled Cheque Copy", "Bank Verification Proof"],
              },
              {
                title: "Incorporation Documents",
                items: ["Certificate of Incorporation", "Partnership Deed", "Constitution Proof", "Company Registration Details"],
              },
              {
                title: "Certifications & Licences",
                items: ["Applicable Business Licences", "ISO / Quality Certifications", "Statutory Declarations", "Industry-Specific Compliance Docs"],
              },
            ].map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#062039] mb-4 pb-3 border-b border-slate-100">
                    {cat.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                        <span className="text-[#10b981] font-black shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-8">
            The exact checklist can vary by vendor category, organization type, industry and internal compliance policy.
            Personal information should be requested only where legally appropriate and necessary.
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. INTERNAL REVIEW & CONTROL (SCREENSHOT-MATCHED PANEL)
          ───────────────────────────────────────────────────────────── */}
      <section className="scroll-mt-24 py-20 sm:py-28 bg-[#061e3c] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#63d9e8] text-xs font-bold uppercase tracking-widest shadow-sm">
                <span>INTERNAL REVIEW & CONTROL</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Give approvers a clear view of every vendor record.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Once the vendor submits information, internal teams can review the captured details,
                check document status and take the next action within the portal.
              </p>
            </motion.div>

            {/* Right Review Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white text-[#17233d] p-6 sm:p-8 rounded-[28px] shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <b className="text-sm font-bold text-[#062039]">Vendor details · Review panel</b>
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                  PENDING REVIEW
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50">
                  <span className="text-[10px] text-slate-500 font-semibold block">Company registration number (CIN)</span>
                  <strong className="text-xs font-bold text-[#062039] block mt-1">U12345MH2024PTC000001　✓</strong>
                </div>
                <div className="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50">
                  <span className="text-[10px] text-slate-500 font-semibold block">PAN number</span>
                  <strong className="text-xs font-bold text-[#062039] block mt-1">AAAPA1234A　✓</strong>
                </div>
                <div className="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50">
                  <span className="text-[10px] text-slate-500 font-semibold block">GST number</span>
                  <strong className="text-xs font-bold text-[#062039] block mt-1">27AAAPA1234A1Z1　✓</strong>
                </div>
                <div className="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50">
                  <span className="text-[10px] text-slate-500 font-semibold block">MSME certificate</span>
                  <strong className="text-xs font-bold text-[#062039] block mt-1">Submitted　✓</strong>
                </div>
                <div className="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50">
                  <span className="text-[10px] text-slate-500 font-semibold block">Bank account holder</span>
                  <strong className="text-xs font-bold text-[#062039] block mt-1">ABC Components Pvt. Ltd.</strong>
                </div>
                <div className="p-3 rounded-xl border border-slate-200/90 bg-slate-50/50">
                  <span className="text-[10px] text-slate-500 font-semibold block">IFSC code</span>
                  <strong className="text-xs font-bold text-[#062039] block mt-1">ABCD0001234</strong>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <span className="px-4 py-2 rounded-lg bg-red-50 text-red-600 font-bold text-xs cursor-pointer hover:bg-red-100 transition-colors">
                  Reject
                </span>
                <span className="px-4 py-2 rounded-lg bg-sky-50 text-[#1267a7] font-bold text-xs cursor-pointer hover:bg-sky-100 transition-colors">
                  Update
                </span>
                <span className="px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs cursor-pointer hover:bg-emerald-100 transition-colors">
                  Approve
                </span>
              </div>

              <p className="text-[10px] text-slate-400 italic text-center sm:text-left">
                Illustrative screen for explanation only. Sample data is not a real vendor record.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. MEASURABLE BUSINESS IMPACT - 4-CARD DESIGN MATCHING IMAGE
          ───────────────────────────────────────────────────────────── */}
      <section id="impact" className="scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f1f2f2] border border-[#e3e3e3] text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-2xs mb-4">
              <FiCheckCircle className="w-3.5 h-3.5 text-[#f7c037]" />
              <span>Proven Business Value</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#062039] tracking-tight">
              Measurable Impact on Procurement & Finance
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Move toward faster supplier registration, clearer process visibility and cleaner vendor master data through a connected onboarding workflow.
            </p>
          </motion.div>

          {/* 4 Cards matching the exact uploaded image UI style */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Card 1: Multiservice Radar Style (Fast Vendor Registration) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              {/* Top Visual Box */}
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-4 relative overflow-hidden flex items-center justify-center">
                <div className="absolute w-80 h-80 rounded-full border border-sky-200/50 pointer-events-none" />
                <div className="absolute w-60 h-60 rounded-full border border-sky-200/70 pointer-events-none" />
                <div className="absolute w-40 h-40 rounded-full border border-sky-300/60 pointer-events-none" />

                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 left-10 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-[#1267a7]"
                >
                  <FiUsers className="w-3.5 h-3.5 text-sky-500" />
                  <span>GST Check</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="absolute top-5 right-10 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-emerald-600"
                >
                  <FiFileText className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Bank KYC</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, -4, 0] }}
                  transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                  className="absolute bottom-6 left-8 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-amber-600"
                >
                  <FiShield className="w-3.5 h-3.5 text-amber-500" />
                  <span>MSME Reg</span>
                </motion.div>

                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  className="absolute bottom-6 right-8 px-3 py-1.5 rounded-xl bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-1.5 text-xs font-black text-indigo-600"
                >
                  <SiSap className="w-3.5 h-3.5 text-indigo-500" />
                  <span>SAP BAPI</span>
                </motion.div>

                <div className="relative z-10 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#062039] via-[#1267a7] to-[#41a0c8] text-white font-bold text-xs shadow-xl flex items-center gap-2.5 group-hover:scale-105 transition-transform">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="tracking-wide">Onboarding Hub</span>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">3× Faster Execution</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Reduce vendor turnaround cycle from weeks to hours with automated self-serve portals and validation.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Minimalist Metrics Line Chart Style (Process Visibility) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                      Active Onboarding
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <b className="text-2xl font-black text-[#062039]">100%</b>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                        Visibility
                      </span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded-full bg-white text-[10px] font-bold text-slate-500 shadow-2xs border border-slate-100">
                    Real Time
                  </div>
                </div>

                <div className="relative h-24 w-full flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 320 80">
                    <defs>
                      <linearGradient id="vendorChartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#41a0c8" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#41a0c8" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0,65 Q 60,70 120,40 T 220,25 T 320,8 L 320,80 L 0,80 Z"
                      fill="url(#vendorChartGradient)"
                    />
                    <path
                      d="M 0,65 Q 60,70 120,40 T 220,25 T 320,8"
                      fill="none"
                      stroke="#41a0c8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="220" cy="25" r="5" fill="#1267a7" stroke="#ffffff" strokeWidth="2.5" />
                  </svg>

                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute right-6 top-0 bg-white rounded-xl p-3 shadow-lg border border-slate-100 text-xs"
                  >
                    <div className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">Document Accuracy</div>
                    <b className="text-[#062039] font-black text-sm block mt-0.5">99.8% Clean Records</b>
                  </motion.div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">100% Process Visibility</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Clear view into legal, tax and banking information with real-time status indicators.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Ranking Bar Chart Style (0 Duplicate Data Entry) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex items-end justify-center">
                <div className="flex items-end gap-3.5 pb-2">
                  <div className="w-9 h-16 rounded-t-xl bg-slate-200/80" />
                  <div className="w-9 h-24 rounded-t-xl bg-slate-300/80" />

                  <div className="relative flex flex-col items-center">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="px-2.5 py-1 rounded-full bg-white shadow-md border border-slate-100 text-[10px] font-black text-[#1267a7] mb-2"
                    >
                      Zero Errors
                    </motion.div>
                    <div className="w-11 h-36 rounded-t-2xl bg-gradient-to-t from-[#1267a7] via-[#41a0c8] to-[#9eddf7] shadow-md" />
                  </div>

                  <div className="w-9 h-20 rounded-t-xl bg-slate-300/80" />
                  <div className="w-9 h-14 rounded-t-xl bg-slate-200/80" />
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">0 Duplicate Data Entry</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Eliminate re-keying between registration emails, Excel trackers and ERP screens.
                </p>
              </div>
            </motion.div>

            {/* Card 4: UI Connected Container Nodes (Direct SAP Integration) */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-[32px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_12px_40px_rgba(6,32,57,0.06)] hover:shadow-[0_20px_50px_rgba(6,32,57,0.12)] transition-all flex flex-col group"
            >
              <div className="h-60 sm:h-64 rounded-2xl bg-gradient-to-b from-[#f8fafc] via-[#f1f6fb] to-[#e4eef8] border border-slate-100 p-5 relative overflow-hidden flex flex-col justify-center items-center">
                <div className="w-full max-w-xs space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                    <span className="flex items-center gap-2">
                      <FiUsers className="w-4 h-4 text-[#41a0c8]" />
                      Vendor Registration
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold">Approved</span>
                  </div>

                  <div className="w-0.5 h-3 bg-sky-300 mx-auto" />

                  <div className="p-2.5 rounded-xl bg-gradient-to-r from-[#1267a7] to-[#062039] text-white shadow-lg flex items-center justify-between text-xs font-bold">
                    <span className="flex items-center gap-2">
                      <SiSap className="w-4 h-4 text-[#9eddf7]" />
                      SAP Vendor Master Creation
                    </span>
                    <span className="text-[10px] text-[#f7c037]">BAPI Synced</span>
                  </div>

                  <div className="w-0.5 h-3 bg-sky-300 mx-auto" />

                  <div className="p-2.5 rounded-xl bg-white shadow-md border border-slate-200 flex items-center justify-between text-xs font-bold text-[#062039]">
                    <span className="flex items-center gap-2">
                      <FiFileText className="w-4 h-4 text-[#10b981]" />
                      AUGGIT eDMS Vault
                    </span>
                    <span className="text-[10px] text-slate-400">KYC Archived</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-[#062039] tracking-tight">Direct SAP Integration</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  Support SAP ECC vendor creation and SAP S/4HANA Business Partner workflows without human latency.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. INDUSTRY APPLICATIONS
          ───────────────────────────────────────────────────────────── */}
      <section id="industries" className="scroll-mt-24 py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-14 rounded-[32px] bg-gradient-to-br from-[#0a2d4d] via-[#0e3f69] to-[#126ca8] text-white shadow-2xl relative overflow-hidden">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#f7c037] text-xs font-bold uppercase tracking-widest shadow-sm mb-4">
                <span>TAILORED FOR ENTERPRISE VERTICALS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Trusted Across High-Volume Supply Chains
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Manufacturing",
                  desc: "Automate onboarding for 5,000+ raw material & spare part vendors.",
                },
                {
                  title: "Retail & FMCG",
                  desc: "Fast-track FMCG supplier cataloging and vendor compliance.",
                },
                {
                  title: "Pharmaceuticals",
                  desc: "Strict GMP and US-FDA vendor qualification document validation.",
                },
                {
                  title: "Automotive",
                  desc: "Tier-1 & Tier-2 parts vendor KYC, ISO audit tracking, and NDA signing.",
                },
              ].map((ind, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs hover:bg-white/15 transition-all"
                >
                  <h3 className="text-lg font-bold text-white mb-2">{ind.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. FINAL CTA BANNER (DARK NAVY LIKE AUGGIT AUTOMATION SUITE)
          ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 sm:py-32 bg-[#06172f] relative overflow-hidden text-white">
        {/* Ambient radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(18,103,167,0.25),transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Top Badge: AUGGIT AUTOMATION SUITE */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0b2440]/80 border border-[#f7c037]/50 text-[#f7c037] text-xs font-bold uppercase tracking-widest shadow-lg backdrop-blur-md">
              <span>AUGGIT AUTOMATION SUITE</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight sm:leading-tight max-w-4xl mx-auto">
              Ready to Automate Your Supplier Onboarding?
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              See how AUGGIT can support vendor invitation, document collection, verification, and SAP vendor master creation with zero paperwork and complete traceability.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 sm:pt-6">
              <Link
                to="/product/automation-suite/book-poc"
                className="px-8 py-4 rounded-full bg-[#f7c037] hover:bg-[#eab327] text-[#062039] font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                <span>REQUEST A DEMO</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 rounded-full bg-[#132c4a]/90 hover:bg-[#1a3a61] text-white border border-slate-600/50 font-semibold text-xs transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>Contact Our Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

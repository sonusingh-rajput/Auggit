import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import {
  HiHome,
  HiCube,
  HiDocumentText,
  HiChevronDown,
  HiMenu,
  HiX,
  HiUserGroup,
} from "react-icons/hi";
import {
  FiArrowRight,
  FiFileText,
  FiLayers,
  FiCpu,
  FiUserCheck,
  FiSliders,
  FiTruck,
  FiZap,
  FiCalendar,
  FiCheckCircle,
  FiInfo,
  FiAward,
} from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";
import { SiSap } from "react-icons/si";

// Colorful brand modules for Automation Suite
const automationModules = [
  {
    href: "/product/automation-suite/edms-demo",
    icon: FiCalendar,
    label: "EDMS - Request a Demo",
    color: "bg-sky-50 text-[#41a0c8] border-sky-200/70 group-hover/mod:bg-[#41a0c8] group-hover/mod:text-white",
  },
  {
    href: "/product/automation-suite/vendor-onboarding",
    icon: FiUserCheck,
    label: "Vendor Onboarding Tool",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200/70 group-hover/mod:bg-emerald-600 group-hover/mod:text-white",
  },
  {
    href: "/product/automation-suite/ap-automation",
    icon: FiCpu,
    label: "AP Automation (MIRO-MIGO)",
    color: "bg-amber-50 text-[#d97706] border-amber-200/70 group-hover/mod:bg-[#f7c037] group-hover/mod:text-[#062039]",
  },
  {
    href: "/product/automation-suite/gate-pass",
    icon: FiTruck,
    label: "Gate Pass Management",
    color: "bg-blue-50 text-[#1267a7] border-blue-200/70 group-hover/mod:bg-[#1267a7] group-hover/mod:text-white",
  },
  {
    href: "/product/automation-suite/weighbridge",
    icon: FiSliders,
    label: "Weighbridge Integration",
    color: "bg-indigo-50 text-indigo-600 border-indigo-200/70 group-hover/mod:bg-indigo-600 group-hover/mod:text-white",
  },
  {
    href: "/product/automation-suite/automatic-data-entry",
    icon: FiZap,
    label: "Automatic Data Entry",
    color: "bg-cyan-50 text-[#0284c7] border-cyan-200/70 group-hover/mod:bg-[#41a0c8] group-hover/mod:text-white",
  },
];

// Colorful brand items for Resources
const resourceItems = [
  {
    href: "/blog",
    icon: FiFileText,
    label: "Blogs",
    desc: "Insights & industry best practices",
    color: "bg-sky-50 text-[#41a0c8] border-sky-200/70 group-hover:bg-[#41a0c8] group-hover:text-white",
  },
  {
    href: "/faq",
    icon: FiCheckCircle,
    label: "FAQs",
    desc: "Common questions answered",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200/70 group-hover:bg-emerald-600 group-hover:text-white",
  },
  {
    href: "/casestudy",
    icon: FiAward,
    label: "Case Studies",
    desc: "Real-world customer results",
    color: "bg-amber-50 text-[#d97706] border-amber-200/70 group-hover:bg-[#f7c037] group-hover:text-[#062039]",
  },
  {
    href: "/research",
    icon: FiLayers,
    label: "Research Articles",
    desc: "Technical whitepapers & guides",
    color: "bg-blue-50 text-[#1267a7] border-blue-200/70 group-hover:bg-[#1267a7] group-hover:text-white",
  },
];

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [mobileAutomationExpanded, setMobileAutomationExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [automationHovered, setAutomationHovered] = useState(false);

  // Active path matcher
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path.startsWith("/product") || path.startsWith("/book-poc") || path.startsWith("/request-demo")) return "Products";
    if (path.startsWith("/solutions")) return "Industries";
    if (path.startsWith("/about")) return "Company";
    if (path.startsWith("/partner-with-us")) return "Partner";
    if (["/research", "/blog", "/casestudy", "/usecase", "/faq"].some((p) => path.startsWith(p))) return "Resources";
    return "";
  };

  const activeTab = getActiveTab();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setMobileExpandedSection(null);
      setMobileAutomationExpanded(false);
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const toggleMobileSection = (section: string) => {
    setMobileExpandedSection((prev) => (prev === section ? null : section));
  };

  return (
    <header
      className={`w-full flex items-center justify-between px-4 md:px-8 lg:px-10 py-2 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e3e3e3] shadow-[0_4px_24px_rgba(6,32,57,0.06)]"
          : "bg-white/85 backdrop-blur-md border-b border-transparent shadow-[0_2px_12px_rgba(6,32,57,0.03)]"
      }`}
    >
      {/* Brand Logo */}
      <div className="flex items-center">
        <Link
          to="/"
          className="flex flex-col items-center transition-transform hover:scale-[1.02]"
        >
          <img
            src="/Auggit-logo-2.png"
            alt="Auggit Logo"
            width={180}
            height={64}
            fetchPriority="high"
            className="h-14 md:h-16 w-auto object-contain"
          />
          <span className="-mt-1 h-7 w-[180px] overflow-hidden sm:h-8">
            <img
              src="/ribbon.png"
              alt="10 Years of Excellence"
              className="h-full w-full object-cover object-[center_70%]"
            />
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Capsule */}
      <nav className="hidden lg:flex items-center bg-[#f1f2f2]/90 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_20px_rgba(6,32,57,0.04)] border border-[#e3e3e3]">
        <div className="flex items-center relative gap-0.5">
          {/* 1. HOME */}
          <Link
            to="/"
            className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 z-10 ${
              activeTab === "Home" ? "text-[#062039] font-bold" : "text-[#334155] hover:text-[#062039]"
            }`}
          >
            {activeTab === "Home" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <HiHome className={`w-[18px] h-[18px] transition-transform duration-200 group-hover:scale-110 ${activeTab === "Home" ? "text-[#41a0c8]" : "text-[#41a0c8]"}`} />
            <span>Home</span>
          </Link>

          {/* 2. PRODUCTS (MEGA DROPDOWN) */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("Products")}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setAutomationHovered(false);
            }}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "Products" ? null : "Products")}
              className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 z-10 cursor-pointer ${
                activeTab === "Products" ? "text-[#062039] font-bold" : "text-[#334155] hover:text-[#062039]"
              }`}
            >
              {activeTab === "Products" && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <HiCube className={`w-[18px] h-[18px] ${activeTab === "Products" ? "text-[#1267a7]" : "text-[#1267a7]"}`} />
              <span>Products</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Products" ? "rotate-180 text-[#1267a7]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Products Dropdown Panel */}
            <AnimatePresence>
              {activeDropdown === "Products" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full -left-16 mt-3 w-[370px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/90 p-3 z-50"
                >
                  <div className="space-y-2">
                    {/* eDMS */}
                    <Link
                      to="/product/edms"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-2xl bg-slate-50/80 hover:bg-[#9eddf7]/20 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#062039] via-[#0b3b64] to-[#1267a7] text-[#f7c037] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-[#062039]/15">
                        <FiFileText className="w-5 h-5 text-[#f7c037]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[15px] font-bold text-[#062039] group-hover:text-[#1267a7] transition-colors">
                            eDMS
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#41a0c8]/10 text-[#1267a7] border border-[#41a0c8]/20">
                            Platform
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          Enterprise electronic document management and ERP linking.
                        </p>
                      </div>
                    </Link>

                    {/* SLaiCE */}
                    <Link
                      to="/product/slaice"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-2xl bg-slate-50/80 hover:bg-[#9eddf7]/20 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#1267a7] via-[#2185c5] to-[#41a0c8] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-[#41a0c8]/20">
                        <SiSap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-[15px] font-bold text-[#062039] group-hover:text-[#1267a7] transition-colors">
                            SLaiCE
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                            Built on SAP
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          Selective data replication & India daily backup compliance.
                        </p>
                      </div>
                    </Link>
                  </div>

                  {/* Automation Suite */}
                  <div
                    className="relative mt-2"
                    onMouseEnter={() => setAutomationHovered(true)}
                    onMouseLeave={() => setAutomationHovered(false)}
                  >
                    <Link
                      to="/product/automation-suite"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-2xl bg-slate-50/80 hover:bg-[#9eddf7]/20 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3"
                    >
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#062039] to-[#1e4e79] text-[#f7c037] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-[#062039]/15">
                        <FiCpu className="w-5 h-5 text-[#f7c037]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[15px] font-bold text-[#062039] group-hover:text-[#1267a7] transition-colors">
                          Automation Suite
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          End-to-end supply chain and AP automation.
                        </p>
                      </div>
                      <FiArrowRight className="w-4 h-4 mt-1.5 text-slate-400 group-hover:text-[#41a0c8] group-hover:translate-x-0.5 transition-all" />
                    </Link>

                    {/* Automation Suite Modules Flyout */}
                    <AnimatePresence>
                      {automationHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-[calc(100%+12px)] top-0 w-[540px] bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/90 p-4"
                        >
                          <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#1267a7]">
                              Automation Suite Modules
                            </span>
                            <Link
                              to="/product/automation-suite"
                              onClick={() => setActiveDropdown(null)}
                              className="text-xs font-bold text-[#41a0c8] hover:text-[#1267a7] transition-colors"
                            >
                              View Overview →
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {automationModules.map((mod) => (
                              <Link
                                key={mod.href}
                                to={mod.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group/mod p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                              >
                                <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 ${mod.color}`}>
                                  <mod.icon className="w-4 h-4" />
                                </div>
                                <span className="text-[13px] font-semibold text-[#062039] group-hover/mod:text-[#1267a7] transition-colors">
                                  {mod.label}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. INDUSTRIES */}
          <Link
            to="/solutions"
            className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 z-10 ${
              activeTab === "Industries" ? "text-[#062039] font-bold" : "text-[#334155] hover:text-[#062039]"
            }`}
          >
            {activeTab === "Industries" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <FaIndustry className={`w-4 h-4 ${activeTab === "Industries" ? "text-[#10b981]" : "text-[#10b981]"}`} />
            <span>Industries</span>
          </Link>

          {/* 4. ABOUT US */}
          <Link
            to="/about"
            className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 z-10 ${
              activeTab === "Company" ? "text-[#062039] font-bold" : "text-[#334155] hover:text-[#062039]"
            }`}
          >
            {activeTab === "Company" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <FiInfo className={`w-[18px] h-[18px] ${activeTab === "Company" ? "text-[#0284c7]" : "text-[#0284c7]"}`} />
            <span>About Us</span>
          </Link>

          {/* 5. PARTNER WITH US */}
          <Link
            to="/partner-with-us"
            className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 z-10 ${
              activeTab === "Partner" ? "text-[#062039] font-bold" : "text-[#334155] hover:text-[#062039]"
            }`}
          >
            {activeTab === "Partner" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <HiUserGroup className={`w-[18px] h-[18px] ${activeTab === "Partner" ? "text-[#d97706]" : "text-[#d97706]"}`} />
            <span>Partner with Us</span>
          </Link>

          {/* 6. RESOURCES */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("Resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "Resources" ? null : "Resources")}
              className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[13.5px] font-semibold transition-all duration-300 z-10 cursor-pointer ${
                activeTab === "Resources" ? "text-[#062039] font-bold" : "text-[#334155] hover:text-[#062039]"
              }`}
            >
              {activeTab === "Resources" && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <HiDocumentText className={`w-[18px] h-[18px] ${activeTab === "Resources" ? "text-[#2563eb]" : "text-[#2563eb]"}`} />
              <span>Resources</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Resources" ? "rotate-180 text-[#2563eb]" : "text-slate-400"
                }`}
              />
            </button>

            {/* Resources Dropdown Panel */}
            <AnimatePresence>
              {activeDropdown === "Resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 mt-3 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 z-50 space-y-1"
                >
                  {resourceItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="group p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 flex items-center gap-3 transition-all"
                    >
                      <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-200 ${item.color}`}>
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13.5px] font-bold text-[#062039] group-hover:text-[#1267a7] transition-colors">
                          {item.label}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Right Action: Contact */}
      <div className="flex items-center gap-3">
        <Link
          to="/contact"
          className="hidden sm:inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-[0_4px_16px_rgba(65,160,200,0.3)] hover:scale-105"
        >
          <span>Contact Us</span>
          <FiArrowRight className="w-4 h-4" />
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur-md text-[#062039] border border-[#e3e3e3] hover:bg-white transition-colors shadow-sm cursor-pointer"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/98 backdrop-blur-3xl border-b border-[#e3e3e3] shadow-2xl lg:hidden overflow-y-auto max-h-[85vh] z-50"
          >
            <div className="flex flex-col px-5 py-5 space-y-3">
              {/* 1. Mobile Home */}
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Home"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#41a0c8]">
                  <HiHome className="w-5 h-5" />
                </div>
                <span className="text-[15px] font-bold">Home</span>
              </Link>

              {/* 2. Mobile Products (Collapsible Accordion) */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("products")}
                  className="flex items-center justify-between w-full p-3 text-left font-bold text-[15px] text-[#062039] hover:bg-slate-100/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1267a7]">
                      <HiCube className="w-5 h-5" />
                    </div>
                    <span>Products</span>
                  </div>
                  <HiChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileExpandedSection === "products" ? "rotate-180 text-[#1267a7]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileExpandedSection === "products" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-3 pb-3 space-y-2 border-t border-slate-200/60 pt-2"
                    >
                      {/* eDMS */}
                      <Link
                        to="/product/edms"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#41a0c8] flex items-center gap-3 transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#062039] via-[#0b3b64] to-[#1267a7] text-[#f7c037] flex items-center justify-center shrink-0">
                          <FiFileText className="w-4 h-4 text-[#f7c037]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-bold text-[#062039]">eDMS</span>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#41a0c8]/10 text-[#1267a7] border border-[#41a0c8]/20">
                              Platform
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            Enterprise document management & ERP linking
                          </p>
                        </div>
                      </Link>

                      {/* SLaiCE */}
                      <Link
                        to="/product/slaice"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#41a0c8] flex items-center gap-3 transition-all"
                      >
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1267a7] via-[#2185c5] to-[#41a0c8] text-white flex items-center justify-center shrink-0">
                          <SiSap className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[13.5px] font-bold text-[#062039]">SLaiCE</span>
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                              Built on SAP
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 line-clamp-1">
                            Selective SAP replication & Section 128 compliance
                          </p>
                        </div>
                      </Link>

                      {/* Automation Suite & Sub-Modules */}
                      <div className="rounded-xl bg-white border border-slate-200 overflow-hidden">
                        <div className="p-2.5 flex items-center justify-between">
                          <Link
                            to="/product/automation-suite"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 flex-1"
                          >
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#062039] to-[#1e4e79] text-[#f7c037] flex items-center justify-center shrink-0">
                              <FiCpu className="w-4 h-4 text-[#f7c037]" />
                            </div>
                            <div>
                              <span className="text-[13.5px] font-bold text-[#062039] block">
                                Automation Suite
                              </span>
                              <span className="text-xs text-slate-500 block">
                                Supply chain & AP automation
                              </span>
                            </div>
                          </Link>
                          <button
                            type="button"
                            onClick={() => setMobileAutomationExpanded(!mobileAutomationExpanded)}
                            className="p-1.5 text-slate-400 hover:text-[#41a0c8] transition-colors"
                            aria-label="Toggle modules"
                          >
                            <HiChevronDown
                              className={`w-4 h-4 transition-transform duration-200 ${
                                mobileAutomationExpanded ? "rotate-180 text-[#1267a7]" : ""
                              }`}
                            />
                          </button>
                        </div>

                        <AnimatePresence>
                          {mobileAutomationExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="px-2.5 pb-2.5 pt-1 space-y-1.5 border-t border-slate-100 bg-slate-50/70"
                            >
                              {automationModules.map((mod) => (
                                <Link
                                  key={mod.href}
                                  to={mod.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="p-2 rounded-lg hover:bg-white text-xs font-semibold text-[#062039] flex items-center gap-2.5 transition-colors group"
                                >
                                  <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${mod.color}`}>
                                    <mod.icon className="w-3.5 h-3.5" />
                                  </div>
                                  <span className="group-hover:text-[#1267a7] transition-colors">{mod.label}</span>
                                </Link>
                              ))}
                              <Link
                                to="/product/automation-suite"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-xs font-bold text-[#41a0c8] text-right pt-1 pr-1"
                              >
                                View Suite Overview →
                              </Link>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* 3. Mobile Industries */}
              <Link
                to="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Industries"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#10b981]">
                  <FaIndustry className="w-4 h-4" />
                </div>
                <span className="text-[15px] font-bold">Industries</span>
              </Link>

              {/* 4. Mobile About Us */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Company"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284c7]">
                  <FiInfo className="w-5 h-5" />
                </div>
                <span className="text-[15px] font-bold">About Us</span>
              </Link>

              {/* 5. Mobile Partner with Us */}
              <Link
                to="/partner-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Partner"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-[#d97706]">
                  <HiUserGroup className="w-5 h-5" />
                </div>
                <span className="text-[15px] font-bold">Partner with Us</span>
              </Link>

              {/* 6. Mobile Resources */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("resources")}
                  className="flex items-center justify-between w-full p-3 text-left font-bold text-[15px] text-[#062039] hover:bg-slate-100/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb]">
                      <HiDocumentText className="w-5 h-5" />
                    </div>
                    <span>Resources</span>
                  </div>
                  <HiChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileExpandedSection === "resources" ? "rotate-180 text-[#2563eb]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileExpandedSection === "resources" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-3 pb-3 space-y-1.5 border-t border-slate-200/60 pt-2"
                    >
                      {resourceItems.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#41a0c8] text-xs font-bold text-[#062039] transition-all group"
                        >
                          <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${item.color}`}>
                            <item.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-[13px] font-bold group-hover:text-[#1267a7] transition-colors">
                              {item.label}
                            </div>
                            <div className="text-[11px] text-slate-500">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Bottom Action CTA Buttons */}
              <div className="pt-2 space-y-2">
                <Link
                  to="/book-poc"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#f7c037] text-[#062039] py-3 rounded-2xl font-extrabold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Request Demo</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#41a0c8] hover:bg-[#1267a7] text-white py-3 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Contact Us</span>
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

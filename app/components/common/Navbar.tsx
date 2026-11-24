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
      className={`w-full flex items-center justify-between px-4 md:px-10 py-1.5 sticky top-0 z-50 transition-all duration-300 ${
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
      <nav className="hidden lg:flex items-center bg-[#f1f2f2]/85 backdrop-blur-xl px-2.5 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_20px_rgba(6,32,57,0.04)] border border-[#e3e3e3]">
        <div className="flex items-center relative">
          {/* 1. HOME */}
          <Link
            to="/"
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
              activeTab === "Home" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
            }`}
          >
            {activeTab === "Home" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <HiHome className={`w-4 h-4 ${activeTab === "Home" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
            <span>Home</span>
          </Link>

          {/* 2. PRODUCTS (MEGA DROPDOWN) */}
          <div
            className="relative px-1"
            onMouseEnter={() => setActiveDropdown("Products")}
            onMouseLeave={() => {
              setActiveDropdown(null);
              setAutomationHovered(false);
            }}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "Products" ? null : "Products")}
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 cursor-pointer ${
                activeTab === "Products" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
              }`}
            >
              {activeTab === "Products" && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <HiCube className={`w-4 h-4 ${activeTab === "Products" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
              <span>Products</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Products" ? "rotate-180 text-[#41a0c8]" : "text-[#979797]"
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
                  className="absolute top-full -left-20 mt-3 w-[360px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 p-3 z-50"
                >
                  <div className="space-y-2">
                    <Link
                      to="/product/edms"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-[#9eddf7]/15 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#062039] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <FiFileText className="w-5 h-5 text-[#f7c037]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-extrabold text-[#062039] group-hover:text-[#41a0c8] transition-colors">
                            eDMS
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#41a0c8]/10 text-[#41a0c8]">
                            Platform
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          Enterprise electronic document management and ERP linking.
                        </p>
                      </div>
                    </Link>

                    <Link
                      to="/product/slaice"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-[#9eddf7]/15 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#41a0c8] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <SiSap className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-extrabold text-[#062039] group-hover:text-[#41a0c8] transition-colors">
                            SLaiCE
                          </h4>
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                            Built on SAP
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                          Selective data replication & India daily backup compliance.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div
                    className="relative mt-2"
                    onMouseEnter={() => setAutomationHovered(true)}
                    onMouseLeave={() => setAutomationHovered(false)}
                  >
                    <Link
                      to="/product/automation-suite"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3 rounded-2xl bg-slate-50 hover:bg-[#9eddf7]/15 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#062039] text-white flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <FiCpu className="w-5 h-5 text-[#f7c037]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-extrabold text-[#062039] group-hover:text-[#41a0c8] transition-colors">
                          Automation Suite
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          End-to-end supply chain and AP automation.
                        </p>
                      </div>
                      <FiArrowRight className="w-4 h-4 mt-1 text-slate-400" />
                    </Link>

                    <AnimatePresence>
                      {automationHovered && (
                        <motion.div
                          initial={{ opacity: 0, x: 8 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-[calc(100%+12px)] top-0 w-[520px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-4"
                        >
                          <div className="flex items-center justify-between mb-3 px-1">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#41a0c8]">
                              Automation Suite Modules
                            </span>
                            <Link
                              to="/product/automation-suite"
                              onClick={() => setActiveDropdown(null)}
                              className="text-[10px] font-bold text-[#062039] hover:text-[#41a0c8]"
                            >
                              View Overview
                            </Link>
                          </div>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              ["/product/automation-suite/edms-demo", FiCalendar, "EDMS - Request a Demo"],
                              ["/product/automation-suite/vendor-onboarding", FiUserCheck, "Vendor Onboarding Tool"],
                              ["/product/automation-suite/ap-automation", FiCpu, "AP Automation (MIRO-MIGO)"],
                              ["/product/automation-suite/gate-pass", FiTruck, "Gate Pass Management"],
                              ["/product/automation-suite/weighbridge", FiSliders, "Weighbridge Integration"],
                              ["/product/automation-suite/automatic-data-entry", FiZap, "Automatic Data Entry"],
                            ].map(([href, Icon, label]) => (
                              <Link
                                key={href as string}
                                to={href as string}
                                onClick={() => setActiveDropdown(null)}
                                className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                              >
                                <Icon className="w-4 h-4 text-[#41a0c8] flex-shrink-0" />
                                <span className="text-xs font-bold text-[#062039]">{label as string}</span>
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
            className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
              activeTab === "Industries" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
            }`}
          >
            {activeTab === "Industries" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <FaIndustry className={`w-4 h-4 ${activeTab === "Industries" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
            <span>Industries</span>
          </Link>

          {/* 4. ABOUT US */}
          <Link
            to="/about"
            className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
              activeTab === "Company" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
            }`}
          >
            {activeTab === "Company" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <FiInfo className={`w-4 h-4 ${activeTab === "Company" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
            <span>About Us</span>
          </Link>

          {/* 5. PARTNER WITH US */}
          <Link
            to="/partner-with-us"
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
              activeTab === "Partner" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
            }`}
          >
            {activeTab === "Partner" && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                transition={{ type: "spring", stiffness: 450, damping: 35 }}
              />
            )}
            <HiUserGroup className={`w-4 h-4 ${activeTab === "Partner" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
            <span>Partner with Us</span>
          </Link>

          {/* 6. RESOURCES */}
          <div
            className="relative px-1"
            onMouseEnter={() => setActiveDropdown("Resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              onClick={() => setActiveDropdown(activeDropdown === "Resources" ? null : "Resources")}
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 cursor-pointer ${
                activeTab === "Resources" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
              }`}
            >
              {activeTab === "Resources" && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <HiDocumentText className={`w-4 h-4 ${activeTab === "Resources" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
              <span>Resources</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Resources" ? "rotate-180 text-[#41a0c8]" : "text-[#979797]"
                }`}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "Resources" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full right-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 space-y-1"
                >
                  <Link
                    to="/blog"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Blogs
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/casestudy"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/research"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Research Articles
                  </Link>
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
          className="hidden sm:inline-flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-5 py-2 rounded-full font-bold text-xs transition-all shadow-[0_4px_16px_rgba(65,160,200,0.3)] hover:scale-105"
        >
          <span>Contact Us</span>
          <FiArrowRight className="w-3.5 h-3.5" />
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

      {/* Mobile Drawer (Identical Structure, Icons, and Accordions as Desktop) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-[#e3e3e3] shadow-2xl lg:hidden overflow-y-auto max-h-[85vh] z-50"
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
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  <HiHome className={`w-4 h-4 ${activeTab === "Home" ? "text-[#41a0c8]" : "text-slate-500"}`} />
                </div>
                <span className="text-sm">Home</span>
              </Link>

              {/* 2. Mobile Products (Collapsible Accordion matching Desktop Mega Dropdown) */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("products")}
                  className="flex items-center justify-between w-full p-3 text-left font-bold text-sm text-[#062039] hover:bg-slate-100/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                      <HiCube className={`w-4 h-4 ${activeTab === "Products" ? "text-[#41a0c8]" : "text-slate-500"}`} />
                    </div>
                    <span>Products</span>
                  </div>
                  <HiChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileExpandedSection === "products" ? "rotate-180 text-[#41a0c8]" : ""
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
                        <div className="w-8 h-8 rounded-lg bg-[#062039] text-white flex items-center justify-center shrink-0">
                          <FiFileText className="w-4 h-4 text-[#f7c037]" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#062039]">eDMS</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[#41a0c8]/10 text-[#41a0c8]">
                              Platform
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
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
                        <div className="w-8 h-8 rounded-lg bg-[#41a0c8] text-white flex items-center justify-center shrink-0">
                          <SiSap className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#062039]">SLaiCE</span>
                            <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                              Built on SAP
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1">
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
                            <div className="w-8 h-8 rounded-lg bg-[#062039] text-white flex items-center justify-center shrink-0">
                              <FiCpu className="w-4 h-4 text-[#f7c037]" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-[#062039] block">
                                Automation Suite
                              </span>
                              <span className="text-[11px] text-slate-500 block">
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
                                mobileAutomationExpanded ? "rotate-180 text-[#41a0c8]" : ""
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
                              {[
                                ["/product/automation-suite/edms-demo", FiCalendar, "EDMS - Request a Demo"],
                                ["/product/automation-suite/vendor-onboarding", FiUserCheck, "Vendor Onboarding Tool"],
                                ["/product/automation-suite/ap-automation", FiCpu, "AP Automation (MIRO-MIGO)"],
                                ["/product/automation-suite/gate-pass", FiTruck, "Gate Pass Management"],
                                ["/product/automation-suite/weighbridge", FiSliders, "Weighbridge Integration"],
                                ["/product/automation-suite/automatic-data-entry", FiZap, "Automatic Data Entry"],
                              ].map(([href, Icon, label]) => (
                                <Link
                                  key={href as string}
                                  to={href as string}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="p-2 rounded-lg hover:bg-white text-xs font-semibold text-[#062039] flex items-center gap-2.5 transition-colors"
                                >
                                  <Icon className="w-3.5 h-3.5 text-[#41a0c8] shrink-0" />
                                  <span>{label as string}</span>
                                </Link>
                              ))}
                              <Link
                                to="/product/automation-suite"
                                onClick={() => setMobileMenuOpen(false)}
                                className="block text-[11px] font-bold text-[#41a0c8] text-right pt-1 pr-1"
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

              {/* 3. Mobile Industries (Matches Desktop Direct Link) */}
              <Link
                to="/solutions"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Industries"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  <FaIndustry className={`w-4 h-4 ${activeTab === "Industries" ? "text-[#41a0c8]" : "text-slate-500"}`} />
                </div>
                <span className="text-sm">Industries</span>
              </Link>

              {/* 4. Mobile About Us (Matches Desktop Direct Link) */}
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Company"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  <FiInfo className={`w-4 h-4 ${activeTab === "Company" ? "text-[#41a0c8]" : "text-slate-500"}`} />
                </div>
                <span className="text-sm">About Us</span>
              </Link>

              {/* 5. Mobile Partner with Us (Matches Desktop Direct Link) */}
              <Link
                to="/partner-with-us"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                  activeTab === "Partner"
                    ? "bg-[#41a0c8]/10 text-[#062039] font-bold"
                    : "hover:bg-slate-50 text-[#353535] font-semibold"
                }`}
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                  <HiUserGroup className={`w-4 h-4 ${activeTab === "Partner" ? "text-[#41a0c8]" : "text-slate-500"}`} />
                </div>
                <span className="text-sm">Partner with Us</span>
              </Link>

              {/* 6. Mobile Resources (Matches Desktop Dropdown order & items) */}
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleMobileSection("resources")}
                  className="flex items-center justify-between w-full p-3 text-left font-bold text-sm text-[#062039] hover:bg-slate-100/70 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-center">
                      <HiDocumentText className={`w-4 h-4 ${activeTab === "Resources" ? "text-[#41a0c8]" : "text-slate-500"}`} />
                    </div>
                    <span>Resources</span>
                  </div>
                  <HiChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      mobileExpandedSection === "resources" ? "rotate-180 text-[#41a0c8]" : ""
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
                      {[
                        ["/blog", FiFileText, "Blogs"],
                        ["/faq", FiCheckCircle, "FAQs"],
                        ["/casestudy", FiAward, "Case Studies"],
                        ["/research", FiLayers, "Research Articles"],
                      ].map(([href, Icon, label]) => (
                        <Link
                          key={href as string}
                          to={href as string}
                          onClick={() => setMobileMenuOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white border border-slate-200 hover:border-[#41a0c8] text-xs font-bold text-[#062039] transition-all"
                        >
                          <Icon className="w-4 h-4 text-[#41a0c8] shrink-0" />
                          <span>{label as string}</span>
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

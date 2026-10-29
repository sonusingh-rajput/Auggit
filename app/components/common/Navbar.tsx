import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import {
  HiHome,
  HiCube,
  HiDocumentText,
  HiUser,
  HiChevronDown,
  HiMenu,
  HiX,
  HiBriefcase,
  HiLightBulb,
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
} from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubSection, setMobileSubSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Active path matcher
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path.startsWith("/product") || path.startsWith("/book-poc") || path.startsWith("/request-demo")) return "Products";
    if (path.startsWith("/services")) return "Services";
    if (path.startsWith("/solutions")) return "Solutions";
    if (path.startsWith("/about") || path.startsWith("/partner-with-us")) return "Company";
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
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`w-full flex items-center justify-between px-4 md:px-10 py-1.5 sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-[#e3e3e3] shadow-[0_4px_24px_rgba(6,32,57,0.06)]"
          : "bg-white/85 backdrop-blur-md border-b border-transparent shadow-[0_2px_12px_rgba(6,32,57,0.03)]"
      }`}
    >
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center transition-transform hover:scale-[1.02]">
          <img
            src="/Auggit-logo-2.png"
            alt="Auggit Logo"
            width={180}
            height={64}
            fetchPriority="high"
            className="h-14 md:h-16 w-auto object-contain"
          />
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
            onMouseLeave={() => setActiveDropdown(null)}
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
                  className="absolute top-full -left-20 mt-3 w-[720px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 p-6 z-50 overflow-hidden"
                >
                  {/* Top Standalone Products: eDMS & SLaiCE */}
                  <div className="grid grid-cols-2 gap-4 pb-5 border-b border-slate-100">
                    <Link
                      to="/product/edms"
                      onClick={() => setActiveDropdown(null)}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-[#9eddf7]/15 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3.5"
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
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-[#9eddf7]/15 border border-slate-200/80 hover:border-[#41a0c8] transition-all group flex items-start gap-3.5"
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

                  {/* Bottom: Automation Suite Menu with all 6 Sub-Modules + Free POC */}
                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-3 px-1">
                      <Link
                        to="/product/automation-suite"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold uppercase tracking-wider text-[#41a0c8] hover:underline flex items-center gap-1.5"
                      >
                        <FiCpu className="w-3.5 h-3.5" />
                        <span>Automation Suite (Explore Suite Overview)</span>
                      </Link>
                      <span className="text-[10px] font-semibold text-slate-400">
                        Select a Specialized Module:
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        to="/product/automation-suite/edms-demo"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                      >
                        <FiCalendar className="w-4 h-4 text-[#41a0c8] flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#062039]">EDMS - Request a Demo</div>
                          <div className="text-[10px] text-slate-400">Interactive product tour</div>
                        </div>
                      </Link>

                      <Link
                        to="/product/automation-suite/vendor-onboarding"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                      >
                        <FiUserCheck className="w-4 h-4 text-[#1267a7] flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#062039]">Vendor Onboarding Tool</div>
                          <div className="text-[10px] text-slate-400">GST/PAN API & SAP vendor auto-creation</div>
                        </div>
                      </Link>

                      <Link
                        to="/product/automation-suite/ap-automation"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                      >
                        <FiCpu className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#062039]">AP Automation (MIRO – MIGO)</div>
                          <div className="text-[10px] text-slate-400">3-Way PO-GRN match & supplier form</div>
                        </div>
                      </Link>

                      <Link
                        to="/product/automation-suite/gate-pass"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                      >
                        <FiTruck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#062039]">Gate Pass Management</div>
                          <div className="text-[10px] text-slate-400">Inward, outward & QR boom barrier sync</div>
                        </div>
                      </Link>

                      <Link
                        to="/product/automation-suite/weighbridge"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                      >
                        <FiSliders className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#062039]">Weighbridge Integration</div>
                          <div className="text-[10px] text-slate-400">Direct indicator polling & CCTV sync</div>
                        </div>
                      </Link>

                      <Link
                        to="/product/automation-suite/automatic-data-entry"
                        onClick={() => setActiveDropdown(null)}
                        className="p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all flex items-center gap-3"
                      >
                        <FiZap className="w-4 h-4 text-[#f7c037] flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-[#062039]">Automatic Data Entry (ADE)</div>
                          <div className="text-[10px] text-slate-400">AI line extraction & SAP auto-entry</div>
                        </div>
                      </Link>
                    </div>

                    {/* Bottom Action Bar: Book Your Free POC */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between px-2 bg-gradient-to-r from-slate-50 to-[#9eddf7]/10 p-3 rounded-2xl">
                      <span className="text-xs text-slate-600 font-medium">
                        Need to validate on your live invoices or plant scale?
                      </span>
                      <Link
                        to="/book-poc"
                        onClick={() => setActiveDropdown(null)}
                        className="px-4 py-2 rounded-xl bg-[#062039] hover:bg-[#1267a7] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                      >
                        <span>Book Your Free POC</span>
                        <FiArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. SERVICES */}
          <div
            className="relative px-1"
            onMouseEnter={() => setActiveDropdown("Services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/services"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
                activeTab === "Services" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
              }`}
            >
              {activeTab === "Services" && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <HiBriefcase className={`w-4 h-4 ${activeTab === "Services" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
              <span>Services</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Services" ? "rotate-180 text-[#41a0c8]" : "text-[#979797]"
                }`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "Services" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-3 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 space-y-1"
                >
                  <Link
                    to="/services"
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2.5 rounded-xl text-xs hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-bold text-[#062039]">SAP Integrations Service</div>
                    <div className="text-[11px] text-slate-500">Native BAPI, RFC & ERP connectors</div>
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2.5 rounded-xl text-xs hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-bold text-[#062039]">
                      SAP Consulting Service (Book Free Consultation)
                    </div>
                    <div className="text-[11px] text-slate-500">
                      • How to control SAP RISE Memory consumption<br />
                      • Migration choice: Brown, Green or Blue
                    </div>
                  </Link>

                  <Link
                    to="/services"
                    onClick={() => setActiveDropdown(null)}
                    className="block p-2.5 rounded-xl text-xs hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-bold text-[#062039]">
                      SAP ECC to SAP S/4HANA Migration Advisory
                    </div>
                    <div className="text-[11px] text-slate-500">Selective data transition & zero-downtime cutovers</div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 4. SOLUTIONS */}
          <div
            className="relative px-1"
            onMouseEnter={() => setActiveDropdown("Solutions")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/solutions"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
                activeTab === "Solutions" ? "text-[#062039]" : "text-[#353535] hover:text-[#41a0c8]"
              }`}
            >
              {activeTab === "Solutions" && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                  transition={{ type: "spring", stiffness: 450, damping: 35 }}
                />
              )}
              <HiLightBulb className={`w-4 h-4 ${activeTab === "Solutions" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
              <span>Solutions</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Solutions" ? "rotate-180 text-[#41a0c8]" : "text-[#979797]"
                }`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "Solutions" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-3 z-50 space-y-1"
                >
                  {[
                    { name: "Real Estate & Infrastructure", href: "/solutions" },
                    { name: "Heavy Manufacturing & Plants", href: "/solutions" },
                    { name: "Retail & Multi-Store FMCG", href: "/solutions" },
                    { name: "Garments (Version Control)", href: "/solutions" },
                    { name: "Airports & Aviation Hubs", href: "/solutions" },
                    { name: "Auto Manufacturers & Tier-1 OEMs", href: "/solutions" },
                  ].map((ind, i) => (
                    <Link
                      key={i}
                      to={ind.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-3 py-2 rounded-xl text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 transition-colors"
                    >
                      {ind.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. COMPANY */}
          <div
            className="relative px-1"
            onMouseEnter={() => setActiveDropdown("Company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
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
              <HiUser className={`w-4 h-4 ${activeTab === "Company" ? "text-[#41a0c8]" : "text-[#979797]"}`} />
              <span>Company</span>
              <HiChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  activeDropdown === "Company" ? "rotate-180 text-[#41a0c8]" : "text-[#979797]"
                }`}
              />
            </Link>

            <AnimatePresence>
              {activeDropdown === "Company" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                  className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 space-y-1"
                >
                  <Link
                    to="/about"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    About Us & Leadership
                  </Link>
                  <Link
                    to="/partner-with-us"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Reseller Partners (Partner with us)
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Contact Us & Offices
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 6. RESOURCES */}
          <div
            className="relative px-1"
            onMouseEnter={() => setActiveDropdown("Resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <Link
              to="/research"
              className={`relative flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 z-10 ${
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
            </Link>

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
                    to="/research"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Research Articles
                  </Link>
                  <Link
                    to="/blog"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Blog
                  </Link>
                  <Link
                    to="/casestudy"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/usecase"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Use Cases
                  </Link>
                  <Link
                    to="/faq"
                    onClick={() => setActiveDropdown(null)}
                    className="block px-3 py-2 text-xs font-semibold text-[#062039] hover:text-[#41a0c8] hover:bg-slate-50 rounded-xl"
                  >
                    Frequently Asked Q&As
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>

      {/* Right Action: Free POC & Contact */}
      <div className="flex items-center gap-3">
        <Link
          to="/book-poc"
          className="hidden xl:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] text-xs font-black uppercase tracking-wider shadow-sm transition-all hover:scale-105"
        >
          <span>Free POC</span>
          <FiArrowRight className="w-3.5 h-3.5" />
        </Link>

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
          className="lg:hidden p-2.5 rounded-xl bg-white/80 backdrop-blur-md text-[#062039] border border-[#e3e3e3] hover:bg-white transition-colors shadow-sm"
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
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-[#e3e3e3] shadow-2xl lg:hidden overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold text-[#062039] py-1 border-b border-slate-100"
              >
                Home
              </Link>

              {/* Mobile Products */}
              <div className="border-b border-slate-100 pb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#41a0c8] mb-2">
                  Products
                </div>
                <div className="pl-3 space-y-2 text-sm">
                  <Link
                    to="/product/edms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-semibold text-[#062039]"
                  >
                    • eDMS (Document Management)
                  </Link>
                  <Link
                    to="/product/slaice"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-semibold text-[#062039]"
                  >
                    • SLaiCE (Built on SAP)
                  </Link>
                  <div className="pt-1">
                    <span className="text-xs font-bold text-[#1267a7]">Automation Suite Modules:</span>
                    <div className="pl-3 pt-1 space-y-1.5 text-xs text-slate-600">
                      <Link to="/product/automation-suite/edms-demo" onClick={() => setMobileMenuOpen(false)} className="block">
                        - EDMS - Request a Demo
                      </Link>
                      <Link to="/product/automation-suite/vendor-onboarding" onClick={() => setMobileMenuOpen(false)} className="block">
                        - Vendor Onboarding Tool
                      </Link>
                      <Link to="/product/automation-suite/ap-automation" onClick={() => setMobileMenuOpen(false)} className="block">
                        - AP Automation (MIRO – MIGO)
                      </Link>
                      <Link to="/product/automation-suite/gate-pass" onClick={() => setMobileMenuOpen(false)} className="block">
                        - Gate Pass Management
                      </Link>
                      <Link to="/product/automation-suite/weighbridge" onClick={() => setMobileMenuOpen(false)} className="block">
                        - Weighbridge Integration
                      </Link>
                      <Link to="/product/automation-suite/automatic-data-entry" onClick={() => setMobileMenuOpen(false)} className="block">
                        - Automatic Data Entry (ADE)
                      </Link>
                      <Link to="/book-poc" onClick={() => setMobileMenuOpen(false)} className="block font-bold text-[#f7c037]">
                        - Book Your Free POC ★
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Services */}
              <div className="border-b border-slate-100 pb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#41a0c8] mb-2">
                  Services
                </div>
                <div className="pl-3 space-y-1.5 text-sm">
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    SAP Integrations Service
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    SAP Consulting Service (RISE Memory Control & Migration)
                  </Link>
                  <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    SAP ECC to SAP S/4HANA Advisory
                  </Link>
                </div>
              </div>

              {/* Mobile Solutions */}
              <div className="border-b border-slate-100 pb-2">
                <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-[#062039]">
                  Solutions (6 Industry Verticals)
                </Link>
              </div>

              {/* Mobile Company */}
              <div className="border-b border-slate-100 pb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#41a0c8] mb-2">
                  Company
                </div>
                <div className="pl-3 space-y-1.5 text-sm">
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    About Us & Leadership
                  </Link>
                  <Link to="/partner-with-us" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Reseller Partners
                  </Link>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Contact Us & Offices
                  </Link>
                </div>
              </div>

              {/* Mobile Resources */}
              <div className="border-b border-slate-100 pb-2">
                <div className="text-xs font-bold uppercase tracking-wider text-[#41a0c8] mb-2">
                  Resources
                </div>
                <div className="pl-3 space-y-1.5 text-sm">
                  <Link to="/research" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Research Articles
                  </Link>
                  <Link to="/blog" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Blog
                  </Link>
                  <Link to="/casestudy" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Case Studies
                  </Link>
                  <Link to="/usecase" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Use Cases
                  </Link>
                  <Link to="/faq" onClick={() => setMobileMenuOpen(false)} className="block text-[#062039]">
                    Frequently Asked Q&As
                  </Link>
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <Link
                  to="/book-poc"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#f7c037] text-[#062039] py-3 rounded-xl font-extrabold text-sm shadow-md"
                >
                  Book Your Free POC <FiArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#41a0c8] hover:bg-[#1267a7] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-colors"
                >
                  Contact Us <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
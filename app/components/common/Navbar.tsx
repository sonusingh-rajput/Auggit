import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router";
import { HiHome, HiCube, HiDocumentText, HiUser, HiChevronDown, HiMenu, HiX, HiBriefcase, HiLightBulb } from "react-icons/hi";
import { FiArrowRight } from "react-icons/fi";

const navItems = [
  { name: "Home", href: "/", icon: HiHome },
  { 
    name: "Products", 
    href: "/product/slaice", 
    icon: HiCube,
    dropdown: [
      { name: "SLaiCE", href: "/product/slaice" },
      { name: "Automation Suite", href: "/product/automation-suite" },
    ]
  },
  { name: "About Us", href: "/about", icon: HiUser },
  { 
    name: "Resources", 
    href: "/casestudy", 
    icon: HiDocumentText,
    dropdown: [
      { name: "Case study", href: "/casestudy" },
      { name: "Use case", href: "/usecase" },
      { name: "FAQs", href: "/faq" },
    ]
  },
];

export default function Navbar() {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Determine active tab synchronously on render
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path.startsWith("/product")) return "Products";
    if (path.startsWith("/about")) return "About Us";
    if (path.startsWith("/faq")) return "FAQs";
    if (path.startsWith("/usecase") || path.startsWith("/faq")) return "Resources";
    return "";
  };

  const activeTab = getActiveTab();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
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
      className={`w-full flex items-center justify-between px-4 md:px-12 py-1 sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-2xl border-b border-[#e3e3e3] shadow-[0_4px_24px_rgba(6,32,57,0.06)]" 
          : "bg-white/80 backdrop-blur-xl border-b border-transparent shadow-[0_2px_12px_rgba(6,32,57,0.03)]"
      }`}
    >
      {/* Brand Logo */}
      <div className="flex items-center gap-3">
        <Link to="/" className="flex items-center transition-transform hover:scale-[1.02]">
          <img 
            src="/Auggit-logo-2.png" 
            alt="Auggit Logo" 
            className="h-16 md:h-20 w-auto object-contain" 
          />
        </Link>
      </div>

      {/* Desktop Liquid Glass Nested Capsule Navbar */}
      <nav className="hidden lg:flex items-center bg-[#f1f2f2]/70 backdrop-blur-3xl px-2 py-1.5 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_4px_20px_rgba(6,32,57,0.04)] border border-[#e3e3e3]">
        <div className="flex items-center relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const hasDropdown = !!item.dropdown;
            const isDropdownOpen = activeDropdown === item.name;
            const isActive = activeTab === item.name;

            return (
              <div 
                key={item.name} 
                className="relative flex items-center px-1"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={item.href}
                  onClick={() => {
                    if (hasDropdown) {
                      setActiveDropdown(isDropdownOpen ? null : item.name);
                    }
                  }}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 z-10 ${
                    isActive 
                      ? "text-[#062039] font-semibold" 
                      : "text-[#353535] hover:text-[#41a0c8]"
                  }`}
                >
                  {/* Floating Inner Pill Background Effect */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white rounded-full -z-10 border border-[#e3e3e3] shadow-[0_2px_10px_rgba(6,32,57,0.06)]"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-[#41a0c8]" : "text-[#979797]"}`} />
                  <span>{item.name}</span>
                  {hasDropdown && (
                    <HiChevronDown 
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isActive ? "text-[#41a0c8]" : "text-[#979797]"} ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`} 
                    />
                  )}
                </Link>

                {/* Glass Dropdown Menu */}
                <AnimatePresence>
                  {hasDropdown && isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-3xl rounded-2xl shadow-2xl border border-[#e3e3e3] py-2 z-50 overflow-hidden"
                    >
                      {item.dropdown?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block px-4 py-2.5 text-sm text-[#353535] hover:text-[#41a0c8] hover:bg-[#f1f2f2] transition-colors font-medium"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Right Action: Contact Us Button */}
      <div className="flex items-center gap-4">
        <Link
          to="/contact"
          className="hidden sm:flex items-center gap-2 bg-[#41a0c8] hover:bg-[#1267a7] text-white px-6 py-2.5 rounded-full font-semibold text-sm transition-all shadow-[0_4px_16px_rgba(65,160,200,0.3)] hover:shadow-[0_6px_20px_rgba(18,103,167,0.35)] group border border-[#9eddf7]/40 backdrop-blur-md active:scale-95"
        >
          <span>Contact Us</span>
          <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-white" />
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-[#e3e3e3] shadow-2xl lg:hidden overflow-y-auto max-h-[85vh]"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-2 border-b border-[#e3e3e3]/60 pb-3">
                  <Link
                    to={item.href}
                    onClick={() => {
                      if (!item.dropdown) setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between font-medium py-1 ${
                      activeTab === item.name ? "text-[#41a0c8]" : "text-[#062039] hover:text-[#41a0c8]"
                    }`}
                  >
                    <span className="flex items-center gap-3 text-base">
                      <item.icon className={`w-5 h-5 ${activeTab === item.name ? "text-[#41a0c8]" : "text-[#979797]"}`} />
                      {item.name}
                    </span>
                  </Link>
                  {item.dropdown && (
                    <div className="pl-8 space-y-2.5 pt-1 border-l-2 border-[#9eddf7] ml-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-[#353535] hover:text-[#41a0c8] py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#41a0c8] hover:bg-[#1267a7] text-white py-3.5 rounded-xl font-semibold shadow-lg shadow-[#41a0c8]/30 transition-colors"
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
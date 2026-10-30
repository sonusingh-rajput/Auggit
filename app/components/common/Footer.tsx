import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiArrowRight, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { SiSap } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-[#041525] text-[#f1f2f2] border-t border-[#1267a7]/30 transition-colors">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand & Contact Column (Spans 2 cols on lg) */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/Auggit-logo-2.png"
              alt="Auggit Logo"
              className="h-14 md:h-16 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(65,160,200,0.35)]"
            />
          </div>
          <p className="text-sm text-[#9eddf7]/80 leading-relaxed max-w-sm">
            Empowering enterprise SAP compliance, precision data slicing, and end-to-end supply chain document automation across India.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 text-xs text-[#f1f2f2]/80 pt-2">
            <div className="flex items-start gap-3">
              <FiMapPin className="w-4 h-4 text-[#41a0c8] shrink-0 mt-0.5" />
              <span>Anna Nagar, Chennai, India (Headquarters)</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="w-4 h-4 text-[#41a0c8] shrink-0" />
              <span>+91 9600134009</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="w-4 h-4 text-[#41a0c8] shrink-0" />
              <span>sales@auggit.com</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="/book-poc"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f7c037] hover:bg-[#e5b02a] text-[#062039] font-black text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Book Your Free POC</span>
              <FiArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Integrated ERP Ecosystem Badges */}
          <div className="pt-4 border-t border-[#1267a7]/20 space-y-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#41a0c8] animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9eddf7]/90">
                Certified ERP Integrations
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="h-11 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 transition-transform group cursor-pointer"
                title="SAP Certified Ecosystem (ECC, S/4HANA, RISE)"
              >
                <img
                  src="/logos/sap-logo.svg"
                  alt="SAP Logo"
                  className="h-6 w-auto object-contain filter group-hover:brightness-105"
                  loading="lazy"
                />
              </div>

              <div
                className="h-11 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 transition-transform group cursor-pointer"
                title="Tally Solutions - Power of Simplicity"
              >
                <img
                  src="/logos/tally-logo.png"
                  alt="Tally - Power of Simplicity Logo"
                  className="h-6 w-auto object-contain filter group-hover:brightness-105"
                  loading="lazy"
                />
              </div>

              <div
                className="h-11 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 transition-transform group cursor-pointer"
                title="Zoho Enterprise Cloud Integration"
              >
                <img
                  src="/logos/zoho-logo.svg"
                  alt="Zoho Logo"
                  className="h-5 w-auto object-contain filter group-hover:brightness-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Products Column (Each product linked separately per PDF Page 8) */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#41a0c8] pl-2.5">
            Auggit Products
          </h4>
          <ul className="space-y-2 text-xs text-[#9eddf7]/70">
            <li>
              <a href="/product/slaice" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> SLaiCE (Built on SAP)
              </a>
            </li>
            <li>
              <a href="/product/edms" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> eDMS Platform
              </a>
            </li>
            <li>
              <a href="/product/automation-suite/vendor-onboarding" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Vendor Onboarding Tool
              </a>
            </li>
            <li>
              <a href="/product/automation-suite/ap-automation" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> AP Automation (MIRO – MIGO)
              </a>
            </li>
            <li>
              <a href="/product/automation-suite/gate-pass" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Gate Pass Management
              </a>
            </li>
            <li>
              <a href="/product/automation-suite/weighbridge" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Weighbridge Integration
              </a>
            </li>
            <li>
              <a href="/product/automation-suite/automatic-data-entry" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Automatic Data Entry (ADE)
              </a>
            </li>
            <li>
              <a href="/product/automation-suite/edms-demo" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#f7c037]">›</span> Request a Demo
              </a>
            </li>
          </ul>
        </div>

        {/* Services & Solutions Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#41a0c8] pl-2.5">
            Services & Solutions
          </h4>
          <ul className="space-y-2 text-xs text-[#9eddf7]/70">
            <li>
              <a href="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> SAP Integrations Service
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> SAP Consulting Service
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> RISE Server Memory Control
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Migration Advisory (Brown/Green/Blue)
              </a>
            </li>
            <li>
              <a href="/solutions" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Manufacturing Solutions
              </a>
            </li>
            <li>
              <a href="/solutions" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Automotive & OEM Solutions
              </a>
            </li>
            <li>
              <a href="/solutions" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Airports & Aviation Logistics
              </a>
            </li>
            <li>
              <a href="/partner-with-us" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Reseller Partners
              </a>
            </li>
          </ul>
        </div>

        {/* Resources & Support Column */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white border-l-2 border-[#41a0c8] pl-2.5">
            Resources & Legal
          </h4>
          <ul className="space-y-2 text-xs text-[#9eddf7]/70">
            <li>
              <a href="/research" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Research Articles
              </a>
            </li>
            <li>
              <a href="/casestudy" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Customer Case Studies
              </a>
            </li>
            <li>
              <a href="/usecase" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Selective Slicing Use Cases
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Compliance & Product FAQs
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Enterprise Insights & Blog
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> About Us & Leadership
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors flex items-center gap-1 group">
                <span className="text-[#41a0c8]">›</span> Contact & Office Locations
              </a>
            </li>
          </ul>

          <div className="pt-2">
            <h5 className="text-[11px] font-bold uppercase tracking-wider text-white mb-2">Connect</h5>
            <div className="flex items-center gap-2 text-[#9eddf7]">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#062039] border border-[#1267a7]/50 hover:bg-[#41a0c8] hover:text-white transition-all" aria-label="LinkedIn">
                <FaLinkedinIn className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#062039] border border-[#1267a7]/50 hover:bg-[#41a0c8] hover:text-white transition-all" aria-label="YouTube">
                <FaYoutube className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#062039] border border-[#1267a7]/50 hover:bg-[#41a0c8] hover:text-white transition-all" aria-label="Facebook">
                <FaFacebookF className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-[#062039] border border-[#1267a7]/50 hover:bg-[#41a0c8] hover:text-white transition-all" aria-label="Instagram">
                <FaInstagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Enterprise ERP Ecosystem Banner Strip */}
      <div className="border-t border-[#1267a7]/25 bg-[#03101c] py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#f7c037] bg-[#f7c037]/10 px-3 py-1 rounded-full border border-[#f7c037]/25">
              <span className="w-2 h-2 rounded-full bg-[#f7c037] animate-pulse"></span>
              Supported ERP Platforms
            </span>
            <span className="text-xs text-[#9eddf7]/70">
              Native bi-directional connectors & enterprise compliance for SAP, Tally Prime, and Zoho ecosystems.
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            {/* SAP Logo */}
            <div
              className="h-10 px-3.5 py-1 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 transition-all"
              title="SAP Certified Ecosystem (ECC, S/4HANA, RISE)"
            >
              <img
                src="/logos/sap-logo.svg"
                alt="SAP Logo"
                className="h-6 w-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Tally Logo */}
            <div
              className="h-10 px-3.5 py-1 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 transition-all"
              title="Tally Solutions - Power of Simplicity"
            >
              <img
                src="/logos/tally-logo.png"
                alt="Tally - Power of Simplicity Logo"
                className="h-6 w-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Zoho Logo */}
            <div
              className="h-10 px-3.5 py-1 rounded-xl bg-white border border-slate-200 shadow-md flex items-center justify-center hover:scale-105 transition-all"
              title="Zoho Enterprise Cloud"
            >
              <img
                src="/logos/zoho-logo.svg"
                alt="Zoho Logo"
                className="h-5 w-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1267a7]/20 py-6 px-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-[#9eddf7]/60 gap-4">
        <div>
          © {new Date().getFullYear()} Auggit Enterprise Solutions. All rights reserved. Built for SAP Landscapes.
        </div>
        {/* <div className="flex items-center gap-6">
          <span>Section 128(1) Compliant</span>
          <span>Section 62 IT Act Ready</span>
          <span>Listed on SAP Store</span>
        </div> */}
      </div>
    </footer>
  );
}
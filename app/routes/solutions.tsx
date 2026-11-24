import { motion } from "framer-motion";
import { Link } from "react-router";
import {
  FiBriefcase,
} from "react-icons/fi";
import {
  FaBalanceScale,
  FaBuilding,
  FaCapsules,
  FaCar,
  FaCircle,
  FaFlask,
  FaGem,
  FaGraduationCap,
  FaIndustry,
  FaLandmark,
  FaPlane,
  FaTshirt,
  FaTruck,
  FaUtensils,
} from "react-icons/fa";

export default function SolutionsPage() {
  const industries = [
    {
      id: "manufacturing-vendor-ap",
      title: "Manufacturing",
      icon: FaIndustry,
      caseStudySlug: "manufacturing-vendor-payment-delays",
    },
    {
      id: "finance-procurement",
      title: "Gems and Jwellery",
      icon: FaGem,
      caseStudySlug: "cfo-centralized-purchase-document-tracking",
    },
    {
      id: "cross-department-access",
      title: "Airport and Aviation",
      icon: FaPlane,
      caseStudySlug: "global-airport-sap-s4hana-migration",
    },
    {
      id: "steel-manufacturing",
      title: "Steel Industry",
      icon: FaIndustry,
      caseStudySlug: "steel-manufacturer-digital-documents",
    },
    {
      id: "food-processing",
      title: "Food Industry",
      icon: FaUtensils,
      caseStudySlug: "french-fries-manufacturer-workflow",
    },
    {
      id: "aviation",
      title: "Automotive Industry",
      icon: FaCar,
      caseStudySlug: "automaker-ondemand-test-provisioning",
    },
    {
      id: "automotive",
      title: "CA's and CS's",
      icon: FaBalanceScale,
      caseStudySlug: "cfo-centralized-purchase-document-tracking",
    },
    {
      id: "exim-trade",
      title: "Real Estate",
      icon: FaBuilding,
      caseStudySlug: "enterprise-license-free-document-access",
    },
     {
      id: "garments",
      title: "Garments",
      icon: FaTshirt,
      caseStudySlug: "french-fries-manufacturer-workflow",
    },
    {
      id: "chemicals",
      title: "Chemicals",
      icon: FaFlask,
      caseStudySlug: "steel-manufacturer-digital-documents",
    },
    {
      id: "pharma",
      title: "Pharma",
      icon: FaCapsules,
      caseStudySlug: "enterprise-license-free-document-access",
    },{
      id: "tyres",
      title: "Tyres",
      icon: FaCircle,
      caseStudySlug: "steel-manufacturer-digital-documents",
    },{
      id: "logistics",
      title: "Logistics",
      icon: FaTruck,
      caseStudySlug: "exim-customs-compliance-digitization",
    },{
      id: "education",
      title: "Education",
      icon: FaGraduationCap,
      caseStudySlug: "enterprise-license-free-document-access",
    },{
      id: "financial-services",
      title: "Financial Services",
      icon: FaLandmark,
      caseStudySlug: "cfo-centralized-purchase-document-tracking",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white via-[#f1f2f2]/60 to-white text-[#353535] px-4 sm:px-6 lg:px-8 py-12 sm:py-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-24 -right-24 w-96 h-96 bg-[#9eddf7]/30 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#ffeda0]/30 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm border border-[#41a0c8]/30 text-[#41a0c8] text-xs font-bold uppercase tracking-wider shadow-sm mb-3">
            <FiBriefcase className="w-4 h-4 text-[#f7c037]" />
            Enterprise Industry Solutions
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#062039] tracking-tight">
            Tailored Solutions for{" "}
            <span className="bg-gradient-to-r from-[#41a0c8] to-[#1267a7] bg-clip-text text-transparent">
              Every Industry
            </span>
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Discover how Auggit solves specific compliance, data carving, and automation bottlenecks across India's leading industrial sectors.
          </p>
        </div>

        {/* Industry categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((item, idx) => (
            <Link
              key={item.id}
              to={`/casestudy/${item.caseStudySlug}`}
              className="block h-full"
              aria-label={`Read blog related to ${item.title}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="min-h-20 h-full rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all flex items-center gap-3 p-3 group hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#41a0c8] to-[#1267a7] opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#41a0c8]/10 text-[#1267a7] group-hover:bg-[#41a0c8] group-hover:text-white transition-colors">
                  <item.icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-extrabold leading-snug text-[#062039] group-hover:text-[#41a0c8] transition-colors">
                  {item.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl p-10 bg-gradient-to-br from-[#062039] to-[#1267a7] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Have a Custom Industry Requirement?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
              Our architects configure custom data slicing rules and workflow parameters tailored to your exact industry ERP schema.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-[#f7c037] text-[#062039] font-bold text-xs hover:bg-[#e5b02a] transition-all whitespace-nowrap cursor-pointer"
            >
              Talk to Our Experts →
            </Link>
            <Link
              to="/book-poc"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-all whitespace-nowrap cursor-pointer"
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
